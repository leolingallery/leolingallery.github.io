const pages = [
  ["index", "首页"],
  ["about", "关公简介"],
  ["gallery", "影像"],
  ["faith", "信仰与庙会"],
  ["texts", "原文与译文"],
  ["works", "同学作品"],
];

const header = document.querySelector("[data-site-header]");
const footer = document.querySelector("[data-site-footer]");
const activePage = document.body.dataset.page;

header.innerHTML = `
  <div class="wrap header-inner">
    <a class="brand" href="index.html">
      <span class="brand-mark" aria-hidden="true"><img src="assets/images/game-mark.webp" alt="" width="36" height="36"></span>
      <span>关公文化展</span>
    </a>
    <nav class="site-nav" aria-label="主要导航">
      ${pages.map(([page, label]) => `
        <a href="${page}.html"${page === activePage ? ' aria-current="page"' : ""}>${label}</a>
      `).join("")}
    </nav>
  </div>
`;

footer.innerHTML = `
  <div class="wrap footer-inner">
    <p><strong>关公文化展</strong><span>82-439 / 82-539 中文课合作项目</span></p>
    <a href="index.html">回到首页 <span aria-hidden="true">↗</span></a>
  </div>
`;
