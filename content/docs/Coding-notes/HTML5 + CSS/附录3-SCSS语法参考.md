---
title: "SCSS语法参考"
---

# SCSS 语法参考

## 📖 目录

1. [SCSS 基础](#scss-基础)
2. [变量](#变量)
3. [嵌套](#嵌套)
4. [混合（Mixins）](#混合mixins)
5. [继承（Extend）](#继承extend)
6. [函数（Functions）](#函数functions)
7. [运算](#运算)
8. [导入与模块化](#导入与模块化)
9. [控制指令](#控制指令)
10. [插值](#插值)
11. [实用技巧](#实用技巧)

---

## SCSS 基础

SCSS（Sassy CSS）是Sass（Syntactically Awesome Style Sheets）的语法扩展，是一种CSS预处理器。SCSS在CSS的基础上增加了编程语言的特性，使CSS代码更加模块化、可维护和可复用。

### 什么是 SCSS

SCSS（Sassy CSS）是 CSS 的预处理器，提供了变量、嵌套、混合、函数等高级功能。

**作用**：SCSS扩展了CSS的功能，允许使用变量、嵌套、混合、函数、运算等特性编写样式代码，然后编译成标准的CSS代码。

**优势**：
- **代码复用**：通过变量、混合、继承等特性减少重复代码
- **模块化**：可以将样式代码拆分成多个文件，便于管理和维护
- **可维护性**：修改变量值即可全局更新样式，提高维护效率
- **功能强大**：支持运算、函数、控制指令等，使样式编写更灵活
- **向后兼容**：SCSS语法完全兼容CSS，可以直接在SCSS文件中编写CSS代码

**编译过程**：SCSS文件（`.scss`）需要通过Sass编译器转换为标准CSS文件（`.css`），浏览器只能识别CSS代码。编译可以在开发时自动完成，或通过构建工具（如Webpack、Gulp）集成到开发流程中。

### 文件扩展名

- `.scss` - SCSS 语法（使用大括号和分号）
- `.sass` - Sass 语法（缩进语法，不使用大括号）

### 注释

```scss
// 单行注释（不会编译到 CSS）

/* 多行注释（会编译到 CSS） */

/*!
  重要注释（压缩时也会保留）
*/
```

---

## 变量

变量是SCSS的核心特性之一，允许你存储值（如颜色、尺寸、字体等）并在整个样式表中重复使用。

**作用**：变量用于存储常用的值，如主题颜色、字体大小、间距等，通过修改变量值可以快速更新整个网站的样式。

**优势**：
- **统一管理**：将样式值集中管理，便于维护和修改
- **代码复用**：避免重复书写相同的值
- **主题切换**：通过修改变量值轻松实现主题切换
- **减少错误**：使用变量可以避免拼写错误和值不一致的问题

**与CSS变量的区别**：
- SCSS变量在编译时被替换，最终CSS中不包含变量
- CSS变量（`--variable`）在浏览器中运行时可动态修改
- SCSS变量功能更强大，支持运算、函数等
- CSS变量支持运行时修改，适合主题切换

**使用场景**：主题颜色、字体大小、间距、断点值、常用尺寸等需要统一管理的值。

### 基本语法

```scss
// 定义变量
$primary-color: #3498db;
$font-size: 16px;
$font-family: 'Arial', sans-serif;

// 使用变量
.button {
  color: $primary-color;
  font-size: $font-size;
  font-family: $font-family;
}
```

### 变量作用域

```scss
$global-var: "全局变量";

.block {
  $local-var: "局部变量"; // 只在 .block 内可用
  
  .nested {
    // 可以使用 $global-var 和 $local-var
  }
}

// 这里只能使用 $global-var
```

### 变量默认值

```scss
// 如果变量未定义，使用默认值
$primary-color: #3498db !default;

// 如果之前已定义，则使用已定义的值
$primary-color: #e74c3c; // 这个会覆盖默认值
```

### 变量类型

```scss
// 数字
$width: 100px;
$height: 50;

// 字符串
$font-family: "Helvetica Neue";
$font-family: Helvetica Neue; // 不加引号也可以

// 颜色
$primary: #3498db;
$secondary: rgb(52, 152, 219);
$tertiary: rgba(52, 152, 219, 0.8);

// 布尔值
$is-active: true;
$is-hidden: false;

// 空值
$empty: null;

// 列表
$list: 1px 2px 3px 4px;
$list: (1px, 2px, 3px, 4px); // 逗号分隔
$list: (1px 2px) (3px 4px); // 嵌套列表

// 映射（Map）
$map: (
  "primary": #3498db,
  "secondary": #e74c3c,
  "font-size": 16px
);
```

---

## 嵌套

嵌套是SCSS的重要特性，允许在规则块内嵌套其他规则，使CSS代码结构更清晰，更接近HTML的层级关系。

**作用**：嵌套让CSS代码结构更清晰，反映HTML的层级关系，减少重复书写父选择器，提高代码可读性和维护性。

**优势**：
- **结构清晰**：嵌套结构直观地反映HTML的层级关系
- **减少重复**：不需要重复书写父选择器
- **便于维护**：相关样式集中在一起，修改更方便
- **提高可读性**：代码结构更接近HTML结构，更容易理解

**编译原理**：SCSS嵌套会编译成CSS的后代选择器。例如，`.nav { ul { } }`会编译为`.nav ul { }`。嵌套层级越深，编译后的选择器越长。

**注意事项**：
- **避免过度嵌套**：建议嵌套不超过3层，过深的嵌套会导致选择器过长，影响性能和可维护性
- **选择器权重**：嵌套会增加选择器的权重，可能导致样式优先级问题
- **性能考虑**：过长的选择器会影响CSS解析性能

### 基本嵌套

```scss
.nav {
  background: #fff;
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
  }
  
  a {
    text-decoration: none;
    
    &:hover {
      color: blue;
    }
  }
}
```

### 父选择器引用（&）

```scss
.button {
  color: blue;
  
  // & 代表父选择器
  &:hover {
    color: red;
  }
  
  &-primary {
    background: blue;
  }
  
  &-secondary {
    background: gray;
  }
  
  // 编译为 .button.is-active
  &.is-active {
    font-weight: bold;
  }
  
  // 编译为 body .button
  body & {
    margin: 0;
  }
}
```

### 属性嵌套

```scss
.box {
  // 普通写法
  border: 1px solid #000;
  border-radius: 4px;
  
  // 嵌套写法
  border: {
    width: 1px;
    style: solid;
    color: #000;
    radius: 4px;
  }
  
  font: {
    family: Arial;
    size: 16px;
    weight: bold;
  }
  
  margin: {
    top: 10px;
    bottom: 20px;
    left: 15px;
    right: 15px;
  }
}
```

---

## 混合（Mixins）

混合（Mixins）是SCSS中用于代码复用的强大功能，允许将一组CSS属性封装成可重用的代码块，类似于函数。

**作用**：混合将一组CSS属性封装成可重用的代码块，可以在多个地方使用，避免重复代码，提高代码的可维护性。

**优势**：
- **代码复用**：将常用的样式模式封装成混合，在多个地方复用
- **减少重复**：避免在多个选择器中重复书写相同的CSS属性
- **便于维护**：修改混合定义即可更新所有使用该混合的地方
- **支持参数**：混合可以接受参数，使样式更灵活
- **内容块**：支持`@content`，可以在混合中插入自定义内容

**与函数的区别**：
- **混合**：输出CSS代码，用于生成样式规则
- **函数**：返回值，用于计算和生成值（如颜色、尺寸等）
- 混合使用`@mixin`定义，`@include`调用
- 函数使用`@function`定义，直接调用

**使用场景**：
- 通用样式模式（如清除浮动、文本省略）
- 浏览器兼容性处理（如添加浏览器前缀）
- 响应式断点封装
- 重复的样式组合

### 基本用法

```scss
// 定义混合
@mixin button-style {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

// 使用混合
.button {
  @include button-style;
  background: blue;
  color: white;
}
```

### 带参数的混合

```scss
// 定义带参数的混合
@mixin button($bg-color, $text-color: white) {
  background: $bg-color;
  color: $text-color;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
}

// 使用混合
.primary-button {
  @include button(blue); // 使用默认的 white
}

.secondary-button {
  @include button(gray, black);
}

.custom-button {
  @include button($bg-color: red, $text-color: yellow); // 命名参数
}
```

### 参数列表

```scss
@mixin box-shadow($shadows...) {
  -webkit-box-shadow: $shadows;
  -moz-box-shadow: $shadows;
  box-shadow: $shadows;
}

.shadow {
  @include box-shadow(0 1px 2px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1));
}
```

### 内容块（@content）

```scss
@mixin media-query($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

.container {
  width: 100%;
  
  @include media-query(768px) {
    width: 750px;
    margin: 0 auto;
  }
}
```

---

## 继承（Extend）

继承（Extend）是SCSS中用于共享样式的功能，允许一个选择器继承另一个选择器的所有样式。

**作用**：继承允许一个选择器共享另一个选择器的样式，减少重复代码，实现样式的复用。

**与混合的区别**：
- **继承（`@extend`）**：
  - 编译时会将选择器合并，生成组合选择器（如`.a, .b { }`）
  - 只能继承选择器的样式，不能传递参数
  - 适合共享基础样式，生成更紧凑的CSS
  - 使用占位符选择器（`%`）时，只有被继承的样式才会出现在CSS中
  
- **混合（`@mixin`）**：
  - 编译时会将混合内容复制到每个使用的地方
  - 可以传递参数，更灵活
  - 适合需要参数化的样式模式
  - 会生成更多CSS代码

**占位符选择器（`%`）**：占位符选择器定义的样式不会直接编译到CSS中，只有被`@extend`继承时才会出现。这避免了生成未使用的CSS代码。

**使用建议**：
- 需要共享基础样式时使用继承
- 需要参数化时使用混合
- 使用占位符选择器避免生成未使用的样式

### 基本用法

```scss
// 基础样式
%button-base {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

// 继承
.primary-button {
  @extend %button-base;
  background: blue;
  color: white;
}

.secondary-button {
  @extend %button-base;
  background: gray;
  color: black;
}
```

### 类继承

```scss
.error {
  border: 1px solid red;
  color: red;
}

.serious-error {
  @extend .error;
  border-width: 3px;
}
```

### 占位符选择器（%）

```scss
// 占位符选择器不会编译到 CSS，只有被 @extend 时才会出现
%clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

.container {
  @extend %clearfix;
}
```

---

## 函数（Functions）

函数是SCSS中用于计算和生成值的功能，可以接受参数并返回值，类似于编程语言中的函数。

**作用**：函数用于计算值、转换单位、处理颜色、操作字符串等，使样式值的计算更灵活和自动化。

**与混合的区别**：
- **函数（`@function`）**：
  - 返回值，用于生成属性值
  - 不能直接输出CSS代码
  - 用于计算、转换、处理数据
  - 调用方式：`function-name($arg)`
  
- **混合（`@mixin`）**：
  - 输出CSS代码块
  - 用于生成样式规则
  - 调用方式：`@include mixin-name($arg)`

**内置函数分类**：
- **颜色函数**：处理颜色值，如`lighten()`、`darken()`、`rgba()`等
- **数字函数**：数学运算，如`abs()`、`ceil()`、`round()`等
- **字符串函数**：处理字符串，如`quote()`、`to-upper-case()`等
- **列表函数**：操作列表，如`length()`、`nth()`、`join()`等
- **映射函数**：操作映射（Map），如`map-get()`、`map-keys()`等

**自定义函数**：可以使用`@function`定义自己的函数，封装常用的计算逻辑，如单位转换、尺寸计算等。

### 内置函数

#### 颜色函数

```scss
$color: #3498db;

// 调整亮度
lighten($color, 10%);  // 变亮 10%
darken($color, 10%);   // 变暗 10%

// 调整饱和度
saturate($color, 20%);   // 增加饱和度
desaturate($color, 20%); // 降低饱和度

// 调整透明度
rgba($color, 0.5);       // 设置透明度
opacity($color, 0.5);    // 设置透明度（Sass 3.1+）

// 混合颜色
mix($color1, $color2, 50%); // 混合两个颜色

// 获取颜色值
red($color);    // 获取红色值
green($color);  // 获取绿色值
blue($color);   // 获取蓝色值
```

#### 数字函数

```scss
abs(-10);           // 绝对值: 10
ceil(4.3);          // 向上取整: 5
floor(4.7);         // 向下取整: 4
round(4.5);         // 四舍五入: 5
percentage(0.5);    // 转换为百分比: 50%
min(1, 2, 3);       // 最小值: 1
max(1, 2, 3);       // 最大值: 3
random();           // 随机数 0-1
random(10);         // 随机数 1-10
```

#### 字符串函数

```scss
quote("text");           // 添加引号: "text"
unquote("text");         // 移除引号: text
str-length("hello");     // 字符串长度: 5
str-index("hello", "e"); // 查找位置: 2
to-upper-case("hello");  // 转大写: HELLO
to-lower-case("HELLO");  // 转小写: hello
```

#### 列表函数

```scss
$list: (1px, 2px, 3px);

length($list);        // 列表长度: 3
nth($list, 2);        // 获取第 n 项: 2px
index($list, 2px);    // 查找索引: 2
join($list1, $list2); // 合并列表
append($list, 4px);   // 追加元素
```

#### 映射（Map）函数

```scss
$map: (
  "primary": #3498db,
  "secondary": #e74c3c
);

map-get($map, "primary");     // 获取值: #3498db
map-keys($map);                // 获取所有键
map-values($map);              // 获取所有值
map-has-key($map, "primary"); // 检查键是否存在: true
map-merge($map1, $map2);       // 合并映射
```

### 自定义函数

```scss
@function calculate-rem($pixels, $base: 16px) {
  @return ($pixels / $base) * 1rem;
}

.text {
  font-size: calculate-rem(24px); // 1.5rem
}
```

---

## 运算

SCSS支持对数字、颜色、字符串等进行运算，使样式值的计算更灵活和自动化。

**作用**：运算允许在SCSS中进行数学计算、颜色运算、字符串连接等操作，避免手动计算值，提高代码的灵活性和可维护性。

**运算类型**：
- **数字运算**：加减乘除、取余等数学运算
- **颜色运算**：对颜色的RGB值进行运算
- **字符串运算**：字符串连接操作
- **单位运算**：带单位的数值运算

**注意事项**：
- **除法运算**：需要使用括号或变量，否则可能被解释为CSS除法（如`width: ($width / 2)`）
- **单位要求**：不同单位不能直接运算（如`px`和`em`），需要先统一单位
- **颜色运算**：颜色运算会分别对RGB值进行运算，结果可能不是预期的颜色
- **字符串连接**：使用`+`连接字符串，注意字符串和数字不能直接连接

**使用场景**：
- 计算尺寸（如容器宽度减去内边距）
- 单位转换（如px转rem）
- 颜色调整（如生成颜色变体）
- 响应式计算（如根据断点计算尺寸）

### 数字运算

```scss
$width: 100px;
$padding: 20px;

.container {
  width: $width + $padding;        // 120px
  width: $width - $padding;        // 80px
  width: $width * 2;               // 200px
  width: $width / 2;               // 50px
  width: $width % 3;               // 1px（取余）
  
  // 注意：除法需要使用括号或变量
  width: ($width / 2);             // 50px
  width: $width / 2;               // 可能被解释为 CSS 除法
}
```

### 颜色运算

```scss
$color1: #010203;
$color2: #040506;

// 颜色运算会分别对 RGB 值进行运算
$result: $color1 + $color2; // #050709
```

### 字符串运算

```scss
$name: "John";
$greeting: "Hello, " + $name + "!"; // "Hello, John!"

// 注意：字符串和数字连接
$value: 10px + "text"; // 错误
$value: 10px + 0;      // 10px（转换为数字）
```

### 单位运算

```scss
$size: 10px;

.container {
  width: $size * 2;        // 20px
  width: $size / 2;        // 5px
  width: $size + 5px;      // 15px
  width: $size - 2px;      // 8px
  
  // 不同单位不能直接运算
  // width: 10px + 1em;   // 错误
}
```

---

## 导入与模块化

SCSS支持将样式代码拆分成多个文件，通过导入机制组合使用，实现代码的模块化和组织。

**作用**：导入和模块化允许将大型样式表拆分成多个小文件，每个文件负责特定的功能，便于组织、维护和复用代码。

**模块化的优势**：
- **代码组织**：将相关样式集中在一个文件中，结构更清晰
- **便于维护**：修改某个模块不影响其他模块
- **代码复用**：可以在多个项目中复用模块
- **团队协作**：不同开发者可以同时工作在不同的模块上
- **按需加载**：只导入需要的模块，减少最终CSS文件大小

**导入方式**：
- **`@import`**：传统方式，导入的变量和混合全局可用，可能导致命名冲突
- **`@use`**（推荐）：模块化方式，使用命名空间访问，避免全局污染，更安全
- **`@forward`**：转发模块，允许一个文件重新导出其他模块的内容

**命名空间**：`@use`导入的模块可以使用命名空间访问，避免变量和混合名称冲突，使代码更清晰。

### @import

```scss
// 导入 SCSS 文件
@import "variables";
@import "mixins";
@import "components/button";

// 导入 CSS 文件（原样输出）
@import "reset.css";

// 导入多个文件
@import "variables", "mixins", "base";
```

### @use（推荐，Sass 3.5+）

```scss
// 使用 @use 替代 @import（避免全局污染）
@use "variables";
@use "mixins";

// 使用命名空间
@use "variables" as vars;
@use "mixins" as mix;

.button {
  color: vars.$primary-color;
  @include mix.button-style;
}

// 使用 * 导入所有（不推荐）
@use "variables" as *;
.button {
  color: $primary-color; // 不需要命名空间
}
```

### @forward

```scss
// _index.scss
@forward "variables";
@forward "mixins";
@forward "functions";

// main.scss
@use "index"; // 导入所有转发的模块
```

---

## 控制指令

控制指令是SCSS中的流程控制功能，允许根据条件、循环等逻辑生成CSS代码，使样式编写更灵活和动态。

**作用**：控制指令允许根据条件、循环等逻辑动态生成CSS代码，避免重复书写相似的样式规则，提高代码的灵活性和可维护性。

**指令类型**：
- **`@if`、`@else if`、`@else`**：条件判断，根据条件生成不同的样式
- **`@for`**：循环，生成一系列相似的样式规则
- **`@each`**：遍历列表或映射，为每个值生成样式
- **`@while`**：条件循环，根据条件重复生成样式

**使用场景**：
- 根据主题变量生成不同的样式
- 生成一系列相似的类（如`.item-1`、`.item-2`等）
- 遍历颜色列表生成颜色类
- 根据配置动态生成响应式断点

**注意事项**：
- 控制指令在编译时执行，生成最终的CSS代码
- 过度使用控制指令可能导致生成的CSS代码过多
- 合理使用控制指令可以提高代码效率，但要注意生成的CSS大小

### @if / @else if / @else

```scss
$theme: "dark";

.button {
  @if $theme == "dark" {
    background: black;
    color: white;
  } @else if $theme == "light" {
    background: white;
    color: black;
  } @else {
    background: gray;
    color: black;
  }
}
```

### @for

```scss
// 从 1 到 3（包含 3）
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 100px * $i;
  }
}

// 从 1 到 3（不包含 3）
@for $i from 1 to 3 {
  .item-#{$i} {
    width: 100px * $i;
  }
}
```

### @each

```scss
// 遍历列表
$colors: red, green, blue;

@each $color in $colors {
  .text-#{$color} {
    color: $color;
  }
}

// 遍历映射
$sizes: (
  "small": 12px,
  "medium": 16px,
  "large": 24px
);

@each $name, $size in $sizes {
  .text-#{$name} {
    font-size: $size;
  }
}
```

### @while

```scss
$i: 1;

@while $i <= 3 {
  .item-#{$i} {
    width: 100px * $i;
  }
  $i: $i + 1;
}
```

---

## 插值

插值（Interpolation）是SCSS中将变量值插入到字符串或选择器中的功能，使用`#{}`语法。

**作用**：插值允许将变量值动态插入到字符串、选择器名称、属性名等位置，使代码更灵活和动态。

**使用场景**：
- **动态选择器**：根据变量生成选择器名称（如`.button-#{$type}`）
- **动态属性名**：根据变量生成属性名（如`margin-#{$side}`）
- **字符串拼接**：在字符串中插入变量值
- **计算属性名**：根据计算生成属性名

**语法规则**：
- 使用`#{$variable}`将变量值插入到字符串或选择器中
- 插值可以用于选择器、属性名、属性值、字符串等位置
- 插值中的变量会被计算并转换为字符串

**注意事项**：
- 插值会计算变量值并转换为字符串
- 在字符串中使用插值时，变量值会直接插入，不需要引号
- 插值可以嵌套使用，实现更复杂的动态生成

### 基本插值

```scss
$name: "button";
$property: "color";

.#{$name} {
  #{$property}: blue;
  border-#{$property}: red;
}

// 编译为
// .button {
//   color: blue;
//   border-color: red;
// }
```

### 在字符串中使用

```scss
$font-family: "Arial";

body {
  font-family: "#{$font-family}, sans-serif";
}
```

### 在属性名中使用

```scss
$side: "top";

.box {
  margin-#{$side}: 10px;
  padding-#{$side}: 20px;
}
```

---

## 实用技巧

### 清除浮动

```scss
@mixin clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

.container {
  @include clearfix;
}
```

### 文本省略

```scss
@mixin text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@mixin text-ellipsis-multiline($lines: 2) {
  display: -webkit-box;
  -webkit-line-clamp: $lines;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

### 居中布局

```scss
@mixin center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 响应式断点

```scss
$breakpoints: (
  "small": 576px,
  "medium": 768px,
  "large": 992px,
  "xlarge": 1200px
);

@mixin respond-to($breakpoint) {
  $value: map-get($breakpoints, $breakpoint);
  
  @if $value {
    @media (min-width: $value) {
      @content;
    }
  }
}

.container {
  width: 100%;
  
  @include respond-to("medium") {
    width: 750px;
    margin: 0 auto;
  }
}
```

### 主题切换

```scss
$themes: (
  "light": (
    "bg": #fff,
    "text": #000
  ),
  "dark": (
    "bg": #000,
    "text": #fff
  )
);

@mixin theme($theme-name) {
  $theme: map-get($themes, $theme-name);
  
  @if $theme {
    background: map-get($theme, "bg");
    color: map-get($theme, "text");
  }
}

.body {
  @include theme("light");
}
```

### 计算函数

```scss
// 计算 rem
@function rem($pixels, $base: 16px) {
  @return ($pixels / $base) * 1rem;
}

// 计算 em
@function em($pixels, $context: 16px) {
  @return ($pixels / $context) * 1em;
}

// 使用
.text {
  font-size: rem(24px); // 1.5rem
  margin: em(16px);     // 1em
}
```

### 颜色工具函数

```scss
// 生成颜色变体
@function tint($color, $percentage) {
  @return mix(white, $color, $percentage);
}

@function shade($color, $percentage) {
  @return mix(black, $color, $percentage);
}

// 使用
.button {
  background: tint(blue, 20%);  // 20% 白色混合
  border: shade(blue, 20%);     // 20% 黑色混合
}
```

---

## 最佳实践

### 1. 文件组织

```
styles/
├── abstracts/
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── _functions.scss
├── base/
│   ├── _reset.scss
│   └── _typography.scss
├── components/
│   ├── _button.scss
│   └── _card.scss
└── main.scss
```

### 2. 命名规范

```scss
// 变量：使用连字符
$primary-color: #3498db;
$font-size-base: 16px;

// 混合：使用连字符
@mixin button-style { }
@mixin clearfix { }

// 占位符：使用连字符
%button-base { }
```

### 3. 避免过度嵌套

```scss
// ❌ 不好：嵌套过深
.nav {
  ul {
    li {
      a {
        span {
          color: red;
        }
      }
    }
  }
}

// ✅ 好：保持浅层嵌套
.nav-link-text {
  color: red;
}
```

### 4. 使用变量和混合

```scss
// ❌ 不好：重复代码
.button-primary {
  padding: 10px 20px;
  border-radius: 4px;
}

.button-secondary {
  padding: 10px 20px;
  border-radius: 4px;
}

// ✅ 好：使用混合
@mixin button-base {
  padding: 10px 20px;
  border-radius: 4px;
}

.button-primary {
  @include button-base;
}

.button-secondary {
  @include button-base;
}
```

---

## 编译 SCSS

### 命令行编译

```bash
# 安装 Sass
npm install -g sass

# 编译单个文件
sass input.scss output.css

# 监听文件变化
sass --watch input.scss:output.css

# 压缩输出
sass input.scss output.css --style compressed

# 编译整个目录
sass styles:css
```

### 输出格式

```scss
// expanded（默认，展开格式）
sass input.scss output.css --style expanded

// nested（嵌套格式）
sass input.scss output.css --style nested

// compact（紧凑格式）
sass input.scss output.css --style compact

// compressed（压缩格式）
sass input.scss output.css --style compressed
```

---

## 常见问题

### 1. 除法运算

```scss
// 需要使用括号
width: ($width / 2);  // ✅
width: $width / 2;    // ⚠️ 可能被解释为 CSS 除法
```

### 2. 变量作用域

```scss
// 使用 !global 声明全局变量
$color: red;

.block {
  $color: blue !global; // 修改全局变量
}
```

### 3. @import vs @use

```scss
// @import：旧方式，全局作用域
@import "variables"; // 所有变量全局可用

// @use：新方式，模块化（推荐）
@use "variables"; // 需要命名空间访问
```

---

## 参考资源

- [Sass 官方文档](https://sass-lang.com/documentation)
- [Sass Guidelines](https://sass-guidelin.es/)
- [SCSS 语法速查表](https://devhints.io/sass)
