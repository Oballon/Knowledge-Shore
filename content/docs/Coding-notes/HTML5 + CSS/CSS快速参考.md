---
title: "CSS快速参考"
---

# CSS 快速参考

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

### 引入方式

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

### 基础选择器

| 选择器    | 说明               | 示例                |
| --------- | ------------------ | ------------------- |
| `*`       | 通配符（所有元素） | `* { margin: 0; }`  |
| `element` | 元素选择器         | `p { color: red; }` |
| `.class`  | 类选择器           | `.container { }`    |
| `#id`     | ID 选择器          | `#header { }`       |
| `[attr]`  | 属性选择器         | `[type="text"] { }` |

### 组合选择器

| 选择器  | 说明                       | 示例          |
| ------- | -------------------------- | ------------- |
| `A, B`  | 并集（A 或 B）             | `h1, h2 { }`  |
| `A B`   | 后代（A 内的 B）           | `div p { }`   |
| `A > B` | 子元素（A 的直接子元素 B） | `div > p { }` |
| `A + B` | 相邻兄弟（A 后紧邻的 B）   | `h1 + p { }`  |
| `A ~ B` | 兄弟（A 后的所有 B）       | `h1 ~ p { }`  |

### 伪类选择器

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

| 选择器           | 说明           | 示例                             |
| ---------------- | -------------- | -------------------------------- |
| `::before`       | 元素前插入内容 | `p::before { content: "前缀"; }` |
| `::after`        | 元素后插入内容 | `p::after { content: "后缀"; }`  |
| `::first-line`   | 第一行         | `p::first-line { }`              |
| `::first-letter` | 首字母         | `p::first-letter { }`            |

---

## 常用属性

### 文本属性

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

```css
width: 100px;                   /* 宽度 */
height: 100px;                  /* 高度 */
min-width: 200px;               /* 最小宽度 */
max-width: 800px;               /* 最大宽度 */
min-height: 100px;              /* 最小高度 */
max-height: 500px;              /* 最大高度 */
```

### 内外边距

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

```css
overflow: visible;              /* 可见（默认） */
overflow: hidden;              /* 隐藏 */
overflow: scroll;               /* 滚动 */
overflow: auto;                 /* 自动 */
overflow-x: hidden;            /* 水平方向 */
overflow-y: scroll;             /* 垂直方向 */
```

### 列表属性

```css
list-style-type: disc;         /* 列表标记类型 (disc/circle/square/none) */
list-style-position: outside;   /* 标记位置 (inside/outside) */
list-style-image: url("icon.png"); /* 标记图片 */
list-style: disc outside;      /* 简写 */
```

### 表格属性

```css
border-collapse: collapse;     /* 边框合并 (collapse/separate) */
border-spacing: 0;             /* 边框间距 */
caption-side: top;              /* 标题位置 (top/bottom) */
empty-cells: hide;              /* 空单元格 (show/hide) */
```

---

## 布局

### Flexbox（弹性布局）

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

### 媒体查询

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

```css
width: 100%;                        /* 百分比 */
width: 100vw;                       /* 视口宽度 */
height: 100vh;                      /* 视口高度 */
font-size: 1rem;                    /* 根元素字体大小 */
font-size: 1em;                     /* 父元素字体大小 */
font-size: 16px;                    /* 像素（固定） */
```

### Viewport 设置

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 动画与过渡

### 过渡（Transition）

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

### 优先级（从高到低）

1. `!important`
2. 内联样式 (`style="..."`)
3. ID 选择器 (`#id`)
4. 类选择器、属性选择器、伪类 (`.class`, `[attr]`, `:hover`)
5. 元素选择器、伪元素 (`div`, `::before`)
6. 通配符 (`*`)

### 继承

**可继承的属性**：
- `color`
- `font-*`
- `text-*`
- `line-height`
- `list-style-*`

**不可继承的属性**：
- `margin`
- `padding`
- `border`
- `width`
- `height`
- `background`

### 强制继承

```css
.element {
  color: inherit;        /* 继承父元素 */
  font-size: inherit;
}
```

---

## 常用单位

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
