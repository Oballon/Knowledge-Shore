# Layouts 目录如何引用 Assets 目录的 SCSS 文件

## 📖 目录

1. [基本方法](#基本方法)
2. [完整示例](#完整示例)
3. [处理流程](#处理流程)
4. [常见场景](#常见场景)
5. [最佳实践](#最佳实践)

---

## 基本方法

### 核心语法

在 `layouts/` 目录的模板文件中（通常是 `_partials/docs/html-head.html` 或 `baseof.html`），使用 Hugo 资源管道：

```go
{{- $styles := resources.Get "book.scss" | resources.ExecuteAsTemplate "book.scss" . | resources.ToCSS | resources.Minify | resources.Fingerprint }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}" integrity="{{ $styles.Data.Integrity }}" crossorigin="anonymous">
```

### 关键步骤

1. **获取资源**：`resources.Get "book.scss"`
2. **模板处理**（可选）：`resources.ExecuteAsTemplate "book.scss" .`
3. **编译 SCSS**：`resources.ToCSS` 或 `css.Sass`
4. **压缩**（可选）：`resources.Minify`
5. **指纹化**（可选）：`resources.Fingerprint`
6. **输出链接**：`$styles.RelPermalink`

---

## 完整示例

### 示例 1: 基本引用（最简单）

```go
{{- $styles := resources.Get "scss/main.scss" | resources.ToCSS }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}">
```

**文件结构**：
```
assets/
  └── scss/
      └── main.scss
```

### 示例 2: 完整处理流程（推荐）

```go
{{- $styles := resources.Get "scss/main.scss" | resources.ExecuteAsTemplate "main.scss" . | resources.ToCSS | resources.Minify | resources.Fingerprint }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}" integrity="{{ $styles.Data.Integrity }}" crossorigin="anonymous">
```

**说明**：
- `resources.ExecuteAsTemplate` - 允许在 SCSS 中使用 Hugo 模板语法
- `resources.ToCSS` - 编译 SCSS 为 CSS
- `resources.Minify` - 压缩 CSS
- `resources.Fingerprint` - 添加哈希值（缓存控制）

### 示例 3: 使用 css.Sass（Hugo Book 主题方式）

```go
{{- $styles := resources.Get "book.scss" | resources.ExecuteAsTemplate "book.scss" . | css.Sass | resources.Minify | resources.Fingerprint }}
<link rel="stylesheet" href="{{ partial "docs/links/resource-precache" $styles }}" {{ template "integrity" $styles }}>
```

**说明**：
- `css.Sass` - 使用 Sass 编译器（需要 Hugo Extended）
- 与 `resources.ToCSS` 功能相同，但使用不同的编译器

---

## 处理流程

### Hugo 资源管道流程

```
assets/scss/main.scss（源文件）
    ↓
resources.Get "scss/main.scss"（获取资源）
    ↓
resources.ExecuteAsTemplate（模板处理，可选）
    ↓
resources.ToCSS 或 css.Sass（编译 SCSS → CSS）
    ↓
resources.Minify（压缩，可选）
    ↓
resources.Fingerprint（添加哈希，可选）
    ↓
$styles.RelPermalink（生成链接）
    ↓
public/css/main.[hash].css（输出文件）
```

---

## 常见场景

### 场景 1: 引用单个 SCSS 文件

```go
<!-- layouts/_partials/docs/html-head.html -->
{{- $styles := resources.Get "scss/custom.scss" | resources.ToCSS | resources.Minify }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}">
```

**文件结构**：
```
assets/
  └── scss/
      └── custom.scss
```

### 场景 2: 引用多个 SCSS 文件并合并

```go
{{- $scssFiles := slice "scss/variables.scss" "scss/mixins.scss" "scss/main.scss" }}
{{- $styles := $scssFiles | resources.Get | resources.Concat "css/bundle.css" | resources.ToCSS | resources.Minify }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}">
```

**说明**：
- `slice` - 创建文件列表
- `resources.Get` - 获取所有资源
- `resources.Concat` - 合并文件

### 场景 3: 在 SCSS 中使用 Hugo 变量

```scss
// assets/scss/main.scss
$primary-color: {{ .Site.Params.PrimaryColor | default "#007bff" }};

body {
  background: $primary-color;
}
```

```go
<!-- layouts/_partials/docs/html-head.html -->
{{- $styles := resources.Get "scss/main.scss" | resources.ExecuteAsTemplate "main.scss" . | resources.ToCSS }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}">
```

**注意**：必须使用 `resources.ExecuteAsTemplate` 才能在 SCSS 中使用 Hugo 变量。

### 场景 4: 条件加载不同的样式文件

```go
{{- $styleFile := "scss/light.scss" }}
{{- if eq .Site.Params.Theme "dark" }}
  {{- $styleFile = "scss/dark.scss" }}
{{- end }}

{{- $styles := resources.Get $styleFile | resources.ToCSS | resources.Minify }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}">
```

### 场景 5: 开发环境不压缩，生产环境压缩

```go
{{- $styles := resources.Get "scss/main.scss" | resources.ToCSS }}
{{- if hugo.IsProduction }}
  {{- $styles = $styles | resources.Minify }}
{{- end }}
{{- $styles = $styles | resources.Fingerprint }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}">
```

---

## 实际应用示例

### 示例：覆盖 Hugo Book 主题样式

#### 1. 创建自定义 SCSS 文件

```scss
// assets/custom.scss
// 自定义样式

body {
  font-family: "Microsoft YaHei", sans-serif;
}

.book-header {
  background: #f0f0f0;
}
```

#### 2. 在 html-head.html 中引用

**方法 1: 覆盖主题的 html-head.html**

```powershell
# 复制主题文件
.\scripts\copy-layout.ps1 "_partials/docs/html-head.html"
```

**方法 2: 在 html-head.html 中添加**

```go
<!-- layouts/_partials/docs/html-head.html -->

<!-- 原有主题样式 -->
{{- $themeStyles := resources.Get "book.scss" | resources.ExecuteAsTemplate "book.scss" . | css.Sass | resources.Minify | resources.Fingerprint }}
<link rel="stylesheet" href="{{ partial "docs/links/resource-precache" $themeStyles }}" {{ template "integrity" $themeStyles }}>

<!-- 自定义样式 -->
{{- $customStyles := resources.Get "custom.scss" | resources.ToCSS | resources.Minify | resources.Fingerprint }}
<link rel="stylesheet" href="{{ $customStyles.RelPermalink }}" integrity="{{ $customStyles.Data.Integrity }}" crossorigin="anonymous">
```

#### 3. 或者使用主题的 _custom.scss（推荐）

Hugo Book 主题已经支持自定义样式：

```scss
// assets/_custom.scss
// 这个文件会被主题自动加载

body {
  font-family: "Microsoft YaHei", sans-serif;
}

.book-header {
  background: #f0f0f0;
}
```

主题的 `book.scss` 会自动导入 `_custom.scss`，无需在 layouts 中手动引用。

---

## 资源函数详解

### resources.Get

```go
{{- $resource := resources.Get "path/to/file.scss" }}
```

**说明**：
- 从 `assets/` 目录获取资源
- 路径相对于 `assets/` 目录
- 返回资源对象

### resources.ExecuteAsTemplate

```go
{{- $resource := resources.Get "file.scss" | resources.ExecuteAsTemplate "file.scss" . }}
```

**说明**：
- 将资源作为模板执行
- 允许在 SCSS 中使用 Hugo 模板语法
- 第二个参数是上下文（通常是 `.`）

### resources.ToCSS

```go
{{- $css := $scss | resources.ToCSS }}
```

**说明**：
- 编译 SCSS/SASS 为 CSS
- 需要 Hugo Extended 版本
- 支持 SCSS 和 SASS 语法

### css.Sass

```go
{{- $css := $scss | css.Sass }}
```

**说明**：
- 使用 Sass 编译器
- 功能与 `resources.ToCSS` 相同
- 需要 Hugo Extended

### resources.Minify

```go
{{- $minified := $css | resources.Minify }}
```

**说明**：
- 压缩 CSS/JS
- 移除空白和注释
- 减小文件大小

### resources.Fingerprint

```go
{{- $fingerprinted := $css | resources.Fingerprint }}
```

**说明**：
- 添加内容哈希到文件名
- 用于缓存控制
- 访问：`$fingerprinted.RelPermalink`
- 完整性：`$fingerprinted.Data.Integrity`

### resources.Concat

```go
{{- $bundle := slice "file1.scss" "file2.scss" | resources.Get | resources.Concat "bundle.css" }}
```

**说明**：
- 合并多个资源文件
- 按顺序合并
- 需要先编译 SCSS

---

## 最佳实践

### 1. 文件组织

```
assets/
├── scss/
│   ├── _variables.scss    # 变量（部分文件）
│   ├── _mixins.scss       # 混合（部分文件）
│   ├── components/        # 组件样式
│   │   ├── _header.scss
│   │   └── _footer.scss
│   └── main.scss          # 主文件
```

### 2. 主 SCSS 文件

```scss
// assets/scss/main.scss
@import "variables";
@import "mixins";
@import "components/header";
@import "components/footer";

// 自定义样式
body {
  // 样式
}
```

### 3. 在 Layouts 中引用

```go
<!-- layouts/_partials/docs/html-head.html -->
{{- $styles := resources.Get "scss/main.scss" | resources.ExecuteAsTemplate "main.scss" . | resources.ToCSS | resources.Minify | resources.Fingerprint }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}" integrity="{{ $styles.Data.Integrity }}" crossorigin="anonymous">
```

### 4. 性能优化

```go
{{- $styles := resources.Get "scss/main.scss" | resources.ToCSS }}
{{- if hugo.IsProduction }}
  {{- $styles = $styles | resources.Minify | resources.Fingerprint }}
{{- end }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}"{{ if hugo.IsProduction }} integrity="{{ $styles.Data.Integrity }}" crossorigin="anonymous"{{ end }}>
```

### 5. 错误处理

```go
{{- $scss := resources.Get "scss/main.scss" }}
{{- if $scss }}
  {{- $styles := $scss | resources.ToCSS | resources.Minify }}
  <link rel="stylesheet" href="{{ $styles.RelPermalink }}">
{{- else }}
  {{- warnf "SCSS file not found: scss/main.scss" }}
{{- end }}
```

---

## 常见问题

### Q: 为什么我的 SCSS 文件没有被编译？

**A**: 检查以下几点：
1. 文件是否在 `assets/` 目录下（不是 `static/`）
2. 是否使用了 `resources.ToCSS` 或 `css.Sass`
3. 是否安装了 Hugo Extended 版本

### Q: 如何在 SCSS 中使用 Hugo 变量？

**A**: 使用 `resources.ExecuteAsTemplate`：

```go
{{- $styles := resources.Get "scss/main.scss" | resources.ExecuteAsTemplate "main.scss" . | resources.ToCSS }}
```

然后在 SCSS 中：
```scss
$color: {{ .Site.Params.PrimaryColor }};
```

### Q: 多个 SCSS 文件如何合并？

**A**: 使用 `resources.Concat`：

```go
{{- $files := slice "scss/file1.scss" "scss/file2.scss" }}
{{- $bundle := $files | resources.Get | resources.Concat "bundle.css" | resources.ToCSS }}
```

或者使用 `@import` 在 SCSS 中合并。

### Q: 文件路径怎么写？

**A**: 
- `resources.Get` 的路径相对于 `assets/` 目录
- 不需要 `assets/` 前缀
- 示例：`resources.Get "scss/main.scss"` 对应 `assets/scss/main.scss`

### Q: 开发时如何快速调试？

**A**: 
- 开发时不使用 `resources.Minify`
- 使用 `hugo server --disableFastRender` 确保重新编译
- 检查浏览器控制台的错误信息

---

## 完整示例：自定义样式系统

### 1. 创建 SCSS 文件结构

```
assets/
└── scss/
    ├── _variables.scss
    ├── _mixins.scss
    └── custom.scss
```

### 2. 编写 SCSS 文件

```scss
// assets/scss/_variables.scss
$primary-color: #007bff;
$font-size: 16px;

// assets/scss/_mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// assets/scss/custom.scss
@import "variables";
@import "mixins";

.custom-container {
  @include flex-center;
  color: $primary-color;
  font-size: $font-size;
}
```

### 3. 在 Layouts 中引用

```go
<!-- layouts/_partials/docs/html-head.html -->
{{- $customStyles := resources.Get "scss/custom.scss" | resources.ExecuteAsTemplate "custom.scss" . | resources.ToCSS | resources.Minify | resources.Fingerprint }}
<link rel="stylesheet" href="{{ $customStyles.RelPermalink }}" integrity="{{ $customStyles.Data.Integrity }}" crossorigin="anonymous">
```

### 4. 使用样式

```html
<div class="custom-container">
  内容
</div>
```

---

## 参考资源

- **Hugo 资源管道**: https://gohugo.io/hugo-pipes/
- **Hugo 资源函数**: https://gohugo.io/functions/resources/
- **Hugo Extended**: https://gohugo.io/installation/

---

**最后更新**: 2026-01-20
