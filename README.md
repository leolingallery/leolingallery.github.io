# 关公文化展

82-439 / 82-539 中文课合作项目。网站通过关公故事、双语阅读、庙会影像和同学作品介绍关公文化。

## 预览

在仓库目录运行 `python3 -m http.server 8000`，然后打开 [本地预览](http://localhost:8000)。网站使用静态 HTML、CSS 和少量 JavaScript，无需构建。

## 页面与内容

- `index.html`：首页，保留原有内容和布局。
- `literature.html`：文学，包括关公简介、史书与小说、文学视频、原文、翻译及诗歌项目。
- `faith.html`：信仰，包括关帝信仰介绍、庙会与绕境、信仰视频、宜兰田野记录及原影像页的全部照片。
- `media.html`：媒体，包括视频、动画、海报与艺术占位，以及现有歌词链接和署名。
- `games.html`：游戏，包括虞源正（Jack Yu）的五组东岭关游戏概念图和素材文件夹链接。
- `about.html`、`texts.html`、`gallery.html`、`works.html`：旧网址的兼容跳转。

`site.js` 提供共用导航、页脚与语言选择；`styles.css` 提供共用样式。导航包含五个大按钮。

## 语言

首次访问默认简体中文。右上角可以选择 English、简体中文、繁體中文，选择保存在浏览器中，也随站内页面链接的 `lang` 参数传递。网页文字、标题、图片替代文字及辅助标签均随语言切换。视频和外部资料保留原有语言。

`translations.js` 使用简体中文原文作为键，包含英文和繁体中文译文。新增或修改页面文字时，请同步更新翻译目录。

## 更新材料

新增照片时，请保留摄影者、地点、日期及图片替代文字。游戏概念图需保留作者和素材文件夹链接。视频采用 Google Drive 的 `/preview` 嵌入，并附原始播放页链接；播放取决于原文件的公开访问设置。发布新材料前，请核对署名和公开发布范围。

## GitHub Pages

在仓库的 **Settings → Pages** 中选择 **Deploy from a branch**，发布来源选 **main → /(root)**。推送到发布分支后更新网站。[GitHub Pages 设置说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
