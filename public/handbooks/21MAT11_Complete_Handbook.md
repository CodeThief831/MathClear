> **Preparation target: 60+ raw marks.** Study above the bare minimum. No question set can guarantee a result.
>
> **Reliable method:** Read the intuition → cover the solution → recall the formula → write the answer → compare and correct.
>
> **Source policy:** Official VTU 2021 Scheme syllabus and model papers are the primary authority. Supplied VTU papers provide recurrence evidence. TIE/SIMP and other internet material are secondary cross-checks only where topics match the official syllabus.
>
> **VTU answer order:** Given/definition → formula/theorem → substitution → stepwise working → boxed final answer.

## Essential Full Forms

- **VTU:** Visvesvaraya Technological University
- **SEE:** Semester End Examination
- **CIE:** Continuous Internal Evaluation
- **ODE:** Ordinary Differential Equation
- **PDE:** Partial Differential Equation
- **CF:** Complementary Function
- **PI:** Particular Integral
- **RK4:** Fourth-Order Runge–Kutta Method
- **LHS / RHS:** Left-Hand Side / Right-Hand Side

---
# 21MAT11 â€” Calculus and Differential Equations

## Independently Authored VTU 2021-Scheme Practice Paper with Solutions

**Time:** 3 hours  
**Maximum marks:** 100

### Instructions

1. Answer **five full questions**, choosing **one full question from each module**.
2. Each full question carries **20 marks**.
3. The observed VTU part-mark pattern **6 + 7 + 7** is followed.
4. Both alternatives are solved here for practice.
5. Questions are independently authored using recurring, beginner-solvable patterns found in:
   - [`M1_ALL_OCR.txt`](file:///C:/Users/royal/OneDrive/Desktop/M/M1_ALL_OCR.txt)
   - [`M1_M2_OFFICIAL_EXTRACT.txt`](file:///C:/Users/royal/OneDrive/Desktop/M/M1_M2_OFFICIAL_EXTRACT.txt)

---

# Module 1 â€” Differential Calculus I

## Q1 â€” 20 marks

### Q1(a) â€” 6 marks

**Prompt:** With the usual polar-curve notation, prove that

\[
\tan\phi=r\frac{d\theta}{dr},
\]

where $\phi$ is the angle between the radius vector and the tangent.

**Intuition:** Resolve a small displacement along the curve into radial and perpendicular components. Their ratio gives the tangent of the angle.

#### Stepwise solution and marking

1. Let $P(r,\theta)$ and $Q(r+dr,\theta+d\theta)$ be neighboring points. **[1 mark]**

2. The displacement in the radial direction is $dr$. **[1 mark]**

3. The displacement perpendicular to the radius vector is $r\,d\theta$. **[1 mark]**

4. Hence, for the angle $\phi$ between the tangent and radius vector,

   \[
   \tan\phi=\frac{\text{perpendicular displacement}}
                  {\text{radial displacement}}.
   \]

   **[1 mark]**

5. Therefore,

   \[
   \tan\phi=\frac{r\,d\theta}{dr}.
   \]

   **[1 mark]**

6. Thus,

   \[
   \boxed{\tan\phi=r\frac{d\theta}{dr}
   =\frac{r}{dr/d\theta}}.
   \]

   **[1 mark]**

**Final answer:**

\[
\boxed{\tan\phi=r\frac{d\theta}{dr}}.
\]

---

### Q1(b) â€” 7 marks

**Prompt:** Find the angle of intersection of the curves

\[
r=2a\sin\theta,\qquad r=2a\cos\theta.
\]

**Intuition:** First find the common point, then calculate the angle each tangent makes with the common radius vector.

#### Stepwise solution and marking

1. At a non-polar intersection,

   \[
   2a\sin\theta=2a\cos\theta,
   \]

   so

   \[
   \tan\theta=1,\qquad \theta=\frac{\pi}{4}.
   \]

   **[1 mark]**

2. For $r_1=2a\sin\theta$,

   \[
   \frac{dr_1}{d\theta}=2a\cos\theta.
   \]

   **[1 mark]**

3. Using $\tan\phi=r/(dr/d\theta)$,

   \[
   \tan\phi_1
   =\frac{2a\sin\theta}{2a\cos\theta}
   =\tan\theta.
   \]

   At $\theta=\pi/4$,

   \[
   \phi_1=\frac{\pi}{4}.
   \]

   **[1 mark]**

4. For $r_2=2a\cos\theta$,

   \[
   \frac{dr_2}{d\theta}=-2a\sin\theta.
   \]

   **[1 mark]**

5. Therefore,

   \[
   \tan\phi_2
   =\frac{2a\cos\theta}{-2a\sin\theta}
   =-\cot\theta.
   \]

   At $\theta=\pi/4$,

   \[
   \tan\phi_2=-1,\qquad \phi_2=-\frac{\pi}{4}.
   \]

   **[1 mark]**

6. The angle between the curves is

   \[
   \alpha=|\phi_1-\phi_2|
   =\left|\frac{\pi}{4}+\frac{\pi}{4}\right|
   =\frac{\pi}{2}.
   \]

   **[1 mark]**

7. Hence the curves intersect orthogonally. **[1 mark]**

**Final answer:**

\[
\boxed{\alpha=\frac{\pi}{2}=90^\circ}.
\]

---

### Q1(c) â€” 7 marks

**Prompt:** Find the radius of curvature of

\[
y=x^2
\]

at the point $(1,1)$.

**Intuition:** For a Cartesian curve, the radius of curvature depends on the first and second derivatives.

#### Stepwise solution and marking

1. The Cartesian radius-of-curvature formula is

   \[
   \rho=\frac{\left[1+(y')^2\right]^{3/2}}{|y''|}.
   \]

   **[1 mark]**

2. Given $y=x^2$,

   \[
   y'=2x.
   \]

   **[1 mark]**

3. Also,

   \[
   y''=2.
   \]

   **[1 mark]**

4. At $x=1$,

   \[
   y'=2,\qquad y''=2.
   \]

   **[1 mark]**

5. Substitute:

   \[
   \rho=\frac{(1+2^2)^{3/2}}{2}.
   \]

   **[1 mark]**

6. Therefore,

   \[
   \rho=\frac{5^{3/2}}{2}
   =\frac{5\sqrt5}{2}.
   \]

   **[1 mark]**

7. The radius is positive, as required. **[1 mark]**

**Final answer:**

\[
\boxed{\rho=\frac{5\sqrt5}{2}}.
\]

---

## OR

## Q2 â€” 20 marks

### Q2(a) â€” 6 marks

**Prompt:** If $p$ is the perpendicular distance from the pole to the tangent of a polar curve, prove that

\[
\frac1{p^2}
=
\frac1{r^2}
+
\frac1{r^4}\left(\frac{dr}{d\theta}\right)^2.
\]

**Intuition:** The perpendicular $p$ is related to the radius vector through the right triangle formed with the tangent.

#### Stepwise solution and marking

1. Let $\phi$ be the angle between the radius vector and tangent. Then

   \[
   p=r\sin\phi.
   \]

   **[1 mark]**

2. Therefore,

   \[
   \frac1{p^2}=\frac{\csc^2\phi}{r^2}.
   \]

   **[1 mark]**

3. Since

   \[
   \csc^2\phi=1+\cot^2\phi,
   \]

   we obtain

   \[
   \frac1{p^2}
   =\frac1{r^2}\left(1+\cot^2\phi\right).
   \]

   **[1 mark]**

4. The polar tangent formula gives

   \[
   \tan\phi=\frac{r}{dr/d\theta}.
   \]

   Hence,

   \[
   \cot\phi=\frac1r\frac{dr}{d\theta}.
   \]

   **[1 mark]**

5. Substitution gives

   \[
   \frac1{p^2}
   =\frac1{r^2}
   \left[
   1+\frac1{r^2}\left(\frac{dr}{d\theta}\right)^2
   \right].
   \]

   **[1 mark]**

6. Therefore,

   \[
   \boxed{
   \frac1{p^2}
   =
   \frac1{r^2}
   +
   \frac1{r^4}\left(\frac{dr}{d\theta}\right)^2
   }.
   \]

   **[1 mark]**

---

### Q2(b) â€” 7 marks

**Prompt:** Find the pedal equation of the logarithmic spiral

\[
r=ae^\theta.
\]

**Intuition:** Differentiate the polar equation and substitute into the standard relation involving $p$ and $r$.

#### Stepwise solution and marking

1. Given

   \[
   r=ae^\theta.
   \]

   **[1 mark]**

2. Differentiate:

   \[
   \frac{dr}{d\theta}=ae^\theta=r.
   \]

   **[1 mark]**

3. Use

   \[
   \frac1{p^2}
   =
   \frac1{r^2}
   +
   \frac1{r^4}\left(\frac{dr}{d\theta}\right)^2.
   \]

   **[1 mark]**

4. Substituting $dr/d\theta=r$ gives

   \[
   \frac1{p^2}
   =
   \frac1{r^2}+\frac{r^2}{r^4}.
   \]

   **[1 mark]**

5. Thus,

   \[
   \frac1{p^2}=\frac2{r^2}.
   \]

   **[1 mark]**

6. Therefore,

   \[
   p^2=\frac{r^2}{2}.
   \]

   **[1 mark]**

7. Since $p$ is a distance,

   \[
   \boxed{p=\frac{r}{\sqrt2}}.
   \]

   **[1 mark]**

---

### Q2(c) â€” 7 marks

**Prompt:** Find the radius of curvature of the cardioid

\[
r=a(1+\cos\theta)
\]

at $\theta=0$.

**Intuition:** Use the polar radius-of-curvature formula and evaluate the derivatives at the specified point.

#### Stepwise solution and marking

1. The polar formula is

   \[
   \rho=
   \frac{\left[r^2+(r')^2\right]^{3/2}}
   {|r^2+2(r')^2-r r''|}.
   \]

   **[1 mark]**

2. Given

   \[
   r=a(1+\cos\theta).
   \]

   Therefore,

   \[
   r'=-a\sin\theta.
   \]

   **[1 mark]**

3. Also,

   \[
   r''=-a\cos\theta.
   \]

   **[1 mark]**

4. At $\theta=0$,

   \[
   r=2a,\qquad r'=0,\qquad r''=-a.
   \]

   **[1 mark]**

5. Numerator:

   \[
   [r^2+(r')^2]^{3/2}
   =[4a^2]^{3/2}=8a^3.
   \]

   **[1 mark]**

6. Denominator:

   \[
   r^2+2(r')^2-r r''
   =4a^2-2a(-a)=6a^2.
   \]

   **[1 mark]**

7. Hence,

   \[
   \rho=\frac{8a^3}{6a^2}
   =\boxed{\frac{4a}{3}}.
   \]

   **[1 mark]**

---

## Module 1 Formula Glossary

- $r$: radius vector.
- $\theta$: polar angle.
- $\phi$: angle between radius vector and tangent.
- $p$: perpendicular distance from the pole to tangent.
- $\rho$: radius of curvature.
- **Cartesian radius of curvature:**

  \[
  \rho=\frac{[1+(y')^2]^{3/2}}{|y''|}.
  \]

- **Polar radius of curvature:**

  \[
  \rho=
  \frac{[r^2+(r')^2]^{3/2}}
  {|r^2+2(r')^2-r r''|}.
  \]

- **Pedal relation:**

  \[
  \frac1{p^2}
  =
  \frac1{r^2}
  +
  \frac1{r^4}\left(\frac{dr}{d\theta}\right)^2.
  \]

---

# Module 2 â€” Differential Calculus II

## Q3 â€” 20 marks

### Q3(a) â€” 6 marks

**Prompt:** Expand $e^x\cos x$ by Maclaurinâ€™s series up to the term containing $x^4$.

**Intuition:** Write the known series for $e^x$ and $\cos x$, then multiply and collect like powers.

#### Stepwise solution and marking

1. Use

   \[
   e^x=1+x+\frac{x^2}{2}+\frac{x^3}{6}
   +\frac{x^4}{24}+\cdots.
   \]

   **[1 mark]**

2. Also,

   \[
   \cos x=1-\frac{x^2}{2}+\frac{x^4}{24}+\cdots.
   \]

   **[1 mark]**

3. Multiply:

   \[
   e^x\cos x=
   \left(1+x+\frac{x^2}{2}+\frac{x^3}{6}
   +\frac{x^4}{24}\right)
   \left(1-\frac{x^2}{2}+\frac{x^4}{24}\right).
   \]

   **[1 mark]**

4. Constant, linear and quadratic terms are

   \[
   1+x+\left(\frac12-\frac12\right)x^2
   =1+x.
   \]

   **[1 mark]**

5. Cubic coefficient:

   \[
   \frac16-\frac12=-\frac13.
   \]

   Quartic coefficient:

   \[
   \frac1{24}-\frac14+\frac1{24}
   =-\frac16.
   \]

   **[1 mark]**

6. Therefore,

   \[
   \boxed{
   e^x\cos x
   =1+x-\frac{x^3}{3}-\frac{x^4}{6}+O(x^5)
   }.
   \]

   **[1 mark]**

---

### Q3(b) â€” 7 marks

**Prompt:** If

\[
u=x^2+y^2,\qquad x=t^2,\qquad y=2t,
\]

find $du/dt$ using partial differentiation.

**Intuition:** Since both $x$ and $y$ depend on $t$, apply the total derivative chain rule.

#### Stepwise solution and marking

1. The total derivative formula is

   \[
   \frac{du}{dt}
   =
   \frac{\partial u}{\partial x}\frac{dx}{dt}
   +
   \frac{\partial u}{\partial y}\frac{dy}{dt}.
   \]

   **[1 mark]**

2. Since $u=x^2+y^2$,

   \[
   \frac{\partial u}{\partial x}=2x.
   \]

   **[1 mark]**

3. Similarly,

   \[
   \frac{\partial u}{\partial y}=2y.
   \]

   **[1 mark]**

4. From $x=t^2$,

   \[
   \frac{dx}{dt}=2t.
   \]

   **[1 mark]**

5. From $y=2t$,

   \[
   \frac{dy}{dt}=2.
   \]

   **[1 mark]**

6. Therefore,

   \[
   \frac{du}{dt}
   =(2x)(2t)+(2y)(2).
   \]

   Substituting $x=t^2$ and $y=2t$,

   \[
   \frac{du}{dt}=4t^3+8t.
   \]

   **[1 mark]**

7. Hence,

   \[
   \boxed{\frac{du}{dt}=4t^3+8t}.
   \]

   **[1 mark]**

---

### Q3(c) â€” 7 marks

**Prompt:** Examine

\[
f(x,y)=x^2+y^2-4x+6y+20
\]

for an extreme value.

**Intuition:** Locate the stationary point and use second derivatives to classify it.

#### Stepwise solution and marking

1. Compute

   \[
   f_x=2x-4,\qquad f_y=2y+6.
   \]

   **[1 mark]**

2. Set $f_x=f_y=0$:

   \[
   2x-4=0,\qquad 2y+6=0.
   \]

   Hence,

   \[
   (x,y)=(2,-3).
   \]

   **[1 mark]**

3. Second derivatives are

   \[
   f_{xx}=2,\qquad f_{yy}=2,\qquad f_{xy}=0.
   \]

   **[1 mark]**

4. The discriminant is

   \[
   D=f_{xx}f_{yy}-(f_{xy})^2
   =2(2)-0=4.
   \]

   **[1 mark]**

5. Since $D>0$ and $f_{xx}>0$, the point is a minimum. **[1 mark]**

6. Its value is

   \[
   f(2,-3)=4+9-8-18+20=7.
   \]

   **[1 mark]**

7. Therefore, the minimum value is

   \[
   \boxed{7\text{ at }(2,-3)}.
   \]

   **[1 mark]**

---

## OR

## Q4 â€” 20 marks

### Q4(a) â€” 6 marks

**Prompt:** Evaluate:

\[
\text{(i)}\quad
\lim_{x\to0}\left(\frac{\sin x}{x}\right)^{1/x^2},
\qquad
\text{(ii)}\quad
\lim_{x\to0}(1+x)^{1/x}.
\]

#### (i) Solution â€” 3 marks

Let the limit be $L$. Then

\[
\log L
=
\lim_{x\to0}
\frac{\log(\sin x/x)}{x^2}.
\]

**[1 mark]**

Using

\[
\frac{\sin x}{x}=1-\frac{x^2}{6}+O(x^4),
\]

we get

\[
\log\left(\frac{\sin x}{x}\right)
=-\frac{x^2}{6}+O(x^4).
\]

Therefore,

\[
\log L=-\frac16.
\]

**[1 mark]**

Hence,

\[
\boxed{L=e^{-1/6}}.
\]

**[1 mark]**

#### (ii) Solution â€” 3 marks

Let the limit be $M$. Then

\[
\log M
=
\lim_{x\to0}\frac{\log(1+x)}{x}.
\]

**[1 mark]**

By Lâ€™Hospitalâ€™s rule,

\[
\log M
=
\lim_{x\to0}\frac{1/(1+x)}{1}=1.
\]

**[1 mark]**

Therefore,

\[
\boxed{M=e}.
\]

**[1 mark]**

**Final answers:**

\[
\boxed{\text{(i)}\ e^{-1/6},\qquad \text{(ii)}\ e}.
\]

---

### Q4(b) â€” 7 marks

**Prompt:** If

\[
u=x^2y+yz,\qquad x=t,\qquad y=t^2,\qquad z=t^3,
\]

find $du/dt$ using the total derivative.

**Intuition:** Add the effect of changing each independent variable.

#### Stepwise solution and marking

1. Use

   \[
   \frac{du}{dt}
   =u_x\frac{dx}{dt}
   +u_y\frac{dy}{dt}
   +u_z\frac{dz}{dt}.
   \]

   **[1 mark]**

2. The partial derivatives are

   \[
   u_x=2xy.
   \]

   **[1 mark]**

3. Also,

   \[
   u_y=x^2+z,\qquad u_z=y.
   \]

   **[1 mark]**

4. The derivatives of the substitutions are

   \[
   \frac{dx}{dt}=1,\quad
   \frac{dy}{dt}=2t,\quad
   \frac{dz}{dt}=3t^2.
   \]

   **[1 mark]**

5. Therefore,

   \[
   \frac{du}{dt}
   =(2xy)(1)+(x^2+z)(2t)+y(3t^2).
   \]

   **[1 mark]**

6. Substitute $x=t$, $y=t^2$, $z=t^3$:

   \[
   \frac{du}{dt}
   =2t^3+2t(t^2+t^3)+3t^4.
   \]

   **[1 mark]**

7. Thus,

   \[
   \boxed{\frac{du}{dt}=4t^3+5t^4}.
   \]

   **[1 mark]**

A direct check gives $u=t^4+t^5$, whose derivative is also $4t^3+5t^4$.

---

### Q4(c) â€” 7 marks

**Prompt:** If

\[
u=x+y+z,\qquad
v=y+z,\qquad
w=z+x,
\]

find

\[
\frac{\partial(u,v,w)}{\partial(x,y,z)}.
\]

**Intuition:** Form the matrix of first partial derivatives and evaluate its determinant.

#### Stepwise solution and marking

1. By definition,

   \[
   \frac{\partial(u,v,w)}{\partial(x,y,z)}
   =
   \begin{vmatrix}
   u_x&u_y&u_z\\
   v_x&v_y&v_z\\
   w_x&w_y&w_z
   \end{vmatrix}.
   \]

   **[1 mark]**

2. For $u=x+y+z$,

   \[
   (u_x,u_y,u_z)=(1,1,1).
   \]

   **[1 mark]**

3. For $v=y+z$,

   \[
   (v_x,v_y,v_z)=(0,1,1).
   \]

   **[1 mark]**

4. For $w=z+x$,

   \[
   (w_x,w_y,w_z)=(1,0,1).
   \]

   **[1 mark]**

5. Therefore,

   \[
   J=
   \begin{vmatrix}
   1&1&1\\
   0&1&1\\
   1&0&1
   \end{vmatrix}.
   \]

   **[1 mark]**

6. Expanding along the first row,

   \[
   J=1(1)-1(-1)+1(-1)=1.
   \]

   **[1 mark]**

7. Hence,

   \[
   \boxed{\frac{\partial(u,v,w)}
   {\partial(x,y,z)}=1}.
   \]

   **[1 mark]**

---

## Module 2 Formula Glossary

- **Maclaurin series:**

  \[
  f(x)=f(0)+xf'(0)+\frac{x^2}{2!}f''(0)+\cdots.
  \]

- **Total derivative:**

  \[
  \frac{du}{dt}
  =
  u_x\frac{dx}{dt}
  +u_y\frac{dy}{dt}
  +u_z\frac{dz}{dt}.
  \]

- **Jacobian:**

  \[
  \frac{\partial(u,v,w)}{\partial(x,y,z)}
  =
  \det\left[\frac{\partial(u,v,w)}
  {\partial(x,y,z)}\right].
  \]

- **Two-variable extreme-value test:**

  \[
  D=f_{xx}f_{yy}-(f_{xy})^2.
  \]

  - $D>0,\ f_{xx}>0$: minimum.
  - $D>0,\ f_{xx}<0$: maximum.
  - $D<0$: saddle point.
- **Lâ€™Hospitalâ€™s rule:** For a $0/0$ or $\infty/\infty$ form,

  \[
  \lim\frac{f(x)}{g(x)}
  =
  \lim\frac{f'(x)}{g'(x)}
  \]

  when the required conditions hold.

---

# Module 3 â€” First-Order ODEs

## Q5 â€” 20 marks

### Q5(a) â€” 6 marks

**Prompt:** Solve the Bernoulli differential equation

\[
\frac{dy}{dx}+y=xy^2.
\]

**Intuition:** Because the equation contains $y^2$, use the substitution $v=y^{-1}$ to convert it into a linear equation.

#### Stepwise solution and marking

1. The equation is Bernoulliâ€™s equation with $n=2$. Divide by $y^2$:

   \[
   y^{-2}y'+y^{-1}=x.
   \]

   **[1 mark]**

2. Put

   \[
   v=y^{-1}.
   \]

   Then

   \[
   v'=-y^{-2}y'.
   \]

   **[1 mark]**

3. Therefore,

   \[
   -v'+v=x,
   \]

   or

   \[
   v'-v=-x.
   \]

   **[1 mark]**

4. Its integrating factor is

   \[
   IF=e^{\int-1\,dx}=e^{-x}.
   \]

   **[1 mark]**

5. Hence,

   \[
   \frac{d}{dx}(ve^{-x})=-xe^{-x}.
   \]

   Since

   \[
   \int-xe^{-x}\,dx=(x+1)e^{-x},
   \]

   \[
   ve^{-x}=(x+1)e^{-x}+C.
   \]

   **[1 mark]**

6. Thus,

   \[
   v=x+1+Ce^x.
   \]

   Since $v=1/y$,

   \[
   \boxed{y=\frac1{x+1+Ce^x}}.
   \]

   Also, $y=0$ is a solution. **[1 mark]**

---

### Q5(b) â€” 7 marks

**Prompt:** Find the orthogonal trajectories of

\[
x^2+y^2=2cx,
\]

where $c$ is the parameter.

**Intuition:** Eliminate the parameter to obtain the slope of the given family, then replace it by its negative reciprocal.

#### Stepwise solution and marking

1. Differentiate:

   \[
   2x+2y\frac{dy}{dx}=2c.
   \]

   **[1 mark]**

2. From the original family,

   \[
   c=\frac{x^2+y^2}{2x}.
   \]

   **[1 mark]**

3. Substitute:

   \[
   x+y\frac{dy}{dx}
   =\frac{x^2+y^2}{x}.
   \]

   **[1 mark]**

4. Therefore,

   \[
   y\frac{dy}{dx}=\frac{y^2}{x},
   \qquad
   \frac{dy}{dx}=\frac{y}{x}.
   \]

   **[1 mark]**

5. The slope of the orthogonal trajectories is the negative reciprocal:

   \[
   \frac{dy}{dx}=-\frac{x}{y}.
   \]

   **[1 mark]**

6. Hence,

   \[
   y\,dy=-x\,dx.
   \]

   Integrating,

   \[
   \frac{y^2}{2}=-\frac{x^2}{2}+C.
   \]

   **[1 mark]**

7. Therefore,

   \[
   \boxed{x^2+y^2=C}.
   \]

   **[1 mark]**

---

### Q5(c) â€” 7 marks

**Prompt:** Solve

\[
p^2-(x+y)p+xy=0,
\qquad p=\frac{dy}{dx}.
\]

**Intuition:** Factor the equation as an algebraic equation in $p$, then solve the resulting first-order equations separately.

#### Stepwise solution and marking

1. Factor:

   \[
   p^2-(x+y)p+xy=(p-x)(p-y).
   \]

   **[1 mark]**

2. Therefore,

   \[
   (p-x)(p-y)=0.
   \]

   **[1 mark]**

3. First case:

   \[
   p=x
   \quad\Rightarrow\quad
   \frac{dy}{dx}=x.
   \]

   **[1 mark]**

4. Integrating,

   \[
   y=\frac{x^2}{2}+C_1.
   \]

   **[1 mark]**

5. Second case:

   \[
   p=y
   \quad\Rightarrow\quad
   \frac{dy}{dx}=y.
   \]

   **[1 mark]**

6. Hence,

   \[
   \frac{dy}{y}=dx
   \quad\Rightarrow\quad
   \log|y|=x+C,
   \]

   so

   \[
   y=C_2e^x.
   \]

   **[1 mark]**

7. The two solution families are

   \[
   \boxed{y=\frac{x^2}{2}+C_1}
   \quad\text{or}\quad
   \boxed{y=C_2e^x}.
   \]

   **[1 mark]**

---

## OR

## Q6 â€” 20 marks

### Q6(a) â€” 6 marks

**Prompt:** Solve

\[
(2x+y)\,dx+(x+2y)\,dy=0.
\]

**Intuition:** Check exactness and integrate one coefficient.

#### Stepwise solution and marking

1. Let

   \[
   M=2x+y,\qquad N=x+2y.
   \]

   **[1 mark]**

2. Check:

   \[
   M_y=1,\qquad N_x=1.
   \]

   Hence the equation is exact. **[1 mark]**

3. Let $F_x=M$. Then

   \[
   F=\int(2x+y)\,dx=x^2+xy+\phi(y).
   \]

   **[1 mark]**

4. Differentiate with respect to $y$:

   \[
   F_y=x+\phi'(y).
   \]

   **[1 mark]**

5. Equate this to $N=x+2y$:

   \[
   \phi'(y)=2y,
   \qquad
   \phi(y)=y^2.
   \]

   **[1 mark]**

6. Therefore,

   \[
   \boxed{x^2+xy+y^2=C}.
   \]

   **[1 mark]**

---

### Q6(b) â€” 7 marks

**Prompt:** A metal body is initially at $90^\circ$C and is placed in a room maintained at $30^\circ$C. After 10 minutes its temperature is $60^\circ$C. Find its temperature after 20 minutes.

**Intuition:** Newtonâ€™s law states that the excess temperature above the surroundings decreases exponentially.

#### Stepwise solution and marking

1. Newtonâ€™s law is

   \[
   \frac{dT}{dt}=-k(T-30).
   \]

   **[1 mark]**

2. Its solution is

   \[
   T-30=Ce^{-kt}.
   \]

   **[1 mark]**

3. At $t=0$, $T=90$, so

   \[
   90-30=C,
   \qquad C=60.
   \]

   Hence,

   \[
   T-30=60e^{-kt}.
   \]

   **[1 mark]**

4. At $t=10$, $T=60$:

   \[
   30=60e^{-10k}.
   \]

   Thus,

   \[
   e^{-10k}=\frac12.
   \]

   **[1 mark]**

5. At $t=20$,

   \[
   e^{-20k}=(e^{-10k})^2
   =\left(\frac12\right)^2
   =\frac14.
   \]

   **[1 mark]**

6. Therefore,

   \[
   T-30=60\left(\frac14\right)=15.
   \]

   **[1 mark]**

7. Hence,

   \[
   \boxed{T=45^\circ\text{C}}.
   \]

   **[1 mark]**

---

### Q6(c) â€” 7 marks

**Prompt:** Find the general and singular solutions of Clairautâ€™s equation

\[
y=px+p^2,
\qquad p=\frac{dy}{dx}.
\]

**Intuition:** In Clairautâ€™s equation, replace the constant slope $p$ by a parameter for the general solution. The singular solution is the envelope of that family.

#### Stepwise solution and marking

1. The standard Clairaut form is

   \[
   y=px+f(p).
   \]

   Here,

   \[
   f(p)=p^2.
   \]

   **[1 mark]**

2. Differentiate:

   \[
   p=p+(x+2p)\frac{dp}{dx}.
   \]

   **[1 mark]**

3. Thus,

   \[
   (x+2p)\frac{dp}{dx}=0.
   \]

   **[1 mark]**

4. From $dp/dx=0$, let $p=C$. Then

   \[
   \boxed{y=Cx+C^2}
   \]

   is the general solution. **[1 mark]**

5. For the singular solution,

   \[
   x+2p=0,
   \qquad p=-\frac{x}{2}.
   \]

   **[1 mark]**

6. Substitute into $y=px+p^2$:

   \[
   y=-\frac{x^2}{2}+\frac{x^2}{4}.
   \]

   **[1 mark]**

7. Hence the singular solution is

   \[
   \boxed{y=-\frac{x^2}{4}}.
   \]

   **[1 mark]**

---

## Module 3 Formula Glossary

- **ODE:** Ordinary Differential Equation.
- $p$: shorthand for $dy/dx$.
- **Linear first-order ODE:**

  \[
  y'+P(x)y=Q(x).
  \]

- **IF:** Integrating Factor,

  \[
  IF=e^{\int P(x)\,dx}.
  \]

- **Bernoulli equation:**

  \[
  y'+Py=Qy^n,
  \qquad v=y^{1-n}.
  \]

- **Exact equation:**

  \[
  M\,dx+N\,dy=0,
  \qquad M_y=N_x.
  \]

- **Orthogonal slope:** If a curve has slope $m$, its orthogonal trajectory has slope $-1/m$.
- **Newtonâ€™s law of cooling:**

  \[
  T-T_s=Ce^{-kt},
  \]

  where $T_s$ is the surrounding temperature.
- **Clairaut equation:**

  \[
  y=px+f(p).
  \]

---

# Module 4 â€” Higher-Order ODEs

## Q7 â€” 20 marks

### Q7(a) â€” 6 marks

**Prompt:** Solve

\[
y''-3y'+2y=e^{3x}.
\]

#### Stepwise solution and marking

1. The auxiliary equation is

   \[
   m^2-3m+2=0.
   \]

   **[1 mark]**

2. Factor:

   \[
   (m-1)(m-2)=0,
   \]

   giving $m=1,2$. **[1 mark]**

3. Therefore, the complementary function is

   \[
   CF=C_1e^x+C_2e^{2x}.
   \]

   **[1 mark]**

4. For the particular integral,

   \[
   PI=\frac{e^{3x}}{3^2-3(3)+2}.
   \]

   **[1 mark]**

5. Hence,

   \[
   PI=\frac{e^{3x}}{9-9+2}
   =\frac12e^{3x}.
   \]

   **[1 mark]**

6. Thus,

   \[
   \boxed{
   y=C_1e^x+C_2e^{2x}+\frac12e^{3x}
   }.
   \]

   **[1 mark]**

---

### Q7(b) â€” 7 marks

**Prompt:** Solve

\[
y''-y=x^2.
\]

**Intuition:** Solve the homogeneous equation and assume a polynomial particular integral.

#### Stepwise solution and marking

1. The auxiliary equation is

   \[
   m^2-1=0,
   \]

   giving $m=\pm1$. **[1 mark]**

2. Therefore,

   \[
   CF=C_1e^x+C_2e^{-x}.
   \]

   **[1 mark]**

3. Assume

   \[
   y_p=Ax^2+Bx+C.
   \]

   **[1 mark]**

4. Then

   \[
   y_p''=2A.
   \]

   Substitution gives

   \[
   2A-(Ax^2+Bx+C)=x^2.
   \]

   **[1 mark]**

5. Comparing coefficients:

   \[
   -A=1,\qquad -B=0,\qquad 2A-C=0.
   \]

   **[1 mark]**

6. Hence,

   \[
   A=-1,\quad B=0,\quad C=-2,
   \]

   so

   \[
   y_p=-x^2-2.
   \]

   **[1 mark]**

7. Therefore,

   \[
   \boxed{y=C_1e^x+C_2e^{-x}-x^2-2}.
   \]

   **[1 mark]**

---

### Q7(c) â€” 7 marks

**Prompt:** Using variation of parameters, solve

\[
y''+y=\sec x.
\]

#### Stepwise solution and marking

1. The complementary solution is

   \[
   y_c=C_1\cos x+C_2\sin x.
   \]

   Thus choose

   \[
   y_1=\cos x,\qquad y_2=\sin x.
   \]

   **[1 mark]**

2. The Wronskian is

   \[
   W=y_1y_2'-y_1'y_2
   =\cos^2x+\sin^2x=1.
   \]

   **[1 mark]**

3. Variation of parameters gives

   \[
   y_p
   =-y_1\int\frac{y_2R}{W}\,dx
   +y_2\int\frac{y_1R}{W}\,dx,
   \]

   where $R=\sec x$. **[1 mark]**

4. Hence,

   \[
   y_p
   =-\cos x\int\sin x\sec x\,dx
   +\sin x\int\cos x\sec x\,dx.
   \]

   **[1 mark]**

5. Since

   \[
   \int\tan x\,dx=-\log|\cos x|,
   \qquad
   \int1\,dx=x,
   \]

   **[1 mark]**

6. we get

   \[
   y_p
   =\cos x\log|\cos x|+x\sin x.
   \]

   **[1 mark]**

7. Therefore,

   \[
   \boxed{
   y=C_1\cos x+C_2\sin x
   +\cos x\log|\cos x|+x\sin x
   }.
   \]

   **[1 mark]**

---

## OR

## Q8 â€” 20 marks

### Q8(a) â€” 6 marks

**Prompt:** Solve

\[
(D^2-1)(D^2+4)y=0,
\qquad D=\frac{d}{dx}.
\]

#### Stepwise solution and marking

1. The auxiliary equation is

   \[
   (m^2-1)(m^2+4)=0.
   \]

   **[1 mark]**

2. From $m^2-1=0$,

   \[
   m=\pm1.
   \]

   **[1 mark]**

3. From $m^2+4=0$,

   \[
   m=\pm2i.
   \]

   **[1 mark]**

4. The real-root contribution is

   \[
   C_1e^x+C_2e^{-x}.
   \]

   **[1 mark]**

5. The complex-root contribution is

   \[
   C_3\cos2x+C_4\sin2x.
   \]

   **[1 mark]**

6. Therefore,

   \[
   \boxed{
   y=C_1e^x+C_2e^{-x}
   +C_3\cos2x+C_4\sin2x
   }.
   \]

   **[1 mark]**

---

### Q8(b) â€” 7 marks

**Prompt:** Solve

\[
y''+3y'+2y=\sin x.
\]

#### Stepwise solution and marking

1. The auxiliary equation is

   \[
   m^2+3m+2=0=(m+1)(m+2).
   \]

   **[1 mark]**

2. Hence,

   \[
   CF=C_1e^{-x}+C_2e^{-2x}.
   \]

   **[1 mark]**

3. Assume

   \[
   y_p=A\sin x+B\cos x.
   \]

   **[1 mark]**

4. Then

   \[
   y_p'=A\cos x-B\sin x,
   \qquad
   y_p''=-A\sin x-B\cos x.
   \]

   **[1 mark]**

5. Comparing coefficients after substitution gives

   \[
   A-3B=1,\qquad 3A+B=0.
   \]

   **[1 mark]**

6. Solving,

   \[
   A=\frac1{10},\qquad B=-\frac3{10}.
   \]

   **[1 mark]**

7. Therefore,

   \[
   \boxed{
   y=C_1e^{-x}+C_2e^{-2x}
   +\frac1{10}\sin x-\frac3{10}\cos x
   }.
   \]

   **[1 mark]**

---

### Q8(c) â€” 7 marks

**Prompt:** Solve the Cauchyâ€“Euler equation

\[
x^2y''-xy'+y=x^2,\qquad x>0.
\]

**Intuition:** Substitute $t=\log x$, converting the Cauchyâ€“Euler equation into a constant-coefficient equation.

#### Stepwise solution and marking

1. Put

   \[
   t=\log x.
   \]

   Then

   \[
   xy'=D_ty,\qquad
   x^2y''=D_t(D_t-1)y.
   \]

   **[1 mark]**

2. Therefore,

   \[
   [D_t(D_t-1)-D_t+1]y=e^{2t}.
   \]

   **[1 mark]**

3. Thus,

   \[
   (D_t-1)^2y=e^{2t}.
   \]

   **[1 mark]**

4. The repeated auxiliary root is $m=1$. Hence,

   \[
   y_c=(C_1+C_2t)e^t.
   \]

   **[1 mark]**

5. Since $t=\log x$ and $e^t=x$,

   \[
   y_c=x(C_1+C_2\log x).
   \]

   **[1 mark]**

6. The particular integral is

   \[
   y_p=\frac{e^{2t}}{(2-1)^2}=e^{2t}=x^2.
   \]

   **[1 mark]**

7. Therefore,

   \[
   \boxed{
   y=x(C_1+C_2\log x)+x^2
   }.
   \]

   **[1 mark]**

---

## Module 4 Formula Glossary

- **ODE:** Ordinary Differential Equation.
- $D=d/dx$: differential operator.
- **AE:** Auxiliary Equation.
- **CF:** Complementary Function.
- **PI:** Particular Integral.
- General solution:

  \[
  y=CF+PI.
  \]

- For $F(D)y=e^{ax}$:

  \[
  PI=\frac{e^{ax}}{F(a)}
  \quad\text{if }F(a)\ne0.
  \]

- **Variation of parameters:**

  \[
  y_p=-y_1\int\frac{y_2R}{W}\,dx
  +y_2\int\frac{y_1R}{W}\,dx.
  \]

- **Wronskian:**

  \[
  W=y_1y_2'-y_1'y_2.
  \]

- **Cauchyâ€“Euler substitution:**

  \[
  t=\log x,\quad
  xy'=D_ty,\quad
  x^2y''=D_t(D_t-1)y.
  \]

---

# Module 5 â€” Linear Algebra

## Q9 â€” 20 marks

### Q9(a) â€” 6 marks

**Prompt:** Find the rank of

\[
A=
\begin{bmatrix}
1&2&3\\
2&4&6\\
1&1&1
\end{bmatrix}
\]

using elementary row transformations.

#### Stepwise solution and marking

1. Start with

   \[
   A=
   \begin{bmatrix}
   1&2&3\\
   2&4&6\\
   1&1&1
   \end{bmatrix}.
   \]

   **[1 mark]**

2. Apply $R_2\to R_2-2R_1$:

   \[
   \begin{bmatrix}
   1&2&3\\
   0&0&0\\
   1&1&1
   \end{bmatrix}.
   \]

   **[1 mark]**

3. Apply $R_3\to R_3-R_1$:

   \[
   \begin{bmatrix}
   1&2&3\\
   0&0&0\\
   0&-1&-2
   \end{bmatrix}.
   \]

   **[1 mark]**

4. Interchange the second and third rows:

   \[
   \begin{bmatrix}
   1&2&3\\
   0&-1&-2\\
   0&0&0
   \end{bmatrix}.
   \]

   **[1 mark]**

5. There are exactly two nonzero rows. **[1 mark]**

6. Therefore,

   \[
   \boxed{\operatorname{rank}(A)=2}.
   \]

   **[1 mark]**

---

### Q9(b) â€” 7 marks

**Prompt:** Solve by the Gaussâ€“Jordan method:

\[
x+y+z=6,
\]

\[
2x-y+z=3,
\]

\[
x+2y-z=2.
\]

#### Stepwise solution and marking

1. Write the augmented matrix:

   \[
   \left[
   \begin{array}{ccc|c}
   1&1&1&6\\
   2&-1&1&3\\
   1&2&-1&2
   \end{array}
   \right].
   \]

   **[1 mark]**

2. Apply $R_2\to R_2-2R_1$ and $R_3\to R_3-R_1$:

   \[
   \left[
   \begin{array}{ccc|c}
   1&1&1&6\\
   0&-3&-1&-9\\
   0&1&-2&-4
   \end{array}
   \right].
   \]

   **[1 mark]**

3. Interchange $R_2$ and $R_3$:

   \[
   \left[
   \begin{array}{ccc|c}
   1&1&1&6\\
   0&1&-2&-4\\
   0&-3&-1&-9
   \end{array}
   \right].
   \]

   **[1 mark]**

4. Apply $R_3\to R_3+3R_2$:

   \[
   \left[
   \begin{array}{ccc|c}
   1&1&1&6\\
   0&1&-2&-4\\
   0&0&-7&-21
   \end{array}
   \right].
   \]

   **[1 mark]**

5. Divide the third row by $-7$:

   \[
   R_3=[0\ 0\ 1\mid3].
   \]

   Thus $z=3$. **[1 mark]**

6. Eliminating $z$ and then $y$ gives

   \[
   \left[
   \begin{array}{ccc|c}
   1&0&0&1\\
   0&1&0&2\\
   0&0&1&3
   \end{array}
   \right].
   \]

   **[1 mark]**

7. Therefore,

   \[
   \boxed{x=1,\quad y=2,\quad z=3}.
   \]

   **[1 mark]**

---

### Q9(c) â€” 7 marks

**Prompt:** Use five iterations of the Rayleigh power method to approximate the dominant eigenvalue and corresponding eigenvector of

\[
A=
\begin{bmatrix}
2&1&0\\
1&2&0\\
0&0&1
\end{bmatrix},
\]

starting with

\[
X_0=
\begin{bmatrix}
1\\0\\1
\end{bmatrix}.
\]

**Intuition:** Repeated multiplication magnifies the component in the dominant eigenvectorâ€™s direction. Normalize each result by its largest component.

#### Stepwise solution and marking

1. First iteration:

   \[
   Y_1=AX_0=
   \begin{bmatrix}2\\1\\1\end{bmatrix},
   \quad
   \lambda_1=2,
   \quad
   X_1=
   \begin{bmatrix}1\\0.5\\0.5\end{bmatrix}.
   \]

   **[1 mark]**

2. Second iteration:

   \[
   Y_2=
   \begin{bmatrix}2.5\\2\\0.5\end{bmatrix},
   \quad
   \lambda_2=2.5,
   \quad
   X_2=
   \begin{bmatrix}1\\0.8\\0.2\end{bmatrix}.
   \]

   **[1 mark]**

3. Third iteration:

   \[
   Y_3=
   \begin{bmatrix}2.8\\2.6\\0.2\end{bmatrix},
   \quad
   \lambda_3=2.8,
   \]

   \[
   X_3\approx
   \begin{bmatrix}1\\0.928571\\0.071429\end{bmatrix}.
   \]

   **[1 mark]**

4. Fourth iteration:

   \[
   Y_4\approx
   \begin{bmatrix}
   2.928571\\2.857142\\0.071429
   \end{bmatrix},
   \quad
   \lambda_4\approx2.928571,
   \]

   \[
   X_4\approx
   \begin{bmatrix}
   1\\0.975610\\0.024390
   \end{bmatrix}.
   \]

   **[1 mark]**

5. Fifth iteration:

   \[
   Y_5\approx
   \begin{bmatrix}
   2.975610\\2.951220\\0.024390
   \end{bmatrix}.
   \]

   **[1 mark]**

6. Therefore,

   \[
   \lambda_5\approx2.975610,
   \qquad
   X_5\approx
   \begin{bmatrix}
   1\\0.991803\\0.008197
   \end{bmatrix}.
   \]

   **[1 mark]**

7. The sequence converges to

   \[
   \boxed{\lambda_{\max}=3},
   \qquad
   \boxed{X\propto
   \begin{bmatrix}1\\1\\0\end{bmatrix}}.
   \]

   After five iterations, the requested approximation is

   \[
   \boxed{\lambda_{\max}\approx2.97561}.
   \]

   **[1 mark]**

---

## OR

## Q10 â€” 20 marks

### Q10(a) â€” 6 marks

**Prompt:** Determine the values of $\lambda$ and $\mu$ for which the system

\[
x+y+z=3,
\]

\[
2x+3y+4z=9,
\]

\[
3x+4y+\lambda z=\mu
\]

has:

1. a unique solution,
2. infinitely many solutions,
3. no solution.

#### Stepwise solution and marking

1. Write the augmented matrix:

   \[
   \left[
   \begin{array}{ccc|c}
   1&1&1&3\\
   2&3&4&9\\
   3&4&\lambda&\mu
   \end{array}
   \right].
   \]

   **[1 mark]**

2. Apply

   \[
   R_2\to R_2-2R_1,\qquad
   R_3\to R_3-3R_1:
   \]

   \[
   \left[
   \begin{array}{ccc|c}
   1&1&1&3\\
   0&1&2&3\\
   0&1&\lambda-3&\mu-9
   \end{array}
   \right].
   \]

   **[1 mark]**

3. Apply $R_3\to R_3-R_2$:

   \[
   \left[
   \begin{array}{ccc|c}
   1&1&1&3\\
   0&1&2&3\\
   0&0&\lambda-5&\mu-12
   \end{array}
   \right].
   \]

   **[1 mark]**

4. If $\lambda\ne5$, the third pivot is nonzero. Therefore, the solution is unique. **[1 mark]**

5. If $\lambda=5$ and $\mu=12$, the last row is all zero, so there are infinitely many solutions. **[1 mark]**

6. If $\lambda=5$ and $\mu\ne12$, the last row represents $0=\mu-12$, an inconsistency. Hence there is no solution. **[1 mark]**

**Final classification:**

\[
\boxed{\lambda\ne5:\text{ unique solution}}
\]

\[
\boxed{\lambda=5,\ \mu=12:\text{ infinitely many solutions}}
\]

\[
\boxed{\lambda=5,\ \mu\ne12:\text{ no solution}}.
\]

---

### Q10(b) â€” 7 marks

**Prompt:** Solve by the Gauss-elimination method:

\[
x+y+z=6,
\]

\[
2x+3y+z=11,
\]

\[
x-y+2z=5.
\]

#### Stepwise solution and marking

1. The augmented matrix is

   \[
   \left[
   \begin{array}{ccc|c}
   1&1&1&6\\
   2&3&1&11\\
   1&-1&2&5
   \end{array}
   \right].
   \]

   **[1 mark]**

2. Apply $R_2\to R_2-2R_1$:

   \[
   R_2=[0\ 1\ -1\mid-1].
   \]

   **[1 mark]**

3. Apply $R_3\to R_3-R_1$:

   \[
   R_3=[0\ -2\ 1\mid-1].
   \]

   **[1 mark]**

4. Apply $R_3\to R_3+2R_2$:

   \[
   R_3=[0\ 0\ -1\mid-3].
   \]

   **[1 mark]**

5. Therefore,

   \[
   -z=-3,\qquad z=3.
   \]

   **[1 mark]**

6. From $y-z=-1$,

   \[
   y-3=-1,\qquad y=2.
   \]

   From $x+y+z=6$,

   \[
   x=1.
   \]

   **[1 mark]**

7. Hence,

   \[
   \boxed{x=1,\quad y=2,\quad z=3}.
   \]

   **[1 mark]**

---

### Q10(c) â€” 7 marks

**Prompt:** Use the Gaussâ€“Seidel method to solve

\[
10x+y+z=12,
\]

\[
2x+10y+z=13,
\]

\[
2x+2y+10z=14,
\]

starting from $(0,0,0)$ and carrying out four iterations.

**Intuition:** Rearrange each equation to isolate its dominant variable, then immediately use every newly calculated value.

#### Stepwise solution and marking

1. Iteration formulas:

   \[
   x=\frac{12-y-z}{10},
   \]

   \[
   y=\frac{13-2x-z}{10},
   \]

   \[
   z=\frac{14-2x-2y}{10}.
   \]

   **[1 mark]**

2. Starting with $(x_0,y_0,z_0)=(0,0,0)$:

   \[
   x_1=1.2,\qquad
   y_1=1.06,\qquad
   z_1=0.948.
   \]

   **[1 mark]**

3. Second iteration:

   \[
   x_2=\frac{12-1.06-0.948}{10}=0.9992,
   \]

   \[
   y_2=\frac{13-2(0.9992)-0.948}{10}
   =1.00536,
   \]

   \[
   z_2=\frac{14-2(0.9992)-2(1.00536)}{10}
   =0.999088.
   \]

   **[1 mark]**

4. Third iteration:

   \[
   x_3=0.9995552,
   \]

   \[
   y_3=1.00018016,
   \]

   \[
   z_3=1.000052928.
   \]

   **[1 mark]**

5. Fourth iteration:

   \[
   x_4=0.9999766912,
   \]

   \[
   y_4=0.99999936896,
   \]

   \[
   z_4=1.000004787968.
   \]

   **[1 mark]**

6. To four decimal places,

   \[
   (x,y,z)\approx(1.0000,1.0000,1.0000).
   \]

   **[1 mark]**

7. Direct verification:

   \[
   10(1)+1+1=12,
   \]

   \[
   2(1)+10(1)+1=13,
   \]

   \[
   2(1)+2(1)+10(1)=14.
   \]

   Therefore,

   \[
   \boxed{x=1,\quad y=1,\quad z=1}.
   \]

   **[1 mark]**

---

## Module 5 Formula Glossary

- **Rank:** Number of nonzero rows in a row-echelon form.
- **Augmented matrix:** Matrix obtained by adjoining the constant column to the coefficient matrix.
- **Consistency conditions:**
  - Unique solution:

    \[
    \operatorname{rank}(A)
    =
    \operatorname{rank}([A|B])
    =n.
    \]

  - Infinitely many solutions:

    \[
    \operatorname{rank}(A)
    =
    \operatorname{rank}([A|B])
    <n.
    \]

  - No solution:

    \[
    \operatorname{rank}(A)
    \ne
    \operatorname{rank}([A|B]).
    \]

- **Gauss elimination:** Converts a system to upper-triangular form, followed by back-substitution.
- **Gaussâ€“Jordan method:** Reduces the augmented matrix to reduced row-echelon form.
- **Gaussâ€“Seidel method:** Iterative method that immediately uses newly computed variable values.
- **Power method:** Iterative procedure for finding the dominant eigenvalue and eigenvector.
- **Dominant eigenvalue:** Eigenvalue having the largest absolute magnitude.
- **Eigenvalue and eigenvector:**

  \[
  AX=\lambda X.
  \]

---

# Arithmetic Verification Summary

- Every full question totals

  \[
  6+7+7=\boxed{20\text{ marks}}.
  \]

- Five selected full questions total

  \[
  5(20)=\boxed{100\text{ marks}}.
  \]

- The following key results were independently substituted back or numerically checked:
  - Q3(c): minimum value $7$ at $(2,-3)$.
  - Q5(a): $y^{-1}=x+1+Ce^x$ satisfies the transformed linear equation.
  - Q6(b): temperature excesses follow $60,30,15$.
  - Q7(a), Q7(b), Q8(b), and Q8(c): particular integrals satisfy their respective ODEs.
  - Q9(b) and Q10(b): $(1,2,3)$ satisfies all three equations.
  - Q9(c): exact dominant eigenpair is $\lambda=3$, $X\propto(1,1,0)^T$.
  - Q10(c): $(1,1,1)$ satisfies the system exactly.
