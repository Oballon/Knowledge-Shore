---
title: "2-语法token"
---

## 运算符

``` 
算数运算符：  +  -  *  /  %（取余数） ++  --（前缀/后缀）

比较运算符： ==  !=  >  <  >=  <=

逻辑运算符： &&   ||   ！

位运算符： &  |  ~  ^  <<  >> （位 与、或、非、异或、左移、右移）

赋值运算符： =  +=  -=  *=  /=  %=  &=  |=  ^=  <<=  >>= 

其他运算符： &   *（指针）  []（数组下标）  ()（函数调用/强制类型转换） 
sizeof    ?: （条件运算符）   ->  .（结构体成员访问）

"变量<<=移动位数"
```

## 关键字

```
变量类型：int  float  double  char  signed  unsigned  short  long  const  enum  union  struct  extern   static  register  volatile（复杂）

控制流： return  while  do  for  continue  if  else   switch  case  default  break  goto(不建议)

其他： void  sizeof  typedef  auto（多余）

continue: 继续下次循环
break: 终止循环；或跳出switch，若无，继续判断后续case
default: switch中轮到时默认执行

C中auto不被显式使用，但C++中用于让编译器决定变量类型
```

## 其他

### 强制类型转换

``` C
int a = 12;
printf("float a:\n", (float)a);
```

### 注释
``` C
//单行注释

/* 单行注释 */

/*
多行注释
*/

```

### 分隔符

``` C
,   ;   ()   []   {}
```


### 字符常量

``` 
\\:  \字符
\':  '字符
\":  "字符
\?:  ?字符
\a:  警报铃声
\b:  退格键
\f:  换页符
\n:  换行符
\r:  回车
\t:  水平制表符
\v:  垂直制表符
\ooo:  一到三位的八进制数（如\101表示字符'A'）
\xhh...:  一个或多个数字的十六进制数（如\x41也表示'A'）
```

## 指针

### 指针含义
``` C
int value = 1;
int* p = &value; // 指针p存放地址，*p访问对应地址的数据
int** pp = &p; // 双指针 pp 存放指针 p 的地址，*pp访问 p 存放的地址，**pp访问value的值

"双指针严格按照上述规范定义"
```

``` C
"取地址规范"
int* p = &num // 普通变量
int* p = &arr[3]; // 一个数组元素

int* p = arr; // 数组名
int* p = p1; // p存取p1的内容

int* p = malloc(...); // 函数返回的地址
int* p = "abc";
int* p = NULL;
```

### 指针加减

``` C
int arr[5]={0,1,2,3,4};
int* ptr1 = arr;
ptr1 = ptr1 + 2; //指针向后移动2个数据类型大小地址
ptr1++;
ptr1--;

ptr1 = arr
int* ptr2 = &arr[4];
dif = ptr2 - ptr1; // 同一数组或同一块内存区域，两指针相隔元素个数 dif=4
```

### 指针数组

``` C
int num1=1,num2=2,num3=3;
int* ptrArray[3] = {&num1,&num2,&num3}; // *ptrArray[0]=1, ptrArray[0]= -1896874448内存地址

"指针数组仅可存储地址（新标准）"
```

## 回调函数

定义：通过函数指针调用函数，利用一个函数的指针作为参数传递给另一个函数
``` C
//回调方式一：定义函数指针类型
typedef int (*FuncPtr)(int, int); //声明函数指针类型为FuncPtr
FuncPtr func = add; //指向任意参数类型相同、返回类型相同的函数地址
printf("callback: %d\n", func(1,4)); 

int (* FuncPtr)(int, int); // 定义函数指针FuncPtr

//回调方式二：函数参数定义回调函数指针
void call_callback(int (*callback)(int, int)) {
    printf("Callback result: %d\n", callback(10, 20));
}
call_callback(add); 

"函数指针参数仅能传函数名，仅能用函数指针调用函数"
"python天生支持回调，不像C如此繁琐"
```