# Actividad 2 — Unidad 3

## Encuentra la inversa de las siguientes matrices

### 13) Matriz $3 \times 3$

**Procedimiento:**

$$
A = \begin{bmatrix} 3 & -4 & -1 \\ -1 & 2 & 2 \\ -3 & -1 & 2 \end{bmatrix}
$$

$$
\det(A) = (12 + 24 - 1) - (6 - 6 + 8) = 35 - 8 = 27
$$

$$
C = \begin{bmatrix} 6 & -4 & 7 \\ 9 & 3 & 15 \\ -6 & -5 & 2 \end{bmatrix}, \qquad
\operatorname{adj}(A) = C^T = \begin{bmatrix} 6 & 9 & -6 \\ -4 & 3 & -5 \\ 7 & 15 & 2 \end{bmatrix}
$$

$$
\begin{aligned}
A^{-1} &= \frac{1}{\det(A)} \operatorname{adj}(A) = \frac{1}{27} \begin{bmatrix} 6 & 9 & -6 \\ -4 & 3 & -5 \\ 7 & 15 & 2 \end{bmatrix} \\
       &= \begin{bmatrix} \frac{2}{9} & \frac{1}{3} & -\frac{2}{9} \\ -\frac{4}{27} & \frac{1}{9} & -\frac{5}{27} \\ \frac{7}{27} & \frac{5}{9} & \frac{2}{27} \end{bmatrix}
\end{aligned}
$$

**Resultado:**

$$
A^{-1} = \begin{bmatrix} \frac{2}{9} & \frac{1}{3} & -\frac{2}{9} \\ -\frac{4}{27} & \frac{1}{9} & -\frac{5}{27} \\ \frac{7}{27} & \frac{5}{9} & \frac{2}{27} \end{bmatrix}
$$

---

### 14) Matriz $3 \times 3$

**Procedimiento:**

$$
A = \begin{bmatrix} 3 & 0 & 2 \\ 4 & 5 & -2 \\ -1 & -3 & -4 \end{bmatrix}
$$

$$
\det(A) = (-60 + 0 - 24) - (-10 + 18 + 0) = -84 - 8 = -92
$$

$$
C = \begin{bmatrix} -26 & 18 & -7 \\ -6 & -10 & 9 \\ -10 & 14 & 15 \end{bmatrix}, \qquad
\operatorname{adj}(A) = C^T = \begin{bmatrix} -26 & -6 & -10 \\ 18 & -10 & 14 \\ -7 & 9 & 15 \end{bmatrix}
$$

$$
\begin{aligned}
A^{-1} &= \frac{1}{\det(A)} \operatorname{adj}(A) = -\frac{1}{92} \begin{bmatrix} -26 & -6 & -10 \\ 18 & -10 & 14 \\ -7 & 9 & 15 \end{bmatrix} \\
       &= \begin{bmatrix} \frac{13}{46} & \frac{3}{46} & \frac{5}{46} \\ -\frac{9}{46} & \frac{5}{46} & -\frac{7}{46} \\ \frac{7}{92} & -\frac{9}{92} & -\frac{15}{92} \end{bmatrix}
\end{aligned}
$$

**Resultado:**

$$
A^{-1} = \begin{bmatrix} \frac{13}{46} & \frac{3}{46} & \frac{5}{46} \\ -\frac{9}{46} & \frac{5}{46} & -\frac{7}{46} \\ \frac{7}{92} & -\frac{9}{92} & -\frac{15}{92} \end{bmatrix}
$$

---

### 15) Matriz $3 \times 3$

**Procedimiento:**

$$
A = \begin{bmatrix} -1 & 4 & -4 \\ 0 & -3 & 4 \\ 0 & 0 & 0 \end{bmatrix}
$$

$$
\det(A) = (0 + 0 + 0) - (0 + 0 + 0) = 0 - 0 = 0
$$

Como $\det(A) = 0$, la matriz es singular y **no tiene inversa**.

**Resultado:**

No existe $A^{-1}$ (matriz singular, $\det(A) = 0$).

---

### 16) Matriz $3 \times 3$

**Procedimiento:**

$$
A = \begin{bmatrix} 6 & -5 & 1 \\ -4 & 6 & -3 \\ 2 & 6 & -2 \end{bmatrix}
$$

$$
\det(A) = (-72 + 30 - 24) - (12 - 108 - 40) = -66 - (-136) = 70
$$

$$
C = \begin{bmatrix} 6 & -14 & -36 \\ -4 & -14 & -46 \\ 9 & 14 & 16 \end{bmatrix}, \qquad
\operatorname{adj}(A) = C^T = \begin{bmatrix} 6 & -4 & 9 \\ -14 & -14 & 14 \\ -36 & -46 & 16 \end{bmatrix}
$$

$$
\begin{aligned}
A^{-1} &= \frac{1}{\det(A)} \operatorname{adj}(A) = \frac{1}{70} \begin{bmatrix} 6 & -4 & 9 \\ -14 & -14 & 14 \\ -36 & -46 & 16 \end{bmatrix} \\
       &= \begin{bmatrix} \frac{3}{35} & -\frac{2}{35} & \frac{9}{70} \\ -\frac{1}{5} & -\frac{1}{5} & \frac{1}{5} \\ -\frac{18}{35} & -\frac{23}{35} & \frac{8}{35} \end{bmatrix}
\end{aligned}
$$

**Resultado:**

$$
A^{-1} = \begin{bmatrix} \frac{3}{35} & -\frac{2}{35} & \frac{9}{70} \\ -\frac{1}{5} & -\frac{1}{5} & \frac{1}{5} \\ -\frac{18}{35} & -\frac{23}{35} & \frac{8}{35} \end{bmatrix}
$$

---

### 17) Matriz $3 \times 3$

**Procedimiento:**

$$
A = \begin{bmatrix} 1 & -5 & -5 \\ 7 & -3 & -1 \\ -2 & -6 & 0 \end{bmatrix}
$$

$$
\det(A) = (0 - 10 + 210) - (-30 + 6 + 0) = 200 - (-24) = 224
$$

$$
C = \begin{bmatrix} -6 & 2 & -48 \\ 30 & -10 & 16 \\ -10 & -34 & 32 \end{bmatrix}, \qquad
\operatorname{adj}(A) = C^T = \begin{bmatrix} -6 & 30 & -10 \\ 2 & -10 & -34 \\ -48 & 16 & 32 \end{bmatrix}
$$

$$
\begin{aligned}
A^{-1} &= \frac{1}{\det(A)} \operatorname{adj}(A) = \frac{1}{224} \begin{bmatrix} -6 & 30 & -10 \\ 2 & -10 & -34 \\ -48 & 16 & 32 \end{bmatrix} \\
       &= \begin{bmatrix} -\frac{3}{112} & \frac{15}{112} & -\frac{5}{112} \\ \frac{1}{112} & -\frac{5}{112} & -\frac{17}{112} \\ -\frac{3}{14} & \frac{1}{14} & \frac{1}{7} \end{bmatrix}
\end{aligned}
$$

**Resultado:**

$$
A^{-1} = \begin{bmatrix} -\frac{3}{112} & \frac{15}{112} & -\frac{5}{112} \\ \frac{1}{112} & -\frac{5}{112} & -\frac{17}{112} \\ -\frac{3}{14} & \frac{1}{14} & \frac{1}{7} \end{bmatrix}
$$

---

### 18) Matriz $3 \times 3$

**Procedimiento:**

$$
A = \begin{bmatrix} -5 & 1 & -4 \\ -3 & -6 & -4 \\ -1 & -1 & -4 \end{bmatrix}
$$

$$
\det(A) = (-120 + 4 - 12) - (-24 - 20 + 12) = -128 - (-32) = -96
$$

$$
C = \begin{bmatrix} 20 & -8 & -3 \\ 8 & 16 & -6 \\ -28 & -8 & 33 \end{bmatrix}, \qquad
\operatorname{adj}(A) = C^T = \begin{bmatrix} 20 & 8 & -28 \\ -8 & 16 & -8 \\ -3 & -6 & 33 \end{bmatrix}
$$

$$
\begin{aligned}
A^{-1} &= \frac{1}{\det(A)} \operatorname{adj}(A) = -\frac{1}{96} \begin{bmatrix} 20 & 8 & -28 \\ -8 & 16 & -8 \\ -3 & -6 & 33 \end{bmatrix} \\
       &= \begin{bmatrix} -\frac{5}{24} & -\frac{1}{12} & \frac{7}{24} \\ \frac{1}{12} & -\frac{1}{6} & \frac{1}{12} \\ \frac{1}{32} & \frac{1}{16} & -\frac{11}{32} \end{bmatrix}
\end{aligned}
$$

**Resultado:**

$$
A^{-1} = \begin{bmatrix} -\frac{5}{24} & -\frac{1}{12} & \frac{7}{24} \\ \frac{1}{12} & -\frac{1}{6} & \frac{1}{12} \\ \frac{1}{32} & \frac{1}{16} & -\frac{11}{32} \end{bmatrix}
$$

---

### 19) Matriz $3 \times 3$

**Procedimiento:**

$$
A = \begin{bmatrix} -1 & -1 & -3 \\ -6 & -6 & -3 \\ 3 & 6 & -2 \end{bmatrix}
$$

$$
\det(A) = (-12 + 9 + 108) - (54 + 18 - 12) = 105 - 60 = 45
$$

$$
C = \begin{bmatrix} 30 & -21 & -18 \\ -20 & 11 & 3 \\ -15 & 15 & 0 \end{bmatrix}, \qquad
\operatorname{adj}(A) = C^T = \begin{bmatrix} 30 & -20 & -15 \\ -21 & 11 & 15 \\ -18 & 3 & 0 \end{bmatrix}
$$

$$
\begin{aligned}
A^{-1} &= \frac{1}{\det(A)} \operatorname{adj}(A) = \frac{1}{45} \begin{bmatrix} 30 & -20 & -15 \\ -21 & 11 & 15 \\ -18 & 3 & 0 \end{bmatrix} \\
       &= \begin{bmatrix} \frac{2}{3} & -\frac{4}{9} & -\frac{1}{3} \\ -\frac{7}{15} & \frac{11}{45} & \frac{1}{3} \\ -\frac{2}{5} & \frac{1}{15} & 0 \end{bmatrix}
\end{aligned}
$$

**Resultado:**

$$
A^{-1} = \begin{bmatrix} \frac{2}{3} & -\frac{4}{9} & -\frac{1}{3} \\ -\frac{7}{15} & \frac{11}{45} & \frac{1}{3} \\ -\frac{2}{5} & \frac{1}{15} & 0 \end{bmatrix}
$$

---

### 20) Matriz $3 \times 3$

**Procedimiento:**

$$
A = \begin{bmatrix} -2 & 2 & -2 \\ 5 & -2 & 1 \\ -1 & 5 & 3 \end{bmatrix}
$$

$$
\det(A) = (12 - 2 - 50) - (-4 - 10 + 30) = -40 - 16 = -56
$$

$$
C = \begin{bmatrix} -11 & -16 & 23 \\ -16 & -8 & 8 \\ -2 & -8 & -6 \end{bmatrix}, \qquad
\operatorname{adj}(A) = C^T = \begin{bmatrix} -11 & -16 & -2 \\ -16 & -8 & -8 \\ 23 & 8 & -6 \end{bmatrix}
$$

$$
\begin{aligned}
A^{-1} &= \frac{1}{\det(A)} \operatorname{adj}(A) = -\frac{1}{56} \begin{bmatrix} -11 & -16 & -2 \\ -16 & -8 & -8 \\ 23 & 8 & -6 \end{bmatrix} \\
       &= \begin{bmatrix} \frac{11}{56} & \frac{2}{7} & \frac{1}{28} \\ \frac{2}{7} & \frac{1}{7} & \frac{1}{7} \\ -\frac{23}{56} & -\frac{1}{7} & \frac{3}{28} \end{bmatrix}
\end{aligned}
$$

**Resultado:**

$$
A^{-1} = \begin{bmatrix} \frac{11}{56} & \frac{2}{7} & \frac{1}{28} \\ \frac{2}{7} & \frac{1}{7} & \frac{1}{7} \\ -\frac{23}{56} & -\frac{1}{7} & \frac{3}{28} \end{bmatrix}
$$

---

## Calcula el determinante usando la regla de Sarrus

### 21) Determinante $3 \times 3$ (Regla de Sarrus)

**Procedimiento:**

$$
\begin{vmatrix} -6 & 0 & -3 \\ 3 & 4 & -8 \\ 10 & 7 & 11 \end{vmatrix}
$$

$$
\begin{aligned}
\text{Diagonales principales:} &\quad (-6)(4)(11) + (0)(-8)(10) + (-3)(3)(7) = -264 + 0 - 63 = -327 \\
\text{Diagonales secundarias:} &\quad (-3)(4)(10) + (-6)(-8)(7) + (0)(3)(11) = -120 + 336 + 0 = 216 \\
\det &= -327 - 216 = -543
\end{aligned}
$$

**Resultado:**

$$
-543
$$

---

### 22) Determinante $3 \times 3$ (Regla de Sarrus)

**Procedimiento:**

$$
\begin{vmatrix} 10 & -5 & 0 \\ 7 & -2 & -1 \\ 5 & -3 & 1 \end{vmatrix}
$$

$$
\begin{aligned}
\text{Diagonales principales:} &\quad (10)(-2)(1) + (-5)(-1)(5) + (0)(7)(-3) = -20 + 25 + 0 = 5 \\
\text{Diagonales secundarias:} &\quad (0)(-2)(5) + (10)(-1)(-3) + (-5)(7)(1) = 0 + 30 - 35 = -5 \\
\det &= 5 - (-5) = 10
\end{aligned}
$$

**Resultado:**

$$
10
$$

---

### 23) Determinante $3 \times 3$ (Regla de Sarrus)

**Procedimiento:**

$$
\begin{vmatrix} -9 & 11 & 5 \\ 9 & 10 & 0 \\ -2 & 9 & 10 \end{vmatrix}
$$

$$
\begin{aligned}
\text{Diagonales principales:} &\quad (-9)(10)(10) + (11)(0)(-2) + (5)(9)(9) = -900 + 0 + 405 = -495 \\
\text{Diagonales secundarias:} &\quad (5)(10)(-2) + (-9)(0)(9) + (11)(9)(10) = -100 + 0 + 990 = 890 \\
\det &= -495 - 890 = -1385
\end{aligned}
$$

**Resultado:**

$$
-1385
$$

---

### 24) Determinante $3 \times 3$ (Regla de Sarrus)

**Procedimiento:**

$$
\begin{vmatrix} 5 & -7 & 12 \\ -11 & -5 & 7 \\ 1 & 10 & 11 \end{vmatrix}
$$

$$
\begin{aligned}
\text{Diagonales principales:} &\quad (5)(-5)(11) + (-7)(7)(1) + (12)(-11)(10) = -275 - 49 - 1320 = -1644 \\
\text{Diagonales secundarias:} &\quad (12)(-5)(1) + (5)(7)(10) + (-7)(-11)(11) = -60 + 350 + 847 = 1137 \\
\det &= -1644 - 1137 = -2781
\end{aligned}
$$

**Resultado:**

$$
-2781
$$

---

### 25) Determinante $3 \times 3$ (Regla de Sarrus)

**Procedimiento:**

$$
\begin{vmatrix} -8 & 5 & 11 \\ 2 & 1 & 10 \\ 2 & 12 & 4 \end{vmatrix}
$$

$$
\begin{aligned}
\text{Diagonales principales:} &\quad (-8)(1)(4) + (5)(10)(2) + (11)(2)(12) = -32 + 100 + 264 = 332 \\
\text{Diagonales secundarias:} &\quad (11)(1)(2) + (-8)(10)(12) + (5)(2)(4) = 22 - 960 + 40 = -898 \\
\det &= 332 - (-898) = 1230
\end{aligned}
$$

**Resultado:**

$$
1230
$$

---

### 26) Determinante $3 \times 3$ (Regla de Sarrus)

**Procedimiento:**

$$
\begin{vmatrix} -7 & 8 & 2 \\ 1 & -3 & 2 \\ 0 & 4 & 1 \end{vmatrix}
$$

$$
\begin{aligned}
\text{Diagonales principales:} &\quad (-7)(-3)(1) + (8)(2)(0) + (2)(1)(4) = 21 + 0 + 8 = 29 \\
\text{Diagonales secundarias:} &\quad (2)(-3)(0) + (-7)(2)(4) + (8)(1)(1) = 0 - 56 + 8 = -48 \\
\det &= 29 - (-48) = 77
\end{aligned}
$$

**Resultado:**

$$
77
$$

---

### 27) Determinante $3 \times 3$ (Regla de Sarrus)

**Procedimiento:**

$$
\begin{vmatrix} -6 & -4 & -11 \\ 3 & -9 & 6 \\ -12 & 1 & -11 \end{vmatrix}
$$

$$
\begin{aligned}
\text{Diagonales principales:} &\quad (-6)(-9)(-11) + (-4)(6)(-12) + (-11)(3)(1) = -594 + 288 - 33 = -339 \\
\text{Diagonales secundarias:} &\quad (-11)(-9)(-12) + (-6)(6)(1) + (-4)(3)(-11) = -1188 - 36 + 132 = -1092 \\
\det &= -339 - (-1092) = 753
\end{aligned}
$$

**Resultado:**

$$
753
$$

---

### 28) Determinante $3 \times 3$ (Regla de Sarrus)

**Procedimiento:**

$$
\begin{vmatrix} 0 & 12 & 3 \\ 6 & 6 & -4 \\ -7 & -3 & -8 \end{vmatrix}
$$

$$
\begin{aligned}
\text{Diagonales principales:} &\quad (0)(6)(-8) + (12)(-4)(-7) + (3)(6)(-3) = 0 + 336 - 54 = 282 \\
\text{Diagonales secundarias:} &\quad (3)(6)(-7) + (0)(-4)(-3) + (12)(6)(-8) = -126 + 0 - 576 = -702 \\
\det &= 282 - (-702) = 984
\end{aligned}
$$

**Resultado:**

$$
984
$$

---

## Calcula el determinante usando el método de cofactores

### 29) Determinante $5 \times 5$ (Método de cofactores)

**Procedimiento:**

$$
A = \begin{bmatrix} -6 & 1 & 5 & 8 & -7 \\ 3 & 9 & 9 & -3 & -6 \\ 6 & 5 & 0 & -10 & -5 \\ 4 & 0 & -1 & -3 & -7 \\ 9 & 10 & 2 & -10 & -4 \end{bmatrix}
$$

Expandiendo por cofactores a lo largo de la fila 3:

$$
\det(A) = (6)(+M_{3,1}) + (5)(-M_{3,2}) + (-10)(-M_{3,4}) + (-5)(+M_{3,5})
$$

$$
\begin{aligned}
M_{3,1} &= \begin{vmatrix} 1 & 5 & 8 & -7 \\ 9 & 9 & -3 & -6 \\ 0 & -1 & -3 & -7 \\ 10 & 2 & -10 & -4 \end{vmatrix} = (1)(180) + (-3)(360) + (7)(-360) = -3420 \\
M_{3,2} &= \begin{vmatrix} -6 & 5 & 8 & -7 \\ 3 & 9 & -3 & -6 \\ 4 & -1 & -3 & -7 \\ 9 & 2 & -10 & -4 \end{vmatrix} = (-6)(-564) + (-5)(45) + (8)(-471) + (7)(114) = 189 \\
M_{3,4} &= \begin{vmatrix} -6 & 1 & 5 & -7 \\ 3 & 9 & 9 & -6 \\ 4 & 0 & -1 & -7 \\ 9 & 10 & 2 & -4 \end{vmatrix} = (4)(360) + (-1)(171) + (7)(252) = 3033 \\
M_{3,5} &= \begin{vmatrix} -6 & 1 & 5 & 8 \\ 3 & 9 & 9 & -3 \\ 4 & 0 & -1 & -3 \\ 9 & 10 & 2 & -10 \end{vmatrix} = (4)(-360) + (-1)(-45) + (3)(252) = -639
\end{aligned}
$$

$$
\det(A) = (6)(-3420) + (5)(-189) + (-10)(-3033) + (-5)(-639) = 12060
$$

**Resultado:**

$$
12060
$$

---

### 30) Determinante $5 \times 5$ (Método de cofactores)

**Procedimiento:**

$$
A = \begin{bmatrix} -8 & -9 & 9 & 0 & 0 \\ 4 & -9 & 4 & -1 & 7 \\ 4 & -7 & -3 & 7 & -1 \\ 2 & 9 & 5 & 7 & -4 \\ -9 & -10 & 5 & -3 & 4 \end{bmatrix}
$$

Expandiendo por cofactores a lo largo de la fila 1:

$$
\det(A) = (-8)(+M_{1,1}) + (-9)(-M_{1,2}) + (9)(+M_{1,3})
$$

$$
\begin{aligned}
M_{1,1} &= \begin{vmatrix} -9 & 4 & -1 & 7 \\ -7 & -3 & 7 & -1 \\ 9 & 5 & 7 & -4 \\ -10 & 5 & -3 & 4 \end{vmatrix} = (-9)(-278) + (-4)(-127) + (-1)(-387) + (-7)(1144) = -4611 \\
M_{1,2} &= \begin{vmatrix} 4 & 4 & -1 & 7 \\ 4 & -3 & 7 & -1 \\ 2 & 5 & 7 & -4 \\ -9 & 5 & -3 & 4 \end{vmatrix} = (4)(-278) + (-4)(203) + (-1)(21) + (-7)(356) = -4437 \\
M_{1,3} &= \begin{vmatrix} 4 & -9 & -1 & 7 \\ 4 & -7 & 7 & -1 \\ 2 & 9 & 7 & -4 \\ -9 & -10 & -3 & 4 \end{vmatrix} = (4)(-127) + (9)(203) + (-1)(-273) + (-7)(998) = -5394
\end{aligned}
$$

$$
\det(A) = (-8)(-4611) + (-9)(4437) + (9)(-5394) = -51591
$$

**Resultado:**

$$
-51591
$$

---

### 31) Determinante $5 \times 5$ (Método de cofactores)

**Procedimiento:**

$$
A = \begin{bmatrix} 3 & 2 & 7 & -8 & -10 \\ -1 & 6 & 6 & 0 & -2 \\ -1 & 5 & 2 & -9 & 2 \\ 0 & 3 & 5 & 2 & -7 \\ -2 & 8 & 0 & 9 & 10 \end{bmatrix}
$$

Expandiendo por cofactores a lo largo de la fila 2:

$$
\det(A) = (-1)(-M_{2,1}) + (6)(+M_{2,2}) + (6)(-M_{2,3}) + (-2)(-M_{2,5})
$$

$$
\begin{aligned}
M_{2,1} &= \begin{vmatrix} 2 & 7 & -8 & -10 \\ 5 & 2 & -9 & 2 \\ 3 & 5 & 2 & -7 \\ 8 & 0 & 9 & 10 \end{vmatrix} = (-8)(-269) + (-9)(49) + (10)(-313) = -1419 \\
M_{2,2} &= \begin{vmatrix} 3 & 7 & -8 & -10 \\ -1 & 2 & -9 & 2 \\ 0 & 5 & 2 & -7 \\ -2 & 0 & 9 & 10 \end{vmatrix} = (-5)(-102) + (2)(62) + (7)(211) = 2111 \\
M_{2,3} &= \begin{vmatrix} 3 & 2 & -8 & -10 \\ -1 & 5 & -9 & 2 \\ 0 & 3 & 2 & -7 \\ -2 & 8 & 9 & 10 \end{vmatrix} = (-3)(-102) + (2)(94) + (7)(389) = 3217 \\
M_{2,5} &= \begin{vmatrix} 3 & 2 & 7 & -8 \\ -1 & 5 & 2 & -9 \\ 0 & 3 & 5 & 2 \\ -2 & 8 & 0 & 9 \end{vmatrix} = (-3)(211) + (5)(389) + (-2)(-42) = 1396
\end{aligned}
$$

$$
\det(A) = (-1)(1419) + (6)(2111) + (6)(-3217) + (-2)(-1396) = -5263
$$

**Resultado:**

$$
-5263
$$

---

### 32) Determinante $5 \times 5$ (Método de cofactores)

**Procedimiento:**

$$
A = \begin{bmatrix} -1 & -8 & -4 & 6 & -4 \\ -1 & -8 & 1 & -10 & 9 \\ 6 & -7 & 7 & 8 & 9 \\ -9 & 7 & 10 & 8 & 8 \\ -5 & 6 & 9 & 0 & 3 \end{bmatrix}
$$

Expandiendo por cofactores a lo largo de la fila 5:

$$
\det(A) = (-5)(+M_{5,1}) + (6)(-M_{5,2}) + (9)(+M_{5,3}) + (3)(+M_{5,5})
$$

$$
\begin{aligned}
M_{5,1} &= \begin{vmatrix} -8 & -4 & 6 & -4 \\ -8 & 1 & -10 & 9 \\ -7 & 7 & 8 & 9 \\ 7 & 10 & 8 & 8 \end{vmatrix} = (-8)(-564) + (4)(-2134) + (6)(-680) + (4)(1494) = -2128 \\
M_{5,2} &= \begin{vmatrix} -1 & -4 & 6 & -4 \\ -1 & 1 & -10 & 9 \\ 6 & 7 & 8 & 9 \\ -9 & 10 & 8 & 8 \end{vmatrix} = (-1)(-564) + (4)(2378) + (6)(1012) + (4)(-1326) = 10844 \\
M_{5,3} &= \begin{vmatrix} -1 & -8 & 6 & -4 \\ -1 & -8 & -10 & 9 \\ 6 & -7 & 8 & 9 \\ -9 & 7 & 8 & 8 \end{vmatrix} = (-1)(-2134) + (8)(2378) + (6)(962) + (4)(1282) = 32058 \\
M_{5,5} &= \begin{vmatrix} -1 & -8 & -4 & 6 \\ -1 & -8 & 1 & -10 \\ 6 & -7 & 7 & 8 \\ -9 & 7 & 10 & 8 \end{vmatrix} = (-1)(1494) + (8)(-1326) + (-4)(1282) + (-6)(1082) = -23722
\end{aligned}
$$

$$
\det(A) = (-5)(-2128) + (6)(-10844) + (9)(32058) + (3)(-23722) = 162932
$$

**Resultado:**

$$
162932
$$

---

### 33) Determinante $5 \times 5$ (Método de cofactores)

**Procedimiento:**

$$
A = \begin{bmatrix} 10 & -10 & -2 & 4 & 4 \\ 2 & 4 & 9 & 2 & 2 \\ 2 & -5 & -3 & 6 & -8 \\ 5 & 10 & 6 & -3 & 4 \\ 1 & 8 & -4 & 2 & 3 \end{bmatrix}
$$

Expandiendo por cofactores a lo largo de la fila 1:

$$
\det(A) = (10)(+M_{1,1}) + (-10)(-M_{1,2}) + (-2)(+M_{1,3}) + (4)(-M_{1,4}) + (4)(+M_{1,5})
$$

$$
\begin{aligned}
M_{1,1} &= \begin{vmatrix} 4 & 9 & 2 & 2 \\ -5 & -3 & 6 & -8 \\ 10 & 6 & -3 & 4 \\ 8 & -4 & 2 & 3 \end{vmatrix} = (4)(-153) + (-9)(-255) + (2)(528) + (-2)(-396) = 3531 \\
M_{1,2} &= \begin{vmatrix} 2 & 9 & 2 & 2 \\ 2 & -3 & 6 & -8 \\ 5 & 6 & -3 & 4 \\ 1 & -4 & 2 & 3 \end{vmatrix} = (2)(-153) + (-9)(-204) + (2)(309) + (-2)(-117) = 2382 \\
M_{1,3} &= \begin{vmatrix} 2 & 4 & 2 & 2 \\ 2 & -5 & 6 & -8 \\ 5 & 10 & -3 & 4 \\ 1 & 8 & 2 & 3 \end{vmatrix} = (2)(-255) + (-4)(-204) + (2)(-189) + (-2)(333) = -738 \\
M_{1,4} &= \begin{vmatrix} 2 & 4 & 9 & 2 \\ 2 & -5 & -3 & -8 \\ 5 & 10 & 6 & 4 \\ 1 & 8 & -4 & 3 \end{vmatrix} = (2)(528) + (-4)(309) + (9)(-189) + (-2)(-396) = -1089 \\
M_{1,5} &= \begin{vmatrix} 2 & 4 & 9 & 2 \\ 2 & -5 & -3 & 6 \\ 5 & 10 & 6 & -3 \\ 1 & 8 & -4 & 2 \end{vmatrix} = (2)(-396) + (-4)(-117) + (9)(333) + (-2)(-396) = 3465
\end{aligned}
$$

$$
\det(A) = (10)(3531) + (-10)(-2382) + (-2)(-738) + (4)(1089) + (4)(3465) = 78822
$$

**Resultado:**

$$
78822
$$

---

### 34) Determinante $5 \times 5$ (Método de cofactores)

**Procedimiento:**

$$
A = \begin{bmatrix} -5 & -9 & 10 & 8 & 0 \\ -5 & -9 & -2 & 0 & 10 \\ 3 & -4 & -5 & -10 & 2 \\ 1 & 8 & -6 & -4 & -6 \\ 7 & -3 & 3 & -1 & -3 \end{bmatrix}
$$

Expandiendo por cofactores a lo largo de la fila 1:

$$
\det(A) = (-5)(+M_{1,1}) + (-9)(-M_{1,2}) + (10)(+M_{1,3}) + (8)(-M_{1,4})
$$

$$
\begin{aligned}
M_{1,1} &= \begin{vmatrix} -9 & -2 & 0 & 10 \\ -4 & -5 & -10 & 2 \\ 8 & -6 & -4 & -6 \\ -3 & 3 & -1 & -3 \end{vmatrix} = (-9)(366) + (2)(-484) + (-10)(-232) = -1942 \\
M_{1,2} &= \begin{vmatrix} -5 & -2 & 0 & 10 \\ 3 & -5 & -10 & 2 \\ 1 & -6 & -4 & -6 \\ 7 & 3 & -1 & -3 \end{vmatrix} = (-5)(366) + (2)(462) + (-10)(-261) = 1704 \\
M_{1,3} &= \begin{vmatrix} -5 & -9 & 0 & 10 \\ 3 & -4 & -10 & 2 \\ 1 & 8 & -4 & -6 \\ 7 & -3 & -1 & -3 \end{vmatrix} = (-5)(-484) + (9)(462) + (-10)(638) = 198 \\
M_{1,4} &= \begin{vmatrix} -5 & -9 & -2 & 10 \\ 3 & -4 & -5 & 2 \\ 1 & 8 & -6 & -6 \\ 7 & -3 & 3 & -3 \end{vmatrix} = (-5)(-342) + (9)(393) + (-2)(-88) + (-10)(493) = 493
\end{aligned}
$$

$$
\det(A) = (-5)(-1942) + (-9)(-1704) + (10)(198) + (8)(-493) = 23082
$$

**Resultado:**

$$
23082
$$

---

### 35) Determinante $5 \times 5$ (Método de cofactores)

**Procedimiento:**

$$
A = \begin{bmatrix} 2 & 0 & -5 & -4 & 0 \\ 8 & 10 & 8 & 10 & -5 \\ 10 & -9 & 3 & -4 & -3 \\ -3 & 9 & 4 & -8 & 3 \\ 2 & -8 & 2 & -1 & -6 \end{bmatrix}
$$

Expandiendo por cofactores a lo largo de la fila 1:

$$
\det(A) = (2)(+M_{1,1}) + (-5)(+M_{1,3}) + (-4)(-M_{1,4})
$$

$$
\begin{aligned}
M_{1,1} &= \begin{vmatrix} 10 & 8 & 10 & -5 \\ -9 & 3 & -4 & -3 \\ 9 & 4 & -8 & 3 \\ -8 & 2 & -1 & -6 \end{vmatrix} = (10)(-3) + (-8)(-360) + (10)(210) + (5)(-89) = 4505 \\
M_{1,3} &= \begin{vmatrix} 8 & 10 & 10 & -5 \\ 10 & -9 & -4 & -3 \\ -3 & 9 & -8 & 3 \\ 2 & -8 & -1 & -6 \end{vmatrix} = (8)(-360) + (-10)(501) + (10)(-210) + (5)(-583) = -12905 \\
M_{1,4} &= \begin{vmatrix} 8 & 10 & 8 & -5 \\ 10 & -9 & 3 & -3 \\ -3 & 9 & 4 & 3 \\ 2 & -8 & 2 & -6 \end{vmatrix} = (8)(210) + (-10)(-294) + (8)(-210) + (5)(392) = 4900
\end{aligned}
$$

$$
\det(A) = (2)(4505) + (-5)(-12905) + (-4)(-4900) = 93135
$$

**Resultado:**

$$
93135
$$

---

### 36) Determinante $5 \times 5$ (Método de cofactores)

**Procedimiento:**

$$
A = \begin{bmatrix} -5 & -5 & -5 & -9 & -5 \\ -9 & 1 & -1 & -2 & -1 \\ 3 & 2 & -9 & 0 & 8 \\ -9 & -8 & -2 & -4 & -3 \\ 4 & 4 & 1 & 3 & 7 \end{bmatrix}
$$

Expandiendo por cofactores a lo largo de la fila 3:

$$
\det(A) = (3)(+M_{3,1}) + (2)(-M_{3,2}) + (-9)(+M_{3,3}) + (8)(+M_{3,5})
$$

$$
\begin{aligned}
M_{3,1} &= \begin{vmatrix} -5 & -5 & -9 & -5 \\ 1 & -1 & -2 & -1 \\ -8 & -2 & -4 & -3 \\ 4 & 1 & 3 & 7 \end{vmatrix} = (-5)(-1) + (5)(-99) + (-9)(-55) + (5)(-10) = -45 \\
M_{3,2} &= \begin{vmatrix} -5 & -5 & -9 & -5 \\ -9 & -1 & -2 & -1 \\ -9 & -2 & -4 & -3 \\ 4 & 1 & 3 & 7 \end{vmatrix} = (-5)(-1) + (5)(80) + (-9)(49) + (5)(9) = 9 \\
M_{3,3} &= \begin{vmatrix} -5 & -5 & -9 & -5 \\ -9 & 1 & -2 & -1 \\ -9 & -8 & -4 & -3 \\ 4 & 4 & 3 & 7 \end{vmatrix} = (-5)(-99) + (5)(80) + (-9)(451) + (5)(91) = -2709 \\
M_{3,5} &= \begin{vmatrix} -5 & -5 & -5 & -9 \\ -9 & 1 & -1 & -2 \\ -9 & -8 & -2 & -4 \\ 4 & 4 & 1 & 3 \end{vmatrix} = (-5)(-10) + (5)(9) + (-5)(91) + (9)(5) = -315
\end{aligned}
$$

$$
\det(A) = (3)(-45) + (2)(-9) + (-9)(-2709) + (8)(-315) = 21708
$$

**Resultado:**

$$
21708
$$

