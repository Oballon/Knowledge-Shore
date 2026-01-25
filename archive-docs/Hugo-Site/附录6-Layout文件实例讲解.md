# Hugo Layout 文件完全解读教程

## 📖 目录

1. [什么是 Layout 文件？](#什么是-layout-文件)
2. [Layout 文件的基本语法](#layout-文件的基本语法)
3. [实际文件逐行解读](#实际文件逐行解读)
4. [常用模板语法详解](#常用模板语法详解)
5. [如何修改 Layout 文件](#如何修改-layout-文件)

---

## 什么是 Layout 文件？

**Layout 文件 = HTML 模板 + Hugo 模板语法**

Layout 文件告诉 Hugo：
- 📄 **页面结构**：HTML 的骨架（头部、内容、底部）
- 🔄 **动态内容**：从哪里获取数据（标题、内容、日期等）
- 🎨 **如何显示**：页面的布局和样式

**简单理解**：Layout 文件就像是一个"填空模板"，Hugo 会把你的内容（Markdown）填进去，生成最终的 HTML 页面。

---

## Layout 文件的基本语法

### 1. 普通 HTML（你熟悉的）

```html
<div class="container">
  <h1>这是标题</h1>
  <p>这是段落</p>
</div>
```

### 2. Hugo 模板语法（需要学习的）

Hugo 使用 **Go 模板语法**，用 `{{ }}` 包裹：

```go
{{ .Title }}           // 输出页面标题
{{ .Content }}         // 输出页面内容
{{ if .IsPage }}       // 条件判断
  <p>这是单页</p>
{{ end }}
```

**关键符号**：
- `{{ }}` - Hugo 模板语法
- `.` - 当前页面的数据
- `|` - 管道符（用于函数）
- `partial` - 包含其他模板文件

---

## 实际文件逐行解读

### 示例 1: `header.html` - 简单的头部组件

```html
<!-- 第1行：创建一个 flex 容器，内容居中对齐 -->
<div class="flex align-center justify-between">
  
  <!-- 第2-4行：菜单按钮 -->
  <label for="menu-control">
    <!-- 
      partial "docs/icon" "menu" 
      意思：调用 docs/icon 这个 partial，传入参数 "menu"
      结果：返回菜单图标的路径
    -->
    <img src="{{ partial "docs/icon" "menu" }}" 
         class="book-icon" 
         alt="{{ partial "docs/text/i18n" "Menu" }}" />
  </label>

  <!-- 第6行：页面标题 -->
  <!-- 
    partial "docs/title" .
    意思：调用 docs/title 这个 partial，传入当前页面数据（.）
    结果：返回页面的标题
  -->
  <h3>{{ partial "docs/title" . }}</h3>

  <!-- 第8-12行：目录按钮（仅在需要时显示） -->
  <label for="toc-control">
    <!-- 
      if partial "docs/toc-show" .
      意思：如果页面需要显示目录，则显示目录图标
    -->
    {{ if partial "docs/toc-show" . }}
    <img src="{{ partial "docs/icon" "toc" }}" 
         class="book-icon" 
         alt="{{ partial "docs/text/i18n" "Table of Contents" }}" />
    {{ end }}
  </label>
</div>
```

**翻译成中文理解**：
```
创建一个容器：
  - 左边：菜单按钮（调用图标函数获取菜单图标）
  - 中间：页面标题（调用标题函数获取标题）
  - 右边：目录按钮（如果页面有目录才显示）
```

---

### 示例 2: `baseof.html` - 基础模板（最重要）

这是所有页面的"骨架"，其他模板都基于它。

#### 第一部分：HTML 基础结构

```html
<!-- 第1行：HTML5 文档类型声明 -->
<!DOCTYPE html>

<!-- 第2行：HTML 根元素 -->
<!-- 
  lang="{{ default .Site.Language.Lang .Site.LanguageCode }}"
  意思：设置页面语言
  - 如果有 .Site.Language.Lang，就用它
  - 否则用 .Site.LanguageCode
  - 如果都没有，默认是 "en"
  
  dir="{{ default "ltr" .Site.Language.LanguageDirection }}"
  意思：设置文字方向（ltr=从左到右，rtl=从右到左）
-->
<html lang="{{ default .Site.Language.Lang .Site.LanguageCode }}" 
      dir="{{ default "ltr" .Site.Language.LanguageDirection }}">
```

#### 第二部分：头部（Head）

```html
<head>
  <!-- 
    partial "docs/html-head" .
    意思：包含头部内容（CSS、meta标签等）
    这是另一个模板文件，包含所有 <head> 里的内容
  -->
  {{ partial "docs/html-head" . }}
  
  <!-- 
    partial "docs/inject/head" .
    意思：允许用户自定义注入内容到头部
    你可以在配置文件中添加自定义的 head 内容
  -->
  {{ partial "docs/inject/head" . }}
</head>
```

#### 第三部分：页面主体（Body）

```html
<body dir="{{ default "ltr" .Site.Language.LanguageDirection }}" 
      class="book-kind-{{ .Kind }} book-type-{{ .Type }}{{ with .Layout }} book-layout-{{ . }}{{ end }}">
  
  <!-- 隐藏的复选框，用于控制菜单和目录的显示/隐藏 -->
  <input type="checkbox" class="hidden toggle" id="menu-control" />
  <input type="checkbox" class="hidden toggle" id="toc-control" />
  
  <!-- 主容器 -->
  <main class="container flex">
    
    <!-- 左侧菜单 -->
    <!-- 
      template "menu-container" .
      意思：调用名为 "menu-container" 的模板块
      这个块在文件后面用 {{ define "menu-container" }} 定义
    -->
    {{ template "menu-container" . }}

    <!-- 中间：页面内容区域 -->
    <div class="book-page">
      
      <!-- 移动端头部（默认隐藏） -->
      <header class="book-header hidden">
        {{ template "header" . }}
      </header>

      <!-- 内容注入点：内容之前 -->
      {{ partial "docs/inject/content-before" . }}
      
      <!-- 主要内容区域 -->
      <!-- 
        template "main" .
        这是最重要的部分！你的页面内容会显示在这里
        这个 "main" 块可以在其他模板中被覆盖
      -->
      {{ template "main" . }}
      
      <!-- 内容注入点：内容之后 -->
      {{ partial "docs/inject/content-after" . }}

      <!-- 页面底部 -->
      <footer class="book-footer">
        {{ template "footer" . }}
        {{ template "comments" . }}
        {{ partial "docs/inject/footer" . }}
        {{ template "copyright" . }}
        {{ template "clipboard" . }}
      </footer>

      <label for="menu-control" class="hidden book-menu-overlay"></label>
    </div>

    <!-- 右侧：目录 -->
    {{ template "toc-container" . }}
  </main>

  <!-- 页面底部脚本注入点 -->
  {{ partial "docs/inject/body" . }}
</body>
</html>
```

#### 第四部分：定义模板块（Template Blocks）

```html
<!-- 
  定义 "main" 模板块
  这是默认的内容显示方式
  其他模板可以覆盖这个块来自定义显示
-->
{{ define "main" }}
  <article class="markdown book-article">
    <!-- 
      .Content 
      这是页面的主要内容（Markdown 转换后的 HTML）
      {{- .Content -}} 中的 - 号表示去掉前后的空白
    -->
    {{- .Content -}}
  </article>
{{ end }}

<!-- 定义 "header" 模板块 -->
{{ define "header" }}
  <!-- 调用 header partial -->
  {{ partial "docs/header" . }}

  <!-- 如果页面有目录，显示目录 -->
  {{ if partial "docs/toc-show" . }}
  <aside class="hidden">
    {{ template "toc" . }}
  </aside>
  {{ end }}
{{ end }}

<!-- 定义 "footer" 模板块 -->
{{ define "footer" }}
  {{ partial "docs/footer" . }}
{{ end }}

<!-- 定义 "copyright" 模板块 -->
{{ define "copyright" }}
  <!-- 
    if .Site.Copyright
    意思：如果站点配置中有版权信息，就显示
  -->
  {{ if .Site.Copyright }}
  <div class="book-copyright flex justify-center">
    {{ partial "docs/copyright" . }}
  </div>
  {{ end }}
{{ end }}
```

---

## 常用模板语法详解

### 1. 输出变量

```go
{{ .Title }}              // 页面标题
{{ .Content }}            // 页面内容（HTML）
{{ .Date }}               // 发布日期
{{ .Permalink }}          // 页面完整 URL
{{ .Site.Title }}         // 站点标题
{{ .Site.Params.X }}      // 站点自定义参数
```

**`.` 的含义**：
- `.` = 当前页面的数据
- `.Site` = 站点级别的数据
- `.Params` = 自定义参数

### 2. 条件判断

```go
<!-- 简单 if -->
{{ if .IsPage }}
  <p>这是一个单页</p>
{{ end }}

<!-- if-else -->
{{ if .IsHome }}
  <h1>欢迎来到首页</h1>
{{ else }}
  <h1>{{ .Title }}</h1>
{{ end }}

<!-- 多个条件 -->
{{ if and .IsPage .Params.showDate }}
  <p>发布日期：{{ .Date }}</p>
{{ end }}
```

**常用条件**：
- `.IsPage` - 是否为单页
- `.IsHome` - 是否为首页
- `.IsSection` - 是否为章节页
- `.Params.X` - 是否有某个参数

### 3. 循环

```go
<!-- 遍历子页面 -->
{{ range .Pages }}
  <article>
    <h2><a href="{{ .Permalink }}">{{ .Title }}</a></h2>
    <p>{{ .Summary }}</p>
  </article>
{{ end }}

<!-- 带索引的循环 -->
{{ range $index, $page := .Pages }}
  <div class="item-{{ $index }}">
    {{ $page.Title }}
  </div>
{{ end }}
```

### 4. 包含其他模板（Partials）

```go
<!-- 
  partial "docs/header" .
  意思：包含 layouts/_partials/docs/header.html 文件
  第二个参数 . 是传递给 partial 的数据
-->
{{ partial "docs/header" . }}

<!-- 传递自定义数据 -->
{{ partial "docs/card" (dict "title" "标题" "content" "内容") }}
```

**Partial 文件位置**：
- `layouts/_partials/docs/header.html` → `partial "docs/header"`
- `layouts/_partials/custom/footer.html` → `partial "custom/footer"`

### 5. 模板块（Template Blocks）

```go
<!-- 定义块 -->
{{ define "main" }}
  <div class="content">
    {{ .Content }}
  </div>
{{ end }}

<!-- 调用块 -->
{{ template "main" . }}
```

**用途**：允许子模板覆盖父模板的特定部分。

### 6. 函数和管道

```go
<!-- 管道：数据从左到右传递 -->
{{ .Title | upper }}              // 标题转大写
{{ .Content | markdownify }}      // Markdown 转 HTML
{{ .Date | dateFormat "2006-01-02" }}  // 格式化日期

<!-- 多个管道 -->
{{ .Content | markdownify | truncate 100 }}
```

**常用函数**：
- `upper` / `lower` - 大小写转换
- `title` - 首字母大写
- `truncate N` - 截断字符串
- `markdownify` - Markdown 转 HTML
- `safeHTML` - 标记为安全 HTML
- `default "值" .X` - 默认值

### 7. 变量赋值

```go
{{ $title := .Title }}           // 定义变量
{{ $title }}                    // 使用变量

{{ with .Site.Params }}
  {{ $color := .customColor }}  // 在 with 块内定义
  <div style="color: {{ $color }}">...</div>
{{ end }}
```

### 8. 注释

```go
{{/* 这是注释，不会输出到 HTML */}}

<!-- HTML 注释，会输出到 HTML -->
<!-- 但用户可以在浏览器中看到 -->
```

---

## 如何修改 Layout 文件

### 方法 1: 覆盖整个文件（简单但不够灵活）

```powershell
# 1. 复制主题文件
.\scripts\copy-layout.ps1 "baseof.html"

# 2. 编辑 layouts/baseof.html
# 直接修改 HTML 和模板语法
```

### 方法 2: 只覆盖特定块（推荐）

```html
<!-- layouts/baseof.html -->
{{/* 只覆盖 main 块，其他使用主题默认 */}}
{{ define "main" }}
  <div class="my-custom-wrapper">
    <h1>{{ .Title }}</h1>
    <div class="content">
      {{ .Content }}
    </div>
  </div>
{{ end }}
```

### 方法 3: 覆盖 Partial

```powershell
# 1. 复制 partial
.\scripts\copy-layout.ps1 "_partials/docs/header.html"

# 2. 编辑 layouts/_partials/docs/header.html
# 修改你需要的部分
```

---

## 🎯 实战示例

### 示例 1: 在页面顶部添加自定义横幅

```html
<!-- layouts/baseof.html -->
{{ define "main" }}
  <!-- 添加自定义横幅 -->
  {{ if .Site.Params.showBanner }}
  <div class="custom-banner">
    {{ .Site.Params.bannerText }}
  </div>
  {{ end }}
  
  <!-- 原有内容 -->
  <article class="markdown book-article">
    {{- .Content -}}
  </article>
{{ end }}
```

在 `hugo.toml` 中配置：
```toml
[params]
  showBanner = true
  bannerText = "欢迎访问我的网站！"
```

### 示例 2: 自定义页面标题显示

```html
<!-- layouts/baseof.html -->
{{ define "main" }}
  <article class="markdown book-article">
    <!-- 自定义标题样式 -->
    <header class="article-header">
      <h1 class="article-title">{{ .Title }}</h1>
      {{ if .Date }}
      <time class="article-date">{{ .Date.Format "2006年1月2日" }}</time>
      {{ end }}
    </header>
    
    <!-- 页面内容 -->
    <div class="article-content">
      {{- .Content -}}
    </div>
  </article>
{{ end }}
```

### 示例 3: 添加自定义 Shortcode

```html
<!-- layouts/_shortcodes/alert.html -->
<div class="alert alert-{{ .Get "type" | default "info" }}">
  <strong>{{ .Get "title" | default "提示" }}</strong>
  <p>{{ .Inner }}</p>
</div>
```

使用：
```markdown
{{< alert type="warning" title="注意" >}}
这是一个警告信息
{{< /alert >}}
```

---

## 📚 学习路径建议

### 第1步：理解基础语法
1. 学习 `.` 的含义（当前页面数据）
2. 学习 `{{ }}` 语法
3. 学习 `partial` 和 `template`

### 第2步：阅读实际文件
1. 从简单的 partial 开始（如 `header.html`）
2. 理解 `baseof.html` 的结构
3. 查看其他 partial 文件

### 第3步：小修改练习
1. 修改一个简单的 partial
2. 添加一个自定义 shortcode
3. 覆盖一个模板块

### 第4步：深入学习
1. 学习 Go 模板语法
2. 理解 Hugo 的数据结构
3. 阅读 Hugo 官方文档

---

## 🔍 调试技巧

### 1. 查看页面数据

在模板中添加：
```html
<pre>{{ . | jsonify (dict "indent" "  ") }}</pre>
```

这会显示页面的所有可用数据。

### 2. 查看特定变量

```html
<p>标题：{{ .Title }}</p>
<p>类型：{{ .Kind }}</p>
<p>参数：{{ .Params | jsonify }}</p>
```

### 3. 使用浏览器开发者工具

- 查看生成的 HTML
- 检查 CSS 类名
- 测试响应式布局

---

## 💡 常见问题

### Q: `.` 和 `.Site` 有什么区别？
**A**: 
- `.` = 当前页面的数据
- `.Site` = 整个站点的数据（所有页面共享）

### Q: `partial` 和 `template` 有什么区别？
**A**:
- `partial` = 包含一个独立的模板文件
- `template` = 调用一个已定义的模板块（用 `{{ define }}` 定义）

### Q: 如何知道页面有哪些可用数据？
**A**: 在模板中添加 `{{ . | jsonify }}` 查看所有数据。

### Q: 修改后没有生效？
**A**: 
1. 检查文件路径是否正确
2. 重启 Hugo 服务器
3. 清除浏览器缓存
4. 检查是否有语法错误

---

## 📖 推荐资源

- **Hugo 模板文档**: https://gohugo.io/templates/
- **Go 模板语法**: https://pkg.go.dev/text/template
- **Hugo 函数列表**: https://gohugo.io/functions/

---

**记住**：Layout 文件就是 HTML + 模板语法。HTML 你熟悉，模板语法就是告诉 Hugo 从哪里获取数据并如何显示。多练习，多尝试，慢慢就熟悉了！

**最后更新**: 2026-01-20
