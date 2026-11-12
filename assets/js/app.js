/* Etiquette Atlas — interaction layer.
   Vanilla JS, no build step. All content comes from data.js. */
(function () {
  "use strict";

  const D = window.SITE_DATA;
  if (!D) {
    console.error("SITE_DATA is missing. Check assets/js/data.js.");
    return;
  }

  const ui = D.ui;
  const countries = D.countries;
  const quizBank = D.quiz;
  const articles = D.articles;
  const glossary = D.glossary;

  const countryById = Object.fromEntries(countries.map((c) => [c.id, c]));
  const countryByIso = Object.fromEntries(countries.map((c) => [c.iso, c]));
  const termById = Object.fromEntries(glossary.map((g) => [g.id, g]));
  const articleById = Object.fromEntries(articles.map((a) => [a.id, a]));

  const VIEWS = ["home", "atlas", "quiz", "data", "glossary", "agent"];
  const LANGS = ["zh", "en", "both"];
  const LETTERS = ["A", "B", "C", "D", "E", "F"];
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const t = (zh, en) => ({ zh, en });

  const ARTICLE_CATS = [
    { id: "basics", label: t("基础", "Basics") },
    { id: "greeting", label: t("问候", "Greetings") },
    { id: "dining", label: t("宴请", "Dining") },
    { id: "negotiation", label: t("谈判", "Negotiation") },
    { id: "time", label: t("时间", "Time") },
    { id: "gifts", label: t("礼物", "Gifts") },
    { id: "religion", label: t("宗教", "Religion") },
    { id: "communication", label: t("沟通", "Communication") }
  ];

  const QUIZ_HINT = t(
    "作答后选项会锁定，并显示正确项与解析。",
    "Answers lock after selection, with the correct option and explanation shown."
  );

  const AGENT_ONLINE_NOTE = t(
    "在线模型已启用。回答由所填接口生成，请自行核对。",
    "Online model enabled. Answers come from your endpoint; verify them independently."
  );

  const API_NOTE = t(
    "注意：静态站点的前端密钥对任何访问者可见，仅适合自用演示。正式部署请使用 Cloudflare Worker 代理（见 README）。",
    "Note: a frontend key is visible to anyone. Use a Cloudflare Worker proxy for production (see README)."
  );

  const EXTRA_WORDS = [
    { id: "business-card", en: "Business Card", zh: "名片", def: t("印有姓名、职位与联系方式的卡片；在东亚商务场合常双手递接。", "A card with name, title, and contact details; often exchanged with both hands in East Asia.") },
    { id: "deadline", en: "Deadline", zh: "截止日期", def: t("必须完成某项工作或提交成果的最后期限。", "The latest date by which work must be completed or submitted.") },
    { id: "schedule", en: "Schedule", zh: "日程", def: t("会议或项目的时间安排。", "The planned timing of meetings or a project.") },
    { id: "client", en: "Client", zh: "客户", def: t("购买或使用专业服务的个人或组织。", "A person or organisation that buys or uses professional services.") },
    { id: "supplier", en: "Supplier", zh: "供应商", def: t("提供货物或服务的一方。", "A party that provides goods or services.") },
    { id: "invoice", en: "Invoice", zh: "发票/账单", def: t("列明货物、数量、价格与付款条件的商业单据。", "A commercial document listing goods, quantities, prices, and payment terms.") },
    { id: "shipment", en: "Shipment", zh: "货运批次", def: t("一次发运的货物，或货物发运的过程。", "A batch of goods sent, or the act of sending goods.") },
    { id: "customs", en: "Customs", zh: "海关", def: t("负责监管进出口货物并征收关税的政府机构。", "The government authority that controls imports and exports and collects duties.") },
    { id: "warehouse", en: "Warehouse", zh: "仓库", def: t("用于储存货物的建筑或设施。", "A building or facility used to store goods.") },
    { id: "budget", en: "Budget", zh: "预算", def: t("对收入与支出的计划性安排。", "A plan for income and expenditure.") },
    { id: "forecast", en: "Forecast", zh: "预测", def: t("基于历史数据对未来趋势的估计。", "An estimate of future trends based on historical data.") },
    { id: "revenue", en: "Revenue", zh: "营业收入", def: t("企业在正常经营中获得的收入总额。", "The total income from normal business operations.") },
    { id: "profit", en: "Profit", zh: "利润", def: t("收入扣除成本与费用后的余额。", "What remains after costs and expenses are deducted from revenue.") },
    { id: "margin", en: "Margin", zh: "利润率", def: t("利润占收入的比例，或价格与成本之差。", "Profit as a share of revenue, or the gap between price and cost.") },
    { id: "proposal", en: "Proposal", zh: "提案", def: t("向对方提出的合作方案或建议书。", "A document proposing a plan of cooperation.") },
    { id: "quotation", en: "Quotation", zh: "报价", def: t("卖方就货物或服务价格作出的正式说明。", "A seller's formal statement of price for goods or services.") },
    { id: "tender", en: "Tender", zh: "招标", def: t("邀请供应商提交报价与方案的采购程序。", "A procurement process inviting suppliers to submit bids.") },
    { id: "procurement", en: "Procurement", zh: "采购", def: t("企业获取货物与服务的完整流程。", "The full process by which an organisation acquires goods and services.") },
    { id: "logistics", en: "Logistics", zh: "物流", def: t("货物运输、仓储、配送与相关信息管理的整体安排。", "The planning of transport, storage, delivery, and related information.") },
    { id: "inventory", en: "Inventory", zh: "库存", def: t("企业持有的原材料、在制品与成品。", "Raw materials, work in progress, and finished goods held by a business.") },
    { id: "audit", en: "Audit", zh: "审计", def: t("对财务记录与内部控制进行独立核查。", "An independent examination of financial records and internal controls.") },
    { id: "tariff", en: "Tariff", zh: "关税", def: t("政府对进口或出口货物征收的税。", "A tax imposed by a government on imports or exports.") },
    { id: "freight", en: "Freight", zh: "运费/货物", def: t("运输货物的费用，也可指运输中的货物。", "The cost of transporting goods, or the goods being transported.") },
    { id: "merger", en: "Merger", zh: "合并", def: t("两家或多家公司整合为一家新实体。", "The combination of two or more companies into a new entity.") },
    { id: "acquisition", en: "Acquisition", zh: "收购", def: t("一家公司取得另一家公司控制权的交易。", "A transaction in which one company gains control of another.") },
    { id: "shareholder", en: "Shareholder", zh: "股东", def: t("持有公司股份的个人或机构。", "A person or institution that owns shares in a company.") },
    { id: "cash-flow", en: "Cash Flow", zh: "现金流", def: t("企业现金流入与流出的时间与规模。", "The timing and scale of cash entering and leaving a business.") },
    { id: "exchange-rate", en: "Exchange Rate", zh: "汇率", def: t("一种货币兑换另一种货币的比率。", "The rate at which one currency exchanges for another.") },
    { id: "inflation", en: "Inflation", zh: "通货膨胀", def: t("整体价格水平持续上涨的现象。", "A sustained rise in the general price level.") },
    { id: "follow-up", en: "Follow-up", zh: "跟进", def: t("会后或初次接触后的后续沟通与推动。", "Subsequent communication and action after a meeting or first contact.") },
    { id: "onboarding", en: "Onboarding", zh: "入职融入", def: t("帮助新员工或新客户熟悉流程与关系的安排。", "The process of helping a new employee or client settle in.") },
    { id: "pitch", en: "Pitch", zh: "路演/推介", def: t("向投资人或客户简要展示方案价值的陈述。", "A concise presentation of a proposal's value to investors or clients.") },
    { id: "prototype", en: "Prototype", zh: "原型", def: t("用于验证设计或功能的产品早期版本。", "An early version of a product used to test design or function.") },
    { id: "compliance", en: "Compliance", zh: "合规", def: t("遵守法律、监管要求与内部政策的状态。", "Adherence to laws, regulations, and internal policies.") },
    { id: "etiquette", en: "Etiquette", zh: "礼仪", def: t("特定社会或职业场合中被期待的行为规范。", "Expected conduct in a particular social or professional setting.") },
    { id: "taboo", en: "Taboo", zh: "禁忌", def: t("在特定文化中被强烈禁止或视为冒犯的行为。", "Behaviour strongly prohibited or considered offensive in a culture.") },
    { id: "halal", en: "Halal", zh: "清真", def: t("符合伊斯兰教法的食品、饮品或行为规范。", "Food, drink, or conduct permitted under Islamic law.") },
    { id: "ramadan", en: "Ramadan", zh: "斋月", def: t("伊斯兰历的斋戒月，穆斯林白天禁食禁饮。", "The Islamic month of fasting, when Muslims abstain from food and drink during daylight.") },
    { id: "toast", en: "Toast", zh: "祝酒", def: t("举杯致辞表达祝愿或敬意的社交礼仪。", "The social ritual of raising a glass to express good wishes or respect.") },
    { id: "title", en: "Title", zh: "称谓/头衔", def: t("用于称呼对方的职位、学位或敬称。", "A position, degree, or honorific used when addressing someone.") }
  ];

  const ALIASES = {
    CN: ["china", "prc", "中国", "中国大陆"],
    JP: ["japan", "日本"],
    KR: ["korea", "south korea", "韩国", "南韩"],
    SG: ["singapore", "新加坡"],
    TH: ["thailand", "泰国"],
    IN: ["india", "印度"],
    AE: ["uae", "u.a.e.", "united arab emirates", "emirates", "dubai", "abu dhabi", "阿联酋", "迪拜"],
    SA: ["saudi", "saudi arabia", "沙特", "沙特阿拉伯"],
    DE: ["germany", "deutschland", "德国"],
    FR: ["france", "法国"],
    GB: ["uk", "u.k.", "united kingdom", "britain", "england", "英国"],
    US: ["usa", "u.s.", "us", "united states", "america", "美国"],
    BR: ["brazil", "巴西"]
  };

  const PAIR_ALIASES = [
    ["中美", ["CN", "US"]],
    ["中日", ["CN", "JP"]],
    ["中德", ["CN", "DE"]],
    ["中英", ["CN", "GB"]],
    ["中法", ["CN", "FR"]],
    ["美日", ["US", "JP"]],
    ["美英", ["US", "GB"]],
    ["日韩", ["JP", "KR"]],
    ["英美", ["GB", "US"]]
  ];

  const QUICK_PROMPTS = [ui.agentQuick1, ui.agentQuick2, ui.agentQuick3, ui.agentQuick4];

  const state = {
    lang: "zh",
    view: "home",
    briefingIndex: 0,
    mapBuilt: false,
    mapLang: "",
    atlas: { selected: null },
    quiz: {
      mode: "setup",
      setup: { type: "all", country: "all", amount: "5" },
      lastConfig: null,
      questions: [],
      index: 0,
      selected: [],
      submitted: false,
      answers: [],
      wrongIds: []
    },
    data: { cat: "all", q: "" },
    glossary: { cat: "all", q: "" },
    agent: {
      messages: [],
      busy: false,
      typing: false,
      settings: {
        endpoint: "https://api.openai.com/v1/chat/completions",
        model: "gpt-4o-mini",
        key: "",
        online: false
      },
      quizSets: {}
    },
    selection: null,
    modal: null,
    lastFocus: null
  };

  /* ---------- tiny helpers ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[ch]));
  }

  function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function shuffle(list) {
    const out = list.slice();
    for (let i = out.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  function unique(list) {
    return Array.from(new Set(list));
  }

  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    const x = a.slice().sort((m, n) => m - n);
    const y = b.slice().sort((m, n) => m - n);
    return x.every((value, index) => value === y[index]);
  }

  function tx(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    if (state.lang === "en") return obj.en || obj.zh || "";
    if (state.lang === "both") return `${obj.zh || ""} / ${obj.en || ""}`;
    return obj.zh || obj.en || "";
  }

  function txc(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    if (state.lang === "en") return obj.en || obj.zh || "";
    return obj.zh || obj.en || "";
  }

  function bi(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return esc(obj);
    if (state.lang === "en") return esc(obj.en || obj.zh || "");
    if (state.lang === "zh") return esc(obj.zh || obj.en || "");
    return `<span class="bi-zh">${esc(obj.zh || "")}</span><span class="bi-en">${esc(obj.en || "")}</span>`;
  }

  function biLinked(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return linkTerms(obj);
    if (state.lang === "en") return linkTerms(obj.en || obj.zh || "");
    if (state.lang === "zh") return linkTerms(obj.zh || obj.en || "");
    return `<span class="bi-zh">${linkTerms(obj.zh || "")}</span><span class="bi-en">${linkTerms(obj.en || "")}</span>`;
  }

  function plain(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return `${obj.zh || ""} ${obj.en || ""}`;
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value == null ? "" : String(value);
  }

  function setHTML(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = value == null ? "" : value;
  }

  function formatTime(timestamp) {
    try {
      return new Date(timestamp || Date.now()).toLocaleTimeString(
        state.lang === "en" ? "en-US" : "zh-CN",
        { hour: "2-digit", minute: "2-digit" }
      );
    } catch (error) {
      return "";
    }
  }

  function prefersReduced() {
    return REDUCED;
  }

  /* ---------- storage ---------- */
  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch (error) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (error) {
        return false;
      }
    }
  };

  /* ---------- term linking ---------- */
  const AUTO_LINK_SKIP = new Set(["minutes", "face"]);
  const termLookup = new Map();
  let termRegex = null;

  function buildTermIndex() {
    const entries = [];
    glossary.forEach((g) => {
      entries.push({ text: g.term, id: g.id, latin: /^[A-Za-z]/.test(g.term) });
      entries.push({ text: g.zh, id: g.id, latin: false });
    });

    const seen = new Set();
    const parts = [];
    entries
      .sort((a, b) => b.text.length - a.text.length)
      .forEach((entry) => {
        const key = entry.latin ? entry.text.toLowerCase() : entry.text;
        if (!key || seen.has(key) || AUTO_LINK_SKIP.has(key)) return;
        seen.add(key);
        termLookup.set(key, entry.id);
        parts.push(entry.latin ? `\\b${escapeRegExp(entry.text)}\\b` : escapeRegExp(entry.text));
      });

    termRegex = parts.length ? new RegExp(`(${parts.join("|")})`, "gi") : null;
  }

  function linkTerms(text) {
    const raw = String(text == null ? "" : text);
    if (!termRegex) return esc(raw);
    let out = "";
    let last = 0;
    let match;
    termRegex.lastIndex = 0;
    while ((match = termRegex.exec(raw))) {
      out += esc(raw.slice(last, match.index));
      const id = termLookup.get(match[0].toLowerCase()) || termLookup.get(match[0]);
      if (id) {
        out += `<span class="term" data-term="${id}" tabindex="0">${esc(match[0])}</span>`;
      } else {
        out += esc(match[0]);
      }
      last = match.index + match[0].length;
      if (match[0].length === 0) termRegex.lastIndex += 1;
    }
    out += esc(raw.slice(last));
    return out;
  }

  /* ---------- chrome / language ---------- */
  function applyChrome() {
    document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
    document.title = `${txc(ui.brand)} · ${txc(ui.heroTitle)}`;

    setText("skipLink", txc(ui.skip));
    setText("brandName", txc(ui.brand));
    setText("brandSub", txc(ui.brandSub));
    setText("langLabel", txc(ui.langLabel));

    const navKeys = {
      home: "navHome",
      atlas: "navAtlas",
      quiz: "navQuiz",
      data: "navData",
      glossary: "navGlossary",
      agent: "navAgent"
    };

    Object.keys(navKeys).forEach((view) => {
      $$(`.nav-link[data-nav="${view}"]`).forEach((button) => {
        const span = button.querySelector("span");
        if (span) span.textContent = txc(ui[navKeys[view]]);
        else button.textContent = txc(ui[navKeys[view]]);
      });
    });

    $$(".footer-nav button").forEach((button) => {
      const key = navKeys[button.dataset.nav];
      if (key) button.textContent = txc(ui[key]);
    });

    $$(".lang-switch [data-lang]").forEach((button) => {
      const active = button.dataset.lang === state.lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    const menu = $("#menuToggle");
    if (menu) menu.setAttribute("aria-label", txc(ui.menuLabel));

    setText("footerBrand", txc(ui.brand));
    setText("footerNote", txc(ui.footerNote));
    setText("footerDisclaimer", txc(ui.footerDisclaimer));
    setText("footerRights", txc(ui.footerRights));

    const modalClose = $(".modal-close");
    if (modalClose) modalClose.setAttribute("aria-label", txc(ui.closeLabel));

    const selectionButton = $("#selectionButton");
    if (selectionButton) selectionButton.textContent = state.lang === "en" ? "EN" : "译";
  }

  function setLanguage(lang) {
    if (!LANGS.includes(lang) || lang === state.lang) return;
    state.lang = lang;
    store.set("ea.lang", lang);
    hideFloating();
    applyLanguage();
  }

  function applyLanguage() {
    applyChrome();
    renderHome();
    renderAtlas();
    renderQuizChrome();
    renderQuiz();
    renderDataChrome();
    renderGlossaryChrome();
    renderAgentChrome();
    renderChat();
    refreshModal();
  }

  /* ---------- home ---------- */
  function renderHome() {
    setText("heroEyebrow", txc(ui.heroEyebrow));
    setText("heroTitle", state.lang === "en" ? ui.heroTitle.en : ui.heroTitle.zh);
    const titleEn = $("#heroTitleEn");
    if (titleEn) {
      titleEn.textContent = ui.heroTitle.en;
      titleEn.hidden = state.lang === "en";
    }
    setHTML("heroLead", bi(ui.heroLead));
    setText("heroPrimary", txc(ui.heroPrimary));
    setText("heroSecondary", txc(ui.heroSecondary));
    setText(
      "heroMeta",
      state.lang === "en"
        ? `${countries.length} countries · ${quizBank.length} questions · ${glossary.length} terms`
        : state.lang === "both"
          ? `${countries.length} 个国家/地区 · ${quizBank.length} 道题 · ${glossary.length} 条术语 / ${countries.length} countries · ${quizBank.length} questions · ${glossary.length} terms`
          : `${countries.length} 个国家/地区 · ${quizBank.length} 道情境题 · ${glossary.length} 条术语`
    );

    setText("briefingTitle", txc(ui.briefingTitle));
    setText("briefingHint", txc(ui.briefingHint));
    const swap = $("#briefingSwap");
    if (swap) swap.setAttribute("aria-label", txc(ui.briefingSwap));
    setText("briefingGreetingLabel", txc(ui.briefingGreeting));
    setText("briefingTabooLabel", txc(ui.briefingTaboo));
    setText("briefingNegotiationLabel", txc(ui.briefingNegotiation));
    setText("briefingStory", txc(ui.briefingStory));

    setText("statCountries", countries.length);
    setText("statQuestions", quizBank.length);
    setText("statTerms", glossary.length);
    setText("statCountriesLabel", txc(ui.statCountries));
    setText("statQuestionsLabel", txc(ui.statQuestions));
    setText("statTermsLabel", txc(ui.statTerms));
    setText("statModesLabel", txc(ui.statModes));

    setText("featuresEyebrow", txc(ui.featuresEyebrow));
    setHTML("featuresTitle", bi(ui.featuresTitle));
    setHTML("featuresLead", bi(ui.featuresLead));

    setHTML("fQuizTitle", bi(ui.fQuizTitle));
    setHTML("fQuizDesc", bi(ui.fQuizDesc));
    setText("fQuizLink", txc(ui.fQuizTitle));
    setHTML("fDataTitle", bi(ui.fDataTitle));
    setHTML("fDataDesc", bi(ui.fDataDesc));
    setText("fDataLink", txc(ui.fDataTitle));
    setHTML("fAtlasTitle", bi(ui.fAtlasTitle));
    setHTML("fAtlasDesc", bi(ui.fAtlasDesc));
    setText("fAtlasLink", txc(ui.fAtlasTitle));
    setHTML("fGlossaryTitle", bi(ui.fGlossaryTitle));
    setHTML("fGlossaryDesc", bi(ui.fGlossaryDesc));
    setText("fGlossaryLink", txc(ui.fGlossaryTitle));

    setHTML("agentBannerTitle", bi(ui.agentBannerTitle));
    setHTML("agentBannerDesc", bi(ui.agentBannerDesc));
    setText("agentBannerCta", txc(ui.agentBannerCta));

    setText("researchEyebrow", txc(ui.researchEyebrow));
    setHTML("researchTitle", bi(ui.researchTitle));
    setHTML("researchLead", bi(ui.researchLead));
    setHTML("research1Title", bi(ui.research1Title));
    setHTML("research1Desc", bi(ui.research1Desc));
    setHTML("research2Title", bi(ui.research2Title));
    setHTML("research2Desc", bi(ui.research2Desc));
    setHTML("research3Title", bi(ui.research3Title));
    setHTML("research3Desc", bi(ui.research3Desc));

    renderBriefing();
  }

  function renderBriefing() {
    if (!countries.length) return;
    const index = ((state.briefingIndex % countries.length) + countries.length) % countries.length;
    const c = countries[index];
    setText("briefingIso", c.iso);
    setHTML("briefingName", bi(c.name));
    setText("briefingRegion", `${txc(c.region)} · ${c.iso}`);
    setHTML("briefingGreeting", bi(c.greeting));
    setHTML("briefingTaboo", bi(c.taboo));
    setHTML("briefingNegotiation", bi(c.negotiation));
    const story = $("#briefingStory");
    if (story) story.dataset.country = c.id;
  }

  /* ---------- atlas ---------- */
  function buildMap() {
    const group = $("#mapCountries");
    const pins = $("#mapPins");
    if (!group || !pins) return;

    group.innerHTML = "";
    pins.innerHTML = "";

    const list = window.MAP_COUNTRIES || [];
    const pinList = window.MAP_PINS || [];
    const NS = "http://www.w3.org/2000/svg";

    list.forEach((item) => {
      const path = document.createElementNS(NS, "path");
      path.setAttribute("d", item.d);
      path.dataset.iso = item.id;
      const c = countryByIso[item.id];
      if (c) {
        path.classList.add("has-data");
        path.setAttribute("tabindex", "0");
        path.setAttribute("role", "button");
        path.setAttribute("aria-label", `${c.name.zh} / ${c.name.en}`);
      }
      const title = document.createElementNS(NS, "title");
      title.textContent = c ? `${c.name.zh} / ${c.name.en}` : `${item.zh} / ${item.en}`;
      path.appendChild(title);
      group.appendChild(path);
    });

    pinList.forEach((pin) => {
      const c = countryByIso[pin.id];
      if (!c) return;
      const g = document.createElementNS(NS, "g");
      g.classList.add("map-pin");
      g.dataset.iso = pin.id;
      g.setAttribute("tabindex", "0");
      g.setAttribute("role", "button");
      g.setAttribute("aria-label", `${c.name.zh} / ${c.name.en}`);

      const circle = document.createElementNS(NS, "circle");
      circle.setAttribute("cx", pin.x);
      circle.setAttribute("cy", pin.y);
      circle.setAttribute("r", "5.4");
      g.appendChild(circle);

      const offsets = {
        GBR: [-8, -6, "end"],
        FRA: [-8, 12, "end"],
        DEU: [8, -5, "start"],
        KOR: [-8, -5, "end"],
        SAU: [-8, 4, "end"],
        THA: [8, -6, "start"],
        SGP: [8, 7, "start"]
      };
      const [dx, dy, anchor] = offsets[pin.id] || [8, 4, "start"];
      const label = document.createElementNS(NS, "text");
      label.setAttribute("x", pin.x + dx);
      label.setAttribute("y", pin.y + dy);
      label.setAttribute("text-anchor", anchor);
      label.classList.add("map-pin-label");
      label.textContent = pin.id;
      g.appendChild(label);

      pins.appendChild(g);
    });

    state.mapBuilt = true;
    state.mapLang = state.lang;
    updateMapSelection();
  }

  function updateMapSelection() {
    const c = state.atlas.selected ? countryById[state.atlas.selected] : null;
    $$("#mapCountries [data-iso], #mapPins [data-iso]").forEach((el) => {
      el.classList.toggle("is-selected", Boolean(c && el.dataset.iso === c.iso));
    });
  }

  function renderAtlas() {
    setText("atlasEyebrow", txc(ui.atlasEyebrow));
    setHTML("atlasTitle", bi(ui.atlasTitle));
    setHTML("atlasLead", bi(ui.atlasLead));
    setText("atlasMapHint", txc(ui.atlasMapHint));
    setText("atlasLegendTarget", txc(ui.atlasLegendTarget));
    setText("atlasLegendOther", txc(ui.atlasLegendOther));
    setText("atlasEmptyText", txc(ui.atlasDetailEmpty));

    const mapTitle = $("#mapTitle");
    if (mapTitle) mapTitle.textContent = txc(ui.mapTitle);
    const mapDesc = $("#mapDesc");
    if (mapDesc) {
      mapDesc.textContent = state.lang === "en"
        ? "Click a highlighted country to read its business etiquette entry."
        : "点击蓝色标记的国家/地区，查看商务礼仪词条。";
    }

    if (!state.mapBuilt || state.mapLang !== state.lang) buildMap();

    renderCountryChips();
    renderCountryDetail();
    updateMapSelection();
  }

  function renderCountryChips() {
    const host = $("#countryChips");
    if (!host) return;
    host.innerHTML = countries.map((c) => `
      <button type="button" class="country-chip${state.atlas.selected === c.id ? " is-active" : ""}" data-country="${c.id}" aria-pressed="${state.atlas.selected === c.id}">
        ${esc(txc(c.name))}<span>${c.id}</span>
      </button>
    `).join("");
  }

  function renderCountryDetail() {
    const empty = $("#countryEmpty");
    const detail = $("#countryDetail");
    if (!empty || !detail) return;

    const c = state.atlas.selected ? countryById[state.atlas.selected] : null;
    if (!c) {
      empty.hidden = false;
      detail.hidden = true;
      detail.innerHTML = "";
      return;
    }

    empty.hidden = true;
    detail.hidden = false;
    detail.innerHTML = `
      <div class="country-head">
        <span class="iso-badge">${c.iso}</span>
        <div>
          <h2>${bi(c.name)}</h2>
          <p>${esc(txc(c.region))} · ${c.iso}</p>
        </div>
      </div>
      <div class="detail-actions">
        <button type="button" class="btn btn-primary btn-sm" data-action="country-quiz">
          ${esc(txc(ui.atlasQuizBtn))}
        </button>
        <button type="button" class="btn btn-ghost btn-sm" data-action="story">
          ${esc(txc(ui.atlasStoryBtn))}
        </button>
      </div>
      <div class="detail-block">
        <h3>${esc(txc(ui.atlasGreeting))}</h3>
        <p>${biLinked(c.greeting)}</p>
      </div>
      <div class="detail-block">
        <h3>${esc(txc(ui.atlasCard))}</h3>
        <p>${biLinked(c.card)}</p>
      </div>
      <div class="detail-block">
        <h3>${esc(txc(ui.atlasTaboo))}</h3>
        <p>${biLinked(c.taboo)}</p>
      </div>
      <div class="detail-block">
        <h3>${esc(txc(ui.atlasNegotiation))}</h3>
        <p>${biLinked(c.negotiation)}</p>
      </div>
    `;
  }

  function selectCountry(id) {
    if (!countryById[id]) return;
    state.atlas.selected = id;
    renderCountryChips();
    renderCountryDetail();
    updateMapSelection();
  }

  function handleGeo(iso) {
    const c = countryByIso[iso];
    if (!c) {
      toast(ui.toastNoData);
      return;
    }
    selectCountry(c.id);
  }

  function openStory(id, opts) {
    const c = countryById[id];
    if (!c || !c.story) return;
    const story = c.story;
    const html = `
      <article class="reading">
        <div class="reading-meta">
          <span>${esc(state.lang === "en" ? "Diplomatic story" : "外交小故事")}</span>
          <span>${c.iso}</span>
        </div>
        <h2>${bi(story.title)}</h2>
        <p class="story-lead">${biLinked(story.lead)}</p>
        ${story.body.map((p) => `<p>${biLinked(p)}</p>`).join("")}
        <div class="story-note">${bi(story.note)}</div>
        <div class="story-actions">
          <button type="button" class="btn btn-primary" data-modal-action="country-quiz" data-country="${c.id}">
            ${esc(txc(ui.atlasQuizBtn))}
          </button>
          <button type="button" class="btn btn-ghost" data-close-modal>
            ${esc(txc(ui.closeLabel))}
          </button>
        </div>
      </article>
    `;
    openModal(html, { type: "story", id: c.id }, opts);
  }

  /* ---------- quiz ---------- */
  function quizTypeLabel(type) {
    if (type === "tf") return ui.quizBadgeTf;
    if (type === "multi") return ui.quizBadgeMulti;
    if (type === "single") return ui.quizBadgeSingle;
    return ui.quizTypeAll;
  }

  function availableQuizCount() {
    const setup = state.quiz.setup;
    return quizBank.filter((q) => (
      (setup.type === "all" || q.type === setup.type) &&
      (setup.country === "all" || q.country === setup.country)
    )).length;
  }

  function syncQuizSetup() {
    $$("#quizTypeControl [data-quiz-type]").forEach((button) => {
      const active = button.dataset.quizType === state.quiz.setup.type;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    $$("#quizAmountControl [data-quiz-amount]").forEach((button) => {
      const active = button.dataset.quizAmount === state.quiz.setup.amount;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const select = $("#quizCountry");
    if (select) select.value = state.quiz.setup.country;
  }

  function updateQuizCount() {
    const count = availableQuizCount();
    const hint = $("#quizSetupHint");
    if (hint) {
      const base = tx(QUIZ_HINT);
      const suffix = count === 0
        ? txc(ui.quizEmpty)
        : state.lang === "en"
          ? `${count} items match this filter.`
          : state.lang === "both"
            ? `当前筛选 ${count} 题 / ${count} items match.`
            : `当前筛选共 ${count} 题。`;
      hint.textContent = `${base} ${suffix}`;
    }
    const start = $("#quizStart");
    if (start) start.disabled = count === 0;
  }

  function renderQuizChrome() {
    setText("quizEyebrow", txc(ui.quizEyebrow));
    setHTML("quizTitle", bi(ui.quizTitle));
    setHTML("quizLead", bi(ui.quizLead));
    setText("quizSetupTitle", state.lang === "en" ? "Quiz settings" : "测验设置");

    setText("quizTypeLabel", txc(ui.quizType));
    const typeLabels = {
      all: ui.quizTypeAll,
      tf: ui.quizTypeTf,
      single: ui.quizTypeSingle,
      multi: ui.quizTypeMulti
    };
    $$("#quizTypeControl [data-quiz-type]").forEach((button) => {
      button.textContent = txc(typeLabels[button.dataset.quizType]);
    });

    setText("quizCountryLabel", txc(ui.quizCountry));
    const select = $("#quizCountry");
    if (select) {
      const current = state.quiz.setup.country;
      select.innerHTML = `<option value="all">${esc(txc(ui.quizCountryAll))}</option>` +
        countries.map((c) => `<option value="${c.id}">${esc(tx(c.name))}</option>`).join("");
      select.value = current === "all" || countryById[current] ? current : "all";
      if (select.value !== current) state.quiz.setup.country = select.value;
    }

    setText("quizAmountLabel", txc(ui.quizAmount));
    const amountLabels = { "5": ui.quizAmount5, "10": ui.quizAmount10, all: ui.quizAmountAll };
    $$("#quizAmountControl [data-quiz-amount]").forEach((button) => {
      button.textContent = txc(amountLabels[button.dataset.quizAmount]);
    });

    setText("quizStart", txc(ui.quizStart));
    setText("quizAgentBtn", txc(ui.quizAgentBtn));
    syncQuizSetup();
    updateQuizCount();
  }

  function renderQuiz() {
    const quiz = state.quiz;
    if (quiz.mode === "play" && !quiz.questions.length) quiz.mode = "setup";
    const setup = $("#quizSetup");
    const play = $("#quizPlay");
    const result = $("#quizResult");
    if (setup) setup.hidden = quiz.mode !== "setup";
    if (play) play.hidden = quiz.mode !== "play";
    if (result) result.hidden = quiz.mode !== "result";
    if (quiz.mode === "play") renderPlay();
    if (quiz.mode === "result") renderResult();
  }

  function renderPlay() {
    const host = $("#quizPlay");
    if (!host) return;
    const quiz = state.quiz;
    const q = quiz.questions[quiz.index];
    if (!q) {
      host.innerHTML = "";
      return;
    }

    const isMulti = q.type === "multi";
    const answered = quiz.submitted;
    const correct = answered ? sameSet(quiz.selected, q.answer) : false;
    const progress = Math.round(((quiz.index + (answered ? 1 : 0)) / quiz.questions.length) * 100);

    const options = q.options.map((option, index) => {
      const selected = quiz.selected.includes(index);
      const isAnswer = q.answer.includes(index);
      let cls = "option";
      let mark = "";
      if (answered) {
        cls += " is-locked";
        if (isAnswer && selected) {
          cls += " is-correct";
          mark = `<svg class="icon option-mark" aria-hidden="true"><use href="#i-check"></use></svg>`;
        } else if (isAnswer) {
          cls += " is-correct-unselected";
          mark = `<svg class="icon option-mark" aria-hidden="true"><use href="#i-check"></use></svg>`;
        } else if (selected) {
          cls += " is-wrong";
          mark = `<svg class="icon option-mark" aria-hidden="true"><use href="#i-x"></use></svg>`;
        }
      } else if (selected) {
        cls += " is-selected";
      }
      return `
        <button type="button" class="${cls}" data-option="${index}" ${answered ? "disabled" : ""} aria-pressed="${selected}">
          <span class="option-key">${LETTERS[index] || index + 1}</span>
          <span class="option-text">${bi(option)}</span>
          ${mark}
        </button>
      `;
    }).join("");

    const country = countryById[q.country];
    const yourAnswer = quiz.selected.length
      ? quiz.selected.map((i) => LETTERS[i]).join(", ")
      : txc(ui.quizNoAnswer);
    const correctAnswer = q.answer.map((i) => LETTERS[i]).join(", ");

    const feedback = answered ? `
      <div class="feedback ${correct ? "is-correct" : "is-wrong"}">
        <div class="feedback-head">
          <svg class="icon" aria-hidden="true"><use href="#${correct ? "i-check" : "i-x"}"></use></svg>
          ${esc(txc(correct ? ui.quizCorrect : ui.quizWrong))}
        </div>
        <p class="feedback-answer">${esc(txc(ui.answerLabel))}: ${esc(yourAnswer)} · ${esc(txc(ui.correctLabel))}: ${esc(correctAnswer)}</p>
        <p class="feedback-explain">${esc(txc(ui.quizExplain))}: ${biLinked(q.explain)}</p>
      </div>
    ` : "";

    let action = "";
    if (isMulti && !answered) {
      action = `<button type="button" class="btn btn-primary" data-quiz-action="submit" ${quiz.selected.length ? "" : "disabled"}>${esc(txc(ui.quizSubmit))}</button>`;
    } else if (answered) {
      const last = quiz.index === quiz.questions.length - 1;
      action = `<button type="button" class="btn btn-primary" data-quiz-action="next">${esc(txc(last ? ui.quizFinish : ui.quizNext))}</button>`;
    }

    const hint = answered
      ? (state.lang === "en" ? "Answers locked." : "选项已锁定。")
      : txc(isMulti ? ui.quizSelectHint : t("点击一个选项作答", "Select an option to answer"));

    host.innerHTML = `
      <div class="quiz-top">
        <div class="quiz-progress-meta">
          ${state.lang === "en"
            ? `Question ${quiz.index + 1} of ${quiz.questions.length}`
            : `第 ${quiz.index + 1} / ${quiz.questions.length} 题`}
        </div>
        <div class="quiz-tags">
          <span class="tag tag-blue">${esc(txc(quizTypeLabel(q.type)))}</span>
          <span class="tag">${esc(txc(country ? country.name : t(q.country, q.country)))}</span>
        </div>
      </div>
      <div class="progress-track" aria-hidden="true"><div class="progress-fill" style="width:${progress}%"></div></div>
      <h2 class="question">${bi(q.q)}</h2>
      <div class="options" role="group" aria-label="${esc(txc(ui.quizType))}">
        ${options}
      </div>
      ${feedback}
      <div class="quiz-footer">
        <span class="hint">${esc(hint)}</span>
        ${action}
      </div>
    `;
  }

  function recordAnswer() {
    const quiz = state.quiz;
    const q = quiz.questions[quiz.index];
    if (!q) return;
    quiz.answers[quiz.index] = {
      id: q.id,
      selected: quiz.selected.slice(),
      correct: sameSet(quiz.selected, q.answer)
    };
  }

  function chooseOption(index) {
    const quiz = state.quiz;
    if (quiz.mode !== "play" || quiz.submitted) return;
    const q = quiz.questions[quiz.index];
    if (!q || !Number.isInteger(index)) return;

    if (q.type === "multi") {
      if (quiz.selected.includes(index)) quiz.selected = quiz.selected.filter((i) => i !== index);
      else quiz.selected = quiz.selected.concat(index).sort((a, b) => a - b);
      renderPlay();
      return;
    }

    quiz.selected = [index];
    quiz.submitted = true;
    recordAnswer();
    renderPlay();
  }

  function submitAnswer() {
    const quiz = state.quiz;
    if (quiz.mode !== "play" || quiz.submitted || !quiz.selected.length) return;
    quiz.submitted = true;
    recordAnswer();
    renderPlay();
  }

  function nextQuestion() {
    const quiz = state.quiz;
    if (!quiz.submitted) return;
    if (quiz.index >= quiz.questions.length - 1) {
      finishQuiz();
      return;
    }
    quiz.index += 1;
    quiz.selected = [];
    quiz.submitted = false;
    renderPlay();
    scrollQuizTop();
  }

  function finishQuiz() {
    const quiz = state.quiz;
    quiz.wrongIds = quiz.answers.filter((entry) => entry && !entry.correct).map((entry) => entry.id);
    quiz.mode = "result";
    renderQuiz();
    scrollQuizTop();
  }

  function scrollQuizTop() {
    const view = $("#view-quiz");
    if (!view) return;
    view.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth", block: "start" });
  }

  function renderResult() {
    const host = $("#quizResult");
    if (!host) return;
    const quiz = state.quiz;
    const total = quiz.questions.length;
    const correct = quiz.answers.filter((entry) => entry && entry.correct).length;
    const wrong = Math.max(0, total - correct);
    const percent = total ? Math.round((correct / total) * 100) : 0;
    const message = percent === 100 ? ui.resultPerfect : percent >= 60 ? ui.resultGood : ui.resultKeep;

    host.innerHTML = `
      <div class="result-grid">
        <div class="score-ring" style="--score:${percent}"><strong>${percent}%</strong></div>
        <div class="result-copy">
          <h2>${esc(txc(ui.quizResultTitle))}</h2>
          <p>${esc(txc(message))}</p>
          <div class="result-stats">
            <span>${esc(txc(ui.quizScore))} <strong>${correct} / ${total}</strong></span>
            <span>${esc(txc(ui.quizWrong))} <strong>${wrong}</strong></span>
          </div>
          <p class="hint" style="margin-top:10px">${esc(txc(ui.quizResultLead))}</p>
          <div class="result-actions">
            <button type="button" class="btn btn-primary" data-quiz-action="retry">${esc(txc(ui.quizRetry))}</button>
            ${wrong > 0 ? `<button type="button" class="btn btn-ghost" data-quiz-action="wrong">${esc(txc(ui.quizReviewWrong))}</button>` : ""}
            <button type="button" class="btn btn-quiet" data-quiz-action="setup">${esc(txc(ui.quizBackSetup))}</button>
          </div>
        </div>
      </div>
    `;
  }

  function startQuiz(config) {
    const cfg = Object.assign({ type: "all", country: "all", amount: "5" }, config || {});
    if (!["all", "tf", "single", "multi"].includes(cfg.type)) cfg.type = "all";
    if (cfg.country !== "all" && !countryById[cfg.country]) cfg.country = "all";
    if (!["5", "10", "all"].includes(String(cfg.amount))) cfg.amount = "5";

    state.quiz.setup = { type: cfg.type, country: cfg.country, amount: String(cfg.amount) };

    const pool = quizBank.filter((q) => (
      (cfg.type === "all" || q.type === cfg.type) &&
      (cfg.country === "all" || q.country === cfg.country)
    ));

    if (!pool.length) {
      toast(ui.quizEmpty);
      return;
    }

    const amount = cfg.amount === "all" ? pool.length : Math.min(Number(cfg.amount) || 5, pool.length);
    const list = shuffle(pool).slice(0, amount);
    startQuizQuestions(list, cfg);
  }

  function startQuizQuestions(list, config) {
    if (!list || !list.length) {
      toast(ui.quizEmpty);
      return;
    }
    const cfg = Object.assign({}, config || {});
    state.quiz.questions = list.slice();
    state.quiz.index = 0;
    state.quiz.selected = [];
    state.quiz.submitted = false;
    state.quiz.answers = [];
    state.quiz.wrongIds = [];
    state.quiz.mode = "play";
    state.quiz.lastConfig = Object.assign({}, cfg, {
      generated: Boolean(cfg.generated),
      sourceList: cfg.sourceList ? cfg.sourceList.slice() : null
    });
    navigate("quiz");
  }

  function retryQuiz() {
    const cfg = state.quiz.lastConfig;
    if (!cfg) {
      state.quiz.mode = "setup";
      renderQuiz();
      return;
    }
    if (cfg.generated && cfg.sourceList && cfg.sourceList.length) {
      startQuizQuestions(shuffle(cfg.sourceList), cfg);
    } else {
      startQuiz(cfg);
    }
  }

  function retryWrong() {
    const ids = state.quiz.wrongIds;
    const list = state.quiz.questions.filter((q) => ids.includes(q.id));
    if (!list.length) return;
    startQuizQuestions(shuffle(list), {
      type: "wrong",
      country: "all",
      amount: "all",
      generated: true,
      sourceList: list
    });
  }

  /* ---------- knowledge base ---------- */
  function articleCatLabel(cat) {
    const found = ARTICLE_CATS.find((c) => c.id === cat);
    return found ? found.label : t(cat, cat);
  }

  function renderDataChrome() {
    setText("dataEyebrow", txc(ui.dataEyebrow));
    setHTML("dataTitle", bi(ui.dataTitle));
    setHTML("dataLead", bi(ui.dataLead));
    const search = $("#dataSearch");
    if (search) search.placeholder = txc(ui.dataSearch);
    const empty = $("#dataEmpty p");
    if (empty) empty.textContent = txc(ui.dataEmpty);
    if (state.data.cat !== "all" && !ARTICLE_CATS.some((c) => c.id === state.data.cat)) {
      state.data.cat = "all";
    }
    renderArticleFilters();
    renderArticles();
  }

  function renderArticleFilters() {
    const host = $("#dataFilters");
    if (!host) return;
    const counts = {};
    articles.forEach((a) => { counts[a.cat] = (counts[a.cat] || 0) + 1; });
    const chips = [{ id: "all", label: ui.dataAll, count: articles.length }].concat(
      ARTICLE_CATS.filter((c) => counts[c.id]).map((c) => ({ id: c.id, label: c.label, count: counts[c.id] }))
    );
    host.innerHTML = chips.map((chip) => `
      <button type="button" class="chip${state.data.cat === chip.id ? " is-active" : ""}" data-cat="${chip.id}" aria-pressed="${state.data.cat === chip.id}">
        ${esc(tx(chip.label))} <span style="color:var(--muted-2);font-family:var(--font-mono);font-size:9px">${chip.count}</span>
      </button>
    `).join("");
  }

  function articleHaystack(a) {
    return [
      plain(a.title),
      plain(a.summary),
      a.body.map(plain).join(" "),
      a.points.map(plain).join(" "),
      a.tags.map(plain).join(" "),
      plain(articleCatLabel(a.cat))
    ].join(" ").toLowerCase();
  }

  function renderArticles() {
    const host = $("#articleGrid");
    const empty = $("#dataEmpty");
    if (!host) return;
    const query = state.data.q.trim().toLowerCase();
    const filtered = articles.filter((a) => {
      const catOk = state.data.cat === "all" || a.cat === state.data.cat;
      const textOk = !query || articleHaystack(a).includes(query);
      return catOk && textOk;
    });

    host.innerHTML = filtered.map((a) => `
      <article class="article-card" data-article="${a.id}" tabindex="0" role="button" aria-label="${esc(txc(a.title))}">
        <div class="article-top">
          <span class="article-no">${a.no}</span>
          <span>${a.minutes} ${esc(txc(ui.dataMinutes))}</span>
        </div>
        <h2>${bi(a.title)}</h2>
        <p>${esc(txc(a.summary))}</p>
        <div class="article-tags">
          ${a.tags.map((tag) => `<span class="article-tag">${esc(tx(tag))}</span>`).join("")}
        </div>
        <div class="article-foot">
          <span>${esc(txc(ui.dataRead))}</span>
          <svg class="icon" aria-hidden="true"><use href="#i-arrow"></use></svg>
        </div>
      </article>
    `).join("");

    if (empty) empty.hidden = filtered.length > 0;
  }

  function openArticle(id, opts) {
    const a = articleById[id];
    if (!a) return;
    const altTitle = state.lang === "en" ? a.title.zh : a.title.en;
    const altLine = state.lang === "both" ? "" : `<p class="reading-en">${esc(altTitle)}</p>`;
    const terms = a.terms.map((termId) => termById[termId]).filter(Boolean);

    const html = `
      <article class="reading">
        <div class="reading-meta">
          <span>${a.no}</span>
          <span>${a.minutes} ${esc(txc(ui.dataMinutes))}</span>
          <span>${esc(txc(articleCatLabel(a.cat)))}</span>
        </div>
        <h2>${bi(a.title)}</h2>
        ${altLine}
        ${a.body.map((p) => `<p>${biLinked(p)}</p>`).join("")}
        <h3>${esc(txc(ui.dataKeyPoints))}</h3>
        <ul class="reading-points">
          ${a.points.map((p) => `<li>${biLinked(p)}</li>`).join("")}
        </ul>
        ${terms.length ? `
          <h3>${esc(txc(ui.dataRelatedTerms))}</h3>
          <div class="reading-related">
            ${terms.map((g) => `<button type="button" class="country-chip" data-term-open="${g.id}">${esc(g.term)}<span>${esc(g.zh)}</span></button>`).join("")}
          </div>
        ` : ""}
        <h3>${esc(txc(ui.dataRelatedCountries))}</h3>
        <div class="reading-related">
          ${a.countries.map((countryId) => {
            const c = countryById[countryId];
            return c ? `<button type="button" class="country-chip" data-atlas-country="${c.id}">${esc(txc(c.name))}<span>${c.id}</span></button>` : "";
          }).join("")}
        </div>
        <div class="reading-actions">
          <button type="button" class="btn btn-primary" data-modal-action="article-quiz" data-article-id="${a.id}">
            ${esc(txc(ui.dataPractice))}
          </button>
          <button type="button" class="btn btn-ghost" data-modal-action="ask-agent" data-prompt="${esc(state.lang === "en" ? `Explain the key points of ${a.title.en}` : `请解释《${a.title.zh}》的核心要点`)}">
            ${esc(txc(ui.dataAskAgent))}
          </button>
        </div>
      </article>
    `;
    openModal(html, { type: "article", id: a.id }, opts);
  }

  function startArticleQuiz(articleId) {
    const a = articleById[articleId];
    if (!a) return;
    let pool = quizBank.filter((q) => a.countries.includes(q.country));
    if (!pool.length) pool = quizBank;
    const list = shuffle(pool).slice(0, Math.min(5, pool.length));
    closeModal();
    startQuizQuestions(list, {
      type: "article",
      country: "all",
      amount: "5",
      generated: true,
      sourceList: list
    });
  }

  /* ---------- glossary ---------- */
  function termCatLabel(cat) {
    const map = {
      contract: ui.catContract,
      finance: ui.catFinance,
      meeting: ui.catMeeting,
      culture: ui.catCulture
    };
    return map[cat] || t(cat, cat);
  }

  function renderGlossaryChrome() {
    setText("glossaryEyebrow", txc(ui.glossaryEyebrow));
    setHTML("glossaryTitle", bi(ui.glossaryTitle));
    setHTML("glossaryLead", bi(ui.glossaryLead));
    const search = $("#glossarySearch");
    if (search) search.placeholder = txc(ui.glossarySearch);
    setText("glossaryHint", txc(ui.glossaryHint));
    const empty = $("#glossaryEmpty p");
    if (empty) empty.textContent = txc(ui.glossaryEmpty);
    if (state.glossary.cat !== "all" && !["contract", "finance", "meeting", "culture"].includes(state.glossary.cat)) {
      state.glossary.cat = "all";
    }
    renderTermFilters();
    renderTerms();
  }

  function renderTermFilters() {
    const host = $("#glossaryFilters");
    if (!host) return;
    const counts = {};
    glossary.forEach((g) => { counts[g.cat] = (counts[g.cat] || 0) + 1; });
    const chips = [{ id: "all", label: ui.glossaryAll, count: glossary.length }].concat(
      ["contract", "finance", "meeting", "culture"].filter((cat) => counts[cat]).map((cat) => ({
        id: cat,
        label: termCatLabel(cat),
        count: counts[cat]
      }))
    );
    host.innerHTML = chips.map((chip) => `
      <button type="button" class="chip${state.glossary.cat === chip.id ? " is-active" : ""}" data-cat="${chip.id}" aria-pressed="${state.glossary.cat === chip.id}">
        ${esc(tx(chip.label))} <span style="color:var(--muted-2);font-family:var(--font-mono);font-size:9px">${chip.count}</span>
      </button>
    `).join("");
  }

  function renderTerms() {
    const host = $("#termGrid");
    const empty = $("#glossaryEmpty");
    if (!host) return;
    const query = state.glossary.q.trim().toLowerCase();
    const filtered = glossary.filter((g) => {
      const catOk = state.glossary.cat === "all" || g.cat === state.glossary.cat;
      const hay = `${g.term} ${g.zh} ${plain(g.def)} ${plain(g.example || "")} ${txc(termCatLabel(g.cat))}`.toLowerCase();
      return catOk && (!query || hay.includes(query));
    });

    host.innerHTML = filtered.map((g) => `
      <article class="term-card" data-term-card="${g.id}" tabindex="0" role="button" aria-label="${esc(g.term)}">
        <div class="term-card-top">
          <button type="button" class="term-word" data-term="${g.id}">${esc(g.term)}</button>
          <span class="term-cat">${esc(txc(termCatLabel(g.cat)))}</span>
        </div>
        <h3>${esc(g.zh)}</h3>
        <p class="term-def">${bi(g.def)}</p>
        ${g.example ? `<p class="term-example">${bi(g.example)}</p>` : ""}
      </article>
    `).join("");

    if (empty) empty.hidden = filtered.length > 0;
  }

  function openTerm(id, opts) {
    const g = termById[id];
    if (!g) {
      const extra = EXTRA_WORDS.find((w) => w.id === id);
      if (extra) openExtraWord(extra.id, opts);
      return;
    }
    const related = articles.filter((a) => a.terms.includes(g.id)).slice(0, 3);
    const html = `
      <article class="reading">
        <div class="reading-meta">
          <span>${esc(txc(termCatLabel(g.cat)))}</span>
          <span>TERM</span>
        </div>
        <h2>${esc(g.term)}</h2>
        <p class="reading-en">${esc(g.zh)}</p>
        <p>${bi(g.def)}</p>
        ${g.example ? `<h3>${esc(txc(ui.glossaryExample))}</h3><p>${bi(g.example)}</p>` : ""}
        ${related.length ? `
          <h3>${esc(txc(ui.dataRelatedCountries))}</h3>
          <div class="reading-related">
            ${related.map((a) => `<button type="button" class="country-chip" data-modal-action="article-open" data-article-id="${a.id}">${esc(txc(a.title))}</button>`).join("")}
          </div>
        ` : ""}
        <div class="reading-actions">
          <button type="button" class="btn btn-primary" data-modal-action="term-quiz" data-term-id="${g.id}">
            ${esc(txc(ui.dataPractice))}
          </button>
          <button type="button" class="btn btn-ghost" data-modal-action="ask-agent" data-prompt="${esc(state.lang === "en" ? `Explain ${g.term} in a business context` : `请解释 ${g.term} 在商务语境中的含义`)}">
            ${esc(txc(ui.dataAskAgent))}
          </button>
        </div>
      </article>
    `;
    openModal(html, { type: "term", id: g.id }, opts);
  }

  function openExtraWord(id, opts) {
    const w = EXTRA_WORDS.find((entry) => entry.id === id);
    if (!w) return;
    const related = articles.filter((a) => a.terms.includes(w.id)).slice(0, 3);
    const html = `
      <article class="reading">
        <div class="reading-meta">
          <span>${esc(state.lang === "en" ? "Business word" : "商务基础词")}</span>
          <span>WORD</span>
        </div>
        <h2>${esc(w.en)}</h2>
        <p class="reading-en">${esc(w.zh)}</p>
        <p>${bi(w.def)}</p>
        ${related.length ? `
          <h3>${esc(txc(ui.dataRelatedCountries))}</h3>
          <div class="reading-related">
            ${related.map((a) => `<button type="button" class="country-chip" data-modal-action="article-open" data-article-id="${a.id}">${esc(txc(a.title))}</button>`).join("")}
          </div>
        ` : ""}
        <div class="reading-actions">
          <button type="button" class="btn btn-ghost" data-modal-action="ask-agent" data-prompt="${esc(state.lang === "en" ? `Explain ${w.en} in a business context` : `请解释 ${w.en} 在商务语境中的含义`)}">
            ${esc(txc(ui.dataAskAgent))}
          </button>
        </div>
      </article>
    `;
    openModal(html, { type: "extra", id: w.id }, opts);
  }

  function startTermQuiz(termId) {
    const g = termById[termId] || EXTRA_WORDS.find((w) => w.id === termId);
    if (!g) return;
    const words = [g.term || g.en, g.zh].filter(Boolean);
    let pool = quizBank.filter((q) => words.some((word) => `${plain(q.q)} ${plain(q.explain)}`.includes(word)));
    if (!pool.length) pool = quizBank;
    const list = shuffle(pool).slice(0, Math.min(5, pool.length));
    closeModal();
    startQuizQuestions(list, {
      type: "term",
      country: "all",
      amount: "5",
      generated: true,
      sourceList: list
    });
  }

  function findTermByText(text) {
    const clean = String(text || "")
      .replace(/\s+/g, " ")
      .replace(/^[^\w\u3400-\u9fff]+|[^\w\u3400-\u9fff]+$/g, "")
      .trim();
    if (!clean || clean.length > 40) return null;
    const low = clean.toLowerCase();

    const direct = glossary.find((g) => g.term.toLowerCase() === low || g.zh === clean);
    if (direct) return direct;

    const singular = low.replace(/(ies|es|s)$/, "");
    const plural = glossary.find((g) => g.term.toLowerCase() === singular);
    if (plural) return plural;

    if (/[\u3400-\u9fff]/.test(clean)) {
      return glossary.find((g) => g.zh.includes(clean) || clean.includes(g.zh)) || null;
    }
    return null;
  }

  function findExtraWord(text) {
    const clean = String(text || "")
      .replace(/\s+/g, " ")
      .replace(/^[^\w\u3400-\u9fff]+|[^\w\u3400-\u9fff]+$/g, "")
      .trim();
    if (!clean || clean.length > 40) return null;
    const low = clean.toLowerCase();
    const singular = low.replace(/(ies|es|s)$/, "");
    return EXTRA_WORDS.find((w) => (
      w.en.toLowerCase() === low ||
      w.en.toLowerCase() === singular ||
      w.zh === clean
    )) || null;
  }

  /* ---------- term tooltip / selection dictionary ---------- */
  let tooltipTimer = null;

  function showTermTooltip(id, anchor) {
    const tip = $("#termTooltip");
    const g = termById[id];
    if (!tip || !g) return;
    clearTimeout(tooltipTimer);
    tip.innerHTML = `
      <strong>${esc(g.term)}</strong>
      <span class="tt-zh">${esc(g.zh)}</span>
      <span class="tt-def">${esc(txc(g.def))}</span>
      ${g.example ? `<span class="tt-example">${esc(txc(g.example))}</span>` : ""}
    `;
    tip.hidden = false;

    const rect = anchor.getBoundingClientRect();
    const width = tip.offsetWidth;
    const height = tip.offsetHeight;
    const left = clamp(rect.left + rect.width / 2 - width / 2, 12, window.innerWidth - width - 12);
    let top = rect.top - height - 10;
    if (top < 12) top = rect.bottom + 10;
    tip.style.left = `${left}px`;
    tip.style.top = `${top}px`;
  }

  function hideTermTooltip() {
    const tip = $("#termTooltip");
    if (tip) tip.hidden = true;
  }

  function hideSelectionButton() {
    const button = $("#selectionButton");
    if (button) button.hidden = true;
  }

  function hideSelectionCard() {
    const card = $("#selectionCard");
    if (card) card.hidden = true;
  }

  function hideSelection() {
    hideSelectionButton();
    hideSelectionCard();
    state.selection = null;
  }

  function hideFloating() {
    hideTermTooltip();
    hideSelectionButton();
  }

  function placeFloating(el, rect) {
    const width = el.offsetWidth;
    const height = el.offsetHeight;
    const left = clamp(rect.left + rect.width / 2 - width / 2, 12, window.innerWidth - width - 12);
    let top = rect.bottom + 10;
    if (top + height > window.innerHeight - 12) top = Math.max(12, rect.top - height - 10);
    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
  }

  function handleSelection() {
    const button = $("#selectionButton");
    if (!button) return;
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) {
      button.hidden = true;
      return;
    }
    const text = selection.toString().replace(/\s+/g, " ").trim();
    if (!text || text.length > 60) {
      button.hidden = true;
      return;
    }
    const rect = selection.getRangeAt(0).getBoundingClientRect();
    if (!rect.width && !rect.height) {
      button.hidden = true;
      return;
    }

    state.selection = {
      text,
      rect: { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom, width: rect.width, height: rect.height },
      lookup: null
    };

    button.style.left = `${clamp(rect.left + rect.width / 2 - 17, 8, window.innerWidth - 42)}px`;
    button.style.top = `${clamp(rect.top - 42, 8, window.innerHeight - 42)}px`;
    button.hidden = false;
    hideSelectionCard();
  }

  function showSelectionCard() {
    if (!state.selection) return;
    const card = $("#selectionCard");
    if (!card) return;

    const text = state.selection.text;
    const glossaryHit = findTermByText(text);
    const extraHit = glossaryHit ? null : findExtraWord(text);
    state.selection.lookup = glossaryHit ? { kind: "term", item: glossaryHit } : extraHit ? { kind: "extra", item: extraHit } : { kind: "none" };

    const askPrompt = state.lang === "en"
      ? `Explain “${text}” in a business English context`
      : `请解释“${text}”在商务英语中的含义`;

    if (glossaryHit) {
      const g = glossaryHit;
      card.innerHTML = `
        <div class="selection-card-head">
          <div>
            <strong>${esc(g.term)}</strong>
            <div class="sc-zh">${esc(g.zh)}</div>
          </div>
          <button type="button" data-sel-action="close" aria-label="${esc(txc(ui.closeLabel))}">×</button>
        </div>
        <p class="sc-def">${bi(g.def)}</p>
        <div class="sc-actions">
          <button type="button" class="btn btn-primary btn-sm" data-sel-action="open-term" data-term-id="${g.id}">${esc(txc(ui.navGlossary))}</button>
          <button type="button" class="btn btn-ghost btn-sm" data-sel-action="ask" data-prompt="${esc(askPrompt)}">${esc(txc(ui.toastAskAgent))}</button>
        </div>
      `;
    } else if (extraHit) {
      card.innerHTML = `
        <div class="selection-card-head">
          <div>
            <strong>${esc(extraHit.en)}</strong>
            <div class="sc-zh">${esc(extraHit.zh)}</div>
          </div>
          <button type="button" data-sel-action="close" aria-label="${esc(txc(ui.closeLabel))}">×</button>
        </div>
        <p class="sc-def">${bi(extraHit.def)}</p>
        <div class="sc-actions">
          <button type="button" class="btn btn-primary btn-sm" data-sel-action="open-extra" data-extra-id="${extraHit.id}">${esc(txc(ui.dataRead))}</button>
          <button type="button" class="btn btn-ghost btn-sm" data-sel-action="ask" data-prompt="${esc(askPrompt)}">${esc(txc(ui.toastAskAgent))}</button>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="selection-card-head">
          <div>
            <strong>${esc(text)}</strong>
            <div class="sc-zh">${esc(state.lang === "en" ? "Not in the local glossary" : "本地词典暂未收录")}</div>
          </div>
          <button type="button" data-sel-action="close" aria-label="${esc(txc(ui.closeLabel))}">×</button>
        </div>
        <p class="sc-def">${esc(txc(ui.toastNoTerm))}</p>
        <div class="sc-actions">
          <button type="button" class="btn btn-primary btn-sm" data-sel-action="ask" data-prompt="${esc(askPrompt)}">${esc(txc(ui.toastAskAgent))}</button>
        </div>
      `;
    }

    hideSelectionButton();
    card.hidden = false;
    placeFloating(card, state.selection.rect);
  }

  function askAgent(prompt) {
    if (!prompt) return;
    hideSelection();
    navigate("agent");
    const input = $("#chatInput");
    if (input) input.value = "";
    sendChat(prompt);
  }

  /* ---------- agent ---------- */
  function welcomeMessage() {
    return {
      role: "agent",
      blocks: [{ type: "welcome" }],
      meta: "local",
      at: Date.now()
    };
  }

  function initAgent() {
    state.agent.messages = [welcomeMessage()];
  }

  function loadSettings() {
    const saved = store.get("ea.agent.settings", null);
    if (!saved || typeof saved !== "object") return;
    const s = state.agent.settings;
    if (typeof saved.endpoint === "string" && saved.endpoint) s.endpoint = saved.endpoint;
    if (typeof saved.model === "string" && saved.model) s.model = saved.model;
    if (typeof saved.key === "string") s.key = saved.key;
    s.online = Boolean(saved.online);
  }

  function isOnline() {
    const s = state.agent.settings;
    return Boolean(s.online && s.endpoint && s.key.trim());
  }

  function renderAgentChrome() {
    setText("agentEyebrow", txc(ui.agentEyebrow));
    setHTML("agentTitle", bi(ui.agentTitle));
    setHTML("agentLead", bi(ui.agentLead));

    const badge = $("#agentModeBadge");
    if (badge) badge.textContent = txc(isOnline() ? ui.agentOnlineBadge : ui.agentLocalBadge);
    const dot = $("#agentStatusDot");
    if (dot) dot.classList.toggle("is-online", isOnline());

    const note = $("#agentLocalNote");
    if (note) note.innerHTML = bi(isOnline() ? AGENT_ONLINE_NOTE : ui.agentLocalNote);

    const quick = $("#agentQuick");
    if (quick) {
      quick.innerHTML = QUICK_PROMPTS.map((prompt, index) => `
        <button type="button" class="quick-btn" data-agent-quick="${index}">${esc(txc(prompt))}</button>
      `).join("");
    }

    setText("agentGenQuiz", txc(ui.agentGenQuiz));
    setText("agentGenQuizHint", txc(ui.agentGenQuizHint));
    const settingsBtn = $("#agentSettingsBtn span");
    if (settingsBtn) settingsBtn.textContent = txc(ui.agentSettings);
    setText("agentClear", txc(ui.agentClear));

    const input = $("#chatInput");
    if (input) input.placeholder = txc(ui.agentPlaceholder);
    const send = $("#chatSend span");
    if (send) send.textContent = txc(ui.agentSend);
  }

  function renderChat() {
    const log = $("#chatLog");
    if (!log) return;
    if (!state.agent.messages.length) state.agent.messages = [welcomeMessage()];

    const typing = state.agent.typing
      ? `<div class="msg">
          <span class="avatar">${esc(state.lang === "en" ? "EA" : "礼")}</span>
          <div>
            <div class="bubble"><span class="typing"><i></i><i></i><i></i></span></div>
            <div class="msg-meta">${esc(txc(ui.agentThinking))}</div>
          </div>
        </div>`
      : "";

    log.innerHTML = state.agent.messages.map(renderMessage).join("") + typing;
    scrollChat();
  }

  function renderMessage(msg) {
    const isUser = msg.role === "user";
    let body = "";
    if (msg.text != null) {
      body = esc(msg.text).replace(/\n/g, "<br>");
    } else {
      body = (msg.blocks || []).map(renderBlock).join("");
    }
    return `
      <div class="msg ${isUser ? "msg-user" : "msg-agent"}">
        <span class="avatar">${isUser ? esc(state.lang === "en" ? "YOU" : "你") : esc(state.lang === "en" ? "EA" : "礼")}</span>
        <div>
          <div class="bubble">${body}</div>
          <div class="msg-meta">${msg.meta === "online" ? "ONLINE" : "LOCAL"} · ${formatTime(msg.at)}</div>
        </div>
      </div>
    `;
  }

  function renderBlock(block) {
    if (!block) return "";
    switch (block.type) {
      case "welcome":
        return `
          <p>${biLinked(ui.agentWelcome)}</p>
          <div class="agent-links">
            ${QUICK_PROMPTS.map((prompt, index) => `<button type="button" class="agent-link" data-agent-quick="${index}">${esc(txc(prompt))}</button>`).join("")}
          </div>
        `;
      case "text":
        return block.text && typeof block.text === "object"
          ? `<p>${biLinked(block.text)}</p>`
          : `<p>${formatRich(block.text)}</p>`;
      case "note":
        return `<p class="hint">${esc(txc(block.text))}</p>`;
      case "list":
        return `
          ${block.title ? `<p><strong>${esc(txc(block.title))}</strong></p>` : ""}
          <ul class="agent-list">
            ${block.items.map((item) => `<li>${biLinked(item)}</li>`).join("")}
          </ul>
        `;
      case "links":
        return `<div class="agent-links">${renderLinks(block.links || [])}</div>`;
      case "articles":
        return (block.ids || []).map((id) => {
          const a = articleById[id];
          if (!a) return "";
          return `
            <div class="msg-card">
              <div class="msg-card-title">${esc(txc(a.title))}</div>
              <div class="msg-card-meta">${esc(txc(a.summary))}</div>
              <button type="button" class="btn btn-quiet btn-sm" data-agent-action="open-article" data-article-id="${a.id}">${esc(txc(ui.dataRead))}</button>
            </div>
          `;
        }).join("");
      case "term": {
        const g = block.id ? termById[block.id] : null;
        const data = g || block.data;
        if (!data) return "";
        const termId = g ? g.id : data.id;
        return `
          <div class="msg-card">
            <div class="msg-card-title">${esc(g ? g.term : data.en)} <span style="color:var(--muted);font-weight:400">· ${esc(data.zh)}</span></div>
            <div class="msg-card-meta">${esc(txc(data.def))}</div>
            <div class="agent-links">
              <button type="button" class="agent-link" data-agent-action="open-term" data-term-id="${esc(termId)}">${esc(txc(ui.glossaryTitle))}</button>
              <button type="button" class="agent-link" data-agent-action="ask" data-prompt="${esc(state.lang === "en" ? `Explain ${g ? g.term : data.en} in a business context` : `请解释 ${g ? g.term : data.en} 在商务语境中的含义`)}">${esc(txc(ui.toastAskAgent))}</button>
            </div>
          </div>
        `;
      }
      case "country": {
        const c = countryById[block.id];
        if (!c) return "";
        return `
          <div class="msg-card">
            <div class="msg-card-title">${esc(txc(c.name))} <span class="iso-badge" style="margin-left:4px">${c.iso}</span></div>
            <div class="msg-card-meta"><strong>${esc(txc(ui.atlasGreeting))}:</strong> ${esc(txc(c.greeting))}</div>
            <div class="msg-card-meta"><strong>${esc(txc(ui.atlasTaboo))}:</strong> ${esc(txc(c.taboo))}</div>
            <div class="msg-card-meta"><strong>${esc(txc(ui.atlasNegotiation))}:</strong> ${esc(txc(c.negotiation))}</div>
            <div class="agent-links">
              <button type="button" class="agent-link" data-agent-action="nav-atlas" data-country-id="${c.id}">${esc(txc(ui.navAtlas))}</button>
              <button type="button" class="agent-link" data-agent-action="quiz-country" data-country-id="${c.id}">${esc(txc(ui.atlasQuizBtn))}</button>
            </div>
          </div>
        `;
      }
      case "compare": {
        const a = countryById[block.a];
        const b = countryById[block.b];
        if (!a || !b) return "";
        return `
          <div class="msg-card">
            <div class="compare-grid">
              ${[a, b].map((c) => `
                <div>
                  <div class="msg-card-title">${esc(txc(c.name))}</div>
                  <div class="msg-card-meta"><strong>${esc(txc(ui.atlasGreeting))}:</strong> ${esc(txc(c.greeting))}</div>
                  <div class="msg-card-meta"><strong>${esc(txc(ui.atlasTaboo))}:</strong> ${esc(txc(c.taboo))}</div>
                  <div class="msg-card-meta"><strong>${esc(txc(ui.atlasNegotiation))}:</strong> ${esc(txc(c.negotiation))}</div>
                </div>
              `).join("")}
            </div>
            <div class="agent-links">
              <button type="button" class="agent-link" data-agent-action="nav-atlas" data-country-id="${a.id}">${esc(txc(a.name))}</button>
              <button type="button" class="agent-link" data-agent-action="nav-atlas" data-country-id="${b.id}">${esc(txc(b.name))}</button>
            </div>
          </div>
        `;
      }
      case "quiz": {
        const list = state.agent.quizSets[block.key] || [];
        if (!list.length) return "";
        return `
          <div class="msg-card">
            <div class="msg-card-title">${esc(state.lang === "en" ? "Situational quiz" : "情境测验")} · ${list.length} ${esc(state.lang === "en" ? "items" : "题")}</div>
            <div class="msg-card-meta">${esc(txc(block.meta || t("来自本地题库", "From the local bank")))}</div>
            <button type="button" class="btn btn-primary btn-sm" data-agent-action="start-quiz" data-quiz-key="${esc(block.key)}">${esc(state.lang === "en" ? "Start" : "开始作答")}</button>
          </div>
        `;
      }
      default:
        return "";
    }
  }

  function renderLinks(links) {
    return links.map((link) => {
      if (link.termId) {
        return `<button type="button" class="agent-link" data-agent-action="open-term" data-term-id="${esc(link.termId)}">${esc(txc(link.label))}</button>`;
      }
      if (link.countryId) {
        return `<button type="button" class="agent-link" data-agent-action="nav-atlas" data-country-id="${esc(link.countryId)}">${esc(txc(link.label))}</button>`;
      }
      if (link.prompt) {
        return `<button type="button" class="agent-link" data-agent-prompt="${esc(txc(link.prompt))}">${esc(txc(link.label))}</button>`;
      }
      if (link.view) {
        return `<button type="button" class="agent-link" data-nav="${esc(link.view)}">${esc(txc(link.label))}</button>`;
      }
      return "";
    }).join("");
  }

  function formatRich(text) {
    const src = String(text || "").trim();
    if (!src) return "";
    return src.split(/\n{2,}/).map((block) => {
      const lines = block.split(/\n/);
      if (lines.every((line) => !line.trim() || /^\s*[-*•]\s+/.test(line))) {
        const items = lines
          .filter((line) => line.trim())
          .map((line) => `<li>${inlineMarkdown(line.replace(/^\s*[-*•]\s+/, ""))}</li>`)
          .join("");
        return `<ul class="agent-list">${items}</ul>`;
      }
      return `<p>${inlineMarkdown(block)}</p>`;
    }).join("");
  }

  function inlineMarkdown(text) {
    let out = esc(text);
    out = out.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
    out = out.replace(/\n/g, "<br>");
    return out;
  }

  function scrollChat() {
    const log = $("#chatLog");
    if (!log) return;
    requestAnimationFrame(() => { log.scrollTop = log.scrollHeight; });
  }

  function addMessage(message) {
    state.agent.messages.push(Object.assign({ at: Date.now() }, message));
  }

  function siteContext() {
    const lines = ["COUNTRIES:"];
    countries.forEach((c) => {
      lines.push(`- ${c.name.en} (${c.iso}): greeting ${c.greeting.en}; cards ${c.card.en}; taboo ${c.taboo.en}; negotiation ${c.negotiation.en}`);
    });
    lines.push("GLOSSARY:");
    glossary.forEach((g) => lines.push(`- ${g.term} (${g.zh}): ${g.def.en}`));
    lines.push("ARTICLES:");
    articles.forEach((a) => lines.push(`- ${a.title.en}: ${a.summary.en}`));
    return lines.join("\n").slice(0, 18000);
  }

  async function callOnline(messages, options) {
    const s = state.agent.settings;
    if (!s.endpoint || !s.key.trim()) throw new Error("Missing endpoint or key");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 45000);
    try {
      const response = await fetch(s.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${s.key.trim()}`
        },
        body: JSON.stringify({
          model: s.model || "gpt-4o-mini",
          messages,
          temperature: options && typeof options.temperature === "number" ? options.temperature : 0.5
        }),
        signal: controller.signal
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      const content = data && data.choices && data.choices[0] &&
        data.choices[0].message && data.choices[0].message.content;
      if (!content || !String(content).trim()) throw new Error("Empty response");
      return String(content).trim();
    } finally {
      clearTimeout(timer);
    }
  }

  function tokenizeForSearch(query) {
    const raw = String(query || "").toLowerCase();
    const latin = raw.match(/[a-z][a-z-]{2,}/g) || [];
    const cjkRuns = raw.match(/[\u3400-\u9fff]{2,}/g) || [];
    const grams = [];
    cjkRuns.forEach((run) => {
      if (run.length <= 4) grams.push(run);
      else for (let i = 0; i < run.length - 1; i += 1) grams.push(run.slice(i, i + 2));
    });
    const stop = new Set([
      "the", "and", "for", "what", "how", "why", "with", "about", "please", "can", "you", "this", "that",
      "我", "的", "了", "吗", "呢", "是", "在", "有", "和", "与", "请", "帮", "可以", "什么", "怎么", "如何", "一下"
    ]);
    return unique(latin.concat(grams)).filter((token) => token.length > 1 && !stop.has(token));
  }

  function searchContent(query) {
    const raw = String(query || "").toLowerCase();
    const tokens = tokenizeForSearch(query);
    const score = (value, weight) => {
      const text = plain(value).toLowerCase();
      if (!text) return 0;
      let total = 0;
      if (raw.length > 1 && text.includes(raw)) total += 4;
      tokens.forEach((token) => { if (text.includes(token)) total += 1; });
      return total * weight;
    };

    const articleHits = articles.map((a) => ({
      item: a,
      score: score(a.title, 3) +
        score(a.summary, 2) +
        a.body.reduce((sum, p) => sum + score(p, 1), 0) +
        a.tags.reduce((sum, tag) => sum + score(tag, 1), 0)
    })).filter((hit) => hit.score > 0).sort((a, b) => b.score - a.score).slice(0, 3).map((hit) => hit.item);

    const countryHits = countries.map((c) => ({
      item: c,
      score: score(c.name, 4) + score(c.region, 1) + score(c.greeting, 1) +
        score(c.card, 1) + score(c.taboo, 1) + score(c.negotiation, 1)
    })).filter((hit) => hit.score > 0).sort((a, b) => b.score - a.score).slice(0, 3).map((hit) => hit.item);

    const termHits = glossary.map((g) => ({
      item: g,
      score: score(g.term, 4) + score(g.zh, 3) + score(g.def, 1)
    })).filter((hit) => hit.score > 0).sort((a, b) => b.score - a.score).slice(0, 4).map((hit) => hit.item);

    return {
      articles: articleHits,
      countries: countryHits,
      terms: termHits,
      total: articleHits.length + countryHits.length + termHits.length
    };
  }

  function aliasMatch(raw, alias) {
    if (/^[a-z0-9 .&'-]+$/i.test(alias)) {
      return new RegExp(`(^|[^a-z0-9])${escapeRegExp(alias)}([^a-z0-9]|$)`, "i").test(raw);
    }
    return raw.includes(alias);
  }

  function findCountriesInText(text) {
    const raw = String(text || "");
    const ids = new Set();
    countries.forEach((c) => {
      const aliases = ALIASES[c.id] || [];
      if (aliases.some((alias) => aliasMatch(raw, alias))) ids.add(c.id);
    });
    PAIR_ALIASES.forEach(([alias, list]) => {
      if (raw.includes(alias)) list.forEach((id) => ids.add(id));
    });
    return countries.filter((c) => ids.has(c.id));
  }

  function findCountry(text) {
    return findCountriesInText(text)[0] || null;
  }

  function findTermInText(text) {
    const raw = String(text || "");
    const lower = raw.toLowerCase();
    const ordered = glossary.slice().sort((a, b) => b.term.length - a.term.length);
    for (const g of ordered) {
      const term = g.term.toLowerCase();
      if (/^[a-z]/.test(term)) {
        if (new RegExp(`\\b${escapeRegExp(term)}\\b`, "i").test(raw)) return { kind: "glossary", item: g };
      } else if (lower.includes(term) || raw.includes(g.zh)) {
        return { kind: "glossary", item: g };
      }
      if (raw.includes(g.zh)) return { kind: "glossary", item: g };
    }
    const orderedExtra = EXTRA_WORDS.slice().sort((a, b) => b.en.length - a.en.length);
    for (const w of orderedExtra) {
      const term = w.en.toLowerCase();
      if (new RegExp(`\\b${escapeRegExp(term)}\\b`, "i").test(raw) || raw.includes(w.zh)) {
        return { kind: "extra", item: w };
      }
    }
    return null;
  }

  function detectQuizType(text) {
    const raw = String(text || "");
    if (/多选|multiple|multi/i.test(raw)) return "multi";
    if (/判断|true.?false|\btf\b/i.test(raw)) return "tf";
    if (/单选|single/i.test(raw)) return "single";
    return "all";
  }

  function detectAmount(text) {
    const raw = String(text || "");
    if (/全部|所有|all/i.test(raw)) return "all";
    const match = raw.match(/\b(5|10|15|20)\b/);
    return match ? match[1] : "5";
  }

  function checklistBlock(country) {
    const items = country ? [
      t(`问候：${country.greeting.zh}`, `Greeting: ${country.greeting.en}`),
      t(`名片与称呼：${country.card.zh}`, `Cards and address: ${country.card.en}`),
      t(`禁忌：${country.taboo.zh}`, `Taboo: ${country.taboo.en}`),
      t(`谈判：${country.negotiation.zh}`, `Negotiation: ${country.negotiation.en}`),
      t("把关键条款与会后行动项写成书面确认。", "Confirm key terms and action items in writing after the meeting.")
    ] : [
      t("确认对方常用的称呼、职级与名片语言。", "Confirm forms of address, titles, and the card language."),
      t("查清当地宗教节日、饮食禁忌与饮酒规范。", "Check religious holidays, dietary rules, and alcohol norms."),
      t("准备一页纸的议题、底线与替代方案。", "Prepare a one-page agenda, walk-away points, and alternatives."),
      t("把时间、地点与到场方式提前 24 小时再确认一次。", "Reconfirm time, place, and arrival arrangements 24 hours ahead.")
    ];
    return {
      type: "list",
      title: t("出差前清单", "Pre-trip checklist"),
      items
    };
  }

  function localReply(text) {
    const raw = String(text || "").trim();
    const msg = { role: "agent", blocks: [], meta: "local", at: Date.now() };
    if (!raw) return msg;

    const country = findCountry(raw);
    const quizIntent = /测验|出题|题目|做题|测一测|quiz|test|questions?/i.test(raw);
    const checklistIntent = /出差|准备|清单|checklist|prepare|trip|travel/i.test(raw);

    if (quizIntent) {
      const type = detectQuizType(raw);
      const amount = detectAmount(raw);
      let pool = quizBank.filter((q) => (
        (type === "all" || q.type === type) &&
        (!country || q.country === country.id)
      ));
      if (!pool.length) pool = quizBank;
      const count = amount === "all" ? pool.length : Math.min(Number(amount) || 5, pool.length);
      const list = shuffle(pool).slice(0, count);
      const key = `set-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      state.agent.quizSets[key] = list;
      msg.blocks.push({
        type: "text",
        text: t(
          `我从本地题库抽了 ${list.length} 道${country ? country.name.zh + "相关" : ""}题。作答后会立即显示对错和解析。`,
          `I drew ${list.length} ${country ? country.name.en + "-related " : ""}questions from the local bank. You will see the result and explanation immediately.`
        )
      });
      msg.blocks.push({
        type: "quiz",
        key,
        meta: t("随机抽取 · 覆盖判断题、单选题与多选题", "Random draw · true/false, single, and multiple choice")
      });
      return msg;
    }

    const compareHits = findCountriesInText(raw);
    if (compareHits.length >= 2 && /比较|对比|compare|vs|区别|差异|和|与|and/i.test(raw)) {
      msg.blocks.push({
        type: "text",
        text: t(
          `下面从问候、禁忌与谈判风格三个方面对比 ${compareHits[0].name.zh} 与 ${compareHits[1].name.zh}。具体场合仍要结合对方的组织文化判断。`,
          `Here is a comparison of ${compareHits[0].name.en} and ${compareHits[1].name.en} across greetings, taboos, and negotiation style. Read it alongside the other side's organisational culture.`
        )
      });
      msg.blocks.push({ type: "compare", a: compareHits[0].id, b: compareHits[1].id });
      return msg;
    }

    const termHit = findTermInText(raw);
    if (termHit) {
      const label = termHit.kind === "glossary" ? termHit.item.zh : termHit.item.zh;
      msg.blocks.push({
        type: "text",
        text: t(
          `我理解为你在问「${label}」。下面是本站词条的释义。`,
          `I read that as a question about “${termHit.kind === "glossary" ? termHit.item.term : termHit.item.en}”. Here is the site entry.`
        )
      });
      if (termHit.kind === "glossary") msg.blocks.push({ type: "term", id: termHit.item.id });
      else msg.blocks.push({ type: "term", data: termHit.item });
      return msg;
    }

    if (country) {
      msg.blocks.push({
        type: "text",
        text: t(
          `关于${country.name.zh}，这是本站整理的关键要点。`,
          `Here are the key points for ${country.name.en} from this site.`
        )
      });
      msg.blocks.push({ type: "country", id: country.id });
      if (checklistIntent) msg.blocks.push(checklistBlock(country));
      return msg;
    }

    if (checklistIntent) {
      msg.blocks.push({
        type: "text",
        text: t(
          "如果还没有确定目的地，可以先按这份通用清单准备；告诉我国家后，我会补上当地具体的问候与禁忌。",
          "If the destination is not fixed yet, start with this general checklist. Tell me the country and I will add local greetings and taboos."
        )
      });
      msg.blocks.push(checklistBlock(null));
      msg.blocks.push({
        type: "links",
        links: [
          { label: ui.navAtlas, view: "atlas" },
          { label: ui.navQuiz, view: "quiz" }
        ]
      });
      return msg;
    }

    const results = searchContent(raw);
    if (results.total) {
      msg.blocks.push({
        type: "text",
        text: t(
          `我在本站找到 ${results.total} 条相关内容，先列出最接近的：`,
          `I found ${results.total} related items on the site. Here are the closest:`
        )
      });
      if (results.articles.length) msg.blocks.push({ type: "articles", ids: results.articles.map((a) => a.id) });
      if (results.terms.length) {
        msg.blocks.push({
          type: "links",
          links: results.terms.map((g) => ({
            label: t(`${g.term} · ${g.zh}`, g.term),
            termId: g.id
          }))
        });
      }
      if (results.countries.length) {
        msg.blocks.push({
          type: "links",
          links: results.countries.map((c) => ({ label: c.name, countryId: c.id }))
        });
      }
      return msg;
    }

    msg.blocks.push({
      type: "text",
      text: t(
        "我暂时没有在本地知识库里找到直接答案。你可以换一个国家、术语或主题；也可以在设置中启用在线模型，再问更开放的问题。",
        "I could not find a direct answer in the local knowledge base. Try a country, term, or topic — or enable the online model in settings for more open questions."
      )
    });
    msg.blocks.push({
      type: "links",
      links: [
        { label: ui.navAtlas, view: "atlas" },
        { label: ui.navQuiz, view: "quiz" },
        { label: ui.navGlossary, view: "glossary" }
      ]
    });
    return msg;
  }

  async function sendChat(text) {
    const clean = String(text || "").trim();
    if (!clean || state.agent.busy) return;
    addMessage({ role: "user", text: clean });
    state.agent.busy = true;
    state.agent.typing = true;
    renderChat();

    try {
      if (isOnline()) {
        try {
          const system = state.lang === "en"
            ? "You are a bilingual cross-cultural business etiquette assistant embedded in a static learning site. Answer in English. Be practical, concise, and non-judgmental. Use the site context when relevant; if a claim is uncertain, say so. Do not invent statistics."
            : state.lang === "both"
              ? "You are a bilingual cross-cultural business etiquette assistant embedded in a static learning site. Answer in Chinese and English. Be practical, concise, and non-judgmental. Use the site context when relevant; if a claim is uncertain, say so. Do not invent statistics."
              : "You are a bilingual cross-cultural business etiquette assistant embedded in a static learning site. Answer in Chinese. Be practical, concise, and non-judgmental. Use the site context when relevant; if a claim is uncertain, say so. Do not invent statistics.";
          const content = await callOnline([
            { role: "system", content: `${system}\n\nSITE CONTEXT:\n${siteContext()}` },
            { role: "user", content: clean }
          ], { temperature: 0.5 });
          addMessage({ role: "agent", blocks: [{ type: "text", text: content }], meta: "online" });
        } catch (error) {
          const reply = localReply(clean);
          reply.blocks.unshift({ type: "note", text: ui.agentError });
          addMessage(reply);
        }
      } else {
        await delay(380 + Math.random() * 220);
        addMessage(localReply(clean));
      }
    } finally {
      state.agent.busy = false;
      state.agent.typing = false;
      renderChat();
    }
  }

  function parseAiQuestions(text) {
    let raw = String(text || "").trim();
    const start = raw.indexOf("[");
    const end = raw.lastIndexOf("]");
    if (start >= 0 && end > start) raw = raw.slice(start, end + 1);

    let list;
    try {
      list = JSON.parse(raw);
    } catch (error) {
      return [];
    }
    if (!Array.isArray(list)) return [];

    const pair = (value) => {
      if (value == null) return t("", "");
      if (typeof value === "string") return t(value, value);
      if (typeof value === "object") {
        return t(String(value.zh || value.en || ""), String(value.en || value.zh || ""));
      }
      return t(String(value), String(value));
    };

    return list.map((item, index) => {
      if (!item || typeof item !== "object") return null;
      const q = pair(item.q);
      if (!q.zh && !q.en) return null;

      let options = Array.isArray(item.options) ? item.options.map(pair).filter((o) => o.zh || o.en) : [];
      if (options.length < 2) return null;
      options = options.slice(0, 6);

      let type = ["tf", "single", "multi"].includes(item.type) ? item.type : "single";
      if (type === "tf" && options.length !== 2) type = "single";

      let answer = Array.isArray(item.answer) ? item.answer.map(Number) : [];
      if (typeof item.answer === "number") answer = [Number(item.answer)];
      answer = unique(answer.filter((n) => Number.isInteger(n) && n >= 0 && n < options.length)).sort((a, b) => a - b);
      if (!answer.length) return null;
      if (type !== "multi" && answer.length > 1) answer = [answer[0]];

      const countryCode = String(item.country || "").toUpperCase();
      const country = countryById[countryCode] ? countryCode : "CN";
      const explain = pair(item.explain || t("AI-generated question.", "AI-generated question."));

      return {
        id: `ai-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 6)}`,
        country,
        type,
        q,
        options,
        answer,
        explain
      };
    }).filter(Boolean);
  }

  async function generateAiQuiz() {
    if (state.agent.busy) return;
    navigate("agent");
    addMessage({ role: "user", blocks: [{ type: "text", text: ui.agentGenQuiz }] });
    state.agent.busy = true;
    state.agent.typing = true;
    renderChat();

    try {
      if (isOnline()) {
        try {
          const prompt = "Create exactly 5 cross-cultural business etiquette questions. Return ONLY a valid JSON array, with no markdown and no commentary. Each object must have: country (ISO-2 code from CN, JP, KR, SG, TH, IN, AE, SA, DE, FR, GB, US, BR), type (\"tf\", \"single\", or \"multi\"), q ({\"zh\":\"...\",\"en\":\"...\"}), options (an array of 2-4 objects with zh and en strings), answer (an array of zero-based option indices), explain ({\"zh\":\"...\",\"en\":\"...\"}). For tf, use exactly two options. Questions should be practical and non-stereotyped.";
          const content = await callOnline([
            { role: "system", content: "You write validated business-etiquette quiz JSON." },
            { role: "user", content: prompt }
          ], { temperature: 0.9 });
          const list = parseAiQuestions(content);
          if (!list.length) throw new Error("No valid questions");
          const key = `ai-set-${Date.now()}`;
          state.agent.quizSets[key] = list;
          addMessage({
            role: "agent",
            meta: "online",
            blocks: [
              { type: "text", text: t("在线模型生成了一组新题。答案与解析由模型产出，建议对照本站知识库核对。", "The online model generated a new set. Check its answers against the site knowledge base.") },
              { type: "quiz", key, meta: t("在线模型生成", "Generated by the online model") }
            ]
          });
        } catch (error) {
          const list = shuffle(quizBank).slice(0, 5);
          const key = `local-set-${Date.now()}`;
          state.agent.quizSets[key] = list;
          addMessage({
            role: "agent",
            blocks: [
              { type: "note", text: ui.agentError },
              { type: "text", text: t("已改为从本地题库生成 5 道题。", "Falling back to 5 questions from the local bank.") },
              { type: "quiz", key, meta: t("本地题库", "Local bank") }
            ],
            meta: "local"
          });
        }
      } else {
        await delay(360);
        const list = shuffle(quizBank).slice(0, 5);
        const key = `local-set-${Date.now()}`;
        state.agent.quizSets[key] = list;
        addMessage({
          role: "agent",
          blocks: [
            { type: "text", text: t("当前是本地模式，我从题库抽了 5 道题。启用在线模型后，可以生成全新的题目。", "Local mode: I drew 5 questions from the bank. Enable the online model to generate fresh items.") },
            { type: "quiz", key, meta: t("本地题库", "Local bank") }
          ],
          meta: "local"
        });
      }
    } finally {
      state.agent.busy = false;
      state.agent.typing = false;
      renderChat();
    }
  }

  function startQuizFromAgent(key) {
    const list = state.agent.quizSets[key];
    if (!list || !list.length) {
      toast(ui.quizEmpty);
      return;
    }
    startQuizQuestions(shuffle(list), {
      type: "agent",
      country: "all",
      amount: "all",
      generated: true,
      sourceList: list
    });
  }

  function openSettings() {
    const s = state.agent.settings;
    const html = `
      <div class="reading">
        <div class="reading-meta"><span>AGENT</span><span>${esc(txc(ui.agentSettings))}</span></div>
        <h2>${esc(txc(ui.agentSettingsTitle))}</h2>
        <p>${esc(txc(ui.agentSettingsLead))}</p>
        <form id="agentSettingsForm" class="form-grid" autocomplete="off">
          <label class="form-field">
            <span>${esc(txc(ui.agentEndpoint))}</span>
            <input name="endpoint" type="url" value="${esc(s.endpoint)}" placeholder="https://api.openai.com/v1/chat/completions">
          </label>
          <label class="form-field">
            <span>${esc(txc(ui.agentModel))}</span>
            <input name="model" type="text" value="${esc(s.model)}" placeholder="gpt-4o-mini">
          </label>
          <label class="form-field">
            <span>${esc(txc(ui.agentKey))}</span>
            <input name="key" type="password" value="${esc(s.key)}" placeholder="sk-...">
          </label>
          <label class="check-row">
            <input type="checkbox" name="online" ${s.online ? "checked" : ""}>
            <span>${esc(txc(ui.agentUseOnline))}</span>
          </label>
          <div class="form-note">${esc(txc(API_NOTE))}</div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">${esc(txc(ui.agentSave))}</button>
            <button type="button" class="btn btn-ghost" data-close-modal>${esc(txc(ui.agentClose))}</button>
          </div>
        </form>
      </div>
    `;
    openModal(html, { type: "settings" });
  }

  function saveSettings(form) {
    const data = new FormData(form);
    const next = {
      endpoint: String(data.get("endpoint") || "").trim(),
      model: String(data.get("model") || "").trim() || "gpt-4o-mini",
      key: String(data.get("key") || "").trim(),
      online: data.get("online") === "on"
    };
    state.agent.settings = next;
    const saved = store.set("ea.agent.settings", next);
    closeModal();
    renderAgentChrome();
    if (!saved) toast(ui.toastSaveFail);
    else if (next.online && !next.key) toast(t("已保存，但未填写 API Key，仍使用本地模式。", "Saved, but no API key entered; still using local mode."));
    else toast(ui.toastSaved);
  }

  function askFromCurrentPrompt(prompt) {
    sendChat(txc(prompt));
  }

  /* ---------- modal / toast ---------- */
  function openModal(html, meta, opts) {
    const root = $("#modalRoot");
    const body = $("#modalBody");
    if (!root || !body) return;
    if (root.hidden) state.lastFocus = document.activeElement;
    state.modal = meta || { type: "custom" };
    body.innerHTML = html;
    root.hidden = false;
    document.body.classList.add("modal-open");
    if (!opts || !opts.noFocus) {
      const focusTarget = $("#modalBody input, #modalBody select, #modalBody textarea, #modalBody button") || $(".modal-close");
      if (focusTarget) setTimeout(() => focusTarget.focus({ preventScroll: true }), 40);
    }
  }

  function closeModal() {
    const root = $("#modalRoot");
    const body = $("#modalBody");
    if (!root || root.hidden) return;
    root.hidden = true;
    document.body.classList.remove("modal-open");
    if (body) body.innerHTML = "";
    state.modal = null;
    const target = state.lastFocus;
    state.lastFocus = null;
    if (target && document.contains(target)) {
      try { target.focus({ preventScroll: true }); } catch (error) { /* ignore */ }
    }
  }

  function refreshModal() {
    const meta = state.modal;
    if (!meta || meta.type === "settings") return;
    if (meta.type === "article") openArticle(meta.id, { noFocus: true });
    else if (meta.type === "story") openStory(meta.id, { noFocus: true });
    else if (meta.type === "term") openTerm(meta.id, { noFocus: true });
    else if (meta.type === "extra") openExtraWord(meta.id, { noFocus: true });
  }

  let toastTimer = null;

  function toast(message) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = typeof message === "string" ? message : txc(message);
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 2800);
  }

  /* ---------- router ---------- */
  function navigate(view, opts) {
    const options = opts || {};
    if (!VIEWS.includes(view)) view = "home";
    state.view = view;

    VIEWS.forEach((name) => {
      const section = document.getElementById(`view-${name}`);
      if (section) section.hidden = name !== view;
    });

    $$(".nav-link").forEach((button) => {
      const active = button.dataset.nav === view;
      button.classList.toggle("is-active", active);
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });

    closeMobileNav();

    if (view === "home") renderHome();
    if (view === "atlas") renderAtlas();
    if (view === "quiz") {
      renderQuizChrome();
      renderQuiz();
    }
    if (view === "data") renderDataChrome();
    if (view === "glossary") renderGlossaryChrome();
    if (view === "agent") {
      renderAgentChrome();
      renderChat();
    }

    try {
      if (options.initial) history.replaceState({ view }, "", `#${view}`);
      else if (location.hash !== `#${view}`) history.pushState({ view }, "", `#${view}`);
    } catch (error) { /* file:// may block history */ }

    if (!options.keepScroll) {
      window.scrollTo({ top: 0, behavior: prefersReduced() ? "auto" : "smooth" });
    }

    if (!options.initial) {
      const mainEl = $("#main");
      if (mainEl) {
        try { mainEl.focus({ preventScroll: true }); } catch (error) { /* ignore */ }
      }
    }
  }

  function closeMobileNav() {
    const nav = $("#mobileNav");
    const toggle = $("#menuToggle");
    if (nav) nav.hidden = true;
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  /* ---------- event handling ---------- */
  function handleClick(event) {
    const target = event.target;

    const close = target.closest("[data-close-modal]");
    if (close) {
      event.preventDefault();
      closeModal();
      return;
    }

    const langButton = target.closest("[data-lang]");
    if (langButton) {
      setLanguage(langButton.dataset.lang);
      return;
    }

    if (target.closest("#menuToggle")) {
      const nav = $("#mobileNav");
      const toggle = $("#menuToggle");
      if (nav && toggle) {
        const open = nav.hidden;
        nav.hidden = !open;
        toggle.setAttribute("aria-expanded", String(open));
      }
      return;
    }

    if (target.closest("#briefingSwap")) {
      state.briefingIndex += 1;
      renderBriefing();
      return;
    }

    if (target.closest("#briefingStory")) {
      const button = target.closest("#briefingStory");
      openStory(button.dataset.country);
      return;
    }

    const nav = target.closest("[data-nav]");
    if (nav) {
      navigate(nav.dataset.nav);
      return;
    }

    const quizType = target.closest("#quizTypeControl [data-quiz-type]");
    if (quizType) {
      state.quiz.setup.type = quizType.dataset.quizType;
      syncQuizSetup();
      updateQuizCount();
      return;
    }

    const quizAmount = target.closest("#quizAmountControl [data-quiz-amount]");
    if (quizAmount) {
      state.quiz.setup.amount = quizAmount.dataset.quizAmount;
      syncQuizSetup();
      updateQuizCount();
      return;
    }

    if (target.closest("#quizStart")) {
      startQuiz(state.quiz.setup);
      return;
    }

    if (target.closest("#quizAgentBtn")) {
      const setup = state.quiz.setup;
      const c = setup.country === "all" ? null : countryById[setup.country];
      const typeLabel = txc({
        all: ui.quizTypeAll,
        tf: ui.quizTypeTf,
        single: ui.quizTypeSingle,
        multi: ui.quizTypeMulti
      }[setup.type] || ui.quizTypeAll);
      const amountLabel = setup.amount === "all" ? (state.lang === "en" ? "a full" : "一整套") : `${setup.amount} ${state.lang === "en" ? "item" : "题"}`;
      const prompt = state.lang === "en"
        ? `Build ${amountLabel} ${typeLabel} quiz${c ? ` about ${c.name.en}` : ""}.`
        : `帮我生成一套${amountLabel}${typeLabel}${c ? `关于${c.name.zh}` : ""}的测验。`;
      navigate("agent");
      sendChat(prompt);
      return;
    }

    const option = target.closest("#quizPlay [data-option]");
    if (option) {
      chooseOption(Number(option.dataset.option));
      return;
    }

    const quizAction = target.closest("[data-quiz-action]");
    if (quizAction) {
      const action = quizAction.dataset.quizAction;
      if (action === "submit") submitAnswer();
      else if (action === "next") nextQuestion();
      else if (action === "retry") retryQuiz();
      else if (action === "wrong") retryWrong();
      else if (action === "setup") {
        state.quiz.mode = "setup";
        renderQuiz();
      }
      return;
    }

    const dataFilter = target.closest("#dataFilters [data-cat]");
    if (dataFilter) {
      state.data.cat = dataFilter.dataset.cat;
      renderArticleFilters();
      renderArticles();
      return;
    }

    const glossaryFilter = target.closest("#glossaryFilters [data-cat]");
    if (glossaryFilter) {
      state.glossary.cat = glossaryFilter.dataset.cat;
      renderTermFilters();
      renderTerms();
      return;
    }

    const articleCard = target.closest("[data-article]");
    if (articleCard) {
      openArticle(articleCard.dataset.article);
      return;
    }

    const termCard = target.closest("[data-term-card]");
    if (termCard) {
      openTerm(termCard.dataset.termCard);
      return;
    }

    const countryChip = target.closest("#countryChips [data-country]");
    if (countryChip) {
      selectCountry(countryChip.dataset.country);
      return;
    }

    const geo = target.closest("#worldMap [data-iso]");
    if (geo) {
      handleGeo(geo.dataset.iso);
      return;
    }

    const countryAction = target.closest("#countryDetail [data-action]");
    if (countryAction) {
      const c = state.atlas.selected ? countryById[state.atlas.selected] : null;
      if (!c) return;
      if (countryAction.dataset.action === "story") openStory(c.id);
      if (countryAction.dataset.action === "country-quiz") {
        startQuiz({ type: "all", country: c.id, amount: "5" });
      }
      return;
    }

    const quick = target.closest("[data-agent-quick]");
    if (quick) {
      const prompt = QUICK_PROMPTS[Number(quick.dataset.agentQuick)];
      if (prompt) askFromCurrentPrompt(prompt);
      return;
    }

    const promptButton = target.closest("[data-agent-prompt]");
    if (promptButton) {
      sendChat(promptButton.dataset.agentPrompt);
      return;
    }

    if (target.closest("#agentGenQuiz")) {
      generateAiQuiz();
      return;
    }

    if (target.closest("#agentSettingsBtn")) {
      openSettings();
      return;
    }

    if (target.closest("#agentClear")) {
      state.agent.messages = [welcomeMessage()];
      state.agent.busy = false;
      state.agent.typing = false;
      renderChat();
      return;
    }

    const agentAction = target.closest("[data-agent-action]");
    if (agentAction) {
      const action = agentAction.dataset.agentAction;
      if (action === "start-quiz") startQuizFromAgent(agentAction.dataset.quizKey);
      else if (action === "open-term") openTerm(agentAction.dataset.termId);
      else if (action === "open-article") openArticle(agentAction.dataset.articleId);
      else if (action === "nav-atlas") {
        navigate("atlas");
        selectCountry(agentAction.dataset.countryId);
      } else if (action === "quiz-country") {
        const c = countryById[agentAction.dataset.countryId];
        if (c) startQuiz({ type: "all", country: c.id, amount: "5" });
      } else if (action === "ask") {
        sendChat(agentAction.dataset.prompt || "");
      }
      return;
    }

    const termOpen = target.closest("[data-term-open]");
    if (termOpen) {
      openTerm(termOpen.dataset.termOpen);
      return;
    }

    const atlasCountry = target.closest("[data-atlas-country]");
    if (atlasCountry) {
      navigate("atlas");
      selectCountry(atlasCountry.dataset.atlasCountry);
      return;
    }

    const modalAction = target.closest("#modalBody [data-modal-action]");
    if (modalAction) {
      const action = modalAction.dataset.modalAction;
      if (action === "article-quiz") startArticleQuiz(modalAction.dataset.articleId);
      else if (action === "term-quiz") startTermQuiz(modalAction.dataset.termId);
      else if (action === "country-quiz") {
        const c = countryById[modalAction.dataset.country];
        if (c) {
          closeModal();
          startQuiz({ type: "all", country: c.id, amount: "5" });
        }
      } else if (action === "ask-agent") {
        const prompt = modalAction.dataset.prompt;
        closeModal();
        navigate("agent");
        sendChat(prompt);
      } else if (action === "article-open") {
        openArticle(modalAction.dataset.articleId);
      }
      return;
    }

    const selAction = target.closest("#selectionCard [data-sel-action]");
    if (selAction) {
      const action = selAction.dataset.selAction;
      if (action === "close") hideSelection();
      else if (action === "open-term") {
        const id = selAction.dataset.termId;
        hideSelection();
        openTerm(id);
      } else if (action === "open-extra") {
        const id = selAction.dataset.extraId;
        hideSelection();
        openExtraWord(id);
      } else if (action === "ask") {
        const prompt = selAction.dataset.prompt;
        askAgent(prompt);
      }
      return;
    }

    if (target.closest("#selectionButton")) {
      if (!state.selection) return;
      showSelectionCard();
      return;
    }

    const term = target.closest("[data-term]");
    if (term) {
      const selection = window.getSelection();
      if (selection && selection.toString().trim()) return;
      hideSelection();
      openTerm(term.dataset.term);
      return;
    }

    if (!target.closest("#selectionCard, #selectionButton")) hideSelectionCard();
  }

  function handleInput(event) {
    const target = event.target;
    if (target.id === "dataSearch") {
      state.data.q = target.value;
      renderArticles();
    } else if (target.id === "glossarySearch") {
      state.glossary.q = target.value;
      renderTerms();
    } else if (target.id === "chatInput") {
      target.style.height = "auto";
      target.style.height = `${Math.min(target.scrollHeight, 120)}px`;
    }
  }

  function handleChange(event) {
    if (event.target.id === "quizCountry") {
      state.quiz.setup.country = event.target.value;
      updateQuizCount();
    }
  }

  function handleSubmit(event) {
    if (event.target.id === "chatForm") {
      event.preventDefault();
      const input = $("#chatInput");
      if (!input) return;
      const text = input.value.trim();
      if (!text) return;
      input.value = "";
      input.style.height = "auto";
      sendChat(text);
      return;
    }
    if (event.target.id === "agentSettingsForm") {
      event.preventDefault();
      saveSettings(event.target);
    }
  }

  function handleKeydown(event) {
    if (event.key === "Escape") {
      const modal = $("#modalRoot");
      if (modal && !modal.hidden) {
        closeModal();
        return;
      }
      hideSelection();
      hideTermTooltip();
      return;
    }

    const modal = $("#modalRoot");
    if (event.key === "Tab" && modal && !modal.hidden) {
      const focusables = $$("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])", modal)
        .filter((el) => !el.disabled && el.offsetParent !== null);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
      return;
    }

    if (event.target.id === "chatInput" && event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const form = $("#chatForm");
      if (form) form.requestSubmit();
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      const custom = event.target.closest("[data-nav]:not(button), [data-article], [data-term-card]");
      if (custom) {
        event.preventDefault();
        custom.click();
        return;
      }
      const geo = event.target.closest("#worldMap [data-iso]");
      if (geo) {
        event.preventDefault();
        handleGeo(geo.dataset.iso);
      }
    }
  }

  function handleMouseOver(event) {
    const term = event.target.closest("[data-term]");
    if (!term || term.closest("#termTooltip")) return;
    showTermTooltip(term.dataset.term, term);
  }

  function handleMouseOut(event) {
    const term = event.target.closest("[data-term]");
    if (!term) return;
    if (event.relatedTarget && term.contains(event.relatedTarget)) return;
    clearTimeout(tooltipTimer);
    tooltipTimer = setTimeout(hideTermTooltip, 40);
  }

  function handleFocusIn(event) {
    const term = event.target.closest("[data-term]");
    if (term) showTermTooltip(term.dataset.term, term);
  }

  function handleFocusOut(event) {
    const term = event.target.closest("[data-term]");
    if (term) hideTermTooltip();
  }

  function bindEvents() {
    document.addEventListener("click", handleClick);
    document.addEventListener("input", handleInput);
    document.addEventListener("change", handleChange);
    document.addEventListener("submit", handleSubmit);
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);
    document.addEventListener("mouseup", (event) => {
      if (event.target.closest("#selectionButton, #selectionCard, #modalRoot, #termTooltip")) return;
      if (event.target.closest("input, textarea, select")) return;
      setTimeout(handleSelection, 10);
    });
    document.addEventListener("mousedown", (event) => {
      if (event.target.closest("#selectionButton")) event.preventDefault();
    });
    window.addEventListener("scroll", hideFloating, true);
    window.addEventListener("resize", hideFloating);
    window.addEventListener("popstate", () => {
      const view = location.hash.replace("#", "");
      navigate(VIEWS.includes(view) ? view : "home", { initial: true, keepScroll: true });
    });
  }

  /* ---------- boot ---------- */
  function init() {
    buildTermIndex();
    const savedLang = store.get("ea.lang", "zh");
    state.lang = LANGS.includes(savedLang) ? savedLang : "zh";
    state.briefingIndex = 0;
    loadSettings();
    initAgent();
    bindEvents();
    applyLanguage();

    const hash = location.hash.replace("#", "");
    const start = VIEWS.includes(hash) ? hash : "home";
    navigate(start, { initial: true, keepScroll: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
