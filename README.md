# 礼仪经纬 · 国际商务礼仪与文化指南

一个可以直接静态托管的单页学习网站：情境模拟测验、知识库、可点击世界地图、术语悬浮词典、全局选中翻译、中 / 英 / 双语切换，以及一个默认离线可用的商务礼仪 Agent。

整站不依赖任何构建工具、外部字体、CDN 或图片请求，所有内容都在本地文件中，上传到任意静态托管平台即可获得公开链接。

---

## 1. 文件结构

```text
business-etiquette-guide/
├─ index.html                 页面结构、导航、六个视图、SVG 图标
├─ assets/
│  ├─ css/styles.css          视觉系统、响应式布局、动效
│  ├─ js/
│  │  ├─ data.js              13 个国家、30 道题、8 篇文章、56 个术语、界面文案
│  │  ├─ map-data.js          Natural Earth 生成的世界地图路径与坐标
│  │  └─ app.js               路由、双语、测验、地图、词典、选中翻译、Agent
│  └─ img/favicon.svg         站点图标
├─ deploy/cloudflare-worker.js  可选的 AI 请求代理（避免暴露 API Key）
├─ plan.json                  设计计划（构建记录）
├─ workflow-state.json        构建状态（构建记录）
└─ README.md                  本文件
```

浏览顺序建议：`index.html` → `data.js`（改内容）→ `app.js`（改交互）→ `styles.css`（改视觉）。

---

## 2. 本地预览

在项目文件夹内启动一个静态服务器（不要直接双击 `index.html`，部分浏览器会限制本地文件读取）：

```bash
# 方式一：Python（Windows 自带或已安装 Python）
python -m http.server 8080

# 方式二：Node.js
npx serve . -l 8080
```

然后打开 `http://localhost:8080`。

> 地图数据、双语内容、测验、词典、本地 Agent 均不联网。只有你在 Agent 设置里主动开启「在线模型」时才会发起外部请求。

---

## 3. 获得一个他人可访问的链接

以下四种方式任选其一。

### 3.1 GitHub Pages（推荐，免费且稳定）

**图形界面方式：**

1. 注册 / 登录 GitHub，新建仓库，例如 `business-etiquette-guide`，设为 Public。
2. 在仓库页点击 **Add file → Upload files**，把本项目 **文件夹内的全部内容**（`index.html`、`assets/` 等）拖进去，提交。
3. 进入 **Settings → Pages**。
4. **Build and deployment → Source** 选择 **Deploy from a branch**，Branch 选 `main`，目录选 `/ (root)`，保存。
5. 等待约 1 分钟，链接形如：
   `https://你的用户名.github.io/business-etiquette-guide/`

**命令行方式（在项目文件夹内）：**

```bash
git init
git add .
git commit -m "feat: international business etiquette guide"
git branch -M main
git remote add origin https://github.com/你的用户名/business-etiquette-guide.git
git push -u origin main
```

推送后同样到 **Settings → Pages** 开启 `main / root`。

> 项目全部使用相对路径，放在 `用户名.github.io/仓库名/` 这样的子路径下也能正常加载，无需改代码。

### 3.2 Cloudflare Pages（免费、国内访问通常更稳）

**拖拽方式：** 登录 Cloudflare Dashboard → **Workers & Pages → Create → Pages → Upload assets**，把项目文件夹拖进去，Deploy。链接形如 `https://项目名.pages.dev`。

**命令行方式：**

```bash
npx wrangler pages deploy . --project-name business-etiquette-guide
```

首次运行会要求登录 Cloudflare 并创建项目。输出会给出 `https://business-etiquette-guide.pages.dev` 一类的地址。

### 3.3 Netlify Drop（最快，无需账号即可预览）

打开 <https://app.netlify.com/drop>，把整个项目文件夹拖进页面，几秒后得到 `https://随机名.netlify.app`。登录后可改名、绑定自定义域名。

### 3.4 Vercel

```bash
npx vercel --prod
```

按提示选择当前目录、框架选 **Other**、输出目录留空即可。得到 `https://项目名.vercel.app`。

### 3.5 已有服务器 / 对象存储

把全部文件上传到网站根目录或子目录即可。若放在子目录，访问 `https://你的域名/子目录/index.html`。Nginx 示例：

```nginx
location /etiquette/ {
    alias /var/www/business-etiquette-guide/;
    index index.html;
    try_files $uri $uri/ /etiquette/index.html;
}
```

---

## 4. 内容怎么改

所有可读内容都在 `assets/js/data.js`，结构是 `window.SITE_DATA = (function () { ... })()`。每条文本都写成 `{ zh: "中文", en: "English" }`，切换语言时自动取对应字段。

### 4.1 修改国家词条

```js
{
  id: "CN", iso: "CHN", region: t("东亚", "East Asia"),
  name: t("中国", "China"),
  greeting: t("见面常以握手为主，熟人之间点头或轻握双手。", "A handshake is standard; nods or a light two-handed clasp are common among acquaintances."),
  card: t("双手递接名片，文字朝向对方，先看再收。", "Offer and receive cards with both hands, text facing the other person; read before storing."),
  taboo: t("避免公开批评、当众纠正对方，也不要送钟表或白色 flowers。", "Avoid public criticism or correction; avoid clocks and white flowers as gifts."),
  negotiation: t("先建立关系，再谈条款；决策往往需要内部层层确认。", "Build the relationship first; decisions often require several internal approvals."),
  story: {
    title: t("故事标题", "Story title"),
    lead: t("一句导语。", "One-line lead."),
    body: [t("第一段。", "First paragraph."), t("第二段。", "Second paragraph.")],
    note: t("一句提示。", "A short takeaway.")
  }
}
```

新增国家时还要做两件事：

1. 在 `assets/js/map-data.js` 里给对应国家加 `target: true`（如果地图路径存在），并在 `MAP_PINS` 里加一个 `{ id, x, y }` 坐标；没有路径的国家只加坐标即可（新加坡就是这种情况）。
2. 如需测验题，在 `quiz` 数组里加题，`country` 填国家 `id`。

### 4.2 新增一道测验题

```js
{
  id: "cn-31",
  country: "CN",
  type: "single",                       // tf | single | multi
  q: t("在中国商务宴请中，座次通常如何安排？", "How is seating usually arranged at a Chinese business dinner?"),
  options: [
    t("主宾坐在主人右侧或正对门口的位置", "The guest of honour sits to the host's right or facing the door"),
    t("按到达先后随意入座", "Guests sit in arrival order"),
    t("所有人面向门口并排坐", "Everyone sits in a row facing the door"),
    t("由最年轻的人安排", "The youngest person decides")
  ],
  answer: [0],                          // 多选就写多个下标，例如 [0, 2]
  explain: t("座次体现尊重与层级，主宾通常被安排在主人右侧或面向门口的位置。", "Seating signals respect and hierarchy; the guest of honour is usually placed to the host's right or facing the door.")
}
```

判断题的 `options` 固定为「正确 / 错误」两项，`answer` 为 `[0]` 或 `[1]`。

### 4.3 新增术语

```js
{
  id: "escrow",
  term: "Escrow",
  zh: "第三方托管",
  cat: "finance",                       // contract | finance | meeting | culture
  def: t("由中立第三方保管资金或文件，待约定条件满足后再交付。", "Money or documents held by a neutral third party until agreed conditions are met."),
  example: t("跨境并购常通过托管账户分批释放价款。", "Cross-border acquisitions often release consideration from escrow in stages.")
}
```

文章正文里出现该术语（英文或中文）时，`app.js` 会自动加下划线和悬浮释义。术语按长度优先匹配，避免短词误伤。

### 4.4 新增知识库文章

在 `articles` 数组里追加对象，必填字段：`id`、`no`、`cat`、`minutes`、`title`、`summary`、`tags`、`countries`、`terms`、`points`、`body`。`cat` 目前使用 `cards`、`greeting`、`dining`、`negotiation`、`time`、`gifts`、`religion`、`communication`，新增分类时同步在 `ARTICLE_CATS` 和 `ui` 里加标签。

### 4.5 修改界面文案

`ui` 对象集中了导航、按钮、标题、提示语。找不到某句文案时，在 `data.js` 里搜中文原文即可定位。

---

## 5. 各功能的代码位置

| 功能 | 主要代码 |
| --- | --- |
| 中 / 英 / 双语切换 | `app.js` 的 `tx`、`txc`、`bi`、`biLinked`、`setLanguage`、`applyLanguage` |
| 情境测验（判断 / 单选 / 多选） | `app.js` 的 `renderQuizChrome`、`renderPlay`、`chooseOption`、`submitAnswer`、`finishQuiz`、`renderResult` |
| 作答锁定与红绿反馈 | `renderPlay` 中的 `is-correct` / `is-wrong` / `is-correct-unselected`，样式在 `styles.css` 的 `.option.*` |
| 知识库搜索与阅读 | `renderArticles`、`openArticle`、`startArticleQuiz` |
| 世界地图与国家百科 | `buildMap`、`renderAtlas`、`renderCountryDetail`、`selectCountry`、`openStory` |
| 外交小故事 | `openStory`；内容在 `data.js` 每个国家的 `story` 字段 |
| 术语悬浮释义 | `showTermTooltip`、`hideTermTooltip`、`linkTerms`，样式 `.term` / `.term-tooltip` |
| 选中普通词翻译 | `handleSelection`、`showSelectionCard`、`findExtraWord`、`askAgent` |
| Agent 本地问答 / 出题 | `localReply`、`searchContent`、`checklistBlock`、`parseAiQuestions` |
| Agent 在线模型 | `callOnline`、`openSettings`、`saveSettings` |
| 路由与历史记录 | `navigate`、`bindEvents`、`init` |

---

## 6. 在线 AI（可选）

默认的 Agent 完全在浏览器本地工作：检索国家、术语、文章，比较两国风格，生成礼仪清单，按主题出题。断网也能用。

如果你希望接入更强的模型：

1. 打开网站 **Agent → 设置**。
2. 填写 OpenAI 兼容的 **Endpoint**（例如 `https://api.openai.com/v1/chat/completions`）、**模型名** 和 **API Key**。
3. 勾选「启用在线模型」并保存。

> ⚠️ 安全提醒：静态页面里的 Key 会保存在当前浏览器的 `localStorage`，但仍可能被他人通过浏览器开发者工具读取；直接把 Key 写进代码并公开部署，等同于公开密钥。**仅建议在本机或个人设备上临时使用。**

### 6.1 推荐做法：用 Cloudflare Worker 代理

`deploy/cloudflare-worker.js` 是一个只接受 POST、固定上游地址、从环境变量读取密钥的代理。

**部署步骤：**

1. 登录 Cloudflare Dashboard → **Workers & Pages → Create → Worker**。
2. 把 `deploy/cloudflare-worker.js` 的内容粘贴进去，Deploy。
3. 在 Worker 的 **Settings → Variables and Secrets** 添加：
   - `OPENAI_API_KEY`：你的密钥，类型选 **Secret**。
   - `ALLOWED_ORIGIN`：你的站点来源，例如 `https://你的用户名.github.io`。
   - 可选 `UPSTREAM_URL`：兼容接口地址。
   - 可选 `ALLOWED_MODELS`：允许的模型名，逗号分隔。
4. 在网站 Agent 设置里把 Endpoint 改成：
   `https://你的Worker名.你的子域.workers.dev/v1/chat/completions`
5. API Key 留空，启用在线模型。

Worker 会拒绝非 POST 请求、来源不符的请求、超过 64KB 的请求体，并且不会转发客户端自带的 Authorization。

---

## 7. 常见问题

**地图上有些国家没有颜色？**
110m 精度的公共地图对新加坡等小国没有独立路径，这些国家用蓝色坐标点标记，仍可点击。

**换行或引号导致 JS 报错？**
`data.js` 中的文本使用双引号字符串。文本内部需要引号时改用中文引号「」或单引号；需要换行时使用 `\n`。

**部署后地图 / 词典不显示？**
确认上传时保留了 `assets/js/map-data.js` 和 `assets/js/data.js`，并确认路径大小写一致（Linux 服务器区分大小写）。

**如何清空 Agent 的本地设置？**
Agent 设置里关闭在线模型，或清除浏览器的 `ea.agent.settings` 与 `ea.lang` 两个 localStorage 键。

**内容可以直接商用吗？**
站点代码可自由修改使用；国家礼仪内容为通用性整理，正式商务场合请以当地最新实践与专业顾问意见为准。地图来自 Natural Earth（公共领域）。

---

## 8. 数据与致谢

- 世界地图：Natural Earth 1:110m Admin 0 Countries，公共领域。
- 地图投影与简化：Miller 圆柱投影 + Ramer–Douglas–Peucker，预生成在 `map-data.js`。
- 站点不加载任何第三方脚本、字体或追踪代码。

