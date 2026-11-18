const pages = [
  ["index", "首页"],
  ["literature", "文学"],
  ["faith", "信仰"],
  ["media", "媒体"],
  ["games", "游戏"],
];
const languages = ["en", "zh-Hans", "zh-Hant"];
const header = document.querySelector("[data-site-header]");
const footer = document.querySelector("[data-site-footer]");
const activePage = document.body.dataset.page;

header.innerHTML = `
  <div class="wrap header-inner">
    <a class="brand" href="index.html">
      <span class="brand-mark" aria-hidden="true"><img src="assets/images/game-mark.webp" alt="" width="36" height="36"></span>
      <span>关公文化展</span>
    </a>
    <label class="language-picker">
      <span>语言</span>
      <select id="site-language" aria-label="语言">
        <option value="en" lang="en">English</option>
        <option value="zh-Hans" lang="zh-Hans" selected>简体中文</option>
        <option value="zh-Hant" lang="zh-Hant">繁體中文</option>
      </select>
    </label>
    <nav class="site-nav" aria-label="主要导航">
      ${pages.map(([page, label]) => `<a href="${page}.html"${page === activePage ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
    </nav>
  </div>
`;
footer.innerHTML = `
  <div class="wrap footer-inner">
    <p><strong>关公文化展</strong><span>82-439 / 82-539 中文课合作项目</span></p>
    <a href="index.html">回到首页 <span aria-hidden="true">↗</span></a>
  </div>
`;

// Capture source text once so switching languages never translates a translation.
const catalog = window.siteTranslations || {};
const textNodes = [];
const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    return node.parentElement.closest("script, style, select") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  },
});
while (walker.nextNode()) {
  const node = walker.currentNode;
  const key = node.textContent.trim();
  if (catalog[key]) textNodes.push({ node, key, source: node.textContent });
}
const attributes = [];
document.querySelectorAll("[alt], [aria-label], [title], meta[name='description']").forEach(element => {
  for (const name of ["alt", "aria-label", "title", "content"]) {
    const key = element.getAttribute(name);
    if (catalog[key]) attributes.push({ element, name, key });
  }
});
const localLinks = [...document.querySelectorAll("a[href]")].filter(a => {
  const href = a.getAttribute("href");
  return href.endsWith(".html") || href.includes(".html#");
}).map(element => ({ element, href: element.getAttribute("href") }));
const selector = document.querySelector("#site-language");
function translate(key, language) {
  return language === "zh-Hans" ? key : catalog[key]?.[language] || key;
}
function applyLanguage(language) {
  if (!languages.includes(language)) language = "zh-Hans";
  document.documentElement.lang = language;
  selector.value = language;
  for (const { node, key, source } of textNodes) node.textContent = source.replace(key, () => translate(key, language));
  for (const { element, name, key } of attributes) element.setAttribute(name, translate(key, language));
  for (const { element, href } of localLinks) {
    const url = new URL(href, location.href);
    url.searchParams.set("lang", language);
    element.setAttribute("href", `${url.pathname.split("/").pop()}${url.search}${url.hash}`);
  }
  try { localStorage.setItem("guangong-language", language); } catch { /* Language also travels in page links. */ }
}
let initialLanguage = new URLSearchParams(location.search).get("lang");
if (!languages.includes(initialLanguage)) {
  try { initialLanguage = localStorage.getItem("guangong-language"); } catch { /* Use the default. */ }
}
applyLanguage(initialLanguage);
selector.addEventListener("change", () => {
  applyLanguage(selector.value);
  const url = new URL(location.href);
  url.searchParams.set("lang", selector.value);
  history.replaceState(null, "", url);
});
