---
title: "页面标题"

---

## 介绍

Hugo是一款用Go语言编写的高性能静态网站生成器，以其极致的构建速度和简洁的设计理念而广受欢迎

## Hugo 目录结构

```
Hugo-site/
├── archetypes/  包含新内容创建时的模板；若无，则在themes中查找对应目录
│   ├── posts.md  对应posts目录内容的模板
│   └── default.md  默认模板
├── assets/  包含通过资源管道传递的全局资源，CSS、Sass、JavaScript 等
├── config/  根目录无配置文件时，在config中寻找
│   ├── _default/ 默认构建目录，以目录下所有配置文件配置
│   │   ├── hugo.toml
│   │   └── params.toml
│   └── production/  添加--environment production，将此目录配置与默认叠加
│       ├── hugo.toml
│       └── params.toml
├── content/   网站内容目录
├── data/
├── i18n/   包含多语言站点的翻译表
├── layouts/  **包含将内容、数据和资源转换为完整网站的模板**
├── public/   包含发布的网站，构建站点时创建
├── resources/  包含 Hugo 资源管道的缓存输出，构建站点时创建
├── static/  包含静态资源文件，子目录会被直接复制到public，不经过任何处理
└── themes/   包含一个或多个主题，每个主题位于自己的子目录中

Hugo构建时，遵循固定的目录规范，应严格按照Hugo的目录规范存放文件
```

## 文件合并策略

Hugo 会**合并**所有 `static/` 目录的内容，处理顺序如下：

```
优先级从高到低：
1. 站点根目录 static/          (最高优先级)
2. 主题目录 themes/*/static/   (较低优先级)

只有完全相同的路径才会被覆盖，保持目录结构
```
`archetypes/` `assets/` `data/` `i18n/` `layouts/` 目录的合并覆盖原则与`static/`一致，但不是单纯复制，会经过其他对应步骤

## 模板命名规范

### layout模板固定名称
`baseof.html`基础模板：根模板，定义页面基本结构（其他模板通过 {{ define }} 扩展它）

`index.html`首页(home)：匹配content/_index.md

`single.html`单页(page)：匹配普通内容文件

`list.html` 列表页(section)：匹配非根目录_index.md

`taxonomy.html` Taxonomy列表(taxonomy)：匹配content/tags/_index.md（taxonomy 目录，tags、categories（可自定义其他））

`term.html` Term页(term)：匹配content/tags/hugo/_index.md（taxonomy 子目录）

`404.html` 404错误页：放与根目录

`sitmap.html` 站点地图：放于根目录，自动生成，访问 /sitemap.xml

`robots.txt` robots.txt：放于根目录

## 标准layouts目录结构
```
layouts/
├── baseof.html                    # ✅ 基础模板（根目录）
├── index.html                     # ✅ 首页模板
├── 404.html                       # ✅ 404 错误页
├── sitemap.xml                    # ✅ 站点地图
├── robots.txt                     # ✅ robots.txt
│
├── single.html                    # ✅ 单页模板（根目录）
├── list.html                      # ✅ 列表页模板（根目录）
├── taxonomy.html                  # ✅ Taxonomy 列表模板（根目录）
├── term.html                      # ✅ Term 页面模板（根目录）
│
├── [type]/                        # ⚠️ 特定类型目录（可选）
│   ├── baseof.html                # ✅ 类型特定基础模板
│   ├── single.html                # ✅ 类型特定单页模板
│   └── list.html                  # ✅ 类型特定列表页模板
│
├── [taxonomy]/                    # ⚠️ Taxonomy 目录（可选）
│   ├── taxonomy.html              # ✅ Taxonomy 特定列表模板
│   └── term.html                  # ✅ Taxonomy 特定 Term 模板
│
├── [layout-name].html            # ⚠️ 自定义 Layout（可选）
│
├── _partials/                     # ✅ 部分模板目录（固定名称）
│   ├── header.html                # ⚠️ 文件名自定义
│   ├── footer.html                # ⚠️ 文件名自定义
│   ├── menu.html                  # ⚠️ 文件名自定义
│   └── [name].html                # ⚠️ 任意名称
│
└── _shortcodes/                   # ✅ 短代码目录（固定名称）
    ├── katex.html                 # ⚠️ 文件名自定义
    ├── pdf.html                   # ⚠️ 文件名自定义
    └── [name].html                # ⚠️ 任意名称
```

## Shortcodes

Shortcodes 是在 Markdown 内容中使用的自定义标签，用于插入复杂的 HTML 结构或功能，有多种使用方式：

``` go-html-template
{{< shortcode-name >}}

{{< shortcode-name text="查看详情" url="/about" >}}

{{< shortcode-name type="warning" >}}
这是一个警告信息。
{{< /shortcode-name >}}
```

## Partials使用

Partials 是可复用的模板片段，用于在多个模板中共享相同的 HTML 结构

```
{{ partial "docs/html-head" . }}
```

## 常用命令

``` cmd
hugo  构建静态网站，生成于public目录
hugo server  启动本地开发服务器，新版本会自动完成构建（public）
hugo new ...
hugo version
hugo list ...
```

