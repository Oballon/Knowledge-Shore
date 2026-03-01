---
title: "附录1-PyTorch 完整参考"
weight: 100
bookhidden: true
---

# PyTorch 完整参考

本附录提供 PyTorch 核心 API 速查、优化器与损失函数数学公式、以及官方文档索引，便于快速查阅。

## 一、torch 核心 API 速查

### 1.1 张量创建

| 函数 | 说明 |
|------|------|
| `torch.tensor(data)` | 从数据创建张量 |
| `torch.zeros(*size)` | 全零张量 |
| `torch.ones(*size)` | 全一张量 |
| `torch.empty(*size)` | 未初始化张量 |
| `torch.rand(*size)` | [0,1) 均匀分布 |
| `torch.randn(*size)` | 标准正态分布 |
| `torch.arange(start, end, step)` | 等差序列 |
| `torch.linspace(start, end, steps)` | 等间距序列 |
| `torch.eye(n)` | 单位矩阵 |
| `torch.from_numpy(ndarray)` | NumPy 转张量 |

### 1.2 张量操作

| 函数 | 说明 |
|------|------|
| `torch.cat(tensors, dim)` | 沿维度拼接 |
| `torch.stack(tensors, dim)` | 堆叠（新增维度） |
| `torch.split(tensor, split_size, dim)` | 分割 |
| `torch.chunk(tensor, chunks, dim)` | 均分 |
| `torch.gather(input, dim, index)` | 按索引 gather |
| `torch.scatter(input, dim, index, src)` | 按索引 scatter |
| `torch.masked_select(input, mask)` | 掩码选择 |
| `torch.where(condition, x, y)` | 条件选择 |

### 1.3 数学运算

| 函数 | 说明 |
|------|------|
| `torch.matmul(a, b)` | 矩阵乘法 |
| `torch.mm(a, b)` | 2D 矩阵乘法 |
| `torch.bmm(a, b)` | 批量矩阵乘法 |
| `torch.einsum(equation, *operands)` | 爱因斯坦求和 |
| `torch.svd(A)` | 奇异值分解 |
| `torch.inverse(A)` | 矩阵求逆 |
| `torch.linalg.solve(A, B)` | 线性方程组求解 |

### 1.4 设备与类型

| 函数/属性 | 说明 |
|------|------|
| `tensor.to(device)` | 移至设备 |
| `tensor.cuda()` | 移至 GPU |
| `tensor.cpu()` | 移至 CPU |
| `tensor.float()` / `.double()` | 类型转换 |
| `torch.cuda.is_available()` | CUDA 是否可用 |
| `torch.set_default_device(device)` | 设置默认设备 |

## 二、优化器算法原理

### 2.1 SGD（随机梯度下降）

**基础形式**：
$$\theta_{t+1} = \theta_t - \eta \cdot g_t$$

其中 $g_t = \nabla_\theta L(\theta_t)$ 为梯度，$\eta$ 为学习率。

**带动量（Momentum）**：
$$v_t = \mu \cdot v_{t-1} + g_t$$
$$\theta_{t+1} = \theta_t - \eta \cdot v_t$$

**Nesterov 动量**：
$$v_t = \mu \cdot v_{t-1} + g_t$$
$$\theta_{t+1} = \theta_t - \eta \cdot (\mu \cdot v_t + g_t)$$

### 2.2 Adam（自适应矩估计）

**更新公式**：
$$m_t = \beta_1 m_{t-1} + (1-\beta_1) g_t$$
$$\hat{m}_t = \frac{m_t}{1-\beta_1^t}$$

$$v_t = \beta_2 v_{t-1} + (1-\beta_2) g_t^2$$
$$\hat{v}_t = \frac{v_t}{1-\beta_2^t}$$

$$\theta_{t+1} = \theta_t - \eta \cdot \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}$$

- $m_t$：一阶矩估计（梯度均值）
- $v_t$：二阶矩估计（梯度平方均值）
- $\beta_1=0.9, \beta_2=0.999$：衰减率
- $\epsilon=10^{-8}$：数值稳定性

### 2.3 AdamW

与 Adam 类似，但 **权重衰减（weight decay）** 与梯度更新解耦：
$$\theta_{t+1} = (1 - \lambda) \theta_t - \eta \cdot \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}$$

其中 $\lambda$ 为 weight_decay，直接作用于参数而非梯度。

### 2.4 RMSprop

$$v_t = \alpha v_{t-1} + (1-\alpha) g_t^2$$
$$\theta_{t+1} = \theta_t - \eta \cdot \frac{g_t}{\sqrt{v_t} + \epsilon}$$

### 2.5 学习率调度器

| 调度器 | 公式/说明 |
|------|------|
| StepLR | $\eta_t = \eta_0 \cdot \gamma^{\lfloor t/s \rfloor}$ |
| ExponentialLR | $\eta_t = \eta_0 \cdot \gamma^t$ |
| CosineAnnealingLR | $\eta_t = \eta_{min} + \frac{1}{2}(\eta_{max}-\eta_{min})(1+\cos(\pi t/T))$ |
| ReduceLROnPlateau | 监控指标停滞时衰减 |
| OneCycleLR | 单周期先升后降 |

## 三、损失函数数学公式

### 3.1 分类损失

**CrossEntropyLoss**（含 Softmax）：
$$L = -\sum_{i=1}^{C} y_i \log(p_i) = -\log(p_{y_{true}})$$

其中 $p_i = \frac{\exp(z_i)}{\sum_j \exp(z_j)}$。

**BCEWithLogitsLoss**（二分类，数值稳定）：
$$L = -\frac{1}{N}\sum_i \left[ y_i \cdot \log\sigma(x_i) + (1-y_i) \cdot \log(1-\sigma(x_i)) \right]$$

**NLLLoss**（需配合 LogSoftmax）：
$$L = -\frac{1}{N}\sum_i x_{i,y_i}$$

### 3.2 回归损失

**MSELoss**：
$$L = \frac{1}{N}\sum_i (x_i - y_i)^2$$

**L1Loss**：
$$L = \frac{1}{N}\sum_i |x_i - y_i|$$

**SmoothL1Loss（Huber）**：
$$L_i = \begin{cases} \frac{1}{2}(x_i-y_i)^2 & |x_i-y_i| < 1 \\ |x_i-y_i| - \frac{1}{2} & \text{otherwise} \end{cases}$$

### 3.3 其他损失

**KLDivLoss**：
$$L = \sum_i y_i \left( \log y_i - x_i \right)$$

**TripletMarginLoss**：
$$L = \max(d(a,p) - d(a,n) + \text{margin}, 0)$$

## 四、torch.nn 模块速查

### 4.1 卷积与池化

| 模块 | 输入输出形状（2D 示例） |
|------|------|
| Conv2d(in, out, k, s, p) | (N,C,H,W) → (N,out,H',W') |
| MaxPool2d(k, s) | 空间尺寸减半 |
| AdaptiveAvgPool2d((1,1)) | 全局平均池化 |
| ConvTranspose2d | 上采样 |

### 4.2 归一化

| 模块 | 适用场景 |
|------|------|
| BatchNorm2d(C) | CNN，batch 内归一化 |
| LayerNorm(normalized_shape) | 序列/Transformer |
| GroupNorm(num_groups, C) | 小 batch / 分割 |

### 4.3 初始化函数（torch.nn.init）

| 函数 | 适用 |
|------|------|
| xavier_uniform_ / xavier_normal_ | 线性/卷积，tanh |
| kaiming_uniform_ / kaiming_normal_ | ReLU 激活 |
| orthogonal_ | RNN |
| zeros_ / ones_ | 偏置 |

## 五、Autograd 核心机制

### 5.1 计算图

- **前向**：执行操作时构建 DAG，叶子为输入，根为输出
- **反向**：从根到叶遍历，按链式法则计算梯度
- **动态图**：每次迭代重新构建，支持 Python 控制流

### 5.2 关键 API

| 函数/上下文 | 说明 |
|------|------|
| `tensor.requires_grad_(True)` | 启用梯度追踪 |
| `tensor.detach()` | 分离，不参与梯度 |
| `torch.no_grad()` | 上下文内不计算梯度 |
| `loss.backward()` | 反向传播 |
| `torch.autograd.grad(outputs, inputs)` | 计算指定梯度 |

## 六、官方文档索引

| 模块 | 链接 |
|------|------|
| PyTorch 主文档 | https://pytorch.org/docs/stable/index.html |
| torch | https://pytorch.org/docs/stable/torch.html |
| torch.nn | https://pytorch.org/docs/stable/nn.html |
| torch.optim | https://pytorch.org/docs/stable/optim.html |
| torch.autograd | https://pytorch.org/docs/stable/autograd.html |
| torch.utils.data | https://pytorch.org/docs/stable/data.html |
| Autograd 机制 | https://pytorch.org/docs/stable/notes/autograd.html |
| 教程 | https://pytorch.org/tutorials/ |

## 七、常用代码片段

### 7.1 训练循环模板

```python
model.train()
for data, target in dataloader:
    data, target = data.to(device), target.to(device)
    optimizer.zero_grad()
    output = model(data)
    loss = criterion(output, target)
    loss.backward()
    torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
    optimizer.step()
```

### 7.2 推理模板

```python
model.eval()
with torch.no_grad():
    for data in dataloader:
        output = model(data.to(device))
        # 后处理
```

### 7.3 混合精度训练

```python
from torch.cuda.amp import autocast, GradScaler
scaler = GradScaler()

with autocast():
    output = model(data)
    loss = criterion(output, target)
scaler.scale(loss).backward()
scaler.step(optimizer)
scaler.update()
```
