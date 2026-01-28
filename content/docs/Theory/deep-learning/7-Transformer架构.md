---
title: "Transformer架构"
weight: 7
bookhidden: true
---

# Transformer架构

## 目录

1. [Transformer概述](#transformer概述)
2. [注意力机制](#注意力机制)
3. [Transformer结构](#transformer结构)
4. [BERT和GPT](#bert和gpt)
5. [Vision Transformer](#vision-transformer)
6. [代码实现](#代码实现)

---

## Transformer概述

### 背景

**Transformer** 由Vaswani等人在2017年提出，彻底改变了NLP和CV领域。

### 核心创新

1. **自注意力机制**：并行处理序列，无需循环
2. **位置编码**：替代RNN的位置信息
3. **完全并行**：训练速度大幅提升

### 优势

- **并行计算**：比RNN快得多
- **长距离依赖**：直接建模任意距离的关系
- **可解释性**：注意力权重可视化

---

## 注意力机制

### 基本思想

**注意力（Attention）**：让模型关注输入的不同部分。

### 查询-键-值（QKV）机制

```
Query (Q): 查询向量，表示"我想找什么"
Key (K): 键向量，表示"我是什么"
Value (V): 值向量，表示"我的内容"
```

### 计算过程

1. 计算相似度：$\text{scores} = Q \cdot K^T$
2. 归一化：$\text{attention\_weights} = \text{softmax}(\text{scores} / \sqrt{d_k})$
3. 加权求和：$\text{output} = \text{attention\_weights} \cdot V$

### 数学公式

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right) \cdot V$$

其中 $d_k$ 是键的维度，用于缩放。

### 多头注意力（Multi-Head Attention）

并行使用多个注意力头：

$$\text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, \ldots, \text{head}_h) \cdot W^O$$

其中 $\text{head}_i = \text{Attention}(QW_i^Q, KW_i^K, VW_i^V)$

**优势**：
- 捕获不同类型的关系
- 增强表达能力

---

## Transformer结构

### 整体架构

```
输入序列
  ↓
位置编码
  ↓
编码器（N层）
  ├─ 多头自注意力
  ├─ 残差连接 + 层归一化
  ├─ 前馈网络
  └─ 残差连接 + 层归一化
  ↓
解码器（N层）
  ├─ 掩码多头自注意力
  ├─ 残差连接 + 层归一化
  ├─ 编码器-解码器注意力
  ├─ 残差连接 + 层归一化
  ├─ 前馈网络
  └─ 残差连接 + 层归一化
  ↓
输出层
```

### 编码器（Encoder）

#### 1. 自注意力层

$$\text{Self-Attention}(x) = \text{Attention}(x, x, x)$$

每个位置关注序列中的所有位置（包括自己）。

#### 2. 前馈网络（FFN）

$$\text{FFN}(x) = \max(0, xW_1 + b_1)W_2 + b_2$$

通常是两层全连接网络，中间使用ReLU。

#### 3. 残差连接和层归一化

$$x = \text{LayerNorm}(x + \text{Sublayer}(x))$$

### 解码器（Decoder）

#### 1. 掩码自注意力

防止看到未来信息：

$$\text{mask}[i, j] = \begin{cases}
  0 & \text{if } i \geq j \quad \text{(允许)} \\
  -\infty & \text{if } i < j \quad \text{(掩码)}
\end{cases}$$

#### 2. 编码器-解码器注意力

解码器关注编码器的输出：

$$\text{Attention}(Q_{\text{decoder}}, K_{\text{encoder}}, V_{\text{encoder}})$$

### 位置编码

由于Transformer没有循环结构，需要显式编码位置信息：

#### 正弦位置编码

$$\text{PE}(\text{pos}, 2i) = \sin\left(\frac{\text{pos}}{10000^{2i/d_{\text{model}}}}\right)$$

$$\text{PE}(\text{pos}, 2i+1) = \cos\left(\frac{\text{pos}}{10000^{2i/d_{\text{model}}}}\right)$$

#### 可学习位置编码

直接学习位置嵌入。

---

## BERT和GPT

### BERT（Bidirectional Encoder Representations）

#### 特点

- **双向编码器**：同时利用前后文
- **预训练任务**：
  - **MLM（Masked Language Model）**：预测被掩码的词
  - **NSP（Next Sentence Prediction）**：判断句子关系

#### 架构

```
[CLS] token₁ token₂ [MASK] token₄ [SEP] ...
  ↓
Transformer Encoder (12/24层)
  ↓
输出表示
```

#### 应用

- 文本分类
- 命名实体识别
- 问答系统

### GPT（Generative Pre-trained Transformer）

#### 特点

- **自回归生成**：从左到右生成文本
- **解码器架构**：使用掩码自注意力
- **预训练**：语言建模（预测下一个词）

#### 架构

```
token₁ token₂ token₃ ...
  ↓
Transformer Decoder (12/24/...层)
  ↓
下一个token的概率分布
```

#### GPT系列

- **GPT-1**：1.17亿参数
- **GPT-2**：15亿参数
- **GPT-3**：1750亿参数
- **GPT-4**：更大规模

---

## Vision Transformer

### 概述

**ViT（Vision Transformer）** 将Transformer应用到图像分类。

### 方法

1. **图像分块**：将图像分成 $16 \times 16$ 的patches
2. **线性投影**：将patches投影为向量
3. **位置编码**：添加位置信息
4. **Transformer编码器**：处理序列
5. **分类头**：输出类别

### 结构

```
图像（$224 \times 224 \times 3$）
  ↓
分块（$14 \times 14$ patches，每个 $16 \times 16$）
  ↓
展平 + 线性投影 (768维)
  ↓
添加[CLS] token + 位置编码
  ↓
Transformer Encoder (12层)
  ↓
[CLS] token → 分类头
```

### 优势

- 无需卷积
- 可扩展到大规模数据
- 在ImageNet上达到SOTA

---

## 代码实现

### 多头注意力

```python
import torch
import torch.nn as nn
import math

class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, num_heads):
        super(MultiHeadAttention, self).__init__()
        assert d_model % num_heads == 0
        
        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads
        
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
        self.W_o = nn.Linear(d_model, d_model)
    
    def scaled_dot_product_attention(self, Q, K, V, mask=None):
        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(self.d_k)
        
        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)
        
        attention_weights = torch.softmax(scores, dim=-1)
        output = torch.matmul(attention_weights, V)
        return output, attention_weights
    
    def forward(self, query, key, value, mask=None):
        batch_size = query.size(0)
        
        # 线性变换并分头
        Q = self.W_q(query).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        K = self.W_k(key).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        V = self.W_v(value).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        
        # 注意力计算
        x, attention_weights = self.scaled_dot_product_attention(Q, K, V, mask)
        
        # 拼接多头
        x = x.transpose(1, 2).contiguous().view(batch_size, -1, self.d_model)
        
        # 输出投影
        output = self.W_o(x)
        return output
```

### Transformer编码器层

```python
class TransformerEncoderLayer(nn.Module):
    def __init__(self, d_model, num_heads, d_ff, dropout=0.1):
        super(TransformerEncoderLayer, self).__init__()
        self.self_attn = MultiHeadAttention(d_model, num_heads)
        self.feed_forward = nn.Sequential(
            nn.Linear(d_model, d_ff),
            nn.ReLU(),
            nn.Linear(d_ff, d_model)
        )
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.dropout = nn.Dropout(dropout)
    
    def forward(self, x, mask=None):
        # 自注意力 + 残差连接
        attn_output = self.self_attn(x, x, x, mask)
        x = self.norm1(x + self.dropout(attn_output))
        
        # 前馈网络 + 残差连接
        ff_output = self.feed_forward(x)
        x = self.norm2(x + self.dropout(ff_output))
        
        return x
```

### 位置编码

```python
class PositionalEncoding(nn.Module):
    def __init__(self, d_model, max_len=5000):
        super(PositionalEncoding, self).__init__()
        
        pe = torch.zeros(max_len, d_model)
        position = torch.arange(0, max_len, dtype=torch.float).unsqueeze(1)
        div_term = torch.exp(torch.arange(0, d_model, 2).float() * (-math.log(10000.0) / d_model))
        
        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        
        pe = pe.unsqueeze(0)
        self.register_buffer('pe', pe)
    
    def forward(self, x):
        return x + self.pe[:, :x.size(1)]
```

### 完整Transformer

```python
class Transformer(nn.Module):
    def __init__(self, vocab_size, d_model, num_heads, num_layers, d_ff, max_len, dropout=0.1):
        super(Transformer, self).__init__()
        self.embedding = nn.Embedding(vocab_size, d_model)
        self.pos_encoding = PositionalEncoding(d_model, max_len)
        
        self.encoder_layers = nn.ModuleList([
            TransformerEncoderLayer(d_model, num_heads, d_ff, dropout)
            for _ in range(num_layers)
        ])
        
        self.dropout = nn.Dropout(dropout)
        self.fc = nn.Linear(d_model, vocab_size)
    
    def forward(self, x, mask=None):
        x = self.embedding(x) * math.sqrt(self.d_model)
        x = self.pos_encoding(x)
        x = self.dropout(x)
        
        for layer in self.encoder_layers:
            x = layer(x, mask)
        
        output = self.fc(x)
        return output
```

---

## 总结

1. **Transformer**：基于注意力机制的架构
2. **自注意力**：并行处理，直接建模长距离依赖
3. **BERT**：双向编码器，适合理解任务
4. **GPT**：自回归生成，适合生成任务
5. **ViT**：将Transformer应用到图像

**关键要点**：
- 注意力机制是Transformer的核心
- 并行计算大幅提升训练速度
- BERT和GPT是重要的预训练模型
- Transformer统一了NLP和CV领域

**下一步**：学习生成模型，了解VAE、GAN等。
