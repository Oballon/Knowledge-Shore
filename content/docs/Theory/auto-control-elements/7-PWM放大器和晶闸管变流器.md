## 电枢回路等效电路

<center>
<img src="pic/Weixin Image_20260405113317_236_5.jpg" width=45%>
</center>

$$双极性控制：\\
正向导通过渡电流：i_a=\frac{U_D-E}{R_a}-(\frac{U_D-E}{R_a}-I_0)e^{-\frac{R_a}{L_a}t}\\
反向导通过渡电流：i_a=-\frac{U_D+E}{R_a}+(\frac{U_D+E}{R_a}+I_{t_1})e^{-\frac{R_a}{L_a}(t-t_1)}
$$

$$电流满足伏秒平衡：\int_{t_0}^{t_1}V_{L1}dt+\int_{t_1}^{T}V_{L_2}dt=0\\
轻载时，i_a\approx0，电阻压降忽略\\
当\underbrace{(U_D-E)}_{\approx V_{L1}}t_1\underbrace{-(U_D+E)}_{\approx V_{L2}}t_2>0，即U_{av}>E时，不满足伏秒平衡\\
I_0与I_{t_1}应变大，达到伏秒平衡\\
\int_{t_0}^{t_1}(U_D-E-I_0R_a)dt+\int_{t_1}^{T}-(U_D+E+I_{t_1}R_a)dt=0\\
(发电机分析同理)$$

## 双极性控制


- IGBT属于单向电压阻断器件，$U_{CE}<0$时，无法导通
- 二极管起“泄洪”作用，防止电感续流作用击穿开关管

<center>
<img src="pic/Weixin Image_20260405113318_237_5.jpg" width=80%>
<img src="pic/Weixin Image_20260405154416_238_5.jpg" width=75%>
</center>

- 开关频率极高，E近似为恒定值，即转速与旋转方向不变
- 开关主要影响电感电流，$T_1,T_4$时电流增加，$T_2,T_3$时电流减小
- 轻载时，电感电流极小很容易换向

$$不是电感高频切换的能量转化，而是电能-机械能的宏观能量转化\\
\left.\begin{array}{}
U_{av}>E \quad  电动机\\
0<U_{av}<E \quad 发电机\\
U_{av}\approx E \quad 轻载\\
\end{array}\right\}仅两种开关状态（T_1,T_4或T_2,T_3）
$$

$$
换向\left\{\begin{array}{}
U_{av}<-E \quad  电动机\\
-E<U_{av}<0 \quad 发电机\\
U_{av}\approx -E \quad 轻载\\
\end{array}\right.
$$

## 单极性控制

<center>
<img src="pic/Weixin Image_20260405164541_240_5.jpg" width=70%>
<img src="pic/Weixin Image_20260405154417_239_5.jpg" width=70%>
</center>

$$正向导通过渡电流：i_a=\frac{U_D-E}{R_a}-(\frac{U_D-E}{R_a}-I_0)e^{-\frac{R_a}{L_a}t}\\
关断过渡电流：i_a=-\frac{E}{R_a}+(\frac{E}{R_a}+I_{t_1})e^{-\frac{R_a}{L_a}(t-t_1)}
$$

$$
电流满足伏秒平衡：\int_{t_0}^{t_1}V_{L1}dt+\int_{t_1}^{T}V_{L_2}dt=0\\
轻载时，i_a\approx0，电阻压降忽略\\
当\underbrace{(U_D-E)}_{\approx V_{L1}}t_1\underbrace{-E}_{\approx V_{L2}}t_2>0，即U_{av}>E时，不满足伏秒平衡\\
I_0与I_{t_1}应变大，达到伏秒平衡\\
\int_{t_0}^{t_1}(U_D-E-I_0R_a)dt-\int_{t_1}^{T}(E+I_{t_1}R_a)dt=0\\
(发电机分析同理)
$$

$$正极性（正转）\left\{\begin{array}{l}
T_1,T_2输入相反\\
（单极性控制核心是T_1，T_2起打通续流回路作用）\\
T_3=0，T_4=1锁死
\end{array}\right.
$$

$$负极性控制（反转）\left\{\begin{array}{l}
T_1,T_2输入相反\\
（单极性控制核心是T_2，T_1起打通续流回路作用）\\
T_3=1，T_4=0锁死
\end{array}\right.
$$

$$注：U_{av},E关系与双极性控制同理$$

## PWM放大器工作特性

$$占空系数：\gamma=\frac{t_1}{T_R}\\
信号调制系数：\rho=\frac{u_i}{|U_{im}|}\\（正负时长之差所占比例）\\
\ \\
双极性输出：t_1=\frac{1}{2}T_R(1+\rho)\quad \gamma=\frac{1}{2}(1+\rho)\\
单极性输出：t_1=|\rho|T_R \quad \gamma=|\rho|\\
\ \\
电压（理想分析）：U_{av}=\rho U_D\\
（开关频率高，故按瞬时电压理解）
$$
