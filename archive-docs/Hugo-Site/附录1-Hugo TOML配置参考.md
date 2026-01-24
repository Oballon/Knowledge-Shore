# Hugo TOML 配置文件参考

## 📖 目录

1. [配置文件位置与格式](#配置文件位置与格式)
2. [基础配置](#基础配置)
3. [目录配置](#目录配置)
4. [构建选项](#构建选项)
5. [Markup 配置](#markup-配置)
6. [多语言配置](#多语言配置)
7. [菜单配置](#菜单配置)
8. [分类法配置](#分类法配置)
9. [输出格式](#输出格式)
10. [自定义参数](#自定义参数)
11. [服务器配置](#服务器配置)
12. [完整配置示例](#完整配置示例)

---

## 配置文件位置与格式

### 配置文件位置

Hugo 按以下顺序查找配置文件：

1. `hugo.toml`（根目录，推荐）
2. `config.toml`（根目录，旧版本）
3. `config/` 目录下的配置文件

### 多配置文件模式

在 `config/` 目录下可以拆分配置：

```
config/
├── _default/
│   ├── hugo.toml      # 基础配置
│   ├── params.toml    # 自定义参数
│   └── menus.toml     # 菜单配置
└── production/
    ├── hugo.toml      # 生产环境配置（叠加）
    └── params.toml
```

使用 `--environment production` 时，会合并 `production/` 目录的配置。

### 配置文件格式

Hugo 支持三种格式：
- **TOML**（推荐）：`hugo.toml` 或 `config.toml`
- **YAML**：`hugo.yaml` 或 `config.yaml`
- **JSON**：`hugo.json` 或 `config.json`

---

## 基础配置

### 网站基本信息

```toml
# 网站基础 URL（必须）
baseURL = 'https://example.com/'

# 本地开发时使用
# baseURL = '/'
# relativeURLs = true

# 网站标题
title = 'My Website'

# 网站描述
description = '网站描述信息'

# 语言代码（RFC 5646 格式）
languageCode = 'zh-cn'

# 默认内容语言
defaultContentLanguage = 'zh-cn'

# 版权信息
copyright = '© 2024 My Website'

# 主题名称
theme = 'hugo-book'
```

### URL 相关配置

```toml
# 规范化 URL（将相对 URL 转换为绝对 URL）
canonifyURLs = false

# 使用相对 URL
relativeURLs = false

# 禁用路径转小写
disablePathToLower = false

# 使用丑陋的 URL（/page.html 而不是 /page/）
uglyURLs = false
```

---

## 目录配置

```toml
# 内容目录
contentDir = 'content'

# 布局目录
layoutDir = 'layouts'

# 静态文件目录
staticDir = 'static'

# 数据目录
dataDir = 'data'

# 资源目录
assetDir = 'assets'

# 原型模板目录
archetypeDir = 'archetypes'

# i18n 目录
i18nDir = 'i18n'

# 缓存目录
cacheDir = '.hugo_cache'

# 发布目录
publishDir = 'public'
```

---

## 构建选项

```toml
# 包含草稿内容
buildDrafts = false

# 包含过期内容
buildExpired = false

# 包含未来日期的内容
buildFuture = false

# 清理目标目录（删除不在 static 目录中的文件）
cleanDestinationDir = false

# 启用 Git 信息（需要 Git 仓库）
enableGitInfo = false

# 启用 Emoji
enableEmoji = true

# 启用机器人元标签
enableRobotsTXT = true

# 启用 RSS
enableRSS = true

# 自动生成列表标题
capitalizeListTitles = true

# 打印路径警告
printPathWarnings = false

# 日志级别：error, warn, info, debug
logLevel = 'warn'
```

---

## Markup 配置

### Goldmark 渲染器（默认）

```toml
[markup]
  # Goldmark 配置
  [markup.goldmark]
    [markup.goldmark.renderer]
      # 允许原始 HTML（不安全，但功能更强）
      unsafe = true
      
      # 硬换行（两个空格或换行符）
      hardWraps = false
      
      # XHTML 输出
      xhtml = false
      
      # 是否转义 HTML
      unsafe = false

  # 目录配置
  [markup.tableOfContents]
    # 起始级别
    startLevel = 1
    
    # 结束级别
    endLevel = 3
    
    # 有序列表
    ordered = false

  # 代码高亮配置
  [markup.highlight]
    # 高亮样式
    style = 'github'
    
    # 行号
    lineNos = false
    
    # 行号起始数字
    lineNumbersInTable = true
    
    # 不转义字符
    noClasses = false
    
    # 代码折叠
    codeFences = true
    
    # 猜测语法
    guessSyntax = false
    
    # 高亮行
    hl_Lines = ''
    
    # 行号偏移
    lineNoStart = 1
    
    # 锚点
    anchorLineNos = false
    
    # 代码折叠
    codeFences = true

  # 数学公式（KaTeX）
  [markup.goldmark.extensions]
    [markup.goldmark.extensions.math]
      enable = true
      inline = true
      block = true
```

### 代码高亮样式

常用样式：
- `github`（默认）
- `monokai`
- `dracula`
- `base16-snazzy`
- `solarized-dark`
- `solarized-light`

查看所有样式：
```bash
hugo gen chromastyles --style=github
```

---

## 多语言配置

### 单语言配置

```toml
languageCode = 'zh-cn'
defaultContentLanguage = 'zh-cn'
```

### 多语言配置

```toml
[languages]
  [languages.zh-cn]
    languageName = '简体中文'
    contentDir = 'content'
    weight = 1
    title = '我的网站'
    description = '网站描述'
    
  [languages.en]
    languageName = 'English'
    contentDir = 'content.en'
    weight = 2
    title = 'My Website'
    description = 'Website description'
    
  [languages.ja]
    languageName = '日本語'
    contentDir = 'content.ja'
    weight = 3
    title = '私のウェブサイト'
    languageDirection = 'ltr'  # 或 'rtl'（从右到左）
```

### 语言特定配置

```toml
[languages.zh-cn.params]
  customParam = '中文参数'

[languages.en.params]
  customParam = 'English Param'
```

---

## 菜单配置

### 菜单结构

```toml
[menu]
  # 主菜单
  [[menu.main]]
    name = '首页'
    url = '/'
    weight = 1
    identifier = 'home'
    
  [[menu.main]]
    name = '关于'
    pageRef = '/about/'
    weight = 2
    identifier = 'about'
    
  [[menu.main]]
    name = '博客'
    pageRef = '/posts/'
    weight = 3
    identifier = 'posts'
    parent = 'main'  # 父菜单（可选）
    
  # 页脚菜单
  [[menu.footer]]
    name = '隐私政策'
    url = '/privacy/'
    weight = 10
    
  # 侧边栏菜单（主题特定）
  [[menu.sidebar]]
    name = '文档'
    pageRef = '/docs/'
    weight = 1
```

### 菜单项属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `name` | string | 菜单显示名称 |
| `url` | string | 外部 URL |
| `pageRef` | string | 页面引用（相对于 content 目录） |
| `weight` | int | 排序权重（数字越小越靠前） |
| `identifier` | string | 菜单标识符 |
| `parent` | string | 父菜单标识符 |
| `pre` | string | 前置 HTML（如图标） |
| `post` | string | 后置 HTML |

---

## 分类法配置

```toml
[taxonomies]
  # 默认分类法
  tag = 'tags'
  category = 'categories'
  
  # 自定义分类法
  series = 'series'
  author = 'authors'
```

在内容文件中使用：

```yaml
---
tags: ['Hugo', '静态网站']
categories: ['技术']
series: ['Hugo 教程']
---
```

---

## 输出格式

### 默认输出格式

```toml
[outputs]
  home = ['HTML', 'RSS', 'JSON']
  page = ['HTML']
  section = ['HTML', 'RSS']
  taxonomy = ['HTML', 'RSS']
  term = ['HTML']
```

### 自定义输出格式

```toml
[outputFormats.JSON]
  baseName = 'index'
  mediaType = 'application/json'
  isPlainText = true
  isHTML = false
```

---

## 自定义参数

### 全局参数

```toml
[params]
  # 网站参数
  author = 'John Doe'
  authorEmail = 'john@example.com'
  authorURL = 'https://example.com'
  
  # 社交媒体
  github = 'username'
  twitter = 'username'
  linkedin = 'username'
  
  # 功能开关
  enableComments = true
  enableSearch = true
  enableTOC = true
  
  # 自定义值
  customValue = '自定义内容'
  
  # 嵌套对象
  [params.social]
    github = 'username'
    twitter = 'username'
    
  [params.features]
    search = true
    comments = true
```

### 在模板中使用

```go
{{ .Site.Params.author }}
{{ .Site.Params.social.github }}
{{ .Site.Params.features.search }}
```

---

## 服务器配置

### 开发服务器

```toml
[server]
  port = 1313
  bind = '127.0.0.1'
  
  # 静态文件目录
  staticDir = 'static'
  
  # 中间件
  [[server.headers]]
    for = '/*'
    [server.headers.values]
      X-Frame-Options = 'DENY'
      X-Content-Type-Options = 'nosniff'
      X-XSS-Protection = '1; mode=block'
      
  [[server.headers]]
    for = '/images/*'
    [server.headers.values]
      Cache-Control = 'max-age=31536000, immutable'
```

---

## 其他重要配置

### 永久链接配置

```toml
[permalinks]
  posts = '/:year/:month/:title/'
  pages = '/:slug/'
```

### 分页配置

```toml
[pagination]
  # 每页文章数
  pagerSize = 10
  
  # 分页路径
  path = 'page'
```

### 相关内容配置

```toml
[related]
  # 相关文章数量
  threshold = 80
  
  # 包含的索引
  includeNewer = true
  
  # 要匹配的字段
  indices = ['tags', 'categories']
```

### 安全配置

```toml
[security]
  [security.exec]
    allow = ['^dart-sass-embedded$', '^go$', '^npx$', '^postcss$']
    osEnv = ['(?i)^(PATH|PATHEXT|APPDATA|TMP|TEMP|TERM)$']
    
  [security.funcs]
    getenv = ['^HUGO_']
```

### 图片处理配置

```toml
[imaging]
  # 调整大小
  resampleFilter = 'box'
  
  # 质量
  quality = 75
  
  # 锚点
  anchor = 'smart'
```

---

## 完整配置示例

### 基础配置示例

```toml
# 网站基础配置
baseURL = 'https://example.com/'
title = 'My Website'
description = '网站描述'
languageCode = 'zh-cn'
defaultContentLanguage = 'zh-cn'
theme = 'hugo-book'

# 构建选项
buildDrafts = false
buildFuture = false
enableGitInfo = true

# Markup 配置
[markup]
  [markup.goldmark.renderer]
    unsafe = true
  [markup.tableOfContents]
    startLevel = 1
    endLevel = 3
  [markup.highlight]
    style = 'github'
    lineNos = true

# 菜单配置
[menu]
  [[menu.main]]
    name = '首页'
    url = '/'
    weight = 1
  [[menu.main]]
    name = '关于'
    pageRef = '/about/'
    weight = 2

# 自定义参数
[params]
  author = 'John Doe'
  enableSearch = true
  enableTOC = true
  [params.social]
    github = 'username'
    twitter = 'username'
```

### 多语言配置示例

```toml
baseURL = 'https://example.com/'
defaultContentLanguage = 'zh-cn'

[languages]
  [languages.zh-cn]
    languageName = '简体中文'
    contentDir = 'content'
    weight = 1
    title = '我的网站'
    [languages.zh-cn.params]
      description = '中文描述'
      
  [languages.en]
    languageName = 'English'
    contentDir = 'content.en'
    weight = 2
    title = 'My Website'
    [languages.en.params]
      description = 'English description'

[menu]
  [[menu.main]]
    identifier = 'home'
    name = '首页'
    url = '/'
    weight = 1
  [[menu.main]]
    identifier = 'home-en'
    name = 'Home'
    url = '/en/'
    weight = 1
```

### Hugo Book 主题配置示例

```toml
baseURL = 'https://example.com/'
title = 'Knowledge Shore'
theme = 'hugo-book'
languageCode = 'zh-cn'

# Book 主题配置
disablePathToLower = true
enableGitInfo = true

# Markup
[markup]
  [markup.goldmark.renderer]
    unsafe = true
  [markup.tableOfContents]
    startLevel = 1
  [markup.highlight]
    style = 'base16-snazzy'

# 菜单
[menu]
  [[menu.home]]
    name = '文档'
    pageRef = '/docs/'
    weight = 1

# Book 主题参数
[params]
  BookTheme = 'light'
  BookSection = 'docs'
  BookSearch = true
  BookComments = true
  BookRepo = 'https://github.com/username/repo/'
  BookEditLink = '{{ .Site.Params.BookRepo }}/edit/main/{{ .Path }}'
  BookLastChangeLink = '{{ .Site.Params.BookRepo }}/commit/{{ .GitInfo.Hash }}'
```

---

## 配置验证

### 查看当前配置

```bash
# 查看所有配置
hugo config

# 查看特定配置
hugo config | grep baseURL

# 查看合并后的配置
hugo config --environment production
```

### 常见问题

1. **配置不生效**：检查配置文件位置和格式
2. **多语言不工作**：确保 `languages` 配置正确
3. **菜单不显示**：检查 `menu` 配置和页面 front matter
4. **主题参数无效**：查看主题文档了解支持的参数

---

## 配置文件拆分

### 推荐的文件结构

```
config/
├── _default/
│   ├── hugo.toml      # 基础配置
│   ├── params.toml    # 自定义参数
│   ├── menus.toml     # 菜单配置
│   └── languages.toml # 多语言配置
└── production/
    ├── hugo.toml      # 生产环境覆盖
    └── params.toml
```

### 拆分示例

**config/_default/hugo.toml**
```toml
baseURL = '/'
title = 'My Website'
theme = 'hugo-book'
```

**config/_default/params.toml**
```toml
[params]
  author = 'John Doe'
  enableSearch = true
```

**config/_default/menus.toml**
```toml
[[menu.main]]
  name = '首页'
  url = '/'
  weight = 1
```

---

## 环境变量

Hugo 支持通过环境变量覆盖配置：

```bash
# 设置 baseURL
export HUGO_BASEURL=https://example.com/

# 设置环境
export HUGO_ENVIRONMENT=production
```

在配置文件中使用：

```toml
baseURL = env('HUGO_BASEURL', 'http://localhost:1313/')
```

---

## 相关文档

- **Hugo 官方配置文档**：https://gohugo.io/getting-started/configuration/
- **所有配置选项**：https://gohugo.io/configuration/all/
- **多语言配置**：https://gohugo.io/content-management/multilingual/
- **菜单配置**：https://gohugo.io/content-management/menus/

---

## 快速参考

### 最常用配置

```toml
baseURL = 'https://example.com/'
title = 'My Website'
theme = 'hugo-book'
languageCode = 'zh-cn'

[markup.goldmark.renderer]
  unsafe = true

[params]
  author = 'Your Name'
```

### 配置优先级

1. 命令行参数（最高）
2. 环境变量
3. 配置文件（`config/production/` > `config/_default/`）
4. 默认值（最低）
