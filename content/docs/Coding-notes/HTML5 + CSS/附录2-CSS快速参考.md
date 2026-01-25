---
title: "CSS快速参考"
---

# CSS 快速参考

CSS选择器及属性极其庞杂，具体使用具体查询，无法快速吸收

## 📖 目录

1. [CSS 基础](#css-基础)
2. [选择器](#选择器)
3. [常用属性](#常用属性)
4. [布局](#布局)
5. [响应式设计](#响应式设计)
6. [动画与过渡](#动画与过渡)
7. [实用技巧](#实用技巧)

---

## CSS 基础

CSS（层叠样式表）用于描述HTML元素的显示方式，控制网页的外观和布局。CSS通过选择器选择元素，然后应用样式属性来改变元素的外观。

### 引入方式

CSS可以通过多种方式引入到HTML文档中，每种方式都有其特点和适用场景：

- **内联样式**：直接在HTML元素的`style`属性中编写CSS，优先级最高，但不利于维护和复用，仅适用于临时样式或特定场景。
- **内部样式表**：在HTML文档的`<style>`标签中编写CSS，适合单页面样式，但无法在多个页面间复用。
- **外部样式表**（推荐）：将CSS代码保存在独立的`.css`文件中，通过`<link>`标签引入，便于维护、复用和缓存，是生产环境的最佳实践。
- **@import导入**：在CSS文件内部使用`@import`导入其他CSS文件，但会影响页面加载性能，不推荐使用。

```css
/* 1. 内联样式 */
<div style="color: red;">文本</div>

/* 2. 内部样式表 */
<style>
  body { color: red; }
</style>

/* 3. 外部样式表（推荐） */
<link rel="stylesheet" href="style.css">

/* 4. 导入 */
@import url("style.css");
```

### 语法结构

CSS的基本语法由三部分组成：

- **选择器（Selector）**：用于选择要应用样式的HTML元素，可以是标签名、类名、ID、属性等。
- **属性（Property）**：要修改的样式属性名称，如`color`、`font-size`、`margin`等。
- **值（Value）**：属性的具体值，如颜色值、尺寸值等。

一个CSS规则由选择器和声明块组成，声明块包含一个或多个属性-值对，用分号分隔。

```css
选择器 {
  属性: 值;
  属性: 值;
}
```

### 注释

```css
/* 这是注释 */
/* 
  多行注释
*/
```

---

## 选择器

选择器是CSS的核心，用于定位和选择HTML元素以应用样式。选择器决定了哪些元素会受到样式规则的影响。CSS提供了多种类型的选择器，可以单独使用或组合使用，以实现精确的元素选择。

### 基础选择器

基础选择器是最基本的选择器类型，包括通配符、元素选择器、类选择器、ID选择器和属性选择器。每种选择器都有其特定的用途和优先级：

- **通配符选择器（`*`）**：选择所有元素，常用于重置样式，但会增加选择器权重，影响性能。
- **元素选择器**：根据HTML标签名选择元素，如`p`选择所有段落，优先级较低，适合设置默认样式。
- **类选择器（`.class`）**：选择具有特定`class`属性的元素，是最常用的选择器，可复用，优先级中等。
- **ID选择器（`#id`）**：选择具有特定`id`属性的元素，每个页面中ID应该唯一，优先级较高。
- **属性选择器（`[attr]`）**：根据元素的属性选择元素，可以精确匹配属性值，适合选择特定类型的表单元素等。

| 选择器    | 说明               | 示例                |
| --------- | ------------------ | ------------------- |
| `*`       | 通配符（所有元素） | `* { margin: 0; }`  |
| `element` | 元素选择器         | `p { color: red; }` |
| `.class`  | 类选择器           | `.container { }`    |
| `#id`     | ID 选择器          | `#header { }`       |
| `[attr]`  | 属性选择器         | `[type="text"] { }` |

### 组合选择器

组合选择器通过组合多个基础选择器来创建更精确的选择规则，可以根据元素之间的关系（父子、兄弟等）来选择元素：

- **并集选择器（`A, B`）**：选择匹配A或B的所有元素，用于为多个不同的元素应用相同的样式，提高代码复用性。
- **后代选择器（`A B`）**：选择A元素内部的所有B元素（包括嵌套的B），无论嵌套层级，适合选择容器内的特定元素。
- **子元素选择器（`A > B`）**：只选择A的直接子元素B，不包括更深层嵌套的B，比后代选择器更精确，性能更好。
- **相邻兄弟选择器（`A + B`）**：选择紧跟在A元素后面的第一个B元素，用于选择特定位置的元素，如标题后的第一段。
- **兄弟选择器（`A ~ B`）**：选择A元素后面的所有B元素（同一父级），用于选择一组相关的兄弟元素。

### 伪类选择器

伪类选择器用于选择元素的特定状态或位置，而不是基于HTML结构。伪类以冒号（`:`）开头，可以单独使用或与其他选择器组合使用。

**作用**：伪类允许你根据用户交互、元素状态或文档结构来选择元素，实现动态样式效果。

**与普通选择器的区别**：
- 普通选择器基于HTML结构（标签、类、ID等）选择元素
- 伪类选择器基于元素的状态、位置或用户交互选择元素
- 伪类不能单独存在，必须附加在选择器后面

**常见类型**：
- **交互状态伪类**：`:hover`（鼠标悬停）、`:active`（激活/点击）、`:focus`（获得焦点）、`:visited`（已访问链接）等，用于响应用户操作。
- **结构伪类**：`:first-child`（第一个子元素）、`:last-child`（最后一个子元素）、`:nth-child(n)`（第n个子元素）等，用于根据元素在父元素中的位置选择。
- **否定伪类**：`:not(selector)`（不匹配选择器的元素），用于排除特定元素。

| 选择器           | 说明           | 示例                  |
| ---------------- | -------------- | --------------------- |
| `:hover`         | 鼠标悬停       | `a:hover { }`         |
| `:active`        | 激活状态       | `button:active { }`   |
| `:focus`         | 获得焦点       | `input:focus { }`     |
| `:visited`       | 已访问链接     | `a:visited { }`       |
| `:first-child`   | 第一个子元素   | `li:first-child { }`  |
| `:last-child`    | 最后一个子元素 | `li:last-child { }`   |
| `:nth-child(n)`  | 第 n 个子元素  | `li:nth-child(2) { }` |
| `:not(selector)` | 非选择器       | `:not(.hidden) { }`   |

### 伪元素选择器

伪元素选择器用于选择元素的特定部分或创建虚拟元素，以双冒号（`::`）开头（CSS3规范，CSS2中使用单冒号`:`也支持）。

**作用**：伪元素允许你为元素的特定部分设置样式，或在不修改HTML结构的情况下添加装饰性内容。

**与伪类的区别**：
- 伪类选择元素的特定状态（如`:hover`选择悬停状态）
- 伪元素选择元素的特定部分或创建虚拟元素（如`::before`在元素前创建内容）
- 伪类使用单冒号`:`，伪元素使用双冒号`::`（CSS3）

**常见使用场景**：
- **`::before`和`::after`**：在元素前后插入装饰性内容，常用于图标、引号、装饰线等，必须配合`content`属性使用。
- **`::first-line`**：选择元素的第一行文本，用于设置首行特殊样式。
- **`::first-letter`**：选择元素的第一个字母，常用于实现首字母下沉效果。

| 选择器           | 说明           | 示例                             |
| ---------------- | -------------- | -------------------------------- |
| `::before`       | 元素前插入内容 | `p::before { content: "前缀"; }` |
| `::after`        | 元素后插入内容 | `p::after { content: "后缀"; }`  |
| `::first-line`   | 第一行         | `p::first-line { }`              |
| `::first-letter` | 首字母         | `p::first-letter { }`            |

### 类选择器与 HTML 对应关系

类选择器是 CSS 中最常用的选择器之一，用于选择具有特定 `class` 属性的 HTML 元素。

#### 基本语法

```css
/* CSS 中的类选择器（以点 . 开头） */
.button {
  padding: 10px 20px;
  background: blue;
  color: white;
}
```

```html
<!-- HTML 中使用 class 属性应用类选择器 -->
<button class="button">点击我</button>
<div class="button">也可以应用在 div 上</div>
```

#### 类选择器与 HTML 标签的对应

| CSS 选择器 | HTML 标签 | 说明 |
|-----------|-----------|------|
| `.button` | `<button class="button">` | 类选择器可以应用于任何 HTML 标签 |
| `.container` | `<div class="container">` | 不限制标签类型 |
| `.text-primary` | `<p class="text-primary">` | 类名可以包含连字符 |
| `.btn.btn-primary` | `<button class="btn btn-primary">` | 一个元素可以有多个类 |

#### 1. 单一类选择器

```css
/* CSS */
.card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
}
```

```html
<!-- HTML -->
<div class="card">
  <h2>卡片标题</h2>
  <p>卡片内容</p>
</div>
```

#### 2. 多个类选择器（组合使用）

```css
/* CSS */
.button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.button-primary {
  background: blue;
  color: white;
}

.button-large {
  padding: 15px 30px;
  font-size: 18px;
}
```

```html
<!-- HTML：一个元素可以同时拥有多个类 -->
<button class="button button-primary button-large">
  大号主按钮
</button>
```

#### 3. 类选择器与标签选择器组合

```css
/* CSS：只选择特定标签上的类 */
button.button {
  display: inline-block;
}

div.button {
  display: block;
}
```

```html
<!-- HTML -->
<button class="button">按钮元素</button>
<div class="button">div 元素</div>
```

#### 4. 后代选择器中的类

```css
/* CSS：选择某个类内部的另一个类 */
.card {
  padding: 20px;
}

.card .card-title {
  font-size: 24px;
  font-weight: bold;
}

.card .card-body {
  margin-top: 10px;
}
```

```html
<!-- HTML -->
<div class="card">
  <h2 class="card-title">标题</h2>
  <div class="card-body">内容</div>
</div>
```

#### 5. 类选择器命名规范

**BEM 命名法（推荐）**

```css
/* Block（块） */
.card { }

/* Element（元素） */
.card__title { }
.card__body { }
.card__footer { }

/* Modifier（修饰符） */
.card--large { }
.card--primary { }
.card__title--highlighted { }
```

```html
<!-- HTML 对应 -->
<div class="card card--large">
  <h2 class="card__title card__title--highlighted">标题</h2>
  <div class="card__body">内容</div>
  <div class="card__footer">页脚</div>
</div>
```

**其他命名方式**

```css
/* 连字符命名（kebab-case） */
.text-primary { }
.button-large { }
.nav-item { }

/* 下划线命名（snake_case） */
.text_primary { }
.button_large { }

/* 驼峰命名（camelCase） */
.textPrimary { }
.buttonLarge { }
```

#### 6. 类选择器与伪类配合

```css
/* CSS：类选择器可以配合伪类使用 */
.button {
  background: blue;
}

.button:hover {
  background: darkblue;
}

.button:active {
  background: navy;
}

.button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

```html
<!-- HTML -->
<button class="button">悬停我</button>
<button class="button disabled">禁用按钮</button>
```

#### 7. 类选择器的优先级

```css
/* CSS */
/* 优先级：内联样式 > ID > 类 > 标签 */

/* 标签选择器（优先级：1） */
div {
  color: black;
}

/* 类选择器（优先级：10） */
.container {
  color: blue;
}

/* ID 选择器（优先级：100） */
#main {
  color: red;
}

/* 多个类选择器（优先级：10 + 10 = 20） */
.container.primary {
  color: green;
}
```

```html
<!-- HTML -->
<div class="container">蓝色（类选择器优先级高于标签）</div>
<div id="main" class="container">红色（ID 优先级最高）</div>
<div class="container primary">绿色（多个类优先级更高）</div>
```

#### 8. 实际应用示例

**示例 1：按钮组件**

```css
/* CSS */
.btn {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-large {
  padding: 15px 30px;
  font-size: 18px;
}

.btn-small {
  padding: 5px 10px;
  font-size: 12px;
}
```

```html
<!-- HTML -->
<button class="btn btn-primary">主按钮</button>
<button class="btn btn-primary btn-large">大号主按钮</button>
<button class="btn btn-secondary btn-small">小号次按钮</button>
```

**示例 2：卡片组件**

```css
/* CSS */
.card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.card-header {
  padding: 15px;
  background: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.card-body {
  padding: 20px;
}

.card-footer {
  padding: 15px;
  background: #f8f9fa;
  border-top: 1px solid #ddd;
}

.card-title {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}
```

```html
<!-- HTML -->
<div class="card">
  <div class="card-header">
    <h3 class="card-title">卡片标题</h3>
  </div>
  <div class="card-body">
    <p>卡片内容</p>
  </div>
  <div class="card-footer">
    <button>操作按钮</button>
  </div>
</div>
```

**示例 3：响应式工具类**

```css
/* CSS */
.hidden {
  display: none;
}

.visible {
  display: block;
}

/* 响应式显示/隐藏 */
@media (max-width: 768px) {
  .hidden-mobile {
    display: none;
  }
  
  .visible-mobile {
    display: block;
  }
}

@media (min-width: 769px) {
  .hidden-desktop {
    display: none;
  }
  
  .visible-desktop {
    display: block;
  }
}
```

```html
<!-- HTML -->
<div class="hidden-mobile">移动端隐藏</div>
<div class="visible-mobile">仅移动端显示</div>
<div class="hidden-desktop">桌面端隐藏</div>
<div class="visible-desktop">仅桌面端显示</div>
```

#### 9. 类选择器最佳实践

**使用语义化的类名**

```css
/* ✅ 好：语义清晰 */
.primary-button { }
.article-card { }
.navigation-menu { }

/* ❌ 不好：不够语义化 */
.red-button { }
.box1 { }
.div3 { }
```

**避免过度嵌套**

```css
/* ✅ 好：保持浅层选择器 */
.card-title { }
.card-body { }

/* ❌ 不好：选择器过深 */
.card .header .title .text { } /* 太深了 */
```

**使用模块化类名**

```css
/* ✅ 好：模块化，可复用 */
.btn { }
.btn-primary { }
.btn-large { }

/* ❌ 不好：耦合度高 */
.header-button { } /* 只能用在 header 中 */
```

**保持一致性**

```css
/* ✅ 好：命名风格一致 */
.text-primary { }
.text-secondary { }
.button-primary { }
.button-secondary { }

/* ❌ 不好：命名风格混乱 */
.textPrimary { }
.text-secondary { }
.button_primary { }
```

---

## 常用属性

CSS属性用于控制元素的外观和行为。属性可以分为多个类别，每个类别控制元素的不同方面。理解各类属性的作用范围和使用场景，有助于更有效地编写CSS代码。

### 文本属性

文本属性用于控制文本的显示效果，包括字体、颜色、对齐、装饰等。这些属性主要影响文本内容的视觉呈现：

**作用范围**：文本属性主要作用于文本内容，包括文字颜色、大小、字体族、粗细、样式、对齐方式、装饰效果等。

**特点**：
- 大部分文本属性可以被子元素继承（如`color`、`font-family`）
- 文本属性不会影响元素的布局（除了`text-align`会影响对齐）
- 某些属性需要配合使用才能达到预期效果（如文本溢出需要`overflow`、`text-overflow`、`white-space`配合）

```css
color: #333;                    /* 文字颜色 */
font-size: 16px;                /* 字体大小 */
font-family: Arial, sans-serif; /* 字体族 */
font-weight: bold;              /* 字体粗细 (normal/bold/100-900) */
font-style: italic;             /* 字体样式 (normal/italic) */
text-align: center;             /* 文本对齐 (left/center/right/justify) */
text-decoration: underline;      /* 文本装饰 (none/underline/line-through) */
text-transform: uppercase;      /* 文本转换 (none/uppercase/lowercase/capitalize) */
line-height: 1.5;               /* 行高 */
letter-spacing: 1px;            /* 字母间距 */
word-spacing: 2px;              /* 单词间距 */
text-indent: 2em;               /* 首行缩进 */
white-space: nowrap;            /* 空白处理 (normal/nowrap/pre) */
text-overflow: ellipsis;        /* 文本溢出 (clip/ellipsis) */
```

### 背景属性

背景属性用于设置元素的背景效果，包括背景颜色、图片、重复方式、位置、尺寸等。背景属性可以叠加使用，形成复杂的背景效果。

**作用范围**：背景属性控制元素内容区域和边框内的背景显示，背景会显示在内容下方。

**层级关系**：背景属性按以下顺序叠加（从下到上）：
1. `background-color`（背景颜色，最底层）
2. `background-image`（背景图片，在颜色之上）
3. 多个背景图片可以叠加，先定义的在上层

**简写属性**：`background`可以同时设置多个背景属性，顺序为：`color image repeat attachment position/size`。使用简写时，未指定的属性会使用默认值。

```css
background-color: #fff;         /* 背景颜色 */
background-image: url("bg.jpg"); /* 背景图片 */
background-repeat: no-repeat;    /* 重复方式 (repeat/no-repeat/repeat-x/repeat-y) */
background-position: center;     /* 位置 (top/center/bottom/left/right/百分比) */
background-size: cover;         /* 尺寸 (cover/contain/百分比) */
background-attachment: fixed;    /* 固定方式 (scroll/fixed) */
background: #fff url("bg.jpg") no-repeat center/cover; /* 简写 */
```

### 边框属性

边框属性用于设置元素周围的边框，包括宽度、样式、颜色和圆角。边框位于元素的内边距（padding）和外边距（margin）之间。

**边框组成**：边框由三个基本属性组成：
- **宽度（`border-width`）**：边框的粗细，可以使用像素、em等单位
- **样式（`border-style`）**：边框的样式，如实线（solid）、虚线（dashed）、点线（dotted）等
- **颜色（`border-color`）**：边框的颜色，可以使用颜色名、十六进制、RGB等

**简写规则**：`border`可以同时设置宽度、样式和颜色，顺序为：`width style color`。可以单独设置四个方向的边框（`border-top`、`border-right`、`border-bottom`、`border-left`）。

**圆角属性**：`border-radius`用于设置边框的圆角，可以设置四个角或单独设置每个角，值越大圆角越明显。

```css
border-width: 1px;              /* 边框宽度 */
border-style: solid;            /* 边框样式 (solid/dashed/dotted/double/none) */
border-color: #333;             /* 边框颜色 */
border: 1px solid #333;         /* 简写 */
border-radius: 5px;             /* 圆角 */
border-top: 1px solid #333;     /* 上边框 */
border-bottom: 1px solid #333;   /* 下边框 */
border-left: 1px solid #333;     /* 左边框 */
border-right: 1px solid #333;   /* 右边框 */
```

### 尺寸属性

尺寸属性用于设置元素的宽度和高度，控制元素在页面中占据的空间大小。

**作用机制**：
- `width`和`height`设置元素的固定宽度和高度
- `min-width`和`min-height`设置元素的最小尺寸，元素不能小于这个值
- `max-width`和`max-height`设置元素的最大尺寸，元素不能大于这个值

**计算方式**：元素的实际尺寸取决于`box-sizing`属性：
- `content-box`（默认）：`width/height`只包括内容区域，不包括`padding`和`border`
- `border-box`：`width/height`包括内容、`padding`和`border`，更易控制总尺寸

**适用场景**：
- 固定尺寸：使用`width`和`height`设置固定大小
- 响应式设计：使用`max-width`限制最大宽度，配合百分比实现响应式
- 弹性布局：在Flexbox或Grid中，尺寸属性与`flex`或`grid`属性配合使用

```css
width: 100px;                   /* 宽度 */
height: 100px;                  /* 高度 */
min-width: 200px;               /* 最小宽度 */
max-width: 800px;               /* 最大宽度 */
min-height: 100px;              /* 最小高度 */
max-height: 500px;              /* 最大高度 */
```

### 内外边距

内外边距用于控制元素与其他元素之间的间距，以及元素内容与边框之间的距离。

**margin（外边距）**：
- **作用**：控制元素与其他元素之间的间距，位于元素边框外部
- **特点**：外边距是透明的，不显示背景色或背景图片
- **外边距合并**：垂直方向相邻元素的外边距会合并（取较大值），水平方向不会合并
- **负值**：可以使用负值让元素重叠或调整位置

**padding（内边距）**：
- **作用**：控制元素内容与边框之间的距离，位于元素边框内部
- **特点**：内边距会显示元素的背景色和背景图片
- **不可合并**：内边距不会合并，每个元素的内边距都是独立的

**简写规则**：
- 一个值：四个方向相同
- 两个值：上下、左右
- 三个值：上、左右、下
- 四个值：上、右、下、左（顺时针）

```css
margin: 10px;                   /* 外边距（四个方向） */
margin: 10px 20px;              /* 上下 左右 */
margin: 10px 20px 30px 40px;    /* 上 右 下 左 */
margin-top: 10px;               /* 上外边距 */
margin-right: 10px;             /* 右外边距 */
margin-bottom: 10px;            /* 下外边距 */
margin-left: 10px;              /* 左外边距 */

padding: 10px;                  /* 内边距（同上规则） */
padding-top: 10px;
padding-right: 10px;
padding-bottom: 10px;
padding-left: 10px;
```

### 显示属性

显示属性用于控制元素的显示方式和可见性，对布局和渲染有重要影响。

**display属性**：控制元素的显示类型，决定元素如何参与页面布局：
- **`block`**：块级元素，独占一行，可以设置宽高，默认宽度100%
- **`inline`**：行内元素，不独占一行，不能设置宽高，宽度由内容决定
- **`inline-block`**：行内块元素，不独占一行但可以设置宽高，结合了两者的特点
- **`flex`**：弹性布局容器，子元素成为弹性项目，用于一维布局
- **`grid`**：网格布局容器，子元素成为网格项目，用于二维布局
- **`none`**：完全隐藏元素，不占据空间，不参与布局

**visibility属性**：控制元素的可见性，但不影响布局：
- **`visible`**：元素可见（默认）
- **`hidden`**：元素不可见，但仍占据空间，影响布局

**opacity属性**：控制元素的透明度，值范围0-1：
- `0`：完全透明（不可见）
- `1`：完全不透明（默认）
- 透明度会影响元素及其所有子元素

```css
display: block;                 /* 块级元素 */
display: inline;               /* 行内元素 */
display: inline-block;         /* 行内块 */
display: flex;                 /* 弹性布局 */
display: grid;                 /* 网格布局 */
display: none;                 /* 隐藏 */

visibility: visible;            /* 可见 */
visibility: hidden;            /* 隐藏（占位） */

opacity: 0.5;                  /* 透明度 (0-1) */
```

### 定位属性

定位属性用于控制元素在页面中的位置，通过`position`属性设置定位方式，配合`top`、`right`、`bottom`、`left`属性调整位置。

**定位机制**：
- **`static`**（静态定位，默认）：元素按照正常文档流排列，`top`、`right`、`bottom`、`left`和`z-index`属性无效
- **`relative`**（相对定位）：元素相对于其正常位置进行偏移，仍占据原空间，不影响其他元素
- **`absolute`**（绝对定位）：元素脱离文档流，相对于最近的已定位（非static）祖先元素定位，不占据空间
- **`fixed`**（固定定位）：元素脱离文档流，相对于浏览器窗口定位，滚动时位置不变，常用于固定导航栏
- **`sticky`**（粘性定位）：元素在滚动到特定位置前表现为相对定位，之后表现为固定定位，常用于吸顶效果

**偏移属性**：`top`、`right`、`bottom`、`left`用于设置元素相对于定位参考点的偏移距离，可以使用负值。

**层级控制**：`z-index`用于控制定位元素的层叠顺序，数值越大越靠前，只对定位元素（非static）有效。

```css
position: static;              /* 静态定位（默认） */
position: relative;            /* 相对定位 */
position: absolute;           /* 绝对定位 */
position: fixed;               /* 固定定位 */
position: sticky;               /* 粘性定位 */

top: 10px;                     /* 距离顶部 */
right: 10px;                   /* 距离右边 */
bottom: 10px;                  /* 距离底部 */
left: 10px;                    /* 距离左边 */

z-index: 10;                   /* 层级（数值越大越靠前） */
```

### 溢出处理

溢出属性用于控制当元素内容超出元素尺寸时的显示方式。

**作用机制**：当元素的内容（文本、图片等）超出元素的`width`和`height`时，`overflow`属性决定如何处理超出的部分。

**属性值**：
- **`visible`**（默认）：超出的内容会显示在元素框外，不会被裁剪
- **`hidden`**：超出的内容被裁剪，不可见，不显示滚动条
- **`scroll`**：始终显示滚动条（即使内容未溢出），超出的内容可通过滚动查看
- **`auto`**：内容未溢出时不显示滚动条，溢出时自动显示滚动条（推荐使用）

**方向控制**：可以单独控制水平和垂直方向的溢出：
- `overflow-x`：控制水平方向（左右）
- `overflow-y`：控制垂直方向（上下）

**使用场景**：常用于创建固定尺寸的容器、实现文本省略效果、控制滚动区域等。

```css
overflow: visible;              /* 可见（默认） */
overflow: hidden;              /* 隐藏 */
overflow: scroll;               /* 滚动 */
overflow: auto;                 /* 自动 */
overflow-x: hidden;            /* 水平方向 */
overflow-y: scroll;             /* 垂直方向 */
```

### 列表属性

列表属性用于控制有序列表（`<ol>`）和无序列表（`<ul>`）的标记样式。

**作用范围**：列表属性主要影响列表项（`<li>`）前的标记（项目符号或编号）的显示方式。

**属性说明**：
- **`list-style-type`**：设置标记的类型，如圆点（disc）、圆圈（circle）、方块（square）、数字、字母等，`none`可移除标记
- **`list-style-position`**：设置标记的位置，`outside`（默认）标记在内容外侧，`inside`标记在内容内侧
- **`list-style-image`**：使用自定义图片作为标记，会覆盖`list-style-type`

**简写属性**：`list-style`可以同时设置类型和位置，顺序为：`type position`，也可以包含`image`。

```css
list-style-type: disc;         /* 列表标记类型 (disc/circle/square/none) */
list-style-position: outside;   /* 标记位置 (inside/outside) */
list-style-image: url("icon.png"); /* 标记图片 */
list-style: disc outside;      /* 简写 */
```

### 表格属性

表格属性用于控制HTML表格（`<table>`）的特殊样式，这些属性只对表格元素有效。

**作用范围**：表格属性控制表格的整体布局和单元格的显示方式，包括边框合并、间距、标题位置等。

**属性说明**：
- **`border-collapse`**：控制相邻单元格的边框是否合并，`collapse`合并边框（常用），`separate`分离边框
- **`border-spacing`**：当`border-collapse`为`separate`时，设置单元格之间的间距
- **`caption-side`**：设置表格标题（`<caption>`）的位置，`top`（默认）或`bottom`
- **`empty-cells`**：控制空单元格的显示，`show`显示边框，`hide`隐藏边框（仅在`border-collapse: separate`时有效）

**使用场景**：常用于创建美观的表格布局，控制表格边框样式，优化表格显示效果。

```css
border-collapse: collapse;     /* 边框合并 (collapse/separate) */
border-spacing: 0;             /* 边框间距 */
caption-side: top;              /* 标题位置 (top/bottom) */
empty-cells: hide;              /* 空单元格 (show/hide) */
```

---

## 布局

布局是CSS的核心功能之一，用于控制元素在页面中的排列方式。现代CSS提供了多种布局方法，包括Flexbox、Grid等，可以轻松实现复杂的页面布局。

### Flexbox（弹性布局）

Flexbox（Flexible Box Layout）是一种一维布局方法，用于在单个方向上（行或列）排列元素，非常适合组件内部布局和简单的页面布局。

**核心概念**：
- **容器（Flex Container）**：设置`display: flex`的元素，成为弹性容器
- **项目（Flex Item）**：容器的直接子元素，成为弹性项目
- **主轴（Main Axis）**：项目排列的主要方向，由`flex-direction`决定（默认水平）
- **交叉轴（Cross Axis）**：与主轴垂直的方向

**优势**：
- 简单易用，适合一维布局（行或列）
- 自动处理项目的大小和对齐
- 轻松实现居中、等分布局
- 响应式友好，项目可以自动调整大小

**适用场景**：导航栏、卡片布局、表单布局、居中元素、等分布局等。

```css
/* 容器属性 */
display: flex;
flex-direction: row;            /* 方向 (row/column/row-reverse/column-reverse) */
flex-wrap: nowrap;              /* 换行 (nowrap/wrap/wrap-reverse) */
justify-content: center;        /* 主轴对齐 (flex-start/flex-end/center/space-between/space-around) */
align-items: center;            /* 交叉轴对齐 (flex-start/flex-end/center/baseline/stretch) */
align-content: center;          /* 多行对齐 */
gap: 10px;                      /* 间距 */

/* 项目属性 */
flex-grow: 1;                   /* 放大比例 */
flex-shrink: 1;                 /* 缩小比例 */
flex-basis: auto;               /* 基础大小 */
flex: 1;                        /* 简写 (grow shrink basis) */
align-self: center;             /* 自身对齐 */
order: 1;                       /* 排序 */
```

**常用 Flexbox 布局**：
```css
/* 水平居中 */
.container {
  display: flex;
  justify-content: center;
}

/* 垂直居中 */
.container {
  display: flex;
  align-items: center;
}

/* 水平垂直居中 */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 两端对齐 */
.container {
  display: flex;
  justify-content: space-between;
}
```

### Grid（网格布局）

Grid（CSS Grid Layout）是一种二维布局方法，可以同时控制行和列，非常适合复杂的页面布局。

**核心概念**：
- **容器（Grid Container）**：设置`display: grid`的元素，成为网格容器
- **项目（Grid Item）**：容器的直接子元素，成为网格项目
- **网格线（Grid Line）**：划分网格的线条，有行网格线和列网格线
- **网格轨道（Grid Track）**：相邻网格线之间的空间，有行轨道和列轨道
- **网格单元格（Grid Cell）**：行和列的交叉区域
- **网格区域（Grid Area）**：一个或多个网格单元格组成的矩形区域

**优势**：
- 二维布局，可以同时控制行和列
- 精确控制项目的位置和大小
- 支持命名区域，布局更直观
- 响应式友好，可以自动适应不同屏幕

**适用场景**：整体页面布局、复杂组件布局、卡片网格、表单布局等。

```css
/* 容器属性 */
display: grid;
grid-template-columns: 1fr 1fr 1fr;  /* 列定义 */
grid-template-rows: 100px 200px;      /* 行定义 */
grid-template-areas: 
  "header header"
  "sidebar main";                     /* 区域命名 */
grid-gap: 10px;                       /* 间距 */
gap: 10px;                            /* 间距（新语法） */
justify-items: center;               /* 水平对齐 */
align-items: center;                 /* 垂直对齐 */

/* 项目属性 */
grid-column: 1 / 3;                  /* 列范围 */
grid-row: 1 / 2;                     /* 行范围 */
grid-area: header;                   /* 区域名称 */
justify-self: center;                /* 自身水平对齐 */
align-self: center;                  /* 自身垂直对齐 */
```

**常用 Grid 布局**：
```css
/* 三列布局 */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* 响应式网格 */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
```

### 传统布局方法

在Flexbox和Grid出现之前，开发者使用浮动、定位、margin等属性实现布局。虽然现代布局方法更强大，但了解传统方法有助于理解CSS布局原理，并在某些场景下仍然有用。

**常用方法**：
- **水平居中**：使用`margin: 0 auto`配合固定宽度，适用于块级元素
- **垂直居中**：使用`line-height`等于`height`实现单行文本垂直居中
- **绝对定位居中**：使用`position: absolute`配合`transform: translate(-50%, -50%)`实现元素中心点居中

**特点**：
- 需要更多代码和技巧
- 某些方法不够灵活
- 兼容性好，适用于旧版浏览器
- 理解这些方法有助于掌握CSS布局原理

**现代替代方案**：Flexbox和Grid提供了更简单、更强大的居中和对齐方法，推荐优先使用。

```css
/* 水平居中 */
.center {
  margin: 0 auto;
  width: 800px;
}

/* 垂直居中（单行文本） */
.center-text {
  line-height: 100px;
  height: 100px;
}

/* 绝对定位居中 */
.center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

---

## 响应式设计

响应式设计是一种网页设计方法，使网页能够在不同设备和屏幕尺寸上提供良好的用户体验。通过使用媒体查询、弹性布局和相对单位，可以实现自适应的网页布局。

### 媒体查询

媒体查询（Media Queries）是CSS3的功能，允许根据设备的特性（如屏幕宽度、设备类型、方向等）应用不同的样式规则。

**作用机制**：媒体查询通过`@media`规则定义条件，当条件满足时，应用相应的CSS样式。这使网页能够根据设备特性自动调整布局和样式。

**断点概念**：断点是响应式设计中的关键屏幕宽度值，常见的断点包括：
- 手机：≤576px
- 平板：≤768px
- 小桌面：≤992px
- 大桌面：≤1200px

**优势**：
- 一套代码适配多种设备
- 提升用户体验
- 降低维护成本
- 符合现代Web标准

```css
/* 基本语法 */
@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}

/* 常用断点 */
@media (max-width: 576px) { }   /* 手机 */
@media (max-width: 768px) { }   /* 平板 */
@media (max-width: 992px) { }   /* 小桌面 */
@media (max-width: 1200px) { }  /* 大桌面 */

/* 多条件 */
@media (min-width: 768px) and (max-width: 1024px) {
  /* 平板横屏 */
}

/* 方向 */
@media (orientation: landscape) { }  /* 横屏 */
@media (orientation: portrait) { }    /* 竖屏 */

/* 设备类型 */
@media screen { }                     /* 屏幕 */
@media print { }                      /* 打印 */
```

### 响应式单位

响应式单位是相对于某个参考值的单位，能够根据参考值的变化自动调整，实现响应式布局。

**单位类型**：
- **百分比（`%`）**：相对于父元素的对应属性值，如`width: 50%`表示父元素宽度的50%
- **视口单位**：
  - `vw`（视口宽度）：1vw = 视口宽度的1%
  - `vh`（视口高度）：1vh = 视口高度的1%
  - `vmin`：视口宽度和高度中较小值的1%
  - `vmax`：视口宽度和高度中较大值的1%
- **相对字体单位**：
  - `rem`：相对于根元素（`<html>`）的字体大小，不受父元素影响，推荐使用
  - `em`：相对于父元素的字体大小，会继承父元素的影响
- **固定单位**：
  - `px`：像素，绝对单位，不随屏幕变化

**使用建议**：
- 布局尺寸：使用`%`、`vw`、`vh`、`rem`
- 字体大小：优先使用`rem`，避免使用`em`（除非需要相对父元素）
- 边框、阴影等：可以使用`px`

```css
width: 100%;                        /* 百分比 */
width: 100vw;                       /* 视口宽度 */
height: 100vh;                      /* 视口高度 */
font-size: 1rem;                    /* 根元素字体大小 */
font-size: 1em;                     /* 父元素字体大小 */
font-size: 16px;                    /* 像素（固定） */
```

### Viewport 设置

Viewport（视口）是用户在网页上的可见区域，移动设备的viewport通常比桌面浏览器小。viewport设置告诉浏览器如何控制页面的尺寸和缩放。

**作用**：viewport meta标签用于控制移动设备上网页的显示方式，确保响应式设计能够正常工作。

**属性说明**：
- `width=device-width`：设置viewport宽度等于设备屏幕宽度，使页面能够正确适配移动设备
- `initial-scale=1.0`：设置初始缩放比例为1.0（不缩放），防止页面加载时自动缩放

**重要性**：没有正确的viewport设置，移动设备可能会以桌面浏览器的宽度渲染页面，导致页面显示过小或需要横向滚动，影响用户体验。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 动画与过渡

CSS动画和过渡用于创建动态效果，提升用户体验。过渡用于简单的状态变化，动画用于更复杂的连续效果。

### 过渡（Transition）

过渡用于在CSS属性值发生变化时创建平滑的动画效果，通常用于响应用户交互（如悬停、点击）。

**作用机制**：当元素的CSS属性值发生变化时，过渡会在旧值和新值之间创建平滑的中间状态，而不是立即切换。

**适用场景**：
- 颜色变化（如按钮悬停）
- 尺寸变化（如展开/收起）
- 位置变化（如移动元素）
- 透明度变化（如淡入淡出）

**与动画的区别**：
- 过渡：需要触发（如`:hover`），只能从初始状态到结束状态
- 动画：可以自动播放，可以定义多个关键帧，更灵活

**优势**：简单易用，性能好，适合简单的状态变化效果。

```css
transition: property duration timing-function delay;
transition: all 0.3s ease 0s;        /* 简写 */
transition-property: width;          /* 属性 */
transition-duration: 0.3s;          /* 持续时间 */
transition-timing-function: ease;    /* 时间函数 (ease/linear/ease-in/ease-out/ease-in-out) */
transition-delay: 0s;                /* 延迟 */

/* 示例 */
.button {
  background: blue;
  transition: background 0.3s ease;
}
.button:hover {
  background: red;
}
```

### 动画（Animation）

动画用于创建更复杂的连续效果，通过定义关键帧（keyframes）来控制动画的每个阶段。

**作用机制**：动画通过`@keyframes`规则定义动画序列，指定在动画的不同阶段（百分比）元素的样式，然后通过`animation`属性将动画应用到元素上。

**关键帧概念**：关键帧定义了动画过程中的关键状态点，可以使用`from`/`to`（0%/100%）或百分比（如`0%`、`50%`、`100%`）定义多个关键帧。

**动画属性**：
- `animation-name`：动画名称（对应`@keyframes`定义的名称）
- `animation-duration`：动画持续时间
- `animation-timing-function`：时间函数，控制动画速度曲线
- `animation-delay`：动画延迟时间
- `animation-iteration-count`：动画播放次数（`infinite`表示无限循环）
- `animation-direction`：动画方向（`normal`正向、`reverse`反向、`alternate`交替）
- `animation-fill-mode`：动画填充模式，控制动画前后元素的状态
- `animation-play-state`：动画播放状态（`running`播放、`paused`暂停）

**适用场景**：加载动画、轮播图、复杂的状态变化、连续的运动效果等。

```css
/* 定义动画 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide {
  0% { transform: translateX(0); }
  50% { transform: translateX(100px); }
  100% { transform: translateX(0); }
}

/* 使用动画 */
.element {
  animation: fadeIn 1s ease;
  animation-name: fadeIn;            /* 动画名称 */
  animation-duration: 1s;            /* 持续时间 */
  animation-timing-function: ease;   /* 时间函数 */
  animation-delay: 0s;               /* 延迟 */
  animation-iteration-count: infinite; /* 次数 (1/infinite) */
  animation-direction: normal;       /* 方向 (normal/reverse/alternate) */
  animation-fill-mode: forwards;     /* 填充模式 (none/forwards/backwards/both) */
  animation-play-state: running;      /* 状态 (running/paused) */
}
```

### Transform（变换）

Transform用于对元素进行几何变换，包括移动、缩放、旋转、倾斜等，而不影响文档流中的其他元素。

**作用机制**：Transform在元素的视觉呈现层进行变换，不会改变元素在文档流中的位置，其他元素不会受到影响。这使得变换非常适合创建动画效果。

**变换类型**：
- **`translate`**：移动元素，`translateX`水平移动，`translateY`垂直移动，`translate(x, y)`同时移动
- **`scale`**：缩放元素，值大于1放大，小于1缩小，可以分别设置`scaleX`和`scaleY`
- **`rotate`**：旋转元素，单位为度（deg），正值顺时针，负值逆时针
- **`skew`**：倾斜元素，可以分别设置`skewX`和`skewY`
- **`matrix`**：矩阵变换，可以组合所有变换效果

**变换原点**：`transform-origin`设置变换的参考点，默认是元素中心，可以设置为`top`、`bottom`、`left`、`right`、`center`或具体坐标。

**优势**：性能好（GPU加速），不影响布局，可以组合多个变换，适合动画和交互效果。

```css
transform: translateX(10px);         /* 水平移动 */
transform: translateY(10px);         /* 垂直移动 */
transform: translate(10px, 20px);    /* 移动 */
transform: scale(1.5);               /* 缩放 */
transform: rotate(45deg);            /* 旋转 */
transform: skew(10deg);              /* 倾斜 */
transform: matrix(1, 0, 0, 1, 0, 0); /* 矩阵 */

/* 组合 */
transform: translate(10px, 20px) rotate(45deg) scale(1.2);

/* 变换原点 */
transform-origin: center;            /* 中心 (center/top/bottom/left/right/百分比) */
```

---

## 实用技巧

### 常用重置样式

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}
```

### Box-sizing

```css
box-sizing: content-box;              /* 默认（width 不包括 padding 和 border） */
box-sizing: border-box;              /* width 包括 padding 和 border（推荐） */
```

### 文本溢出省略

```css
/* 单行 */
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 多行（WebKit） */
.text-ellipsis-multi {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

### 清除浮动

```css
/* 方法1：clearfix */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* 方法2：使用 Flexbox */
.container {
  display: flex;
}

/* 方法3：使用 Grid */
.container {
  display: grid;
}
```

### 垂直居中

```css
/* 方法1：Flexbox（推荐） */
.container {
  display: flex;
  align-items: center;
}

/* 方法2：绝对定位 */
.element {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

/* 方法3：Grid */
.container {
  display: grid;
  align-items: center;
}
```

### 水平居中

```css
/* 块级元素 */
.block {
  margin: 0 auto;
  width: 800px;
}

/* Flexbox */
.container {
  display: flex;
  justify-content: center;
}

/* Grid */
.container {
  display: grid;
  justify-items: center;
}

/* 文本 */
.text {
  text-align: center;
}
```

### 响应式图片

```css
img {
  max-width: 100%;
  height: auto;
}
```

### CSS 变量（自定义属性）

```css
/* 定义 */
:root {
  --primary-color: #007bff;
  --font-size: 16px;
}

/* 使用 */
.element {
  color: var(--primary-color);
  font-size: var(--font-size);
}

/* 默认值 */
.element {
  color: var(--primary-color, #000);
}
```

### 常用工具类

```css
/* 隐藏 */
.hidden { display: none; }
.invisible { visibility: hidden; }

/* 显示 */
.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }

/* 浮动 */
.float-left { float: left; }
.float-right { float: right; }
.clearfix::after { content: ""; display: table; clear: both; }

/* 文本对齐 */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }

/* 字体粗细 */
.font-normal { font-weight: normal; }
.font-bold { font-weight: bold; }

/* 间距 */
.m-0 { margin: 0; }
.mt-1 { margin-top: 0.25rem; }
.p-0 { padding: 0; }
.pt-1 { padding-top: 0.25rem; }
```

---

## 优先级与继承

理解CSS的优先级和继承机制对于编写有效的样式规则至关重要。优先级决定当多个规则应用于同一元素时，哪个规则会生效；继承机制允许子元素自动获得父元素的某些样式属性。

### 优先级（从高到低）

CSS优先级（Specificity）是一个权重系统，用于确定当多个CSS规则应用于同一元素时，哪个规则会生效。优先级高的规则会覆盖优先级低的规则。

**优先级计算规则**：
1. **`!important`**：最高优先级，会覆盖所有其他规则（应谨慎使用）
2. **内联样式**：直接在HTML元素上使用`style`属性，优先级为1000
3. **ID选择器**：每个ID选择器权重为100
4. **类选择器、属性选择器、伪类**：每个权重为10
5. **元素选择器、伪元素**：每个权重为1
6. **通配符选择器**：权重为0

**计算示例**：
- `.container .item`：10 + 10 = 20
- `#header .nav`：100 + 10 = 110
- `div p`：1 + 1 = 2

**注意事项**：
- 选择器越具体，优先级越高
- 相同优先级时，后定义的规则会覆盖先定义的规则
- 尽量避免使用`!important`，优先通过提高选择器优先级解决问题

1. `!important`
2. 内联样式 (`style="..."`)
3. ID 选择器 (`#id`)
4. 类选择器、属性选择器、伪类 (`.class`, `[attr]`, `:hover`)
5. 元素选择器、伪元素 (`div`, `::before`)
6. 通配符 (`*`)

### 继承

继承是CSS的一个重要机制，允许子元素自动获得父元素的某些样式属性值，减少重复代码。

**继承机制**：
- 某些CSS属性会自动从父元素继承到子元素
- 继承发生在元素层级关系中，子元素会继承父元素的可继承属性
- 如果子元素显式设置了属性值，会覆盖继承的值

**可继承的属性**（通常与文本和字体相关）：
- `color`：文字颜色
- `font-*`：所有字体相关属性（`font-family`、`font-size`、`font-weight`等）
- `text-*`：大部分文本属性（`text-align`、`text-indent`等）
- `line-height`：行高
- `list-style-*`：列表样式属性

**不可继承的属性**（通常与布局和外观相关）：
- `margin`、`padding`：内外边距
- `border`：边框
- `width`、`height`：尺寸
- `background`：背景
- `display`、`position`：布局属性

**强制继承**：使用`inherit`关键字可以强制继承父元素的属性值，即使该属性通常不可继承。这对于统一子元素的样式很有用。

```css
.element {
  color: inherit;        /* 继承父元素 */
  font-size: inherit;
}
```

---

## 常用单位

CSS单位用于指定属性值的大小，包括绝对单位和相对单位。选择合适的单位对于实现响应式设计和良好的用户体验非常重要。

**单位分类**：

**绝对单位**：
- **`px`（像素）**：最常用的绝对单位，1px等于屏幕上的一个物理像素点。固定大小，不随其他因素变化，适合边框、阴影等需要精确控制的地方。

**相对单位**：
- **`em`**：相对于父元素的字体大小。如果父元素字体为16px，`1.5em`等于24px。会继承父元素的影响，可能导致嵌套时尺寸意外增大。
- **`rem`**：相对于根元素（`<html>`）的字体大小。不受父元素影响，更可预测，推荐用于字体大小和间距。
- **`%`（百分比）**：相对于父元素的对应属性值。`width: 50%`表示父元素宽度的50%，常用于响应式布局。
- **视口单位**：
  - `vw`：视口宽度的1%，`50vw`等于视口宽度的一半
  - `vh`：视口高度的1%，`100vh`等于视口高度
  - `vmin`：视口宽度和高度中较小值的1%
  - `vmax`：视口宽度和高度中较大值的1%
- **`fr`（分数单位）**：Grid布局专用，表示可用空间的比例。`1fr`表示1份可用空间，常用于等分布局。

**使用建议**：
- 字体大小：优先使用`rem`，避免使用`em`（除非需要相对父元素）
- 布局尺寸：使用`%`、`vw`、`vh`、`rem`
- 固定尺寸：使用`px`（边框、阴影等）
- Grid布局：使用`fr`实现弹性布局

| 单位   | 说明                 | 示例     |
| ------ | -------------------- | -------- |
| `px`   | 像素（绝对单位）     | `16px`   |
| `em`   | 相对于父元素字体大小 | `1.5em`  |
| `rem`  | 相对于根元素字体大小 | `1rem`   |
| `%`    | 百分比               | `50%`    |
| `vw`   | 视口宽度             | `50vw`   |
| `vh`   | 视口高度             | `50vh`   |
| `vmin` | 视口最小尺寸         | `50vmin` |
| `vmax` | 视口最大尺寸         | `50vmax` |
| `fr`   | Grid 分数单位        | `1fr`    |

---

## 浏览器兼容性前缀

```css
/* 示例：Flexbox（旧浏览器） */
.container {
  display: -webkit-box;      /* 旧版 Safari */
  display: -ms-flexbox;      /* IE 10 */
  display: flex;              /* 标准 */
}

/* Transform */
.element {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
```

---

## 最佳实践

1. **使用语义化的类名**：`.header` 而不是 `.red-box`
2. **避免内联样式**：使用外部样式表
3. **使用 CSS 变量**：便于主题切换
4. **移动优先**：先写移动端样式，再用媒体查询扩展
5. **使用 Flexbox/Grid**：替代浮动布局
6. **避免过度嵌套**：选择器不超过 3 层
7. **使用简写属性**：`margin: 10px 20px;` 而不是分别设置
8. **合理使用 `!important`**：尽量避免

---

## 常用资源

- **MDN CSS 参考**: https://developer.mozilla.org/zh-CN/docs/Web/CSS
- **CSS Tricks**: https://css-tricks.com/
- **Can I Use**: https://caniuse.com/ （浏览器兼容性查询）

---

**最后更新**: 2026-01-20
