# 关公文化展

82-439 / 82-539 中文课合作项目。网站通过关公故事、双语阅读、庙会影像和同学作品介绍关公文化。

## 预览

在仓库目录运行 `python3 -m http.server 8000`，然后打开 [本地预览](http://localhost:8000)。网站使用静态 HTML、CSS 和少量 JavaScript。

## 更新内容

- `index.html` 是展览入口，`about.html` 是关公简介，`faith.html` 介绍信仰与庙会。
- `gallery.html` 收录照片。复制一个 `<figure class="photo-card">`，更新图片、替代文字和图注。请在图注或所在小节标明摄影者、地点和已知日期。
- `texts.html` 链接《三国演义》原文。把各关的占位条目替换为同学的作品或链接。依课程要求补入简体、英文、繁体、拼音和中英文练习，发布时补上译者署名。
- `works.html` 收录同学的视频、音乐、海报和游戏设计。游戏方案可以各选一张代表图，再链接到其 Drive 文件夹。用作品标题、作者和公开链接替换其他栏目的占位内容。大视频或音频可以链接到公开的播放页。
- `site.js` 是共用导航与页脚，`styles.css` 是共用样式。站内链接和图片用相对路径。

新增材料前，请核对署名和公开发布范围。外部作品链接可用无痕窗口验证。

## GitHub Pages

提交完成的版本后，在仓库的 **Settings → Pages** 中选择 **Deploy from a branch**，发布来源选 **main → /(root)**。仓库启用 Pages 后，每次推送到发布分支都会更新网站。 [GitHub Pages 设置说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
