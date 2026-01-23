# Hugo Shortcodes 和 Partials 使用完整指南

## 📋 概述

本文档详细说明 Hugo 中 **Shortcodes** 和 **Partials** 的区别、使用场景、语法和实际示例。

---

## 🎯 核心区别

### Shortcodes vs Partials

| 特性 | Shortcodes | Partials |
|------|-----------|----------|
| **位置** | `layouts/_shortcodes/` | `layouts/_partials/` |
| **使用场景** | Markdown 内容中 | 模板文件中 |
| **调用方式** | `{{< name >}}` 或 `{{% name %}}` | `{{ partial "name.html" . }}` |
| **参数传递** | 通过属性 | 通过函数参数 |
| **返回值** | 直接输出到内容 | 返回 HTML 片段 |
| **用途** | 内容增强（图片、视频、代码块等） | 模板组件复用（页头、页脚、菜单等） |

---

## 📁 Shortcodes（短代码）

### 一、什么是 Shortcodes？

**Shortcodes** 是在 Markdown 内容中使用的自定义标签，用于插入复杂的 HTML 结构或功能。

### 二、文件位置

```
layouts/
└── _shortcodes/
    ├── katex.html                 # 数学公式
    ├── pdf.html                   # PDF 嵌入
    ├── youtube.html               # YouTube 视频
    └── [name].html                # 任意名称
```

### 三、基本语法

#### 1. 无参数 Shortcode

**定义**（`layouts/_shortcodes/hello.html`）：
```html
<p>Hello, World!</p>
```

**使用**（在 Markdown 中）：
```markdown
{{< hello >}}
```

**输出**：
```html
<p>Hello, World!</p>
```

---

#### 2. 带参数 Shortcode

**定义**（`layouts/_shortcodes/button.html`）：
```html
{{- $text := .Get "text" | default "Click me" -}}
{{- $url := .Get "url" | default "#" -}}
<a href="{{ $url }}" class="btn">{{ $text }}</a>
```

**使用**（在 Markdown 中）：
```markdown
{{< button text="查看详情" url="/about" >}}
```

**输出**：
```html
<a href="/about" class="btn">查看详情</a>
```

---

#### 3. 带内容 Shortcode

**定义**（`layouts/_shortcodes/alert.html`）：
```html
{{- $type := .Get "type" | default "info" -}}
<div class="alert alert-{{ $type }}">
  {{ .Inner }}
</div>
```

**使用**（在 Markdown 中）：
```markdown
{{< alert type="warning" >}}
这是一个警告信息。
{{< /alert >}}
```

**输出**：
```html
<div class="alert alert-warning">
  这是一个警告信息。
</div>
```

---

### 四、Shortcode 类型

#### 1. 自闭合 Shortcode（`{{< name >}}`）

**特点**：
- ✅ 不需要闭合标签
- ✅ 适合无内容的 Shortcode
- ✅ 内容会被转义

**示例**：
```markdown
{{< youtube id="dQw4w9WgXcQ" >}}
```

---

#### 2. 配对 Shortcode（`{{< name >}}...{{< /name >}}`）

**特点**：
- ✅ 需要闭合标签
- ✅ 可以包含内容（`.Inner`）
- ✅ 内容会被处理（Markdown 会被渲染）

**示例**：
```markdown
{{< highlight go >}}
func main() {
    fmt.Println("Hello, World!")
}
{{< /highlight >}}
```

---

#### 3. 内联 Shortcode（`{{% name %}}`）

**特点**：
- ✅ 使用 `%` 而不是 `<`
- ✅ 内容会被 Markdown 处理
- ✅ 适合需要 Markdown 渲染的场景

**示例**：
```markdown
{{% note %}}
这是一个**重要**的提示。
{{% /note %}}
```

---

### 五、Shortcode 常用变量

| 变量 | 说明 | 示例 |
|------|------|------|
| `.Get "param"` | 获取参数值 | `{{ .Get "url" }}` |
| `.Get "param" \| default "value"` | 获取参数，带默认值 | `{{ .Get "title" \| default "Untitled" }}` |
| `.Inner` | 获取 Shortcode 内容 | `{{ .Inner }}` |
| `.Page` | 当前页面对象 | `{{ .Page.Title }}` |
| `.Site` | 站点对象 | `{{ .Site.Title }}` |
| `.Position` | Shortcode 位置 | `{{ .Position }}` |

---

### 六、Shortcode 实际示例

#### 示例 1：PDF 嵌入

**定义**（`layouts/_shortcodes/pdf.html`）：
```html
{{- $src := .Get "src" -}}
{{- $height := .Get "height" | default "600px" -}}
<div class="pdf-container">
  <iframe src="{{ $src }}" width="100%" height="{{ $height }}" frameborder="0"></iframe>
</div>
```

**使用**：
```markdown
{{< pdf src="/files/document.pdf" height="800px" >}}
```

---

#### 示例 2：YouTube 视频

**定义**（`layouts/_shortcodes/youtube.html`）：
```html
{{- $id := .Get "id" -}}
{{- $width := .Get "width" | default "560" -}}
{{- $height := .Get "height" | default "315" -}}
<div class="youtube-container">
  <iframe
    width="{{ $width }}"
    height="{{ $height }}"
    src="https://www.youtube.com/embed/{{ $id }}"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>
```

**使用**：
```markdown
{{< youtube id="dQw4w9WgXcQ" >}}
```

---

#### 示例 3：提示框

**定义**（`layouts/_shortcodes/note.html`）：
```html
{{- $type := .Get "type" | default "info" -}}
<div class="note note-{{ $type }}">
  <div class="note-title">{{ $type | title }}</div>
  <div class="note-content">
    {{ .Inner | markdownify }}
  </div>
</div>
```

**使用**：
```markdown
{{< note type="warning" >}}
请注意：这个操作不可逆。
{{< /note >}}
```

---

#### 示例 4：代码块高亮

**定义**（`layouts/_shortcodes/code.html`）：
```html
{{- $lang := .Get "lang" | default "" -}}
{{- $title := .Get "title" | default "" -}}
<div class="code-block">
  {{- if $title -}}
  <div class="code-title">{{ $title }}</div>
  {{- end -}}
  <pre><code class="language-{{ $lang }}">{{ .Inner }}</code></pre>
</div>
```

**使用**：
```markdown
{{< code lang="python" title="示例代码" >}}
def hello():
    print("Hello, World!")
{{< /code >}}
```

---

## 📁 Partials（部分模板）

### 一、什么是 Partials？

**Partials** 是可复用的模板片段，用于在多个模板中共享相同的 HTML 结构。

### 二、文件位置

```
layouts/
└── _partials/
    ├── header.html                 # 页头
    ├── footer.html                 # 页脚
    ├── menu.html                   # 菜单
    └── [name].html                 # 任意名称
```

### 三、基本语法

#### 1. 调用 Partial

**定义**（`layouts/_partials/header.html`）：
```html
<header>
  <h1>{{ .Site.Title }}</h1>
  <nav>
    <a href="/">首页</a>
    <a href="/about">关于</a>
  </nav>
</header>
```

**使用**（在模板中）：
```html
{{ partial "header.html" . }}
```

---

#### 2. 传递参数

**定义**（`layouts/_partials/button.html`）：
```html
{{- $text := .text -}}
{{- $url := .url -}}
<a href="{{ $url }}" class="btn">{{ $text }}</a>
```

**使用**（在模板中）：
```html
{{ partial "button.html" (dict "text" "查看详情" "url" "/about") }}
```

---

#### 3. 传递页面上下文

**定义**（`layouts/_partials/post-meta.html`）：
```html
<div class="post-meta">
  <span>作者：{{ .Page.Params.author }}</span>
  <span>日期：{{ .Page.Date.Format "2006-01-02" }}</span>
</div>
```

**使用**（在模板中）：
```html
{{ partial "post-meta.html" . }}
```

---

### 四、Partial 常用模式

#### 1. 传递字典参数

```html
{{ partial "component.html" (dict "title" "标题" "content" "内容") }}
```

**在 Partial 中使用**：
```html
{{- $title := .title -}}
{{- $content := .content -}}
<div>
  <h2>{{ $title }}</h2>
  <p>{{ $content }}</p>
</div>
```

---

#### 2. 传递多个参数

```html
{{ partial "card.html" (dict 
  "title" "卡片标题"
  "image" "/images/card.jpg"
  "description" "卡片描述"
  "link" "/card-page"
) }}
```

---

#### 3. 条件渲染

**定义**（`layouts/_partials/sidebar.html`）：
```html
{{- if .Page.Params.showSidebar -}}
<aside class="sidebar">
  {{ .Page.Content }}
</aside>
{{- end -}}
```

**使用**：
```html
{{ partial "sidebar.html" . }}
```

---

### 五、Partial 实际示例

#### 示例 1：页头组件

**定义**（`layouts/_partials/header.html`）：
```html
<header class="site-header">
  <div class="container">
    <h1 class="site-title">
      <a href="{{ .Site.BaseURL }}">{{ .Site.Title }}</a>
    </h1>
    <nav class="site-nav">
      {{ range .Site.Menus.main }}
      <a href="{{ .URL }}">{{ .Name }}</a>
      {{ end }}
    </nav>
  </div>
</header>
```

**使用**（在 `baseof.html` 中）：
```html
<!DOCTYPE html>
<html>
<head>
  <title>{{ .Site.Title }}</title>
</head>
<body>
  {{ partial "header.html" . }}
  {{ block "main" . }}{{ end }}
</body>
</html>
```

---

#### 示例 2：页脚组件

**定义**（`layouts/_partials/footer.html`）：
```html
<footer class="site-footer">
  <div class="container">
    <p>&copy; {{ now.Year }} {{ .Site.Title }}. All rights reserved.</p>
    <div class="social-links">
      {{ range .Site.Params.social }}
      <a href="{{ .url }}" target="_blank">{{ .name }}</a>
      {{ end }}
    </div>
  </div>
</footer>
```

**使用**：
```html
{{ partial "footer.html" . }}
```

---

#### 示例 3：文章卡片

**定义**（`layouts/_partials/post-card.html`）：
```html
{{- $post := .post -}}
<div class="post-card">
  <a href="{{ $post.Permalink }}">
    <h3>{{ $post.Title }}</h3>
    <p>{{ $post.Summary }}</p>
    <span class="date">{{ $post.Date.Format "2006-01-02" }}</span>
  </a>
</div>
```

**使用**（在列表页中）：
```html
{{ range .Pages }}
  {{ partial "post-card.html" (dict "post" .) }}
{{ end }}
```

---

#### 示例 4：面包屑导航

**定义**（`layouts/_partials/breadcrumb.html`）：
```html
<nav class="breadcrumb">
  <a href="{{ .Site.BaseURL }}">首页</a>
  {{ range .Ancestors.Reverse }}
  <span>/</span>
  <a href="{{ .Permalink }}">{{ .Title }}</a>
  {{ end }}
  <span>/</span>
  <span class="current">{{ .Title }}</span>
</nav>
```

**使用**：
```html
{{ partial "breadcrumb.html" . }}
```

---

## 🔍 使用场景对比

### 使用 Shortcodes 的场景

✅ **内容增强**：
- 嵌入视频、音频
- 插入代码块
- 添加提示框、警告框
- 嵌入 PDF、地图
- 数学公式

✅ **Markdown 内容中**：
- 在文章内容中使用
- 在 Front Matter 的正文中使用

**示例**：
```markdown
# 我的文章

这是一段文字。

{{< youtube id="xxx" >}}

更多内容...
```

---

### 使用 Partials 的场景

✅ **模板组件**：
- 页头、页脚
- 导航菜单
- 侧边栏
- 文章卡片
- 评论系统

✅ **模板文件中**：
- 在 `baseof.html` 中使用
- 在 `single.html` 中使用
- 在 `list.html` 中使用

**示例**：
```html
<!-- layouts/_default/baseof.html -->
<!DOCTYPE html>
<html>
<body>
  {{ partial "header.html" . }}
  {{ block "main" . }}{{ end }}
  {{ partial "footer.html" . }}
</body>
</html>
```

---

## 📊 完整对比表

| 特性 | Shortcodes | Partials |
|------|-----------|----------|
| **文件位置** | `_shortcodes/` | `_partials/` |
| **调用位置** | Markdown 内容 | 模板文件 |
| **调用语法** | `{{< name >}}` | `{{ partial "name.html" . }}` |
| **参数传递** | 属性形式 | 函数参数 |
| **内容处理** | `.Inner` | 通过参数传递 |
| **Markdown 处理** | `{{% name %}}` 会处理 | 需要 `markdownify` |
| **典型用途** | 内容增强 | 模板组件 |
| **示例** | 视频、代码块 | 页头、页脚 |

---

## 🎯 最佳实践

### Shortcodes 最佳实践

1. ✅ **命名清晰**：使用描述性的名称
2. ✅ **参数验证**：检查必需参数
3. ✅ **默认值**：为可选参数提供默认值
4. ✅ **文档化**：在注释中说明参数

**示例**：
```html
{{- /* 
  Shortcode: button
  参数:
    - text: 按钮文字（必需）
    - url: 链接地址（默认: "#"）
    - class: CSS 类名（默认: "btn"）
*/ -}}
{{- $text := .Get "text" -}}
{{- if not $text -}}
  {{- errorf "button shortcode: 'text' parameter is required" -}}
{{- end -}}
{{- $url := .Get "url" | default "#" -}}
{{- $class := .Get "class" | default "btn" -}}
<a href="{{ $url }}" class="{{ $class }}">{{ $text }}</a>
```

---

### Partials 最佳实践

1. ✅ **单一职责**：每个 Partial 只做一件事
2. ✅ **可复用性**：设计为可复用的组件
3. ✅ **参数文档**：在注释中说明参数
4. ✅ **错误处理**：检查必需参数

**示例**：
```html
{{- /* 
  Partial: post-card
  参数:
    - post: 文章对象（必需）
    - showDate: 是否显示日期（默认: true）
*/ -}}
{{- $post := .post -}}
{{- if not $post -}}
  {{- errorf "post-card partial: 'post' parameter is required" -}}
{{- end -}}
{{- $showDate := .showDate | default true -}}
<div class="post-card">
  <h3>{{ $post.Title }}</h3>
  {{- if $showDate -}}
  <span class="date">{{ $post.Date.Format "2006-01-02" }}</span>
  {{- end -}}
</div>
```

---

## 🔧 调试技巧

### 1. 查看 Shortcode 输出

在 Shortcode 中添加调试信息：
```html
{{- if .Site.IsServer -}}
<!-- Debug: Shortcode {{ .Name }} -->
<!-- Params: {{ .Params }} -->
{{- end -}}
```

---

### 2. 查看 Partial 输出

在 Partial 中添加调试信息：
```html
{{- if .Site.IsServer -}}
<!-- Debug: Partial {{ .Name }} -->
<!-- Context: {{ . }} -->
{{- end -}}
```

---

### 3. 使用 Hugo 调试命令

```bash
# 查看所有 Shortcodes
hugo list all | grep shortcode

# 查看模板查找过程
hugo server --verbose
```

---

## 📚 相关资源

- [Hugo Shortcodes](https://gohugo.io/content-management/shortcodes/)
- [Hugo Partials](https://gohugo.io/templates/partials/)
- [Hugo Template Functions](https://gohugo.io/functions/)

---

## 🎯 总结

### ✅ Shortcodes 使用要点

1. **位置**：`layouts/_shortcodes/[name].html`
2. **调用**：在 Markdown 中使用 `{{< name >}}`
3. **用途**：内容增强（视频、代码、提示框等）
4. **参数**：通过属性传递

### ✅ Partials 使用要点

1. **位置**：`layouts/_partials/[name].html`
2. **调用**：在模板中使用 `{{ partial "name.html" . }}`
3. **用途**：模板组件复用（页头、页脚、菜单等）
4. **参数**：通过函数参数传递

### 📊 选择建议

- **内容中需要嵌入复杂结构** → 使用 Shortcodes
- **模板中需要复用组件** → 使用 Partials
- **Markdown 内容增强** → 使用 Shortcodes
- **页面结构组件** → 使用 Partials

---

**最后更新**：2026-01-20  
**适用版本**：Hugo 0.100.0+
