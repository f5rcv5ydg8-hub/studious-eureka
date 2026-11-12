/**
 * 可选：AI 请求代理（Cloudflare Worker）
 *
 * 作用：让静态站点的「在线模型」模式不必在浏览器里保存 API Key。
 * 部署后，在站点「Agent → 设置」中把 Endpoint 填成这个 Worker 的地址，
 * 例如 https://your-worker.your-name.workers.dev/v1/chat/completions。
 *
 * 环境变量（Cloudflare 控制台 → Worker → Settings → Variables）：
 *   OPENAI_API_KEY   必填，模型服务商密钥（建议勾选 Secret）
 *   UPSTREAM_URL     可选，默认 https://api.openai.com/v1/chat/completions
 *   ALLOWED_ORIGIN   可选，允许的站点来源，例如 https://your-name.github.io
 *                    留空时允许任意来源（仅建议用于本地测试）
 *   ALLOWED_MODELS   可选，逗号分隔的模型白名单，例如 gpt-4o-mini,gpt-4.1-mini
 *
 * 安全边界：只接受 POST、只转发到固定的 UPSTREAM_URL、请求体上限 64KB，
 * 不转发客户端自带的 Authorization，避免被当成任意请求的开放代理。
 */

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowOrigin = (env.ALLOWED_ORIGIN || "").trim();
    const corsOrigin = allowOrigin || origin || "*";

    const cors = {
      "Access-Control-Allow-Origin": corsOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
      Vary: "Origin",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405, cors);
    }

    if (allowOrigin && origin && origin !== allowOrigin) {
      return json({ error: "Origin not allowed" }, 403, cors);
    }

    if (!env.OPENAI_API_KEY) {
      return json({ error: "OPENAI_API_KEY is not configured" }, 500, cors);
    }

    let body;
    try {
      const raw = await request.text();
      if (raw.length > 65536) {
        return json({ error: "Request body too large" }, 413, cors);
      }
      body = JSON.parse(raw);
    } catch {
      return json({ error: "Invalid JSON body" }, 400, cors);
    }

    if (!Array.isArray(body.messages)) {
      return json({ error: "messages must be an array" }, 400, cors);
    }

    const models = (env.ALLOWED_MODELS || "")
      .split(",")
      .map((m) => m.trim())
      .filter(Boolean);
    if (models.length && body.model && !models.includes(body.model)) {
      return json({ error: "Model not allowed" }, 400, cors);
    }

    const upstream = (env.UPSTREAM_URL || "https://api.openai.com/v1/chat/completions").trim();

    let upstreamRes;
    try {
      upstreamRes = await fetch(upstream, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: body.model || "gpt-4o-mini",
          messages: body.messages,
          temperature: typeof body.temperature === "number" ? Math.min(Math.max(body.temperature, 0), 1) : 0.6,
          max_tokens: Math.min(Number(body.max_tokens) || 1200, 2000),
        }),
      });
    } catch {
      return json({ error: "Upstream request failed" }, 502, cors);
    }

    const text = await upstreamRes.text();
    return new Response(text, {
      status: upstreamRes.status,
      headers: {
        ...cors,
        "Content-Type": upstreamRes.headers.get("Content-Type") || "application/json",
        "Cache-Control": "no-store",
      },
    });
  },
};

function json(data, status, headers) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...headers, "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
