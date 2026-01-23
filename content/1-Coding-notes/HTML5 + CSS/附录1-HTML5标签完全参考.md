# HTML5 标签完全参考

## 📖 目录

1. [文档结构标签](#文档结构标签)
2. [文本内容标签](#文本内容标签)
3. [表单标签](#表单标签)
4. [媒体标签](#媒体标签)
5. [列表标签](#列表标签)
6. [表格标签](#表格标签)
7. [语义化标签](#语义化标签)
8. [交互标签](#交互标签)
9. [元数据标签](#元数据标签)
10. [已废弃标签](#已废弃标签)

---

## 文档结构标签

### 基础结构

| 标签              | 说明               | 示例                  |
| ----------------- | ------------------ | --------------------- |
| `<!DOCTYPE html>` | HTML5 文档类型声明 | `<!DOCTYPE html>`     |
| `<html>`          | HTML 文档根元素    | `<html lang="zh-CN">` |
| `<head>`          | 文档头部（元数据） | `<head>...</head>`    |
| `<body>`          | 文档主体内容       | `<body>...</body>`    |

---

## 元数据标签（在 `<head>` 中使用）

| 标签         | 说明               | 示例                                       |
| ------------ | ------------------ | ------------------------------------------ |
| `<title>`    | 文档标题           | `<title>我的网站</title>`                  |
| `<meta>`     | 元数据信息         | `<meta charset="UTF-8">`                   |
| `<link>`     | 外部资源链接       | `<link rel="stylesheet" href="style.css">` |
| `<style>`    | 内联样式           | `<style>body { color: red; }</style>`      |
| `<script>`   | JavaScript 代码    | `<script src="app.js"></script>`           |
| `<base>`     | 基础 URL           | `<base href="https://example.com/">`       |
| `<noscript>` | 脚本不可用时的内容 | `<noscript>请启用 JavaScript</noscript>`   |

---

## 语义化标签（HTML5 新增）

### 页面结构

| 标签        | 说明             | 示例                                   |
| ----------- | ---------------- | -------------------------------------- |
| `<header>`  | 页面或区域的头部 | `<header><h1>网站标题</h1></header>`   |
| `<nav>`     | 导航链接区域     | `<nav><a href="/">首页</a></nav>`      |
| `<main>`    | 主要内容区域     | `<main><article>...</article></main>`  |
| `<article>` | 独立的文章内容   | `<article><h2>文章标题</h2></article>` |
| `<section>` | 文档的章节       | `<section><h2>章节标题</h2></section>` |
| `<aside>`   | 侧边栏内容       | `<aside><p>相关链接</p></aside>`       |
| `<footer>`  | 页面或区域的底部 | `<footer><p>版权信息</p></footer>`     |

**使用示例**：
```html
<body>
  <header>
    <h1>网站标题</h1>
    <nav>导航菜单</nav>
  </header>
  
  <main>
    <article>
      <h2>文章标题</h2>
      <p>文章内容...</p>
    </article>
    
    <aside>
      <h3>相关链接</h3>
    </aside>
  </main>
  
  <footer>
    <p>版权信息</p>
  </footer>
</body>
```

---

## 文本内容标签

### 标题标签

| 标签   | 说明                 | 示例                |
| ------ | -------------------- | ------------------- |
| `<h1>` | 一级标题（最重要）   | `<h1>主标题</h1>`   |
| `<h2>` | 二级标题             | `<h2>副标题</h2>`   |
| `<h3>` | 三级标题             | `<h3>章节标题</h3>` |
| `<h4>` | 四级标题             | `<h4>小节标题</h4>` |
| `<h5>` | 五级标题             | `<h5>小标题</h5>`   |
| `<h6>` | 六级标题（最不重要） | `<h6>最小标题</h6>` |

### 段落和文本

| 标签     | 说明                 | 示例                                  |
| -------- | -------------------- | ------------------------------------- |
| `<p>`    | 段落                 | `<p>这是一个段落</p>`                 |
| `<br>`   | 换行（自闭合）       | `<p>第一行<br>第二行</p>`             |
| `<hr>`   | 水平分隔线（自闭合） | `<hr>`                                |
| `<span>` | 行内文本容器         | `<span class="highlight">高亮</span>` |
| `<div>`  | 块级容器             | `<div class="container">内容</div>`   |

### 文本强调

| 标签       | 说明             | 示例                                               |
| ---------- | ---------------- | -------------------------------------------------- |
| `<strong>` | 重要文本（加粗） | `<strong>重要</strong>`                            |
| `<em>`     | 强调文本（斜体） | `<em>强调</em>`                                    |
| `<mark>`   | 标记文本（高亮） | `<mark>标记</mark>`                                |
| `<small>`  | 小号文本         | `<small>小字</small>`                              |
| `<sub>`    | 下标             | `H<sub>2</sub>O`                                   |
| `<sup>`    | 上标             | `x<sup>2</sup>`                                    |
| `<del>`    | 删除的文本       | `<del>删除</del>`                                  |
| `<ins>`    | 插入的文本       | `<ins>插入</ins>`                                  |
| `<code>`   | 代码文本         | `<code>console.log()</code>`                       |
| `<pre>`    | 预格式化文本     | `<pre>代码块</pre>`                                |
| `<kbd>`    | 键盘输入         | `<kbd>Ctrl</kbd>+<kbd>C</kbd>`                     |
| `<samp>`   | 示例输出         | `<samp>输出结果</samp>`                            |
| `<var>`    | 变量             | `<var>变量名</var>`                                |
| `<abbr>`   | 缩写             | `<abbr title="超文本标记语言">HTML</abbr>`         |
| `<time>`   | 时间日期         | `<time datetime="2026-01-20">2026年1月20日</time>` |
| `<b>`      | 粗体（无语义）   | `<b>粗体</b>`                                      |
| `<i>`      | 斜体（无语义）   | `<i>斜体</i>`                                      |
| `<u>`      | 下划线           | `<u>下划线</u>`                                    |
| `<s>`      | 删除线           | `<s>删除线</s>`                                    |
| `<wbr>`    | 可换行位置       | `很长的单词<wbr>可以在这里换行`                    |

### 引用

| 标签           | 说明     | 示例                                           |
| -------------- | -------- | ---------------------------------------------- |
| `<blockquote>` | 块级引用 | `<blockquote cite="url">引用内容</blockquote>` |
| `<q>`          | 行内引用 | `<q>短引用</q>`                                |
| `<cite>`       | 引用来源 | `<cite>《书名》</cite>`                        |

---

## 列表标签

| 标签   | 说明     | 示例                                  |
| ------ | -------- | ------------------------------------- |
| `<ul>` | 无序列表 | `<ul><li>项目1</li></ul>`             |
| `<ol>` | 有序列表 | `<ol><li>第一项</li></ol>`            |
| `<li>` | 列表项   | `<li>列表项内容</li>`                 |
| `<dl>` | 描述列表 | `<dl><dt>术语</dt><dd>定义</dd></dl>` |
| `<dt>` | 描述术语 | `<dt>HTML</dt>`                       |
| `<dd>` | 描述定义 | `<dd>超文本标记语言</dd>`             |

**示例**：
```html
<!-- 无序列表 -->
<ul>
  <li>苹果</li>
  <li>香蕉</li>
  <li>橙子</li>
</ul>

<!-- 有序列表 -->
<ol>
  <li>第一步</li>
  <li>第二步</li>
  <li>第三步</li>
</ol>

<!-- 描述列表 -->
<dl>
  <dt>HTML</dt>
  <dd>超文本标记语言</dd>
  <dt>CSS</dt>
  <dd>层叠样式表</dd>
</dl>
```

---

## 链接和媒体标签

### 链接

| 标签     | 说明                   | 示例                                                          |
| -------- | ---------------------- | ------------------------------------------------------------- |
| `<a>`    | 超链接                 | `<a href="https://example.com">链接</a>` （href属性用法多样） |
| `<link>` | 外部资源链接（head中） | `<link rel="stylesheet" href="style.css">`                    |

### 图片

| 标签           | 说明               | 示例                                             |
| -------------- | ------------------ | ------------------------------------------------ |
| `<img>`        | 图片（自闭合）     | `<img src="image.jpg" alt="描述">`               |
| `<picture>`    | 响应式图片容器     | `<picture><source><img></picture>`               |
| `<source>`     | 媒体资源源         | `<source srcset="image.webp" type="image/webp">` |
| `<figure>`     | 图片容器（带标题） | `<figure><img><figcaption></figure>`             |
| `<figcaption>` | 图片标题           | `<figcaption>图片说明</figcaption>`              |

### 媒体

| 标签       | 说明             | 示例                                          |
| ---------- | ---------------- | --------------------------------------------- |
| `<audio>`  | 音频             | `<audio src="sound.mp3" controls></audio>`    |
| `<video>`  | 视频             | `<video src="video.mp4" controls></video>`    |
| `<track>`  | 媒体轨道（字幕） | `<track kind="subtitles" src="sub.vtt">`      |
| `<embed>`  | 嵌入内容         | `<embed src="flash.swf">`                     |
| `<object>` | 嵌入对象         | `<object data="file.pdf"></object>`           |
| `<iframe>` | 内联框架         | `<iframe src="https://example.com"></iframe>` |
| `<svg>`    | SVG 矢量图       | `<svg><circle></circle></svg>`                |
| `<canvas>` | 画布（用于绘图） | `<canvas id="myCanvas"></canvas>`             |
| `<map>`    | 图片映射         | `<map name="imagemap"><area></map>`           |
| `<area>`   | 图片映射区域     | `<area shape="rect" coords="0,0,100,100">`    |

---

## 表格标签

| 标签         | 说明       | 示例                                    |
| ------------ | ---------- | --------------------------------------- |
| `<table>`    | 表格       | `<table>...</table>`                    |
| `<caption>`  | 表格标题   | `<caption>表格说明</caption>`           |
| `<thead>`    | 表头       | `<thead><tr><th></th></tr></thead>`     |
| `<tbody>`    | 表体       | `<tbody><tr><td></td></tr></tbody>`     |
| `<tfoot>`    | 表尾       | `<tfoot><tr><td></td></tr></tfoot>`     |
| `<tr>`       | 表格行     | `<tr><td>单元格</td></tr>`              |
| `<th>`       | 表头单元格 | `<th>标题</th>`                         |
| `<td>`       | 数据单元格 | `<td>数据</td>`                         |
| `<colgroup>` | 列组       | `<colgroup><col></colgroup>`            |
| `<col>`      | 列         | `<col span="2" style="background:red">` |

**示例**：
```html
<table>
  <caption>学生成绩表</caption>
  <thead>
    <tr>
      <th>姓名</th>
      <th>成绩</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>张三</td>
      <td>90</td>
    </tr>
  </tbody>
</table>
```

---

## 表单标签

### 表单容器

| 标签         | 说明       | 示例                                              |
| ------------ | ---------- | ------------------------------------------------- |
| `<form>`     | 表单       | `<form action="/submit" method="post">...</form>` |
| `<fieldset>` | 表单字段组 | `<fieldset><legend>分组</legend></fieldset>`      |
| `<legend>`   | 字段组标题 | `<legend>个人信息</legend>`                       |
| `<label>`    | 标签       | `<label for="name">姓名</label>`                  |

### 输入控件

| 标签         | 说明             | 示例                                                |
| ------------ | ---------------- | --------------------------------------------------- |
| `<input>`    | 输入框（自闭合） | `<input type="text" name="name">`                   |
| `<textarea>` | 多行文本输入     | `<textarea name="message"></textarea>`              |
| `<select>`   | 下拉选择         | `<select><option>选项</option></select>`            |
| `<option>`   | 选项             | `<option value="1">选项1</option>`                  |
| `<optgroup>` | 选项组           | `<optgroup label="组"><option></option></optgroup>` |
| `<button>`   | 按钮             | `<button type="submit">提交</button>`               |
| `<datalist>` | 输入建议列表     | `<datalist><option>建议</option></datalist>`        |
| `<output>`   | 输出结果         | `<output name="result">0</output>`                  |
| `<progress>` | 进度条           | `<progress value="50" max="100">50%</progress>`     |
| `<meter>`    | 度量值           | `<meter value="0.6">60%</meter>`                    |

### Input 类型（HTML5 新增）

```html
<!-- 文本类型 -->
<input type="text" placeholder="文本">
<input type="password" placeholder="密码">
<input type="email" placeholder="邮箱">
<input type="url" placeholder="网址">
<input type="tel" placeholder="电话">
<input type="search" placeholder="搜索">
<input type="number" min="0" max="100">
<input type="range" min="0" max="100">

<!-- 日期时间类型 -->
<input type="date">
<input type="time">
<input type="datetime-local">
<input type="month">
<input type="week">

<!-- 其他类型 -->
<input type="color">
<input type="file" accept="image/*">
<input type="hidden" value="隐藏值">
<input type="checkbox" checked>
<input type="radio" name="gender" value="male">
<input type="submit" value="提交">
<input type="reset" value="重置">
<input type="button" value="按钮">
<input type="image" src="button.jpg" alt="提交">
```

---

## 交互标签

| 标签         | 说明                   | 示例                                             |
| ------------ | ---------------------- | ------------------------------------------------ |
| `<details>`  | 可展开/折叠的内容      | `<details><summary>标题</summary>内容</details>` |
| `<summary>`  | details 的标题         | `<summary>点击展开</summary>`                    |
| `<dialog>`   | 对话框                 | `<dialog open>对话框内容</dialog>`               |
| `<menu>`     | 菜单（已废弃，不推荐） | `<menu><li>菜单项</li></menu>`                   |
| `<menuitem>` | 菜单项（已废弃）       | `<menuitem>菜单项</menuitem>`                    |

**示例**：
```html
<!-- 可折叠内容 -->
<details>
  <summary>点击查看详情</summary>
  <p>这里是详细内容...</p>
</details>

<!-- 对话框 -->
<dialog id="myDialog">
  <p>对话框内容</p>
  <button onclick="document.getElementById('myDialog').close()">关闭</button>
</dialog>
```

---

## 其他标签

| 标签         | 说明                 | 示例                                            |
| ------------ | -------------------- | ----------------------------------------------- |
| `<template>` | 模板内容（不渲染）   | `<template id="tpl"><div>模板</div></template>` |
| `<slot>`     | Web Components 插槽  | `<slot name="content"></slot>`                  |
| `<ruby>`     | 注音                 | `<ruby>漢<rt>han</rt></ruby>`                   |
| `<rt>`       | 注音文本             | `<rt>han</rt>`                                  |
| `<rp>`       | 不支持 ruby 时的显示 | `<rp>(</rp><rt>han</rt><rp>)</rp>`              |
| `<bdi>`      | 双向文本隔离         | `<bdi>从右到左的文本</bdi>`                     |
| `<bdo>`      | 双向文本覆盖         | `<bdo dir="rtl">文本</bdo>`                     |

---

## HTML5 标签分类总结

### 按功能分类

#### 1. 文档结构（5个）
- `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`, `<main>`

#### 2. 元数据（7个）
- `<title>`, `<meta>`, `<link>`, `<style>`, `<script>`, `<base>`, `<noscript>`

#### 3. 语义化结构（7个）
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`

#### 4. 文本内容（30+个）
- 标题：`<h1>` - `<h6>`
- 段落：`<p>`, `<br>`, `<hr>`
- 文本：`<span>`, `<div>`, `<strong>`, `<em>`, `<mark>`, `<small>`, `<code>`, `<pre>` 等
- 引用：`<blockquote>`, `<q>`, `<cite>`

#### 5. 列表（5个）
- `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, `<dd>`

#### 6. 链接和媒体（15+个）
- 链接：`<a>`
- 图片：`<img>`, `<picture>`, `<source>`, `<figure>`, `<figcaption>`
- 媒体：`<audio>`, `<video>`, `<track>`, `<embed>`, `<object>`, `<iframe>`
- 图形：`<svg>`, `<canvas>`
- 映射：`<map>`, `<area>`

#### 7. 表格（10个）
- `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`, `<colgroup>`, `<col>`

#### 8. 表单（15+个）
- 容器：`<form>`, `<fieldset>`, `<legend>`, `<label>`
- 输入：`<input>`, `<textarea>`, `<select>`, `<option>`, `<optgroup>`, `<button>`
- 其他：`<datalist>`, `<output>`, `<progress>`, `<meter>`

#### 9. 交互（5个）
- `<details>`, `<summary>`, `<dialog>`, `<menu>`, `<menuitem>`

#### 10. 其他（10+个）
- `<template>`, `<slot>`, `<ruby>`, `<rt>`, `<rp>`, `<bdi>`, `<bdo>` 等


## 已废弃标签（不要使用）

| 标签          | 替代方案                      |
| ------------- | ----------------------------- |
| `<font>`      | 使用 CSS                      |
| `<center>`    | 使用 CSS `text-align: center` |
| `<strike>`    | 使用 `<del>` 或 `<s>`         |
| `<u>`         | 使用 CSS `text-decoration`    |
| `<big>`       | 使用 CSS `font-size`          |
| `<small>`     | 仍可用，但主要用于法律文本    |
| `<frame>`     | 使用 `<iframe>`               |
| `<frameset>`  | 不要使用                      |
| `<noframes>`  | 不要使用                      |
| `<applet>`    | 使用 `<object>` 或 `<embed>`  |
| `<acronym>`   | 使用 `<abbr>`                 |
| `<basefont>`  | 使用 CSS                      |
| `<dir>`       | 使用 `<ul>`                   |
| `<isindex>`   | 使用表单                      |
| `<listing>`   | 使用 `<pre>`                  |
| `<plaintext>` | 使用 `<pre>`                  |
| `<xmp>`       | 使用 `<pre>` 或 `<code>`      |

---

## 标签属性速查

### 全局属性（所有标签都可用）

| 属性              | 说明       | 示例                        |
| ----------------- | ---------- | --------------------------- |
| `id`              | 唯一标识符 | `<div id="header">`         |
| `class`           | CSS 类名   | `<div class="container">`   |
| `style`           | 内联样式   | `<div style="color: red;">` |
| `title`           | 提示文本   | `<div title="提示">`        |
| `lang`            | 语言       | `<html lang="zh-CN">`       |
| `dir`             | 文字方向   | `<div dir="rtl">`           |
| `data-*`          | 自定义数据 | `<div data-id="123">`       |
| `hidden`          | 隐藏元素   | `<div hidden>`              |
| `tabindex`        | Tab 键顺序 | `<div tabindex="0">`        |
| `contenteditable` | 可编辑     | `<div contenteditable>`     |
| `draggable`       | 可拖拽     | `<div draggable="true">`    |
| `spellcheck`      | 拼写检查   | `<input spellcheck="true">` |

### 事件属性（不推荐，建议用 JavaScript）

| 属性       | 说明     | 示例                                |
| ---------- | -------- | ----------------------------------- |
| `onclick`  | 点击事件 | `<button onclick="alert('hi')">`    |
| `onload`   | 加载事件 | `<body onload="init()">`            |
| `onchange` | 改变事件 | `<input onchange="handleChange()">` |

---

## 在 Hugo Layout 中的使用

### 常见组合

```html
<!-- 文章结构 -->
<article>
  <header>
    <h1>{{ .Title }}</h1>
    <time datetime="{{ .Date.Format "2006-01-02" }}">{{ .Date.Format "2006年1月2日" }}</time>
  </header>
  <section>
    {{ .Content }}
  </section>
  <footer>
    <nav>
      {{ if .PrevInSection }}
      <a href="{{ .PrevInSection.Permalink }}">上一篇</a>
      {{ end }}
      {{ if .NextInSection }}
      <a href="{{ .NextInSection.Permalink }}">下一篇</a>
      {{ end }}
    </nav>
  </footer>
</article>

<!-- 列表结构 -->
<ul>
  {{ range .Pages }}
  <li>
    <article>
      <h2><a href="{{ .Permalink }}">{{ .Title }}</a></h2>
      <p>{{ .Summary }}</p>
    </article>
  </li>
  {{ end }}
</ul>
```

---

## 📚 参考资源

- **MDN HTML 参考**: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element
- **W3C HTML5 规范**: https://www.w3.org/TR/html5/
- **HTML5 标签验证**: https://validator.w3.org/

---

**最后更新**: 2026-01-20
