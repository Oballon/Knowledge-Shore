
# Hugo Frontmatter 完整参考

## 📖 目录

1. [Frontmatter 格式](#frontmatter-格式)
2. [标准字段](#标准字段)
3. [日期时间字段](#日期时间字段)
4. [内容控制字段](#内容控制字段)
5. [分类法字段](#分类法字段)
6. [菜单字段](#菜单字段)
7. [布局与模板字段](#布局与模板字段)
8. [SEO 字段](#seo-字段)
9. [自定义参数](#自定义参数)
10. [常用示例](#常用示例)

---

## Frontmatter 格式

Hugo 支持三种格式的 frontmatter：**TOML**、**YAML** 和 **JSON**。

### TOML 格式

```toml
+++
title = "文章标题"
date = 2026-01-20T10:00:00+08:00
draft = false
+++
```

### YAML 格式（最常用）

```yaml
---
title: "文章标题"
date: 2026-01-20T10:00:00+08:00
draft: false
---
```

### JSON 格式

```json
{
  "title": "文章标题",
  "date": "2026-01-20T10:00:00+08:00",
  "draft": false
}
```

**注意**：
- Frontmatter 必须位于文件开头
- 格式由分隔符识别：`+++` (TOML)、`---` (YAML)、`{ }` (JSON)
- 文件扩展名不影响 frontmatter 格式识别

---

## 标准字段

### 基础字段

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `title` | string | 页面标题 | `"我的文章"` |
| `linkTitle` | string | 链接中显示的标题（覆盖 title） | `"简短标题"` |
| `description` | string | 页面描述（用于 SEO） | `"文章摘要描述"` |
| `summary` | string | 摘要（手动设置，覆盖自动生成） | `"这是摘要..."` |
| `keywords` | array | 关键词数组 | `["Hugo", "静态网站"]` |

**示例**：

```yaml
---
title: "Hugo 入门指南"
linkTitle: "入门"
description: "学习如何使用 Hugo 构建静态网站"
summary: "本文介绍 Hugo 的基本使用方法"
keywords: ["Hugo", "静态网站", "博客"]
---
```

---

## 日期时间字段

### 日期字段

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `date` | datetime | 创建/发布日期 | `2026-01-20T10:00:00+08:00` |
| `publishDate` | datetime | 发布日期（覆盖 date） | `2026-01-20T10:00:00+08:00` |
| `lastmod` | datetime | 最后修改日期 | `2026-01-21T15:30:00+08:00` |
| `expiryDate` | datetime | 过期日期（过期后不显示） | `2026-12-31T23:59:59+08:00` |

### 日期格式

支持多种日期格式：

```yaml
---
# ISO 8601 格式（推荐）
date: 2026-01-20T10:00:00+08:00

# 日期时间
date: 2026-01-20 10:00:00

# 仅日期
date: 2026-01-20

# Unix 时间戳
date: 1705737600
---
```

**示例**：

```yaml
---
date: 2026-01-20T10:00:00+08:00
publishDate: 2026-01-20T10:00:00+08:00
lastmod: 2026-01-21T15:30:00+08:00
expiryDate: 2026-12-31T23:59:59+08:00
---
```

---

## 内容控制字段

### 发布控制

| 字段 | 类型 | 说明 | 默认值 |
|------|------|------|--------|
| `draft` | boolean | 是否为草稿（不发布） | `false` |
| `publishDate` | datetime | 发布日期（未来日期会延迟发布） | 当前时间 |
| `expiryDate` | datetime | 过期日期（过期后不显示） | - |

### 排序与权重

| 字段 | 类型 | 说明 | 默认值 |
|------|------|------|--------|
| `weight` | int | 排序权重（数字越小越靠前） | `0` |
| `slug` | string | URL 别名（覆盖文件名） | 文件名 |

**示例**：

```yaml
---
draft: false
weight: 10
slug: "my-custom-url"
---
```

---

## 分类法字段

### 标签和分类

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `tags` | array | 标签数组 | `["Hugo", "博客"]` |
| `categories` | array | 分类数组 | `["技术", "教程"]` |

### 自定义分类法

在 `config.toml` 中定义自定义分类法：

```toml
[taxonomies]
tag = "tags"
category = "categories"
series = "series"  # 自定义分类法
```

然后在 frontmatter 中使用：

```yaml
---
tags: ["Hugo", "静态网站"]
categories: ["技术"]
series: ["Hugo 教程系列"]
---
```

**示例**：

```yaml
---
tags:
  - Hugo
  - 静态网站
  - 博客
categories:
  - 技术
  - 教程
series:
  - Hugo 入门系列
---
```

---

## 菜单字段

### 菜单配置

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `menu` | object | 菜单配置对象 | 见下方 |

### 菜单对象属性

```yaml
---
menu:
  main:                    # 菜单名称（如 main, footer）
    name: "关于"           # 菜单显示名称
    identifier: "about"    # 菜单标识符
    url: "/about/"         # URL（可选，默认使用页面 URL）
    weight: 10             # 排序权重
    pre: "<i>"             # 前置内容（HTML）
    post: "</i>"           # 后置内容（HTML）
    parent: "parent-id"    # 父菜单标识符
---
```

**示例**：

```yaml
---
menu:
  main:
    name: "首页"
    weight: 1
    identifier: "home"
  footer:
    name: "隐私政策"
    weight: 10
---
```

---

## 布局与模板字段

### 布局控制

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `type` | string | 内容类型（影响模板选择） | `"posts"` |
| `layout` | string | 指定布局模板 | `"single"` |
| `outputs` | array | 指定输出格式 | `["HTML", "RSS"]` |

**示例**：

```yaml
---
type: "posts"
layout: "single"
outputs:
  - HTML
  - RSS
---
```

---

## SEO 字段

### SEO 元数据

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `description` | string | Meta 描述 | `"页面描述"` |
| `keywords` | array | Meta 关键词 | `["关键词1", "关键词2"]` |
| `images` | array | Open Graph 图片 | `["/images/og-image.jpg"]` |
| `aliases` | array | URL 别名（301 重定向） | `["/old-url"]` |

### Open Graph / Twitter Card

```yaml
---
# Open Graph
images:
  - "/images/og-image.jpg"
og:
  title: "Open Graph 标题"
  description: "Open Graph 描述"
  image: "/images/og-image.jpg"
  type: "article"

# Twitter Card
twitter:
  card: "summary_large_image"
  title: "Twitter 标题"
  description: "Twitter 描述"
  image: "/images/twitter-image.jpg"
---
```

**示例**：

```yaml
---
description: "这是页面的 SEO 描述"
keywords: ["Hugo", "SEO", "静态网站"]
images:
  - "/images/featured.jpg"
aliases:
  - "/old-post-url"
  - "/another-alias"
---
```

---

## 自定义参数

### Params 对象

所有自定义参数都放在 `params` 下（或直接作为顶级字段）：

```yaml
---
# 方式 1：直接作为顶级字段（推荐）
author: "张三"
featured: true
image: "/images/featured.jpg"

# 方式 2：放在 params 下
params:
  author: "张三"
  featured: true
  image: "/images/featured.jpg"
---
```

### 常用自定义参数示例

```yaml
---
# 作者信息
author: "张三"
author_email: "zhangsan@example.com"
author_url: "https://example.com"

# 特色内容
featured: true
featured_image: "/images/featured.jpg"

# 阅读时间
reading_time: 5  # 分钟

# 评论
comments: true
disqus_shortname: "mysite"

# 目录
toc: true
toc_float: true

# 代码高亮
highlight: true
highlight_languages:
  - go
  - python
  - javascript

# 数学公式
math: true

# 自定义 CSS/JS
custom_css:
  - "/css/custom.css"
custom_js:
  - "/js/custom.js"
---
```

---

## 常用示例

### 博客文章

```yaml
---
title: "Hugo 入门指南"
date: 2026-01-20T10:00:00+08:00
lastmod: 2026-01-21T15:30:00+08:00
draft: false
author: "张三"
description: "学习如何使用 Hugo 构建静态网站"
summary: "本文介绍 Hugo 的基本使用方法，包括安装、配置和部署。"
tags:
  - Hugo
  - 静态网站
  - 博客
categories:
  - 技术
  - 教程
featured: true
featured_image: "/images/hugo-featured.jpg"
reading_time: 10
toc: true
---
```

### 页面（Page）

```yaml
---
title: "关于我们"
date: 2026-01-20T10:00:00+08:00
layout: "page"
menu:
  main:
    name: "关于"
    weight: 5
    identifier: "about"
---
```

### 章节（Section）

```yaml
---
title: "博客"
date: 2026-01-20T10:00:00+08:00
type: "posts"
weight: 1
description: "所有博客文章"
---
```

### 带菜单的页面

```yaml
---
title: "文档首页"
date: 2026-01-20T10:00:00+08:00
menu:
  main:
    name: "文档"
    weight: 10
    identifier: "docs"
  sidebar:
    name: "文档"
    weight: 1
    parent: "main"
---
```

### 带分类法的文章

```yaml
---
title: "Hugo 模板语法"
date: 2026-01-20T10:00:00+08:00
tags:
  - Hugo
  - 模板
  - Go
categories:
  - 技术
series:
  - Hugo 教程系列
weight: 2
---
```

### SEO 优化文章

```yaml
---
title: "Hugo SEO 最佳实践"
date: 2026-01-20T10:00:00+08:00
description: "学习如何优化 Hugo 网站的 SEO"
keywords:
  - Hugo
  - SEO
  - 搜索引擎优化
images:
  - "/images/seo-featured.jpg"
og:
  title: "Hugo SEO 最佳实践"
  description: "学习如何优化 Hugo 网站的 SEO"
  image: "/images/og-seo.jpg"
  type: "article"
twitter:
  card: "summary_large_image"
  title: "Hugo SEO 最佳实践"
  description: "学习如何优化 Hugo 网站的 SEO"
  image: "/images/twitter-seo.jpg"
aliases:
  - "/seo-guide"
---
```

### 多语言内容

```yaml
---
title: "Hello World"
date: 2026-01-20T10:00:00+08:00
translations:
  - language: "zh-CN"
    title: "你好世界"
  - language: "en"
    title: "Hello World"
---
```

### 带自定义参数的页面

```yaml
---
title: "产品介绍"
date: 2026-01-20T10:00:00+08:00
params:
  product:
    name: "我的产品"
    price: 99.99
    currency: "CNY"
    features:
      - "功能 1"
      - "功能 2"
      - "功能 3"
    gallery:
      - "/images/product-1.jpg"
      - "/images/product-2.jpg"
      - "/images/product-3.jpg"
  custom_css:
    - "/css/product.css"
  custom_js:
    - "/js/product.js"
---
```

---

## 字段优先级与继承

### 字段优先级

1. **页面 frontmatter**（最高优先级）
2. **站点配置**（`config.toml`）
3. **默认值**

### 字段继承

某些字段可以从父页面继承：

- `type`：继承自父 section
- `layout`：继承自父页面
- `params`：可以合并父页面的 params

---

## 特殊字段说明

### `_build`

控制页面构建行为：

```yaml
---
_build:
  list: true        # 是否出现在列表中
  render: true      # 是否渲染
  publishResources: true  # 是否发布资源
---
```

### `_target`

指定目标输出格式：

```yaml
---
_target:
  kind: "page"
  path: "/custom/path/"
---
```

### `markup`

指定内容标记语言：

```yaml
---
markup: "markdown"  # 或 "org-mode", "rst", "asciidoc"
---
```

---

## 最佳实践

### 1. 始终包含基础字段

```yaml
---
title: "文章标题"
date: 2026-01-20T10:00:00+08:00
draft: false
---
```

### 2. 使用描述性标题和描述

```yaml
---
title: "2026 年 Hugo 最佳实践指南"
description: "全面介绍如何在 2026 年使用 Hugo 构建高性能静态网站"
---
```

### 3. 合理使用标签和分类

```yaml
---
tags:
  - Hugo
  - 静态网站
categories:
  - 技术
---
```

### 4. 设置合适的权重

```yaml
---
weight: 10  # 数字越小越靠前
---
```

### 5. 使用别名处理 URL 变更

```yaml
---
aliases:
  - "/old-url"
  - "/another-old-url"
---
```

### 6. 为重要内容添加特色标记

```yaml
---
featured: true
featured_image: "/images/featured.jpg"
---
```

---

## 模板中访问 Frontmatter

### 访问标准字段

```go
{{ .Title }}              // 标题
{{ .Description }}        // 描述
{{ .Date }}               // 日期
{{ .Params.author }}      // 自定义参数
```

### 访问自定义参数

```go
{{ .Params.author }}                    // 作者
{{ .Params.featured }}                  // 是否特色
{{ .Params.featured_image }}            // 特色图片
{{ .Params.custom_css }}                // 自定义 CSS 数组
{{ range .Params.custom_css }}         // 遍历数组
  <link rel="stylesheet" href="{{ . }}">
{{ end }}
```

### 条件判断

```go
{{ if .Params.featured }}
  <span class="featured">精选</span>
{{ end }}

{{ if isset .Params "author" }}
  <p>作者：{{ .Params.author }}</p>
{{ end }}
```

---

## 常见问题

### 1. Frontmatter 格式错误

**错误**：
```yaml
---
title: "标题"
date: 2026-01-20  # 缺少时间部分
---
```

**正确**：
```yaml
---
title: "标题"
date: 2026-01-20T10:00:00+08:00
---
```

### 2. 日期时区问题

```yaml
---
# 明确指定时区
date: 2026-01-20T10:00:00+08:00
---
```

### 3. 数组格式错误

**错误**：
```yaml
tags: Hugo, 静态网站
```

**正确**：
```yaml
tags:
  - Hugo
  - 静态网站
```

或

```yaml
tags: ["Hugo", "静态网站"]
```

### 4. 布尔值格式

```yaml
---
draft: true    # 正确
draft: "true"  # 错误（字符串）
draft: yes     # 错误（YAML 中 yes 是字符串）
---
```

---

## 参考资源

- **Hugo Frontmatter 文档**: https://gohugo.io/content-management/front-matter/
- **Hugo 变量文档**: https://gohugo.io/variables/
- **Hugo 分类法文档**: https://gohugo.io/content-management/taxonomies/
- **Hugo 菜单文档**: https://gohugo.io/content-management/menus/
- **YAML 语法**: https://yaml.org/spec/
- **TOML 语法**: https://toml.io/

---

**最后更新**: 2026-01-23
