# SCSS 与 CSS 语法区别

## 📖 目录

1. [基础区别](#基础区别)
2. [SCSS 独有特性](#scss-独有特性)
3. [语法对比](#语法对比)
4. [编译示例](#编译示例)
5. [快速参考](#快速参考)

---

## 语法对比表

| 特性 | CSS | SCSS | 说明 |
|------|-----|------|------|
| **变量** | ❌（CSS 变量有限） | ✅ `$variable` | SCSS 变量更强大 |
| **嵌套** | ❌ | ✅ 支持嵌套 | 代码更清晰 |
| **混合** | ❌ | ✅ `@mixin` / `@include` | 代码复用 |
| **继承** | ❌ | ✅ `@extend` | 减少重复代码 |
| **函数** | ⚠️ 有限 | ✅ 内置+自定义 | SCSS 函数更丰富 |
| **导入** | ⚠️ `@import`（性能差） | ✅ `@import`（合并） | SCSS 导入更好 |
| **条件语句** | ❌ | ✅ `@if`, `@else` | 动态生成样式 |
| **循环** | ❌ | ✅ `@for`, `@each`, `@while` | 批量生成样式 |
| **数学运算** | ⚠️ `calc()` | ✅ 直接运算 | SCSS 更直观 |
| **注释** | `/* */` | `//` 和 `/* */` | SCSS 支持单行注释 |
| **父选择器** | ❌ | ✅ `&` | 伪类更方便 |

---

## 基础区别

### CSS（层叠样式表）

```css
/* CSS - 纯样式语言 */
.container {
  width: 100%;
  padding: 20px;
}

.button {
  background: blue;
  color: white;
}
```

**特点**：
- ✅ 浏览器直接支持
- ❌ 不支持变量、嵌套、函数等高级特性
- ❌ 代码重复多，维护困难

### SCSS（Sassy CSS）

```scss
// SCSS - CSS 预处理器
$primary-color: blue;

.container {
  width: 100%;
  padding: 20px;
  
  .button {
    background: $primary-color;
    color: white;
  }
}
```

**特点**：
- ✅ 支持变量、嵌套、函数、混合等
- ✅ 代码更简洁，易于维护
- ⚠️ 需要编译成 CSS 才能使用

---

## SCSS 独有特性

### 1. 变量（Variables）

#### SCSS

```scss
// 定义变量
$primary-color: #007bff;
$font-size: 16px;
$font-family: Arial, sans-serif;

// 使用变量
.button {
  background: $primary-color;
  font-size: $font-size;
  font-family: $font-family;
}
```

#### 编译后的 CSS

```css
.button {
  background: #007bff;
  font-size: 16px;
  font-family: Arial, sans-serif;
}
```

**CSS 变量（原生支持）**：

```css
/* CSS 变量（需要浏览器支持） */
:root {
  --primary-color: #007bff;
  --font-size: 16px;
}

.button {
  background: var(--primary-color);
  font-size: var(--font-size);
}
```

---

### 2. 嵌套（Nesting）

#### SCSS

```scss
// 嵌套选择器
.nav {
  background: #333;
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      display: inline-block;
      
      a {
        color: white;
        text-decoration: none;
        
        &:hover {
          color: yellow;
        }
      }
    }
  }
}
```

#### 编译后的 CSS

```css
.nav {
  background: #333;
}

.nav ul {
  list-style: none;
  padding: 0;
}

.nav ul li {
  display: inline-block;
}

.nav ul li a {
  color: white;
  text-decoration: none;
}

.nav ul li a:hover {
  color: yellow;
}
```

**注意**：
- `&` 表示父选择器
- 嵌套过深会影响性能（建议不超过 3-4 层）

---

### 3. 混合（Mixins）

#### SCSS

```scss
// 定义混合
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin button($bg-color, $text-color) {
  background: $bg-color;
  color: $text-color;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}

// 使用混合
.container {
  @include flex-center;
}

.btn-primary {
  @include button(blue, white);
}

.btn-danger {
  @include button(red, white);
}
```

#### 编译后的 CSS

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-primary {
  background: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}

.btn-danger {
  background: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}
```

**CSS 无法实现**：CSS 没有混合功能，只能手动复制代码。

---

### 4. 继承（Inheritance）

#### SCSS

```scss
// 基础样式
%button-base {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

// 继承
.btn-primary {
  @extend %button-base;
  background: blue;
  color: white;
}

.btn-secondary {
  @extend %button-base;
  background: gray;
  color: white;
}
```

#### 编译后的 CSS

```css
.btn-primary, .btn-secondary {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary {
  background: blue;
  color: white;
}

.btn-secondary {
  background: gray;
  color: white;
}
```

**CSS 无法实现**：CSS 没有继承功能。

---

### 5. 函数（Functions）

#### SCSS

```scss
// 内置函数
$width: 800px;
$half-width: $width / 2;              // 数学运算
$dark-color: darken($primary-color, 20%);  // 颜色函数
$light-color: lighten($primary-color, 20%);

// 自定义函数
@function calculate-rem($pixels) {
  @return $pixels / 16px * 1rem;
}

.container {
  width: calculate-rem(800px);  // 50rem
  font-size: calculate-rem(16px);  // 1rem
}
```

#### 编译后的 CSS

```css
.container {
  width: 50rem;
  font-size: 1rem;
}
```

**CSS 函数**：CSS 只有 `calc()` 等少数函数，功能有限。

```css
/* CSS calc() */
.container {
  width: calc(100% - 20px);
}
```

---

### 6. 导入（Import）

#### SCSS

```scss
// _variables.scss（部分文件，以下划线开头）
$primary-color: blue;
$secondary-color: red;

// main.scss
@import 'variables';  // 导入变量文件
@import 'components/button';  // 导入组件

.container {
  background: $primary-color;
}
```

#### 编译后的 CSS

```css
/* 所有导入的文件会合并成一个 CSS 文件 */
.container {
  background: blue;
}
```

**CSS @import**：

```css
/* CSS @import（不推荐，影响性能） */
@import url('variables.css');
@import url('components/button.css');
```

---

### 7. 条件语句（Control Flow）

#### SCSS

```scss
// @if, @else if, @else
$theme: dark;

@if $theme == dark {
  $bg-color: #333;
  $text-color: white;
} @else {
  $bg-color: white;
  $text-color: #333;
}

body {
  background: $bg-color;
  color: $text-color;
}

// @for 循环
@for $i from 1 through 5 {
  .col-#{$i} {
    width: percentage($i / 5);
  }
}

// @each 循环
$colors: red, blue, green;

@each $color in $colors {
  .text-#{$color} {
    color: $color;
  }
}

// @while 循环
$i: 1;
@while $i <= 5 {
  .item-#{$i} {
    margin-left: #{$i * 10}px;
  }
  $i: $i + 1;
}
```

#### 编译后的 CSS

```css
body {
  background: #333;
  color: white;
}

.col-1 { width: 20%; }
.col-2 { width: 40%; }
.col-3 { width: 60%; }
.col-4 { width: 80%; }
.col-5 { width: 100%; }

.text-red { color: red; }
.text-blue { color: blue; }
.text-green { color: green; }

.item-1 { margin-left: 10px; }
.item-2 { margin-left: 20px; }
.item-3 { margin-left: 30px; }
.item-4 { margin-left: 40px; }
.item-5 { margin-left: 50px; }
```

**CSS 无法实现**：CSS 没有条件语句和循环。

---

### 8. 插值（Interpolation）

#### SCSS

```scss
$property: color;
$value: red;
$class-name: button;

// 在字符串中使用变量
.#{$class-name} {
  #{$property}: $value;
}

// 在属性名中使用
$side: top;
$size: 10px;

.element {
  margin-#{$side}: $size;
}
```

#### 编译后的 CSS

```css
.button {
  color: red;
}

.element {
  margin-top: 10px;
}
```

**CSS 无法实现**：CSS 不支持插值。

---

## 编译示例

### SCSS 源文件

```scss
// variables.scss
$primary-color: #007bff;
$spacing: 20px;

// mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// main.scss
@import 'variables';
@import 'mixins';

.container {
  @include flex-center;
  padding: $spacing;
  
  .button {
    background: $primary-color;
    color: white;
    
    &:hover {
      background: darken($primary-color, 10%);
    }
  }
}
```

### 编译后的 CSS

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.container .button {
  background: #007bff;
  color: white;
}

.container .button:hover {
  background: #0066cc;
}
```

---

## 快速参考

### SCSS 语法速查

```scss
// ========== 变量 ==========
$variable: value;

// ========== 嵌套 ==========
.parent {
  .child {
    // 样式
  }
  &:hover {
    // 父选择器
  }
}

// ========== 混合 ==========
@mixin name($param) {
  // 样式
}
.selector {
  @include name(value);
}

// ========== 继承 ==========
%placeholder {
  // 样式
}
.selector {
  @extend %placeholder;
}

// ========== 函数 ==========
@function name($param) {
  @return value;
}

// ========== 导入 ==========
@import 'file';

// ========== 条件 ==========
@if condition {
  // 样式
} @else {
  // 样式
}

// ========== 循环 ==========
@for $i from 1 through 5 {
  // 样式
}

@each $item in $list {
  // 样式
}

// ========== 插值 ==========
#{$variable}
```

### CSS 语法速查

```css
/* ========== 选择器 ========== */
.selector { }

/* ========== 属性 ========== */
.property: value;

/* ========== 注释 ========== */
/* 注释 */

/* ========== @规则 ========== */
@media (max-width: 768px) { }
@keyframes name { }
@import url('file.css');
```

---

## 实际应用场景

### 场景 1: 主题切换

#### SCSS

```scss
$themes: (
  light: (
    bg: white,
    text: black
  ),
  dark: (
    bg: #333,
    text: white
  )
);

@mixin theme($theme-name) {
  $theme: map-get($themes, $theme-name);
  background: map-get($theme, bg);
  color: map-get($theme, text);
}

.light-theme {
  @include theme(light);
}

.dark-theme {
  @include theme(dark);
}
```

#### CSS（需要手动写）

```css
.light-theme {
  background: white;
  color: black;
}

.dark-theme {
  background: #333;
  color: white;
}
```

### 场景 2: 响应式断点

#### SCSS

```scss
$breakpoints: (
  mobile: 576px,
  tablet: 768px,
  desktop: 992px
);

@mixin respond-to($breakpoint) {
  @media (min-width: map-get($breakpoints, $breakpoint)) {
    @content;
  }
}

.container {
  width: 100%;
  
  @include respond-to(tablet) {
    width: 750px;
  }
  
  @include respond-to(desktop) {
    width: 970px;
  }
}
```

#### CSS

```css
.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
```

---

## 选择建议

### 使用 SCSS 的情况

- ✅ 大型项目，需要代码复用
- ✅ 需要主题切换或动态样式
- ✅ 团队协作，需要统一的变量和混合
- ✅ 需要批量生成样式（如栅格系统）

### 使用 CSS 的情况

- ✅ 小型项目，样式简单
- ✅ 不需要编译步骤
- ✅ 直接使用 CSS 变量（现代浏览器）
- ✅ 学习 CSS 基础

---

## 在 Hugo 中使用

### SCSS 文件位置

```
assets/
  └── scss/
      ├── _variables.scss
      ├── _mixins.scss
      └── main.scss
```

### Hugo 自动编译

Hugo 会自动编译 `assets/` 目录下的 SCSS 文件：

```scss
// assets/scss/main.scss
@import 'variables';
@import 'mixins';

body {
  color: $text-color;
}
```

编译后生成：`resources/_gen/assets/scss/main.css`

---

## 总结

| 方面 | CSS | SCSS |
|------|-----|------|
| **学习曲线** | 简单 | 中等 |
| **功能** | 基础 | 强大 |
| **维护性** | 一般 | 优秀 |
| **性能** | 直接使用 | 需要编译 |
| **浏览器支持** | 原生支持 | 需编译 |

**建议**：
- 初学者先学 CSS
- 项目复杂时使用 SCSS
- 两者可以混合使用（SCSS 编译成 CSS）

---

**最后更新**: 2026-01-20
