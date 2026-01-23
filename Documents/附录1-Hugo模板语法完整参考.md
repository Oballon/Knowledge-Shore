

# Hugo 模板语法完整参考

## 📖 目录

1. [基础语法](#基础语法)
2. [变量与上下文](#变量与上下文)
3. [函数](#函数)
4. [控制结构](#控制结构)
5. [模板组织](#模板组织)
6. [Hugo 特定功能](#hugo-特定功能)
7. [常用模式](#常用模式)

---

## 基础语法

### 基本输出

```go
{{ . }}                    // 输出当前上下文
{{ .Title }}              // 输出页面标题
{{ .Content }}            // 输出页面内容
{{- .Content -}}          // 去掉前后空白
```

### 注释

```go
{{/* 这是注释，不会输出到 HTML */}}
{{- /* 去掉注释前的空白 */ -}}
```

### 转义

```go
{{ .Title }}              // 自动转义 HTML
{{ .Content | safeHTML }} // 标记为安全 HTML（不转义）
{{ .Summary | plainify }} // 移除 HTML 标签
```

---

## 变量与上下文

### 页面变量

| 变量 | 说明 | 示例 |
|------|------|------|
| `.Title` | 页面标题 | `"我的文章"` |
| `.Content` | 页面内容（HTML） | `<p>内容</p>` |
| `.Summary` | 摘要 | `"文章摘要..."` |
| `.Permalink` | 完整 URL | `"https://example.com/post/"` |
| `.RelPermalink` | 相对 URL | `"/post/"` |
| `.URL` | URL 路径 | `"/post/"` |
| `.Date` | 发布日期 | `2026-01-20` |
| `.Lastmod` | 最后修改日期 | `2026-01-21` |
| `.PublishDate` | 发布日期 | `2026-01-20` |
| `.ExpiryDate` | 过期日期 | `2026-12-31` |
| `.Kind` | 页面类型 | `"page"`, `"section"`, `"home"` |
| `.Type` | 内容类型 | `"posts"`, `"docs"` |
| `.Section` | 章节 | `"posts"` |
| `.IsPage` | 是否为单页 | `true` / `false` |
| `.IsHome` | 是否为首页 | `true` / `false` |
| `.IsSection` | 是否为章节页 | `true` / `false` |
| `.IsNode` | 是否为节点 | `true` / `false` |
| `.Layout` | 布局名称 | `"single"` |
| `.LinkTitle` | 链接标题 | `"我的文章"` |
| `.Description` | 描述 | `"页面描述"` |
| `.Keywords` | 关键词 | `["tag1", "tag2"]` |
| `.Weight` | 权重 | `10` |
| `.Draft` | 是否为草稿 | `true` / `false` |
| `.Params` | 自定义参数 | 见下方 |

### 站点变量

| 变量 | 说明 | 示例 |
|------|------|------|
| `.Site.Title` | 站点标题 | `"我的网站"` |
| `.Site.Author` | 作者信息 | `map[string]string` |
| `.Site.BaseURL` | 基础 URL | `"https://example.com/"` |
| `.Site.LanguageCode` | 语言代码 | `"zh-CN"` |
| `.Site.Language` | 语言对象 | 见下方 |
| `.Site.Params` | 站点参数 | 见下方 |
| `.Site.Taxonomies` | 分类法 | `map[string]Page` |
| `.Site.Menus` | 菜单 | `map[string]Menu` |
| `.Site.RegularPages` | 所有常规页面 | `[]Page` |
| `.Site.Pages` | 所有页面 | `[]Page` |
| `.Site.Sections` | 所有章节 | `[]Page` |

### 语言变量

```go
.Site.Language.Lang              // 语言代码 "zh-CN"
.Site.Language.LanguageName     // 语言名称 "中文"
.Site.Language.LanguageDirection // 文字方向 "ltr" / "rtl"
.Site.Language.Weight            // 语言权重
```

### 参数（Params）

```go
// 页面参数
.Params.author              // 作者
.Params.tags                // 标签数组
.Params.categories          // 分类数组
.Params.image               // 图片
.Params.featured            // 是否精选

// 站点参数
.Site.Params.description    // 站点描述
.Site.Params.logo           // Logo
.Site.Params.social         // 社交媒体链接
```

### 导航变量

| 变量 | 说明 |
|------|------|
| `.Parent` | 父页面 |
| `.CurrentSection` | 当前章节 |
| `.FirstSection` | 第一个章节 |
| `.Pages` | 子页面 |
| `.RegularPages` | 常规子页面 |
| `.Sections` | 子章节 |
| `.PrevInSection` | 章节内上一页 |
| `.NextInSection` | 章节内下一页 |
| `.Prev` | 上一页（全局） |
| `.Next` | 下一页（全局） |

### 分类法（Taxonomies）

```go
.Site.Taxonomies.tags       // 所有标签
.Site.Taxonomies.categories // 所有分类
.Pages.GetTerms "tags"      // 当前页面的标签
```

### 菜单（Menus）

```go
.Site.Menus.main            // 主菜单
.Site.Menus.footer          // 底部菜单
```

---

## 函数

### 字符串函数

| 函数 | 说明 | 示例 |
|------|------|------|
| `upper` | 转大写 | `{{ .Title \| upper }}` |
| `lower` | 转小写 | `{{ .Title \| lower }}` |
| `title` | 首字母大写 | `{{ .Title \| title }}` |
| `humanize` | 人性化 | `"my-post"` → `"My Post"` |
| `pluralize` | 复数化 | `{{ "cat" \| pluralize }}` → `"cats"` |
| `singularize` | 单数化 | `{{ "cats" \| singularize }}` → `"cat"` |
| `truncate N` | 截断 | `{{ .Summary \| truncate 100 }}` |
| `substr start length` | 子字符串 | `{{ .Title \| substr 0 10 }}` |
| `replace old new` | 替换 | `{{ .Title \| replace " " "-" }}` |
| `replaceRE pattern replacement` | 正则替换 | `{{ .Title \| replaceRE "\\s+" "-" }}` |
| `countwords` | 字数统计 | `{{ .Content \| countwords }}` |
| `countrunes` | 字符数 | `{{ .Content \| countrunes }}` |
| `chomp` | 去掉末尾换行 | `{{ .Title \| chomp }}` |
| `trim` | 去掉首尾空白 | `{{ .Title \| trim }}` |
| `trimPrefix prefix` | 去掉前缀 | `{{ .URL \| trimPrefix "/" }}` |
| `trimSuffix suffix` | 去掉后缀 | `{{ .URL \| trimSuffix "/" }}` |
| `slicestr start end` | 切片 | `{{ .Title \| slicestr 0 5 }}` |

### 数学函数

| 函数 | 说明 | 示例 |
|------|------|------|
| `add N` | 加法 | `{{ 5 \| add 3 }}` → `8` |
| `sub N` | 减法 | `{{ 10 \| sub 3 }}` → `7` |
| `mul N` | 乘法 | `{{ 5 \| mul 3 }}` → `15` |
| `div N` | 除法 | `{{ 10 \| div 2 }}` → `5` |
| `mod N` | 取模 | `{{ 10 \| mod 3 }}` → `1` |
| `floor` | 向下取整 | `{{ 3.7 \| floor }}` → `3` |
| `ceil` | 向上取整 | `{{ 3.2 \| ceil }}` → `4` |
| `round` | 四舍五入 | `{{ 3.5 \| round }}` → `4` |

### 日期时间函数

| 函数 | 说明 | 示例 |
|------|------|------|
| `dateFormat format` | 格式化日期 | `{{ .Date \| dateFormat "2006-01-02" }}` |
| `time` | 当前时间 | `{{ now \| dateFormat "2006-01-02" }}` |
| `now` | 当前时间对象 | `{{ now }}` |
| `age` | 年龄 | `{{ .Date \| age }}` → `"2 years"` |

**日期格式参考**（Go 时间格式）：
```
2006-01-02           → 2006-01-20
2006/01/02           → 2006/01/20
01/02/2006           → 01/20/2006
January 2, 2006      → January 20, 2006
2006-01-02 15:04:05  → 2006-01-20 14:30:00
```

### 数组/切片函数

| 函数 | 说明 | 示例 |
|------|------|------|
| `first N` | 前 N 个 | `{{ .Pages \| first 5 }}` |
| `last N` | 后 N 个 | `{{ .Pages \| last 5 }}` |
| `after N` | N 之后 | `{{ .Pages \| after 5 }}` |
| `reverse` | 反转 | `{{ .Pages \| reverse }}` |
| `shuffle` | 随机排序 | `{{ .Pages \| shuffle }}` |
| `uniq` | 去重 | `{{ .Params.tags \| uniq }}` |
| `sort` | 排序 | `{{ .Pages \| sort "Date" }}` |
| `where` | 过滤 | `{{ .Pages \| where "Params.featured" true }}` |
| `union` | 并集 | `{{ $a \| union $b }}` |
| `intersect` | 交集 | `{{ $a \| intersect $b }}` |
| `symdiff` | 对称差 | `{{ $a \| symdiff $b }}` |
| `in` | 是否包含 | `{{ if in .Params.tags "hugo" }}` |
| `hasPrefix prefix` | 是否有前缀 | `{{ if hasPrefix .URL "/posts" }}` |
| `hasSuffix suffix` | 是否有后缀 | `{{ if hasSuffix .URL ".html" }}` |

### 字典/映射函数

| 函数 | 说明 | 示例 |
|------|------|------|
| `dict` | 创建字典 | `{{ dict "name" "John" "age" 30 }}` |
| `index` | 索引访问 | `{{ index .Params "author" }}` |
| `default value` | 默认值 | `{{ .Params.color \| default "blue" }}` |
| `isset` | 是否存在 | `{{ if isset .Params "author" }}` |

### 类型转换函数

| 函数 | 说明 | 示例 |
|------|------|------|
| `int` | 转整数 | `{{ "123" \| int }}` |
| `float` | 转浮点数 | `{{ "3.14" \| float }}` |
| `string` | 转字符串 | `{{ 123 \| string }}` |
| `jsonify` | JSON 格式 | `{{ . \| jsonify }}` |
| `jsonify (dict "indent" "  ")` | 格式化 JSON | `{{ . \| jsonify (dict "indent" "  ") }}` |

### URL 函数

| 函数 | 说明 | 示例 |
|------|------|------|
| `absURL` | 绝对 URL | `{{ "/images/logo.png" \| absURL }}` |
| `relURL` | 相对 URL | `{{ "/images/logo.png" \| relURL }}` |
| `urlize` | URL 化 | `{{ "My Post" \| urlize }}` → `"my-post"` |
| `anchorize` | 锚点化 | `{{ "My Title" \| anchorize }}` → `"my-title"` |
| `querify` | 查询字符串 | `{{ dict "q" "hugo" \| querify }}` → `"q=hugo"` |

### 资源函数

| 函数 | 说明 | 示例 |
|------|------|------|
| `resources.Get` | 获取资源 | `{{ resources.Get "images/logo.png" }}` |
| `resources.GetMatch` | 匹配资源 | `{{ resources.GetMatch "*.css" }}` |
| `resources.Match` | 匹配多个 | `{{ resources.Match "images/*" }}` |
| `resources.Concat` | 合并资源 | `{{ $css \| resources.Concat "bundle.css" }}` |
| `resources.Minify` | 压缩 | `{{ $css \| resources.Minify }}` |
| `resources.Fingerprint` | 指纹化 | `{{ $css \| resources.Fingerprint }}` |
| `resources.ToCSS` | 转 CSS | `{{ $sass \| resources.ToCSS }}` |
| `resources.ToJS` | 转 JS | `{{ $ts \| resources.ToJS }}` |
| `resources.PostProcess` | 后处理 | `{{ $css \| resources.PostProcess }}` |

### 图像函数

| 函数 | 说明 | 示例 |
|------|------|------|
| `images.Filter` | 图像滤镜 | `{{ $img \| images.Filter (images.GaussianBlur 6) }}` |
| `images.Resize` | 调整大小 | `{{ $img \| images.Resize "300x" }}` |
| `images.Fit` | 适应 | `{{ $img \| images.Fit "300x200" }}` |
| `images.Fill` | 填充 | `{{ $img \| images.Fill "300x200" }}` |
| `images.Crop` | 裁剪 | `{{ $img \| images.Crop "300x200" }}` |

### 其他函数

| 函数 | 说明 | 示例 |
|------|------|------|
| `markdownify` | Markdown 转 HTML | `{{ .Summary \| markdownify }}` |
| `plainify` | 移除 HTML | `{{ .Content \| plainify }}` |
| `emojify` | 表情符号 | `{{ ":smile:" \| emojify }}` |
| `highlight` | 代码高亮 | `{{ .Content \| highlight "go" }}` |
| `htmlEscape` | HTML 转义 | `{{ .Title \| htmlEscape }}` |
| `htmlUnescape` | HTML 反转义 | `{{ .Title \| htmlUnescape }}` |
| `base64Encode` | Base64 编码 | `{{ .Content \| base64Encode }}` |
| `base64Decode` | Base64 解码 | `{{ .Content \| base64Decode }}` |
| `md5` | MD5 哈希 | `{{ .Title \| md5 }}` |
| `sha256` | SHA256 哈希 | `{{ .Title \| sha256 }}` |
| `printf format` | 格式化输出 | `{{ printf "%s - %s" .Title .Site.Title }}` |
| `len` | 长度 | `{{ len .Pages }}` |
| `seq` | 序列 | `{{ seq 1 5 }}` → `[1 2 3 4 5]` |
| `apply` | 应用函数 | `{{ .Pages \| apply "Title" \| upper }}` |

---

## 控制结构

### 条件判断

```go
// 简单 if
{{ if .IsPage }}
  <p>这是单页</p>
{{ end }}

// if-else
{{ if .IsHome }}
  <h1>首页</h1>
{{ else }}
  <h1>{{ .Title }}</h1>
{{ end }}

// if-else if-else
{{ if eq .Kind "home" }}
  <h1>首页</h1>
{{ else if eq .Kind "section" }}
  <h1>章节页</h1>
{{ else }}
  <h1>单页</h1>
{{ end }}

// 逻辑运算符
{{ if and .IsPage .Params.featured }}
  <span>精选</span>
{{ end }}

{{ if or .IsPage .IsSection }}
  <p>页面或章节</p>
{{ end }}

{{ if not .Draft }}
  <p>已发布</p>
{{ end }}
```

### 比较运算符

| 运算符 | 说明 | 示例 |
|--------|------|------|
| `eq` | 等于 | `{{ if eq .Kind "page" }}` |
| `ne` | 不等于 | `{{ if ne .Kind "page" }}` |
| `lt` | 小于 | `{{ if lt .Weight 10 }}` |
| `le` | 小于等于 | `{{ if le .Weight 10 }}` |
| `gt` | 大于 | `{{ if gt .Weight 10 }}` |
| `ge` | 大于等于 | `{{ if ge .Weight 10 }}` |

### 循环

```go
// 基本循环
{{ range .Pages }}
  <article>
    <h2>{{ .Title }}</h2>
  </article>
{{ end }}

// 带索引
{{ range $index, $page := .Pages }}
  <div class="item-{{ $index }}">
    {{ $page.Title }}
  </div>
{{ end }}

// 带键值
{{ range $key, $value := .Params }}
  <p>{{ $key }}: {{ $value }}</p>
{{ end }}

// 空值处理
{{ range .Pages }}
  {{ .Title }}
{{ else }}
  <p>没有页面</p>
{{ end }}

// 限制数量
{{ range first 5 .Pages }}
  {{ .Title }}
{{ end }}
```

### With 语句

```go
// 简化变量访问
{{ with .Site.Params }}
  <p>{{ .description }}</p>
{{ end }}

// 空值处理
{{ with .Params.author }}
  <p>作者：{{ . }}</p>
{{ else }}
  <p>未知作者</p>
{{ end }}
```

### 变量赋值

```go
// 定义变量
{{ $title := .Title }}
{{ $title }}

// 条件赋值
{{ $color := "blue" }}
{{ if .Params.color }}
  {{ $color = .Params.color }}
{{ end }}

// 在 with 块内
{{ with .Site.Params }}
  {{ $logo := .logo }}
  <img src="{{ $logo }}">
{{ end }}
```

---

## 模板组织

### Partials（部分模板）

```go
// 包含 partial
{{ partial "header.html" . }}

// 传递数据
{{ partial "card.html" (dict "title" "标题" "content" "内容") }}

// 传递多个参数
{{ partial "card.html" (dict 
  "title" .Title 
  "content" .Content 
  "date" .Date
)}}
```

**文件位置**：
- `layouts/_partials/header.html` → `{{ partial "header" . }}`
- `layouts/_partials/docs/footer.html` → `{{ partial "docs/footer" . }}`

### Template Blocks（模板块）

```go
// 定义块
{{ define "main" }}
  <div class="content">
    {{ .Content }}
  </div>
{{ end }}

// 调用块
{{ template "main" . }}

// 块可以有默认内容
{{ block "sidebar" . }}
  <aside>默认侧边栏</aside>
{{ end }}
```

### Shortcodes（短代码）

```go
// 在模板中使用 shortcode
{{ .Render "shortcode-name" }}

// 在内容中使用（Markdown）
{{< shortcode-name >}}
内容
{{< /shortcode-name >}}

// 带参数
{{< shortcode-name param="value" >}}
内容
{{< /shortcode-name >}}
```

**Shortcode 文件位置**：
- `layouts/_shortcodes/shortcode-name.html`

**Shortcode 内部变量**：
```go
{{ .Get "param" }}        // 获取参数
{{ .Get "param" | default "default" }}  // 带默认值
{{ .Inner }}              // 内部内容
{{ .Page }}               // 当前页面
{{ .Site }}               // 站点对象
{{ .Position }}           // 位置信息
```

---

## Hugo 特定功能

### 页面查找

```go
// 查找页面
{{ .Site.GetPage "/posts/my-post" }}
{{ .Site.GetPage "section" "posts" }}
{{ .Site.GetPage "page" "posts/my-post" }}
{{ .Site.GetPage "taxonomy" "tags" "hugo" }}
{{ .Site.GetPage "taxonomyTerm" "tags" }}

// 使用
{{ $page := .Site.GetPage "/posts/my-post" }}
{{ $page.Title }}
```

### 分类法（Taxonomies）

```go
// 获取所有标签
{{ range .Site.Taxonomies.tags }}
  <a href="{{ .Page.Permalink }}">{{ .Page.Title }}</a>
  <span>({{ .Count }})</span>
{{ end }}

// 获取当前页面的标签
{{ range .GetTerms "tags" }}
  <span class="tag">{{ .LinkTitle }}</span>
{{ end }}
```

### 菜单（Menus）

```go
// 遍历菜单
{{ range .Site.Menus.main }}
  <a href="{{ .URL }}">{{ .Name }}</a>
  {{ if .HasChildren }}
    <ul>
      {{ range .Children }}
        <li><a href="{{ .URL }}">{{ .Name }}</a></li>
      {{ end }}
    </ul>
  {{ end }}
{{ end }}

// 菜单项属性
.URL              // URL
.Name             // 名称
.Title            // 标题
.Identifier       // 标识符
.Pre              // 前置内容
.Post             // 后置内容
.Weight           // 权重
.Parent           // 父菜单
.Children         // 子菜单
.HasChildren      // 是否有子菜单
.Page             // 关联的页面
```

### 分页（Pagination）

```go
{{ $paginator := .Paginate .Pages }}
{{ range $paginator.Pages }}
  {{ .Title }}
{{ end }}

// 分页变量
$paginator.PageNumber    // 当前页码
$paginator.TotalPages    // 总页数
$paginator.HasPrev       // 是否有上一页
$paginator.HasNext       // 是否有下一页
$paginator.Prev          // 上一页
$paginator.Next          // 下一页
$paginator.First         // 第一页
$paginator.Last          // 最后一页
```

### 资源（Resources）

```go
// 获取资源
{{ $image := resources.Get "images/logo.png" }}
{{ $css := resources.Get "css/style.css" }}

// 处理资源
{{ $resized := $image.Resize "300x" }}
{{ $minified := $css | resources.Minify }}
{{ $fingerprinted := $css | resources.Fingerprint }}

// 使用资源
<img src="{{ $resized.RelPermalink }}">
<link rel="stylesheet" href="{{ $fingerprinted.RelPermalink }}">
```

### 多语言（i18n）

```go
// 翻译
{{ i18n "key" }}
{{ i18n "key" (dict "count" 5) }}

// 翻译文件位置
// i18n/en.yaml
// i18n/zh.yaml
```

---

## 常用模式

### 条件渲染

```go
{{ if .Params.image }}
  <img src="{{ .Params.image }}">
{{ end }}

{{ with .Params.author }}
  <p>作者：{{ . }}</p>
{{ end }}
```

### 列表渲染

```go
{{ range first 5 .Pages }}
  <article>
    <h2><a href="{{ .Permalink }}">{{ .Title }}</a></h2>
    <time>{{ .Date.Format "2006-01-02" }}</time>
  </article>
{{ end }}
```

### 标签云

```go
{{ range .Site.Taxonomies.tags.ByCount }}
  <a href="{{ .Page.Permalink }}" style="font-size: {{ mul .Count 2 }}px">
    {{ .Page.Title }} ({{ .Count }})
  </a>
{{ end }}
```

### 面包屑导航

```go
{{ $current := . }}
{{ range $current.Ancestors.Reverse }}
  <a href="{{ .Permalink }}">{{ .Title }}</a> /
{{ end }}
<span>{{ $current.Title }}</span>
```

### 相关文章

```go
{{ $related := .Site.RegularPages.Related . | first 5 }}
{{ range $related }}
  <a href="{{ .Permalink }}">{{ .Title }}</a>
{{ end }}
```

### 条件类名

```go
<div class="page{{ if .IsHome }} home{{ end }}{{ if .IsPage }} single{{ end }}">
```

### 图片处理

```go
{{ $image := .Resources.GetMatch "featured.*" }}
{{ if $image }}
  {{ $resized := $image.Fill "800x400" }}
  <img src="{{ $resized.RelPermalink }}" alt="{{ .Title }}">
{{ end }}
```

### 代码高亮

```go
{{ .Content | highlight "go" }}
```

### SEO 元标签

```go
<meta name="description" content="{{ .Description | default .Summary | plainify }}">
<meta property="og:title" content="{{ .Title }}">
<meta property="og:description" content="{{ .Summary | plainify }}">
<meta property="og:image" content="{{ .Params.image | absURL }}">
```

---

## 调试技巧

### 输出变量

```go
{{ . }}                                    // 输出整个上下文
{{ . | jsonify }}                          // JSON 格式
{{ . | jsonify (dict "indent" "  ") }}     // 格式化 JSON
{{ printf "%#v" . }}                       // Go 格式
```

### 输出特定变量

```go
<p>标题：{{ .Title }}</p>
<p>类型：{{ .Kind }}</p>
<p>参数：{{ .Params | jsonify }}</p>
<p>URL：{{ .Permalink }}</p>
```

### 条件调试

```go
{{ if .Site.Params.Debug }}
  <pre>{{ . | jsonify (dict "indent" "  ") }}</pre>
{{ end }}
```

---

## 性能优化

### 避免重复计算

```go
{{ $pages := .Pages }}
{{ $count := len $pages }}
{{ range $pages }}
  {{ .Title }}
{{ end }}
```

### 使用 where 过滤

```go
{{ $featured := where .Pages "Params.featured" true }}
{{ range $featured }}
  {{ .Title }}
{{ end }}
```

### 限制数量

```go
{{ range first 10 .Pages }}
  {{ .Title }}
{{ end }}
```

---

## 常见错误

### 1. 忘记传递上下文

```go
// 错误
{{ partial "header" }}

// 正确
{{ partial "header" . }}
```

### 2. 在 range 中丢失上下文

```go
// 错误
{{ range .Pages }}
  {{ .Title }}
  {{ partial "card" }}  // 缺少上下文
{{ end }}

// 正确
{{ range .Pages }}
  {{ .Title }}
  {{ partial "card" . }}  // 传递当前页面
{{ end }}
```

### 3. 变量作用域

```go
// 错误
{{ if .IsPage }}
  {{ $title := .Title }}
{{ end }}
{{ $title }}  // 变量不存在

// 正确
{{ $title := "" }}
{{ if .IsPage }}
  {{ $title = .Title }}
{{ end }}
{{ $title }}
```

---

## 参考资源

- **Hugo 模板文档**: https://gohugo.io/templates/
- **Go 模板语法**: https://pkg.go.dev/text/template
- **Hugo 函数列表**: https://gohugo.io/functions/
- **Hugo 变量列表**: https://gohugo.io/variables/

---

**最后更新**: 2026-01-20
