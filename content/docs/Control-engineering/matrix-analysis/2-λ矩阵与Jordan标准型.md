# λ矩阵及标准形

## λ-矩阵的定义

设 $a_{ij}(\lambda)\ (i=1,2,\cdots,m;\ j=1,2,\cdots,n)$ 为数域 $F$ 上的多项式，则称

$$
A(\lambda)=\begin{bmatrix}
a_{11}(\lambda) & a_{12}(\lambda) & \cdots & a_{1n}(\lambda) \\
a_{21}(\lambda) & a_{22}(\lambda) & \cdots & a_{2n}(\lambda) \\
\cdots & \cdots & \cdots & \cdots \\
a_{m1}(\lambda) & a_{m2}(\lambda) & \cdots & a_{mn}(\lambda)
\end{bmatrix}
$$

为**多项式矩阵**，或 **$\lambda$-矩阵**。称不为0的多项式 $a_{ij}(\lambda)$ 中最高的次数为 $A(\lambda)$ 的次数。

- 非零数字矩阵是0次 $\lambda$-矩阵
- $\lambda I - A$ 是 $1$ 次 $\lambda$-矩阵，$A \in \mathbb{C}^{n \times n}$

 

## λ-矩阵的另一个视角

$\lambda$-矩阵也是以矩阵为系数的多项式

设 $a_{ij}(\lambda) = a_{p;ij}\lambda^p + a_{p-1;ij}\lambda^{p-1} + \cdots + a_{1;ij}\lambda + a_{0;ij}$，$(i=1,2,\cdots,m;\ j=1,2,\cdots,n)$

那么

$$
A(\lambda) = [a_{p;ij}]\lambda^p + [a_{p-1;ij}]\lambda^{p-1} + \cdots + [a_{1;ij}]\lambda + [a_{0;ij}]
$$

 

## 正规秩的定义

如果 $\lambda$-矩阵 $A(\lambda)$ 中有一个 $r$ 阶 ($r \geq 1$) 子式不为零，而所有 $r+1$ 阶子式（如果有的话）全为零（多项式），则称 $A(\lambda)$ 的（正规）**秩**为 $r$，记为

$$
\operatorname{rank}\{A(\lambda)\} = r
$$

- 零矩阵的秩为0。
- $A \in \mathbb{C}^{n \times n}$，$\lambda I - A$ 的秩为 $n$。

 

## λ-矩阵的逆矩阵的定义

一个 $n$ 阶 $\lambda$-矩阵 $A(\lambda)$ 称为**可逆的**，如果有一个 $n$ 阶 $\lambda$-矩阵 $B(\lambda)$，满足

$$
A(\lambda)B(\lambda) = B(\lambda)A(\lambda) = I
$$

这里 $I$ 是 $n$ 阶单位矩阵。$B(\lambda)$ 称为 $A(\lambda)$ 的逆矩阵，记为 $A^{-1}(\lambda)$。可逆的 $\lambda$-矩阵又称为**单位模矩阵**（幺模矩阵）。

> **注**：前提在 $\lambda$-矩阵下可逆




- 一个 $n$ 阶 $\lambda$-矩阵 $A(\lambda)$ 是单位模矩阵的**充要条件**是：$\det(A(\lambda))$ 是一个非零的常数。

 

## 初等变换的定义

下列各种类型的变换，叫做 $\lambda$-矩阵的**初等变换：**

1. 矩阵的任二行（列）互换位置；
2. 非零常数 $c$ 乘矩阵的某一行（列）；
3. 矩阵的某一行（列）的 $\varphi(\lambda)$ 倍加到另一行（列）上去，其中 $\varphi(\lambda)$ 是 $\lambda$ 的一个多项式。

对单位矩阵施行上述三种类型的初等变换便得相应的三种 $\lambda$-矩阵的初等矩阵：

$$
P(i,j),\quad P(i(c)),\quad P(i,j(\varphi))
$$

> **注**：
> - 初等变换是初等可逆变换，初等矩阵是单位模矩阵。
> - (2) 中只能乘非零常数，否则不可逆。
> - $\varphi$始终写在$j$括号里
 

## 矩阵等价

对一个 $m \times n$ 的 $\lambda$-矩阵 $A(\lambda)$ 的行作初等行变换，相当于用相应的 $m$ 阶初等矩阵左乘 $A(\lambda)$。对 $A(\lambda)$ 的列作初等列变换，相当于用相应的 $n$ 阶初等矩阵右乘 $A(\lambda)$。**定义**如果 $A(\lambda)$ 经过有限次的初等变换之后变成 $B(\lambda)$，则称 $A(\lambda)$ 与 $B(\lambda)$ **等价**，记之为

$$
A(\lambda) \simeq B(\lambda)
$$

**等价的性质**：
1. 自反性：$A(\lambda) \simeq A(\lambda)$
2. 对称性：$A(\lambda) \simeq B(\lambda) \Rightarrow B(\lambda) \simeq A(\lambda)$
3. 传递性：$A(\lambda) \simeq B(\lambda),\ B(\lambda) \simeq C(\lambda) \Rightarrow A(\lambda) \simeq C(\lambda)$

> **注**：
> - 等价是有限次初等变换，无限次不行。
> - 反例：无限次左（右）乘 $\begin{bmatrix} 0.9 & 0 \\ 0 & 0.9 \end{bmatrix}$

 

## λ-矩阵的Smith标准形

任意一个非零的 $m \times n$ 维的 $\lambda$-矩阵都等价于一个对角矩阵，即

$$
A(\lambda) \simeq \begin{bmatrix}
d_1(\lambda) & & & & \\
& d_2(\lambda) & & & \\
& & \ddots & & \\
& & & d_r(\lambda) & \\
& & & & 0 \\
& & & & & \ddots \\
& & & & & & 0
\end{bmatrix}
$$

其中 $r \geq 1$，$d_i(\lambda)$ 是首项系数为1的多项式且

$$
\underbrace{d_i(\lambda) \mid d_{i+1}(\lambda)}_{d_i是d_{i+1}因子} \quad (i=1,2,\cdots,r-1)
$$

称这种形式的 $\lambda$-矩阵为 $A(\lambda)$ 的 **Smith 标准形**。

$$d_1(\lambda), d_2(\lambda), \cdots, d_r(\lambda)$$

称为 $A(\lambda)$ 的**不变因子**。（即使是1，也是不变因子）


## 引理-化简Smith标准型

设 $\lambda$-矩阵 $A(\lambda)$ 的左上角元素 $a_{11}(\lambda) \neq 0$，并且 $A(\lambda)$ 中至少有一个元素不能被它整除，那么一定可以找到一个与 $A(\lambda)$ 等价的矩阵 $B(\lambda)$，它的左上角元素也不为零，但是次数比 $a_{11}(\lambda)$ 低。

**引理的意义**：
1. 反复应用，一定可以找到一个与 $A(\lambda)$ 等价的矩阵 $B(\lambda)$，它的左上角元素也不为零，但是能整除整个矩阵中的所有元素。
2. 把第一行第一列其它元素都化为0。

**定义符号**：$\forall a(\lambda) \in R[\lambda]$，记 $\partial a(\lambda)$ 为多项式 $a(\lambda)$ 的次数。

## 定义化简举例（繁）
### 例 2.1.2

$$
A(\lambda) = \begin{bmatrix}
1-\lambda & \lambda^2 & \lambda \\
\lambda & \lambda & -\lambda \\
1+\lambda^2 & \lambda^2 & -\lambda^2
\end{bmatrix}
$$

将其化成 Smith 标准形。

**解**：

$$
A(\lambda) = \begin{bmatrix}
1-\lambda & \lambda^2 & \lambda \\
\lambda & \lambda & -\lambda \\
1+\lambda^2 & \lambda^2 & -\lambda^2
\end{bmatrix}
\overset{c_1+c_3,\ r_3-r_1}{\simeq}
\begin{bmatrix}
1 & \lambda^2 & \lambda \\
0 & \lambda & -\lambda \\
0 & 0 & -\lambda^2-\lambda
\end{bmatrix}
$$

$$
\overset{c_2-\lambda^2 c_1,\ c_3-\lambda c_1}{\simeq}
\begin{bmatrix}
1 & 0 & 0 \\
0 & \lambda & -\lambda \\
0 & 0 & -\lambda^2-\lambda
\end{bmatrix}
\overset{c_3+c_2,\ -c_3}{\simeq}
\begin{bmatrix}
1 & 0 & 0 \\
0 & \lambda & 0 \\
0 & 0 & \lambda^2+\lambda
\end{bmatrix}
$$

$$
\simeq \begin{bmatrix}
1 & 0 & 0 \\
0 & \lambda & 0 \\
0 & 0 & \lambda(\lambda+1)
\end{bmatrix}
$$

 

### 例 2.1.3

$$
A(\lambda) = \begin{bmatrix}
\lambda(\lambda+1) & & \\
& \lambda & \\
& & (\lambda+1)^2
\end{bmatrix}
$$

将其化成 Smith 标准形。

**解**：

$$
A(\lambda) \overset{c_3+c_2}{\simeq} \begin{bmatrix}
\lambda(\lambda+1) & & \\
& \lambda & \lambda \\
& & (\lambda+1)^2
\end{bmatrix}
\overset{r_3-(\lambda+2)r_2}{\simeq} \begin{bmatrix}
\lambda(\lambda+1) & & \\
& \lambda & \lambda \\
& -\lambda(\lambda+2) & 1
\end{bmatrix}
$$

$$
\simeq \begin{bmatrix}
1 & & \\
& \lambda(\lambda+1) & \\
& & \lambda(\lambda+1)^2
\end{bmatrix}
$$

 

# Smith标准形的唯一性

## 行列式因子

**k 阶子式**

$m \times n$ 阶矩阵 $A$ 任意 $k$ 行和任意 $k$ 列交点上的元素按原次序组成的行列式称为 $A$ 的 $k$ 阶子式。

**k 阶行列式因子**

$A(\lambda)$ 为一个 $\lambda$-矩阵且 $\operatorname{rank}(A(\lambda)) = r$。对于任意的正整数 $k$，$1 \leq k \leq r$，$A(\lambda)$ 必有非零 $k$ 阶子式，$A(\lambda)$ 的全部 $k$ 阶子式的首1（降幂排列）最高公因式 $D_k(\lambda)$ 称为 $A(\lambda)$ 的 **$k$ 阶行列式因子**

- 初等变换不改变 $\lambda$-矩阵的行列式因子。

**推论**：等价矩阵具有相同的行列式因子，因此也具有相同的秩。

 

## 行列式因子与不变因子的关系

设 $\lambda$-矩阵 $A(\lambda)$ 的 Smith 标准形为

$$
A(\lambda) \simeq \begin{bmatrix}
d_1(\lambda) & & & \\
& d_2(\lambda) & & \\
& & \ddots & \\
& & & d_r(\lambda) \\
& & & & 0 \\
& & & & & \ddots \\
& & & & & & 0
\end{bmatrix}
$$

上面的标准形的各阶行列式因子为

$$
\begin{aligned}
D_1(\lambda) &= d_1(\lambda) \\
D_2(\lambda) &= d_1(\lambda)d_2(\lambda) \\
&\vdots \\
D_r(\lambda) &= d_1(\lambda)d_2(\lambda)\cdots d_r(\lambda)
\end{aligned}
$$

显然，有

$$
\begin{aligned}
d_1(\lambda) &= D_1(\lambda) \\
d_2(\lambda) &= \frac{D_2(\lambda)}{D_1(\lambda)} \\
&\vdots \\
d_r(\lambda) &= \frac{D_r(\lambda)}{D_{r-1}(\lambda)}
\end{aligned}
$$

由于 $A(\lambda)$ 与上面的 Smith 标准形具有相同的各阶行列式因子，所以 $A(\lambda)$ 的各阶行列式因子为

$$
D_1(\lambda), D_2(\lambda), \cdots, D_r(\lambda)
$$

而 

$$d_1(\lambda), d_2(\lambda), \cdots, d_r(\lambda)$$
又是由这些行列式因子唯一确定的，于是我们得到：

- $A(\lambda)$ 的 Smith 标准形是**唯一的**。

 

### 相互求解例题

求下列 $\lambda$-矩阵的 Smith 标准形。

**(1)**

$$
\begin{bmatrix}
\lambda-a & c_1 & & \\
& \lambda-a & c_2 & \\
& & \ddots & \ddots & \\
& & & \lambda-a & c_{n-1} \\
& & & & \lambda-a
\end{bmatrix}
$$

其中 $c_i \neq 0,\ i=1,2,\cdots,n-1$

**(2)**

$$
\begin{bmatrix}
0 & 0 & 1 & \lambda+2 \\
0 & 1 & \lambda+2 & 0 \\
1 & \lambda+2 & 0 & 0 \\
\lambda+2 & 0 & 0 & 0
\end{bmatrix}
$$

 

### 矩阵等价推论（行列式因子与不变因子）

$m \times n$ 维 $\lambda$-矩阵 $A(\lambda)$ 与 $B(\lambda)$ 等价的充要条件：

1. 对于任何的 $k$，它们的 $k$ 阶行列式因子相同。
2. 它们具有相同的不变因子（组）。[包含1也必须一样多]
3. 它们具有相同的 Smith 标准形。

**推论 A**：$\lambda$-矩阵 $A(\lambda)$ 可逆的充要条件为 $A(\lambda)$ 与单位矩阵等价。

**推论 B**：$\lambda$-矩阵 $A(\lambda)$ 可逆的充要条件为 $A(\lambda)$ 可以表示成一系列初等矩阵的乘积。

**推论 C**：$A(\lambda)$ 与 $B(\lambda)$ 等价的充要条件是存在两个可逆矩阵 $P(\lambda)$ 与 $Q(\lambda)$，使得

$$
B(\lambda) = P(\lambda)A(\lambda)Q(\lambda)
$$

 

# 初等因子和等价条件

$\lambda$-矩阵 $A(\lambda)$ 的不变因子为

$$
d_1(\lambda), d_2(\lambda), \cdots, d_r(\lambda)
$$

在复数域内将它们分解成一次因式的幂的乘积：

$$
\begin{aligned}
d_1(\lambda) &= (\lambda-\lambda_1)^{e_{11}}(\lambda-\lambda_2)^{e_{12}}\cdots(\lambda-\lambda_s)^{e_{1s}} \\
d_2(\lambda) &= (\lambda-\lambda_1)^{e_{21}}(\lambda-\lambda_2)^{e_{22}}\cdots(\lambda-\lambda_s)^{e_{2s}} \\
&\cdots\cdots \\
d_r(\lambda) &= (\lambda-\lambda_1)^{e_{r1}}(\lambda-\lambda_2)^{e_{r2}}\cdots(\lambda-\lambda_s)^{e_{rs}}
\end{aligned}
$$

其中 $\lambda_1, \cdots, \lambda_s$ 是互异的复数，$e_{ij}$ 是非负整数。因为 $d_i \mid d_{i+1}(\lambda)\ (i=1,\cdots,r-1)$，所以满足如下关系：

$$
\begin{aligned}
0 \leq e_{11} \leq e_{21} \leq \cdots \leq e_{r1} \\
0 \leq e_{12} \leq e_{22} \leq \cdots \leq e_{r2} \\
\cdots\cdots \\
0 \leq e_{1s} \leq e_{2s} \leq \cdots \leq e_{rs}
\end{aligned}
$$

 

## 初等因子的定义

在上式中，所有指数大于零的因子

$$
(\lambda-\lambda_j)^{e_{ij}},\quad e_{ij} > 0,\ i=1,\cdots,r,\ j=1,\cdots,s
$$

称为 $\lambda$-矩阵 $A(\lambda)$ 的**初等因子**。

> **注**：1不算初等因子，因为 "$a = a \cdot 1 \cdot 1 \cdots$"

 
## 初等因子举例

#### 例 2.3.1

如果 $\lambda$-矩阵 $A(\lambda)$ 的不变因子为

$$
\begin{aligned}
d_1(\lambda) &= 1 \\
d_2(\lambda) &= \lambda(\lambda-1) \\
d_3(\lambda) &= \lambda(\lambda-1)^2(\lambda+1)^2 \\
d_4(\lambda) &= \lambda^2(\lambda-1)^3(\lambda+1)^3(\lambda-2)
\end{aligned}
$$

则 $A(\lambda)$ 的初等因子为

$$
\lambda,\ \lambda,\ \lambda^2,\ \lambda-1,\ (\lambda-1)^2,\ (\lambda-1)^3,\ (\lambda+1)^2,\ (\lambda+1)^3,\ (\lambda-2)
$$

> **问题**：
> 1. 知道不变因子，能否判断 $\operatorname{rank}(A(\lambda))$？
> 2. 知道初等因子，能否判断 $\operatorname{rank}(A(\lambda))$？

 

#### 例 2.3.2

如果 $5 \times 6$ 阶 $\lambda$-矩阵 $A(\lambda)$ 的秩为4，其初等因子为

$$
\lambda,\ \lambda,\ \lambda^2,\ \lambda-1,\ (\lambda-1)^2,\ (\lambda-1)^3,\ (\lambda+i)^3,\ (\lambda-i)^3
$$

求 $A(\lambda)$ 的 Smith 标准形。

**解**：先将初等因子降幂排列，写出不变因子，注意秩。

$$
\begin{aligned}
d_4(\lambda) &= \lambda^2(\lambda-1)^3(\lambda+i)^3(\lambda-i)^3 \\
d_3(\lambda) &= \lambda(\lambda-1)^2 \\
d_2(\lambda) &= \lambda(\lambda-1) \\
d_1(\lambda) &= 1
\end{aligned}
$$

再写出 Smith 标准形，注意维数。

 

## 等价条件

#### 矩阵等价

$m \times n$ 维 $\lambda$-矩阵 $A(\lambda)$ 与 $B(\lambda)$ 等价的充要条件是它们：
1. 有相同的秩，**且**
2. 有相同的初等因子。

> **注**：与 Smith 标准形、$k$ 阶行列式因子、不变因子的判定不同，初等因子**必须**判定秩是否一样。

 
#### 分块矩阵初等因子


$\lambda$-矩阵

$$
A(\lambda) = \begin{bmatrix} B(\lambda) & \\ & C(\lambda) \end{bmatrix}
$$

为分块对角形矩阵，则 $B(\lambda)$ 与 $C(\lambda)$ 的初等因子的全体是 $A(\lambda)$ 的全部初等因子。

**推论**：$\lambda$-矩阵

$$
A(\lambda) = \begin{bmatrix}
A_1(\lambda) & & & \\
& A_2(\lambda) & & \\
& & \ddots & \\
& & & A_t(\lambda)
\end{bmatrix}
$$

为分块对角形矩阵，则 $A_1(\lambda), A_2(\lambda), \cdots, A_t(\lambda)$ 的初等因子的全体是 $A(\lambda)$ 的全部初等因子。

## 例 2.3.3

求初等因子、秩、不变因子、行列式因子、Smith 标准形

**(1)**

$$
A(\lambda) = \begin{bmatrix}
0 & 0 & 0 & \lambda^2 \\
0 & 0 & \lambda^2-\lambda & 0 \\
0 & (\lambda-1)^2 & 0 & 0 \\
\lambda^2-\lambda & 0 & 0 & 0
\end{bmatrix}
$$

**(2)**

$$
B(\lambda) = \begin{bmatrix}
\lambda^2+\lambda & 0 & 0 & 0 \\
0 & \lambda & 0 & 0 \\
0 & 0 & (\lambda+1)^2 & \lambda+1 \\
0 & 0 & -2 & \lambda-2
\end{bmatrix}
$$

 

## 例 2.3.4

求行列式、行列式因子、不变因子、初等因子、Smith 标准形，并比较。

**(1)** $(\lambda+1)^4 = \lambda^4 + 4\lambda^3 + 6\lambda^2 + 4\lambda + 1$ 的伴随形的特征矩阵

$$
A(\lambda) = \lambda I_4 - \begin{bmatrix}
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 \\
-1 & -4 & -6 & -4
\end{bmatrix}
= \begin{bmatrix}
\lambda & -1 & 0 & 0 \\
0 & \lambda & -1 & 0 \\
0 & 0 & \lambda & -1 \\
1 & 4 & 6 & \lambda+4
\end{bmatrix}
$$

**(2)**

$$
B(\lambda) = \begin{bmatrix}
\lambda+1 & 0 & 0 & 0 \\
0 & \lambda+1 & 0 & 0 \\
0 & 0 & \lambda+1 & 0 \\
0 & 0 & 0 & \lambda+1
\end{bmatrix}
$$

**(3)**

$$
C(\lambda) = \begin{bmatrix}
\lambda+1 & -1 & 0 & 0 \\
0 & \lambda+1 & -1 & 0 \\
0 & 0 & \lambda+1 & -1 \\
0 & 0 & 0 & \lambda+1
\end{bmatrix}
$$

**注：** 灵活运用不变因子、行列式因子、初等因子的对应关系，取易求解
 

# 数字矩阵的相似与λ-矩阵的等价

## 等价定理

### 引理 2.4.1 带余除法/多项式矩阵除法

设 $B(\lambda) = B_r\lambda^r + B_{r-1}\lambda^{r-1} + \cdots + B_0$ 为 $r$ 次 $n$ 阶 $\lambda$-矩阵，且 $B_r \in \mathbb{C}^{n \times n}$，$|B_r| \neq 0$。则对任意 $n \times n$ 矩阵 $A$，存在 $P_0(\lambda), R_0(\lambda)$ 和 $P_1(\lambda), R_1(\lambda)$ 使得

$$
A(\lambda) = P_0(\lambda)B(\lambda) + R_0(\lambda) = B(\lambda)P_1(\lambda) + R_1(\lambda)
$$

其中 $\partial R_0(\lambda) < \partial B(\lambda) = r$，$\partial R_1(\lambda) < \partial B(\lambda) = r$。

### 定理 2.4.1

设 $A, B$ 为两个 $n$ 阶数字矩阵，则 $A$ 与 $B$ 相似的充要条件是：$\lambda I - A$ 与 $\lambda I - B$ 相似

### 定理 2.4.2

设 $A, B$ 为两个 $n$ 阶数字矩阵，则 $A$ 与 $B$ 相似的充要条件是 $\lambda I - A$ 与 $\lambda I - B$ 等价

- 根本原因：不变因子相同决定了矩阵的唯一有理标准形（A能控、能观标准型）


### 定理 2.4.3

两个同阶的方阵$A,B$相似的充分必要条件是它们的特征矩阵$\lambda I-A$和$\lambda I-B$有相同的**初等因子**

### 定理 2.4.4

两个同阶的方阵$A,B$相似的充分必要条件是它们的特征矩阵$\lambda I - A$ 与 $\lambda I - B$ 有相同的**行列式因子（或不变因子）**

- 对于任意一个数字矩阵$A$，$|\lambda I-A|\neq 0$（仅取特征值时为0），所以$rank(\lambda I-A)=n$
 
- 行列式因子、不变因子、初等因子（秩已知）是一一对应的

**注：** 数字方阵$A$的特征矩阵$\lambda I-A$的特征多项式次数、全部初等因子次数和、全部不变因子的次数和、A 的阶数相等

 

### 例 2.4.1

设 $\varepsilon \neq 0$，

$$
A = \begin{bmatrix}
a & 1 & & \\
& a & \ddots & \\
& & \ddots & 1 \\
& & & a
\end{bmatrix}_{n \times n}
$$

**(1)** 求 $A$ 与

$$
B = \begin{bmatrix}
a & \varepsilon & & \\
& a & \ddots & \\
& & \ddots & \varepsilon \\
& & & a
\end{bmatrix}_{n \times n}
$$

是否相似？

> **注**：$A$ 的 Smith 标准形、初等因子与 $B$ 的初等因子相同，故 $A \sim B$。

 

### 例 2.4.2

$\begin{bmatrix} a & 1 & & & \\ & \ddots & \ddots & & \\ & & a & 0 & \\ & & & a & 1 & \\ & & & & \ddots & \ddots \\ & & & & & a & 1 \\ & & & & & & a \end{bmatrix},
\begin{bmatrix} a & 1 & & & & \\ & \ddots & \ddots & & & \\ & & a & 1 & & \\ & & & a & \varepsilon & \\ & & & & a & 1 & \\ & & & & & \ddots & \ddots \\ & & & & & & a & 1 \\ & & & & & & & a \end{bmatrix}$

设 $\varepsilon \neq 0$，$A, B$ 如上，证明 $A$ 与 $B$ 不相似。

> **注**：$A$ 的 Smith 标准形、初等因子与 $B$ 的不同，故 $A\nsim B$。
 

# 矩阵的Jordan标准形

### 定义 2.5.1 (Jordan块与Jordan标准形)

$n_i$ 阶 $\lambda$-矩阵

$$
J_i = \begin{bmatrix}
a_i & 1 & & \\
& a_i & \ddots & \\
& & \ddots & 1 \\
& & & a_i
\end{bmatrix}_{n_i \times n_i}
$$

称为 **Jordan 块**。设 $J_1, J_2, \cdots, J_s$ 为 Jordan 块，则

$$
J = \begin{bmatrix}
J_1 & & & \\
& J_2 & & \\
& & \ddots & \\
& & & J_s
\end{bmatrix}
$$

称为 **Jordan 标准形**。

 

每个 Jordan 块 $J_i$ 的初等因子为 $(\lambda - a_i)^{n_i}$。所有 Jordan 块的初等因子全体为

$$
(\lambda-a_1)^{n_1},\ (\lambda-a_2)^{n_2},\ \cdots,\ (\lambda-a_s)^{n_s}
$$

> 同一特征值可出现在多个 Jordan 块中。

 

### 定理 2.5.1

设 $A \in \mathbb{C}^{n \times n}$，其初等因子为

$$
(\lambda-a_1)^{n_1},\ (\lambda-a_2)^{n_2},\ \cdots,\ (\lambda-a_s)^{n_s}, \quad \sum_{i=1}^{s} n_i = n
$$

则 $A$ 相似于 Jordan 标准形 $J$，即存在可逆矩阵 $P$ 使得

$$
A \sim J = P^{-1}AP
$$

其中

$$
J = \begin{bmatrix}
J_1 & & & \\
& J_2 & & \\
& & \ddots & \\
& & & J_s
\end{bmatrix}, \quad J_i = \begin{bmatrix}
a_i & 1 & & \\
& a_i & \ddots & \\
& & \ddots & 1 \\
& & & a_i
\end{bmatrix}_{n_i \times n_i}
$$

> $A \sim J$ 意味着 $\exists P \in \mathbb{C}^{n \times n}$，$|P| \neq 0$，使得 $AP = PJ$。

 

### Jordan块的推导

设 $A$ 可对角化，即 $A = P \Lambda P^{-1}$，其中

$$
\Lambda = \begin{bmatrix}
\lambda_1 & & & \\
& \lambda_2 & & \\
& & \ddots & \\
& & & \lambda_n
\end{bmatrix}
$$

则 $A[p_1\ p_2\ \cdots\ p_n] = [p_1\ p_2\ \cdots\ p_n]\Lambda$，即

$$
A p_i = p_i \lambda_i
$$

特征向量 $p_i$ 和特征值 $\lambda_i$ 构成基本 Jordan 链。

 

### 一个 Jordan 链

$$
A[p_{1,i}\ p_{2,i}\ \cdots\ p_{n_i,i}] = [p_{1,i}\ p_{2,i}\ \cdots\ p_{n_i,i}] \begin{bmatrix}
\lambda_i & 1 & & \\
& \lambda_i & \ddots & \\
& & \ddots & 1 \\
& & & \lambda_i
\end{bmatrix}
$$

对应的循环关系：

$$
\begin{aligned}
(A - \lambda_i I)p_{1,i} &= 0 \\
(A - \lambda_i I)p_{2,i} &= p_{1,i} \quad \Rightarrow \quad (A-\lambda_i I)^2 p_{2,i} = 0 \\
(A - \lambda_i I)p_{3,i} &= p_{2,i} \quad \Rightarrow \quad (A-\lambda_i I)^3 p_{3,i} = 0 \\
&\cdots\cdots \\
(A - \lambda_i I)p_{n_i,i} &= p_{n_i-1,i} \quad \Rightarrow \quad (A-\lambda_i I)^{n_i} p_{n_i,i} = 0
\end{aligned}
$$

链方向：$p_{n_i,i} \rightarrow p_{n_i-1,i} \rightarrow \cdots \rightarrow p_{1,i}$

 

### 例 2.5.1

求下列矩阵的 Jordan 标准形：

$$
A = \begin{bmatrix}
-1 & 1 & 0 \\
-4 & 3 & 0 \\
-1 & 0 & 2
\end{bmatrix}
$$

**解**：先求 $\lambda I - A$ 的 Smith 标准形（通过初等变换）：

$$
\lambda I - A = \begin{bmatrix}
\lambda+1 & -1 & 0 \\
4 & \lambda-3 & 0 \\
1 & 0 & \lambda-2
\end{bmatrix}
\simeq \begin{bmatrix}
1 & & \\
& \lambda-1 & \\
& & (\lambda-1)^2(\lambda-2)
\end{bmatrix}
$$

不对，应重新计算。实际上初等因子为 $(\lambda-1)^2, \lambda-2$。

因此 $A$ 的 Jordan 标准形为

$$
J = \begin{bmatrix}
1 & 1 & 0 \\
0 & 1 & 0 \\
0 & 0 & 2
\end{bmatrix}
$$

 

### 例 2.5.2

求矩阵

$$
A = \begin{bmatrix}
-1 & -2 & 6 \\
-1 & 0 & 3 \\
-1 & -1 & 4
\end{bmatrix}
$$

的 Jordan 标准形及变换矩阵 $P$。

**解**：先求 $\lambda I - A$ 的 Smith 标准形：

$$
\lambda I - A = \begin{bmatrix}
\lambda+1 & 2 & -6 \\
1 & \lambda & -3 \\
1 & 1 & \lambda-4
\end{bmatrix}
\simeq \begin{bmatrix}
1 & 0 & 0 \\
0 & \lambda-1 & 0 \\
0 & 0 & (\lambda-1)^2
\end{bmatrix}
$$

初等因子为 $\lambda-1,\ (\lambda-1)^2$。

Jordan 标准形为

$$
J = \begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{bmatrix}
$$

设 $P = [X_1\ X_2\ X_3]$，由 $AP = PJ$ 得

$$
\begin{cases}
(I-A)X_1 = 0 \\
(I-A)X_2 = 0 \\
(I-A)X_3 = -X_2
\end{cases}
$$

解得 $\alpha_1 = [-1, 1, 0]^T$，$\alpha_2 = [3, 0, 1]^T$。

取 $X_1 = \alpha_1$，由 $(I-A)X_2 = 0$ 得 $X_2 = k_1\alpha_1 + k_2\alpha_2$。为使 $[I-A, -X_2]$ 有解且 $\neq 0$，取 $k_1 = k_2 = 1$：

$$
X_2 = \alpha_1 + \alpha_2 = [2, 1, 1]^T
$$

再由 $(I-A)X_3 = -X_2$ 解得 $X_3 = [2, 0, 1]^T$。

因此

$$
P = [X_1\ X_2\ X_3] = \begin{bmatrix}
-1 & 2 & 2 \\
1 & 1 & 0 \\
0 & 1 & 1
\end{bmatrix}
$$

 

### Jordan标准形的唯一性

Jordan 标准形（不计 Jordan 块的排列顺序）由 $A$ 唯一确定。这通过以下等价关系链得到：

$A$ 的 Jordan 标准形 $\Rightarrow$ Smith 标准形 $\Rightarrow$ 不变因子 $\Rightarrow$ 初等因子 $\Rightarrow$ Jordan 块 $\Rightarrow$ Jordan 标准形。

**总结**：
- Jordan 标准形由 $A$ 唯一确定（块的顺序除外）。
- 每个特征值 $\lambda_i$ 对应的所有 Jordan 块的阶数 = $\lambda_i$ 的代数重数。
- 特征值 $\lambda_i$ 的几何重数 = 对应 Jordan 块的个数。

 

# 零化多项式与最小多项式

### 多项式的定义

$$
f(\lambda) = a_m\lambda^m + a_{m-1}\lambda^{m-1} + \cdots + a_1\lambda + a_0
$$

为 $\lambda$ 的多项式。对 $\lambda$-矩阵，定义矩阵多项式。

 

### 矩阵多项式在Jordan标准形下的形式

设 $A \in \mathbb{C}^{n \times n}$，$J$ 为 Jordan 标准形，$A = PJP^{-1} = P\operatorname{diag}(J_1, J_2, \cdots, J_r)P^{-1}$。

对多项式 $f(\lambda) = a_m\lambda^m + a_{m-1}\lambda^{m-1} + \cdots + a_1\lambda + a_0$，有

$$
f(A) = a_m(PJP^{-1})^m + a_{m-1}(PJP^{-1})^{m-1} + \cdots + a_1(PJP^{-1}) + a_0 I
$$

$$
= P\left(a_m J^m + a_{m-1}J^{m-1} + \cdots + a_1 J + a_0 I\right)P^{-1}
= P f(J) P^{-1}
= P \operatorname{diag}(f(J_1), f(J_2), \cdots, f(J_r))P^{-1}
$$

 

### 定义 2.6.1 ($\lambda$-矩阵)

设 $A$ 为 $\lambda$-矩阵，$f(\lambda) = a_m\lambda^m + a_{m-1}\lambda^{m-1} + \cdots + a_1\lambda + a_0$ 为 $\lambda$ 的多项式，则

$$
f(A) = a_m A^m + a_{m-1}A^{m-1} + \cdots + a_1 A + a_0 I
$$

称为 $A$ 的 $\lambda$-矩阵多项式。

> **注**：若 $f(\lambda) = (a_1\lambda - b_1)^{n_1}(a_2\lambda - b_2)^{n_2}\cdots(a_s\lambda - b_s)^{n_s}$，则 $f(A) = 0$ 当且仅当各因子对应的条件满足。

 

### 定理 2.6.2 (零化多项式)

设 $A \in \mathbb{C}^{n \times n}$，若 $\exists$ 非零多项式

$$
f(\lambda) = a_m\lambda^m + a_{m-1}\lambda^{m-1} + \cdots + a_1\lambda + a_0
$$

使得 $f(A) = 0$，则称 $f(\lambda)$ 为 $A$ 的**零化多项式**。$A$ 的次数最低的**首一**零化多项式称为 $A$ 的**最小多项式**。

> $A^m$ 可由 $A^{m-1}, A^{m-2}, \cdots, I$ 线性表示（Cayley-Hamilton 定理）。
> 若 $f(\lambda)$ 为 $A$ 的零化多项式，$g(\lambda)$ 为任意多项式，则 $f(\lambda)g(\lambda)$ 也是零化多项式。

 

### Jordan标准形下的零化多项式

$A \in \mathbb{C}^{n \times n}$，$f(A) = 0 \Leftrightarrow f(J) = 0 \Leftrightarrow f(J_i) = 0,\ i=1,2,\cdots,r$

对 Jordan 块

$$
J_i = \begin{bmatrix}
\lambda_i & 1 & & \\
& \lambda_i & \ddots & \\
& & \ddots & 1 \\
& & & \lambda_i
\end{bmatrix}_{n_i \times n_i}
= \lambda_i I_{n_i} + N_{n_i}
$$

其中 $N_{n_i}^{n_i} = 0$。

 

### 定理 2.6.3 (最小多项式)

设 $A \in \mathbb{C}^{n \times n}$，$A$ 的所有不同的初等因子中，每个特征值取**最高幂次**的乘积，即为 $A$ 的**最小多项式** $m(\lambda)$。

 

### Jordan标准形的最小多项式

对 Jordan 块 $J_i$，最小多项式为 $(\lambda - \lambda_i)^{n_i}$。

由 $\det(\lambda I - J_i) = (\lambda - \lambda_i)^{n_i}$，所有 Jordan 块的初等因子为 $(\lambda - \lambda_i)^{n_i}$。

由 Jordan 标准形推导最小多项式：设 $J = \operatorname{diag}(J_1, J_2, \cdots, J_r)$，则 $m(\lambda)$ 为每个不同特征值对应的最大 Jordan 块阶数。

 

### Cayley-Hamilton 定理

**定理 2.6.1**：$\forall A \in \mathbb{C}^{n \times n}$，$|\lambda I - A|$ 为 $A$ 的零化多项式，即 $p_A(A) = 0$，其中 $p_A(\lambda) = \det(\lambda I - A)$ 为特征多项式。

 

### 最小多项式的性质

设 $A \in \mathbb{C}^{n \times n}$：
1. $A$ 的最小多项式 $m(\lambda)$ 整除任何零化多项式。
2. $A$ 的最小多项式与特征多项式有相同的根（特征值）。
3. 若 $A$ 可对角化，$m(\lambda)$ 无重根；反之，若 $m(\lambda)$ 无重根则 $A$ 可对角化。
4. 相似矩阵有相同的最小多项式。

 

### 定理 2.6.2 推论

设 $A \in \mathbb{C}^{m \times n}$，$B \in \mathbb{C}^{n \times p}$，则

$$
\operatorname{rank}(B) - \operatorname{rank}(AB) \leq n - \operatorname{rank}(A)
$$

等价于

$$
\operatorname{rank}(AB) \geq \operatorname{rank}(A) + \operatorname{rank}(B) - n
$$

 

### 分块对角矩阵的最小多项式

设 $A = \operatorname{diag}(A_1, A_2, \cdots, A_r)$，$m_1(\lambda), m_2(\lambda), \cdots, m_r(\lambda)$ 分别为 $A_i\ (i=1,2,\cdots,r)$ 的最小多项式，则 $A$ 的最小多项式为

$$
m(\lambda) = \operatorname{lcm}(m_1(\lambda), m_2(\lambda), \cdots, m_r(\lambda))
$$

 

### Jordan标准形与Smith标准形、最小多项式的关系

设 $A \in \mathbb{C}^{n \times n}$，其 Jordan 标准形、$\lambda I - A$ 的初等因子、Smith 标准形、最小多项式之间的关系：

$$
A \sim J = \begin{bmatrix}
J_1 & & & \\
& J_2 & & \\
& & \ddots & \\
& & & J_r
\end{bmatrix}, \quad \lambda I - A \simeq \begin{bmatrix}
d_1(\lambda) & & & \\
& d_2(\lambda) & & \\
& & \ddots & \\
& & & d_n(\lambda)
\end{bmatrix}
$$

其中 $d_{i-1} \mid d_i$。$A$ 的最小多项式 $m(\lambda) = d_n(\lambda)$（最后一个不变因子）。

 

### 例 2.6.1

求下列矩阵的 $\lambda$-矩阵多项式：

**(1)**

$$
J = \begin{bmatrix}
5 & & \\
& 5 & 1 \\
& & 5
\end{bmatrix}
$$

**(2)** $A$ 的初等因子为 $(\lambda-1),\ (\lambda-1)^2,\ \lambda,\ \lambda^3$。

 

### 例 2.6.2

设

$$
A = \begin{bmatrix}
1 & 2 \\
2 & 1
\end{bmatrix}, \quad f(\lambda) = \lambda^5 - 2\lambda^4 - 2\lambda^3 - \lambda^2 - 4\lambda
$$

求 $f(A)$。

**解**：$|\lambda I - A| = \lambda^2 - 2\lambda - 3 = (\lambda-3)(\lambda+1)$。

由 Cayley-Hamilton，$A^2 - 2A - 3I = 0$，即 $A^2 = 2A + 3I$。

用长除法：$f(\lambda) = (\lambda^2 - 2\lambda - 3)(\lambda^3 + \lambda + 1) + r(\lambda)$，其中 $r(\lambda)$ 为余式。

则 $f(A) = A + 3I$（余式在 $A$ 处的值）。

实际上：

$$
f(A) = A + 3I = \begin{bmatrix} 4 & 2 \\ 2 & 4 \end{bmatrix}
$$

# 数字矩阵的有理标准形

### 定义 2.7.1

设 $A \in F^{n \times n}$，其特征矩阵 $\lambda I - A$ 的不为常数的不变因子为：

$$
\varphi_{1}(\lambda),\ \varphi_{2}(\lambda),\ \cdots,\ \varphi_{k}(\lambda)
$$

其中

$$
\varphi_{i}(\lambda) = \lambda^{n_{i}} + a_{1,i}\lambda^{n_{i}-1} + \cdots + a_{n_{i}-1,i}\lambda + a_{n_{i},i},
\qquad i = 1,2,\cdots,k
$$

且 $n_{1} + n_{2} + \cdots + n_{k} = n$。

则 $A \sim F$，其中

$$
F = \begin{bmatrix}
C_{1} & & & \\
& C_{2} & & \\
& & \ddots & \\
& & & C_{k}
\end{bmatrix},
\qquad
C_{i} = \begin{bmatrix}
0 & 0 & \cdots & 0 & 1 \\
0 & 0 & \cdots & 1 & 0 \\
\vdots & \vdots & \iddots & \vdots & \vdots \\
0 & 1 & \cdots & 0 & 0 \\
-a_{n_{i},i} & -a_{n_{i}-1,i} & \cdots & -a_{1,i} & 0
\end{bmatrix}
$$

称为 **$A$ 的有理规范形（有理标准形）**。

> **回忆**：第一能控规范形、第二能控规范形。
>
> **注意**：传函与状态空间方法在描述能力上的差异。

---

### 定理 2.7.1

设

$$
C = \begin{bmatrix}
0 & 1 & & \\
\vdots & & \ddots & \\
0 & & & 1 \\
-a_{n} & -a_{n-1} & \cdots & -a_{1}
\end{bmatrix}
$$

若 $\lambda_{i}$ 是方程

$$
\lambda^{n} + a_{1}\lambda^{n-1} + \cdots + a_{n-1}\lambda + a_{n} = 0
$$

的一个解（即 $C$ 的一个特征值），则属于 $\lambda_{i}$ 的特征向量为：

$$
p_{i} = \begin{bmatrix} 1 & \lambda_{i} & \cdots & \lambda_{i}^{n-1} \end{bmatrix}^{T}
$$

---

### 推论

若特征方程

$$
\lambda^{n} + a_{1}\lambda^{n-1} + \cdots + a_{n-1}\lambda + a_{n} = 0
$$

有 $n$ 个互异的特征值 $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$，则

$$
C = P\,\mathrm{diag}(\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n})\,P^{-1}
$$

其中 $P$ 为 **Vandermonde 矩阵**：

$$
P = \begin{bmatrix}
1 & 1 & \cdots & 1 \\
\lambda_{1} & \lambda_{2} & \cdots & \lambda_{n} \\
\vdots & \vdots & & \vdots \\
\lambda_{1}^{n-1} & \lambda_{2}^{n-1} & \cdots & \lambda_{n}^{n-1}
\end{bmatrix}
$$

---

# 数字矩阵的 McMillan 标准形

### 定义 2.8.1

对于任意有理分式矩阵 $G(\lambda) \in F^{m \times n}(\lambda)$：

$$
G(\lambda) = \left[ \frac{a_{ij}(\lambda)}{b_{ij}(\lambda)} \right]_{m \times n}
$$

存在单位模矩阵 $U(\lambda) \in F^{m \times m}[\lambda]$、$V(\lambda) \in F^{n \times n}[\lambda]$，使得

$$
U(\lambda)\,G(\lambda)\,V(\lambda) =
\begin{bmatrix}
\frac{d_{1}(\lambda)}{\varphi_{1}(\lambda)} & & & \\
& \frac{d_{2}(\lambda)}{\varphi_{2}(\lambda)} & & \\
& & \ddots & \\
& & & \frac{d_{r}(\lambda)}{\varphi_{r}(\lambda)} & \\
& & & & 0
\end{bmatrix}_{m \times n}
$$

其中

- $d_{i}(\lambda) \mid d_{i+1}(\lambda)$（多项式整除关系）
- $\varphi_{i+1}(\lambda) \mid \varphi_{i}(\lambda)$
- $d_{i}(\lambda), \varphi_{i}(\lambda)$ 均为**首一多项式**（最高次项系数为 1）

称为 $G(\lambda)$ 的 **McMillan 标准形**。

---

### 例子：MIMO 系统的零点

考虑一个线性定常 **2 输入 2 输出**系统，其传递函数矩阵为：

$$
y(s) = G(s)\,u(s), \qquad
G(s) = \begin{bmatrix}
\dfrac{1}{(s+1)(s+2)} & \dfrac{s+4}{(s+1)(s+2)} \\[2ex]
\dfrac{s}{(s+1)(s+2)} & \dfrac{s-1}{(s+1)(s+2)}
\end{bmatrix}
$$

**求**：它的阻塞零点（blocking zero）和传输零点（transmission zero）。

#### 零点定义

- $z$ 是 **阻塞零点**：对任意 $u_{0}$，以 $u_{0}e^{zt}$ 为输入的零状态响应为 0，即 $G(z) = 0_{m \times n}$。
- $z$ 是 **传输零点**：可使 $G(z)$ 降秩，对所有满足 $G(z)u_{0} = 0$ 的 $u_{0}$，以 $u_{0}e^{zt}$ 为输入的零状态响应为 0。

#### 求解过程

提取分母最小公倍式后，考察分子多项式矩阵：

$$
A(\lambda) = \begin{bmatrix} 1 & \lambda+4 \\ \lambda & \lambda-1 \end{bmatrix}
$$

通过初等变换：

$$
A(\lambda) \begin{bmatrix} 1 & \lambda+4 \\ 0 & -1 \end{bmatrix}
= \begin{bmatrix} 1 & 0 \\ \lambda & 1 \end{bmatrix}
\begin{bmatrix} 1 & 0 \\ 0 & \lambda^{2}+3\lambda+1 \end{bmatrix}
$$

因此 $G(s)$ 的 McMillan 标准形为：

$$
G(s) \;\sim\; \frac{1}{(\lambda+1)(\lambda+2)}
\begin{bmatrix}
1 & 0 \\
0 & \lambda^{2}+3\lambda+1
\end{bmatrix}
$$

#### 结论

- $G(s)$ **没有阻塞零点**（因 $G(z) \neq 0$）。
- 由 $\lambda^{2}+3\lambda+1 = 0$ 得一对**复传输零点**：

$$
z_{1} = \frac{-3+\sqrt{5}}{2}, \qquad z_{2} = \frac{-3-\sqrt{5}}{2}
$$

对应的零点方向分别为：

$$
q_{1} = \begin{bmatrix} \lambda+4 \\ -1 \end{bmatrix}_{\lambda = z_{1}}
= \begin{bmatrix} \dfrac{5+\sqrt{5}}{2} \\ -1 \end{bmatrix},
\qquad
q_{2} = \begin{bmatrix} \lambda+4 \\ -1 \end{bmatrix}_{\lambda = z_{2}}
= \begin{bmatrix} \dfrac{5-\sqrt{5}}{2} \\ -1 \end{bmatrix}
$$

#### 验证（猜一个输入）

取输入方向 $u_{0} = \begin{bmatrix} \frac{5+\sqrt{5}}{2} & -1 \end{bmatrix}^{T}$，指数 $z_{1}$：

$$
y(s) = G(s)\,u_{0}\,\frac{1}{s - z_{1}}
$$

其输出不含激励的振型（denominator 中消去 $s - z_{1}$），故对应一个**零点**。

---

## 2.9 本质：各种标准形

- 核心是 **初等因子**。
- 关键思想：能够找到一种特殊形式的矩阵块，使其初等因子具有要求的形式。

> 各类标准形（有理标准形、McMillan 标准形等）的统一本质，在于对 **不变因子 / 初等因子** 的结构化分解。
