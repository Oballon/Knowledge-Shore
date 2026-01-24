## Hugoplate 本地构建style失败

### 问题分析
```
1. 本地构建时baseURL="/", relativeURLs = true，否则文件构建地址无法正确指向
2. 本地构建，file://协议预览时，应取消SRI与CORS，避免因SRI验证导致资源无法加载
```

### 解决方法
```
将themes/hugoplate/layouts/_partials/essentials/下scripts.html与style.html文件中的integrity与crossorigin条目注释，
即可移除public目录中*.html的integrity与crossorigin条目，SRI验证问题便可解决（.toml添加disableSRI无效）
```
### SRI（Subresource Integrity）子资源完整性
SRI作为一种安全策略，通过校验外部资源的加密哈希值，确保其未被篡改。在Hugo中，SRI通常通过资源管道（如 resources.Get）和 integrity参数控制

### CORS(Cross-Origin Resource Sharing)跨资源共享
CORS允许Web应用从不同源（域、协议、端口）安全地加载资源，anonymous表示跨域请求不携带凭据（如cookies、HTTP认证等）

### SRI与CORS关系
当使用integrity属性时，必须同时设置crossorigin属性，否则浏览器会忽略SRI检查
``` html
integrity="sha256-77w69LDlq2rVoYSwSHOuQ876b0fZfK153GxAylw5kPQ="
crossorigin=anonymous
```

## `$$`无法编译问题

### 问题原因
使用 Goldmark 处理 Markdown，将 $$ 块当作普通段落文本，空行会被分割成多个段落，破坏 $$ 分隔符，Hugo 将其分割成多个段落
构建后的 HTML 中，$$ 块被包在 <p> 标签内，导致markdown渲染器无法正确识别

### 配置完成总结

1. 修改了 hugo.toml

启用了 Goldmark 的 passthrough 扩展

配置 $$ 作为块级数学公式分隔符

配置 `$...$` 作为内联数学公式分隔符

2. 创建了 Render Hooks

layouts/_default/_markup/render-passthrough-block.html - 处理 `$$...$$` 块

layouts/_default/_markup/render-passthrough-inline.html - 处理 `$...$` 内联公式

3. 在 test.md 中添加了 KaTeX 激活

添加了 {{< katex />}} shortcode 来激活 KaTeX 的 auto-render 功能

工作原理：
1. Passthrough 扩展：Hugo 的 passthrough 扩展会识别 $$...$$ 块，并将其传递给 render hook 处理
2. Render Hook：render hook 输出完整的 $$...$$ 块，保留分隔符
3. KaTeX Auto-render：页面加载时，KaTeX 的 auto-render 脚本会扫描页面，找到所有 $$...$$ 块并渲染为数学公式

## 字段解释

    {"left": "$$", "right": "$$", "display": true},

display: true = 独立成行，display: false = 嵌入文本

## Katex自动加载

### 问题描述

hugo-book需在文件头部添加`{{< katex />}}`，用来加载Katex，实现`$$`块的正常使用

### 解决方法

创建了自动加载 KaTeX 的注入文件

文件位置： layouts/_partials/docs/inject/body.html
该文件会在所有页面的 `</body>` 标签前自动加载 KaTeX，无需在每个页面手动添加 `{{< katex />}}`

工作原理：
1. Hugo 主题的注入机制：hugo-book 主题在 `baseof.html` 中提供了 `{{ partial "docs/inject/body" . }}` 注入点
2. 自动加载：创建的`body.html` 会在每个页面自动加载 KaTeX 的 CSS 和 JS 文件
3. 智能检测：使用 Page.Store 确保 KaTeX 只加载一次，避免重复加载


## delimiters区别

### hugo.toml 中的 delimiters

作用：

让 Hugo 识别这些分隔符，并将它们之间的内容原样保留（passthrough）

防止 Markdown 处理这些内容，确保数学公式不被误解析

这是预处理阶段，发生在 KaTeX 渲染之前

### katex.json 中的 delimiters

作用：

定义 KaTeX 识别哪些分隔符

指定每个分隔符是块级（display: true）还是行内（display: false）

这是渲染阶段，KaTeX 会将这些分隔符之间的内容渲染为数学公式

## 图片无法渲染问题

### 问题原因

本地预览要求pic-advance-math/ 路径（不带 ../），网页构建要求 ../pic-advance-math/ 路径

### 解决方案

#### 启用 BookPortableLinks 配置
在 hugo.toml 中添加了 BookPortableLinks = 'warning'
用于处理 Markdown 格式的图片引用
#### 修改所有图片路径
将所有图片路径从 ../pic-xxx/ 改为 pic-xxx/（去掉 ../ 前缀）
涉及 17 个 markdown 文件

#### 创建自定义处理机制
创建了 layouts/_partials/docs/process-html-images.html - 处理 HTML 标签中的图片路径

创建了 layouts/single.html - 覆盖主题默认模板，在渲染时处理 HTML 中的图片路径，自动将 pic-xxx/ 转换为 ../pic-xxx/（仅在构建时）

#### 工作原理
本地预览：Markdown 文件中的路径为 pic-advance-math/xxx.png，与图片在同一目录，预览器可正常显示

网站构建：自定义处理机制将 HTML 中的 pic-xxx/ 自动转换为 ../pic-xxx/，构建后的网站可正常显示