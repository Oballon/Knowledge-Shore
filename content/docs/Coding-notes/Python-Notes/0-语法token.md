---
title: "语法 Token"
weight: -1
---

## 关键字

Python 3 共有 35 个关键字：

```
逻辑值：True  False  None
逻辑运算：and  or  not
条件控制：if  elif  else
循环控制：for  while  break  continue
异常处理：try  except（捕获异常） finally（总是执行）  raise（抛出异常）
函数定义：def  lambda（匿名函数）  return  yield（生成器）
异步编程：async（异步函数）  await（等待异步操作）
类与对象：class  del（删除对象）
模块导入：import  from  as
作用域：global  nonlocal（非局部变量，用于嵌套函
数）
上下文管理：with（上下文管理器）
成员检查：in  is（身份检查）
其他：assert（断言）  pass（空语句，占位符）
```

### 不常见关键字示例

```python
# 异常处理
try:
    result = 1 / 0
except ZeroDivisionError:
    print("除零错误")
else:
    pass
finally: # finally 必须放在 try-except语句的最后
    print("总是执行")

# raise - 抛出异常
x = -1
if x < 0:
    raise ValueError("x不能为负数")

# lambda - 匿名函数
add = lambda x, y: x + y
print(add(2, 3))  # 输出: 5

# yield - 生成器
def count():
    for i in range(3):
        yield i
gen = count()
print(next(gen))  # 输出: 0

# async/await - 异步编程
import asyncio
async def fetch_data():
    await asyncio.sleep(1)
    return "data"

# del - 删除对象
x = [1, 2, 3]
del x[0]  # 删除索引0的元素，python有完善的垃圾回收机制

# python变量定义与赋值捆绑，需特别声明作用域才可对应修改外部变量
# global - 全局变量
x = 0
def func():
    global x 
    x = 10

# nonlocal - 非局部变量
def outer():
    x = 1
    def inner():
        nonlocal x
        x = 2

# with - 上下文管理
# 是用于上下文管理的语句，确保资源被正确获取和释放，无论是否发生异常
with open('file.txt', 'r') as f:
    content = f.read()

# is - 身份检查
# 是对象标识比较运算符，用于判断两个变量是否引用同一个对象
a = [1, 2]
b = [1, 2]
print(a is b)  # False (不同对象)
print(a == b)  # True (值相同)

# assert - 断言
# 是用于断言的关键字，用于在代码中插入调试断言
# 如果断言条件为假，程序会抛出 AssertionError异常
x = 5
assert x > 0, "x必须大于0"

# pass - 空语句
def empty_func():
    pass
```
