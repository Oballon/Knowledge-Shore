---
title: "PEP 8 规范附录"
weight: 13
---

# PEP 8 代码风格指南附录

PEP 8 是 Python 官方的代码风格指南，旨在提高代码可读性和一致性。详见 [pep8.org](https://pep8.org/)。

## 代码布局

### 缩进

- 使用 **4 个空格** 缩进，不使用 Tab
- 续行缩进：与括号内首行对齐，或额外缩进 4 空格

```python
# 续行与括号对齐
def long_function_name(var_one, var_two,
                       var_three, var_four):
    return var_one

# 悬挂缩进（续行额外缩进）
result = some_function_that_takes_arguments(
    'arg1', 'arg2', 'arg3',
    'arg4', 'arg5'
)
```

### 行宽

- 每行最多 **79 字符**
- 文档字符串/注释建议 **72 字符** 内换行

### 空行

- 顶级定义之间：**2 个空行**
- 类内方法之间：**1 个空行**
- 函数内逻辑块之间：可加空行提高可读性

```python
# 两个空行分隔顶级定义
import os


def function_one():
    pass


def function_two():
    pass


class MyClass:
    """类文档"""

    def method_one(self):
        pass

    def method_two(self):
        pass
```

## 导入

- 导入放在文件顶部，在模块注释和文档字符串之后
- 顺序：标准库 → 相关第三方 → 本地应用
- 每组之间空一行
- 使用**绝对导入**，避免 `from ... import *`

```python
"""模块文档字符串"""

import os
import sys

import numpy as np
import pandas as pd

from mypackage.utils import helper
```

## 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 模块 | 短小全小写，下划线可选 | `my_module`, `mymodule` |
| 类 | 驼峰命名 PascalCase | `MyClass` |
| 函数/变量 | 小写下划线 snake_case | `my_function`, `my_var` |
| 常量 | 全大写下划线 | `MAX_SIZE`, `DEFAULT_TIMEOUT` |
| 私有 | 单下划线前缀 | `_internal_var` |
| 名称修饰 | 双下划线前后缀 | `__name__`（魔术方法） |

### 避免使用的名称

- 单字符：`l`、`O`、`I`（易与数字混淆）
- 可接受：`i`、`j`、`k`（循环变量），`e`（异常）

## 表达式与语句

### 空格

```python
# 二元运算符两侧各一个空格
x = 1
result = a + b

# 逗号后一个空格
spam(ham[1], {eggs: 2})
foo = (0,)

# 函数默认参数 = 两侧不加空格
def func(a=0, b=None):
    pass

# 切片冒号两侧空格可选，保持一致
ham[1:9], ham[1:9:3]
```

### 比较

```python
# 与 None 比较用 is / is not
if x is None:
    pass
if x is not None:
    pass

# 布尔值用 is True / is False（慎用），通常直接 if x:
```

### 字符串引号

- 单引号 `'` 与双引号 `"` 等效，项目内保持一致
- 三引号文档字符串用 `"""`

## 注释

### 块注释

- 与代码同级缩进
- 每行以 `#` 加一个空格开头

```python
# 这是一个块注释
# 说明下面的逻辑
x = process(data)
```

### 行尾注释

- 与语句至少 2 个空格间隔
- 少用，避免行过长

```python
x = x + 1  # 补偿边界
```

### 文档字符串

- 所有公共模块、函数、类、方法应写文档字符串
- 多行格式：首行摘要，空行，详细说明

```python
def complex(real=0.0, imag=0.0):
    """Form a complex number.

    Keyword arguments:
    real -- the real part (default 0.0)
    imag -- the imaginary part (default 0.0)
    """
    return complex(real, imag)
```

## 类型注解（PEP 484）

- 建议为函数参数和返回值添加类型注解
- 提高可读性和工具链支持

```python
def greeting(name: str) -> str:
    return f'Hello {name}'
```

## 工具支持

- **flake8**：检查 PEP 8 违规
- **black**：自动格式化（有自身风格，与 PEP 8 大部分一致）
- **isort**：自动排序导入
- **mypy**：静态类型检查

## 原则总结

> Beautiful is better than ugly.  
> Explicit is better than implicit.  
> Simple is better than complex.

- 可读性优先
- 风格一致胜于个人偏好
- 实用主义：特殊情况下可打破规则，但需注释说明
