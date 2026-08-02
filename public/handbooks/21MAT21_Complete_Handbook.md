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
# 21MAT21 â€” Independently Authored VTU 2021-Scheme Practice Paper

**Course:** Advanced Calculus and Numerical Methods  
**Time:** 3 Hours  
**Maximum Marks:** 100

## Instructions

1. Answer **five full questions**, choosing **one full question from each module**.
2. Each full question carries **20 marks**.
3. The observed VTU distribution of **6 + 7 + 7 marks** is followed.
4. Numerical answers are rounded only at the final stage unless an iteration requires displayed approximations.
5. The questions are independently written but selected from high-recurrence patterns in the supplied papers and restricted to the official syllabus.

---

# Module 1 â€” Integral Calculus

## Q1

### Q1(a) Evaluate
$$
I=\int_0^1\int_0^2(x+2y)\,dy\,dx.
\tag{6 marks}
$$

**Intuition:** Integrate with respect to $y$ first, treating $x$ as a constant, and then integrate the resulting expression with respect to $x$.

#### Solution and marking scheme

1. Write the iterated integral correctly:
   $$
   I=\int_0^1\left[\int_0^2(x+2y)\,dy\right]dx.
   $$
   **[1 mark]**

2. Integrate with respect to $y$:
   $$
   \int(x+2y)\,dy=xy+y^2.
   $$
   **[1 mark]**

3. Apply the inner limits:
   $$
   [xy+y^2]_0^2=2x+4.
   $$
   **[1 mark]**

4. Hence,
   $$
   I=\int_0^1(2x+4)\,dx.
   $$
   **[1 mark]**

5. Integrate:
   $$
   I=[x^2+4x]_0^1.
   $$
   **[1 mark]**

6. Therefore,
   $$
   \boxed{I=5}.
   $$
   **[1 mark]**

---

### Q1(b) Change the order of integration and evaluate
$$
I=\int_0^1\int_x^1(x+y)\,dy\,dx.
\tag{7 marks}
$$

**Intuition:** The original region satisfies $0\le x\le1$ and $x\le y\le1$. Horizontally, the same triangle is described by $0\le y\le1$ and $0\le x\le y$.

#### Solution and marking scheme

1. Identify the original region:
   $$
   0\le x\le1,\qquad x\le y\le1.
   $$
   **[1 mark]**

2. Its boundaries are $x=0$, $y=x$, and $y=1$. After reversing the order:
   $$
   0\le y\le1,\qquad 0\le x\le y.
   $$
   **[2 marks]**

3. Rewrite the integral:
   $$
   I=\int_0^1\int_0^y(x+y)\,dx\,dy.
   $$
   **[1 mark]**

4. Integrate with respect to $x$:
   $$
   \int_0^y(x+y)\,dx
   =\left[\frac{x^2}{2}+yx\right]_0^y.
   $$
   **[1 mark]**

5. Simplify:
   $$
   \frac{y^2}{2}+y^2=\frac{3y^2}{2}.
   $$
   **[1 mark]**

6. Therefore,
   $$
   I=\frac32\int_0^1y^2\,dy
   =\frac32\left[\frac{y^3}{3}\right]_0^1
   =\boxed{\frac12}.
   $$
   **[1 mark]**

---

### Q1(c) Derive the relation between the Beta and Gamma functions.  
**(7 marks)**

**Intuition:** Multiply two Gamma integrals, transform the first quadrant using $x=ru$ and $y=r(1-u)$, and separate the result into a Gamma integral and a Beta integral.

#### Solution and marking scheme

1. Definitions:
   $$
   \Gamma(m)=\int_0^\infty e^{-x}x^{m-1}\,dx,
   \qquad
   B(m,n)=\int_0^1u^{m-1}(1-u)^{n-1}\,du.
   $$
   **[1 mark]**

2. Multiply the two Gamma functions:
   $$
   \Gamma(m)\Gamma(n)
   =\int_0^\infty\int_0^\infty
   e^{-(x+y)}x^{m-1}y^{n-1}\,dx\,dy.
   $$
   **[1 mark]**

3. Put
   $$
   x=ru,\qquad y=r(1-u),
   $$
   where $r\in[0,\infty)$ and $u\in[0,1]$.
   **[1 mark]**

4. The Jacobian is
   $$
   \left|\frac{\partial(x,y)}{\partial(r,u)}\right|=r.
   $$
   **[1 mark]**

5. Therefore,
   $$
   \Gamma(m)\Gamma(n)
   =\int_0^\infty\int_0^1
   e^{-r}r^{m+n-1}u^{m-1}(1-u)^{n-1}\,du\,dr.
   $$
   **[1 mark]**

6. Separate the integrals:
   $$
   \Gamma(m)\Gamma(n)
   =
   \left[\int_0^\infty e^{-r}r^{m+n-1}\,dr\right]
   \left[\int_0^1u^{m-1}(1-u)^{n-1}\,du\right].
   $$
   Thus,
   $$
   \Gamma(m)\Gamma(n)=\Gamma(m+n)B(m,n).
   $$
   **[1 mark]**

7. Hence,
   $$
   \boxed{B(m,n)=\frac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}}.
   $$
   **[1 mark]**

---

## OR

## Q2

### Q2(a) Convert into polar coordinates and evaluate
$$
I=\iint_R(x^2+y^2)\,dA,
$$
where $R$ is the part of the unit circle in the first quadrant.  
**(6 marks)**

**Intuition:** In polar coordinates, $x^2+y^2=r^2$ and the area element is $dA=r\,dr\,d\theta$.

#### Solution and marking scheme

1. For the first-quadrant unit disk:
   $$
   0\le r\le1,\qquad 0\le\theta\le\frac{\pi}{2}.
   $$
   **[1 mark]**

2. Use
   $$
   x=r\cos\theta,\quad y=r\sin\theta,\quad dA=r\,dr\,d\theta.
   $$
   **[1 mark]**

3. Since $x^2+y^2=r^2$,
   $$
   I=\int_0^{\pi/2}\int_0^1r^3\,dr\,d\theta.
   $$
   **[1 mark]**

4. Evaluate the radial integral:
   $$
   \int_0^1r^3\,dr=\frac14.
   $$
   **[1 mark]**

5. Thus,
   $$
   I=\frac14\int_0^{\pi/2}d\theta.
   $$
   **[1 mark]**

6. Therefore,
   $$
   \boxed{I=\frac{\pi}{8}}.
   $$
   **[1 mark]**

---

### Q2(b) Using double integration, find the area enclosed by
$$
y=x^2,\qquad x=y^2
$$
in the first quadrant.  
**(7 marks)**

**Intuition:** In the first quadrant, $x=y^2$ gives $y=\sqrt{x}$. Between the intersection points, $\sqrt{x}$ is above $x^2$.

#### Solution and marking scheme

1. Solve the curves simultaneously:
   $$
   y=x^2,\qquad x=y^2.
   $$
   Substituting $y=x^2$:
   $$
   x=x^4.
   $$
   **[1 mark]**

2. Hence,
   $$
   x(x^3-1)=0
   \implies x=0,1.
   $$
   The intersection points are $(0,0)$ and $(1,1)$.
   **[1 mark]**

3. Rewrite $x=y^2$ as
   $$
   y=\sqrt{x}
   $$
   in the first quadrant.
   **[1 mark]**

4. The required region is
   $$
   0\le x\le1,\qquad x^2\le y\le\sqrt{x}.
   $$
   **[1 mark]**

5. Therefore,
   $$
   A=\int_0^1\int_{x^2}^{\sqrt{x}}dy\,dx
   =\int_0^1(\sqrt{x}-x^2)\,dx.
   $$
   **[1 mark]**

6. Integrate:
   $$
   A=\left[\frac23x^{3/2}-\frac{x^3}{3}\right]_0^1.
   $$
   **[1 mark]**

7. Hence,
   $$
   \boxed{A=\frac23-\frac13=\frac13\text{ square unit}}.
   $$
   **[1 mark]**

---

### Q2(c) Using Beta and Gamma functions, evaluate
$$
I=\int_0^{\pi/2}\sin^3\theta\cos^2\theta\,d\theta.
\tag{7 marks}
$$

**Intuition:** Match the powers with the standard trigonometric Beta integral.

#### Solution and marking scheme

1. Use
   $$
   \int_0^{\pi/2}
   \sin^{m-1}\theta\cos^{n-1}\theta\,d\theta
   =\frac12B\left(\frac m2,\frac n2\right).
   $$
   **[1 mark]**

2. Here,
   $$
   m-1=3,\qquad n-1=2,
   $$
   so $m=4$ and $n=3$.
   **[1 mark]**

3. Thus,
   $$
   I=\frac12B\left(2,\frac32\right).
   $$
   **[1 mark]**

4. Apply the Beta-Gamma relation:
   $$
   I=\frac12
   \frac{\Gamma(2)\Gamma(3/2)}{\Gamma(7/2)}.
   $$
   **[1 mark]**

5. Evaluate:
   $$
   \Gamma(2)=1,\qquad
   \Gamma\left(\frac32\right)=\frac{\sqrt{\pi}}2.
   $$
   **[1 mark]**

6. Also,
   $$
   \Gamma\left(\frac72\right)
   =\frac52\cdot\frac32\cdot\frac12\sqrt{\pi}
   =\frac{15\sqrt{\pi}}8.
   $$
   **[1 mark]**

7. Therefore,
   $$
   I=\frac12
   \frac{\sqrt{\pi}/2}{15\sqrt{\pi}/8}
   =\boxed{\frac{2}{15}}.
   $$
   **[1 mark]**

### Module 1 formula glossary

- **Beta function:**
  $$
  B(m,n)=\int_0^1x^{m-1}(1-x)^{n-1}\,dx.
  $$
- **Gamma function:**
  $$
  \Gamma(n)=\int_0^\infty e^{-x}x^{n-1}\,dx.
  $$
- $\Gamma(n+1)=n\Gamma(n)$ and $\Gamma(1/2)=\sqrt{\pi}$.
- $B(m,n)=\dfrac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}$.
- **Polar transformation:** $x=r\cos\theta$, $y=r\sin\theta$, $dA=r\,dr\,d\theta$.
- **Jacobian:** Scale factor used when variables in a multiple integral are changed.

---

# Module 2 â€” Vector Calculus

## Q3

### Q3(a) Find the directional derivative of
$$
\phi=x^2y+yz^2
$$
at $(1,2,-1)$ in the direction $2\mathbf i-\mathbf j+2\mathbf k$.  
**(6 marks)**

**Intuition:** The directional derivative is the dot product of the gradient with the unit direction vector.

#### Solution and marking scheme

1. Compute the gradient:
   $$
   \nabla\phi=
   \left(2xy,\ x^2+z^2,\ 2yz\right).
   $$
   **[1 mark]**

2. At $(1,2,-1)$:
   $$
   \nabla\phi=(4,2,-4).
   $$
   **[1 mark]**

3. The given direction vector is
   $$
   \mathbf a=(2,-1,2).
   $$
   **[1 mark]**

4. Its magnitude is
   $$
   |\mathbf a|=\sqrt{4+1+4}=3.
   $$
   Therefore,
   $$
   \widehat{\mathbf a}=\frac13(2,-1,2).
   $$
   **[1 mark]**

5. The directional derivative is
   $$
   D_{\widehat{\mathbf a}}\phi
   =\nabla\phi\cdot\widehat{\mathbf a}
   =\frac13(8-2-8).
   $$
   **[1 mark]**

6. Hence,
   $$
   \boxed{D_{\widehat{\mathbf a}}\phi=-\frac23}.
   $$
   **[1 mark]**

---

### Q3(b) For
$$
\mathbf F=xy\,\mathbf i+yz\,\mathbf j+zx\,\mathbf k,
$$
find $\operatorname{div}\mathbf F$ and $\operatorname{curl}\mathbf F$. Also evaluate them at $(1,2,3)$.  
**(7 marks)**

**Intuition:** Divergence measures net outward spreading; curl measures local rotation.

#### Solution and marking scheme

1. Let
   $$
   P=xy,\qquad Q=yz,\qquad R=zx.
   $$
   **[1 mark]**

2. Divergence:
   $$
   \nabla\cdot\mathbf F
   =\frac{\partial P}{\partial x}
   +\frac{\partial Q}{\partial y}
   +\frac{\partial R}{\partial z}.
   $$
   **[1 mark]**

3. Therefore,
   $$
   \nabla\cdot\mathbf F=y+z+x.
   $$
   At $(1,2,3)$:
   $$
   \boxed{\nabla\cdot\mathbf F=6}.
   $$
   **[1 mark]**

4. Curl:
   $$
   \nabla\times\mathbf F=
   \begin{vmatrix}
   \mathbf i&\mathbf j&\mathbf k\\
   \partial_x&\partial_y&\partial_z\\
   xy&yz&zx
   \end{vmatrix}.
   $$
   **[1 mark]**

5. Its $\mathbf i$-component is
   $$
   \frac{\partial(zx)}{\partial y}
   -\frac{\partial(yz)}{\partial z}
   =0-y=-y.
   $$
   **[1 mark]**

6. Similarly,
   $$
   \mathbf j\text{-component}=-z,\qquad
   \mathbf k\text{-component}=-x.
   $$
   Hence,
   $$
   \nabla\times\mathbf F=-y\mathbf i-z\mathbf j-x\mathbf k.
   $$
   **[1 mark]**

7. At $(1,2,3)$:
   $$
   \boxed{\nabla\times\mathbf F=-2\mathbf i-3\mathbf j-\mathbf k}.
   $$
   **[1 mark]**

---

### Q3(c) Find $a,b,c$ so that
$$
\mathbf F=(ay+z)\mathbf i+(2x+bz)\mathbf j+(cy+cx)\mathbf k
$$
is irrotational.  
**(7 marks)**

**Intuition:** An irrotational field has zero curl, so each component of $\nabla\times\mathbf F$ must vanish.

#### Solution and marking scheme

1. Write
   $$
   P=ay+z,\quad Q=2x+bz,\quad R=cy+cx.
   $$
   **[1 mark]**

2. The first curl component is
   $$
   R_y-Q_z=c-b.
   $$
   **[1 mark]**

3. The second component is
   $$
   P_z-R_x=1-c.
   $$
   **[1 mark]**

4. The third component is
   $$
   Q_x-P_y=2-a.
   $$
   **[1 mark]**

5. For an irrotational field:
   $$
   c-b=0,\qquad1-c=0,\qquad2-a=0.
   $$
   **[1 mark]**

6. Hence,
   $$
   c=1,\qquad b=c=1,\qquad a=2.
   $$
   **[1 mark]**

7. Therefore,
   $$
   \boxed{a=2,\quad b=1,\quad c=1}.
   $$
   **[1 mark]**

---

## OR

## Q4

### Q4(a) Find the work done by
$$
\mathbf F=2x\,\mathbf i+y\,\mathbf j+z\,\mathbf k
$$
along the straight line from $(0,0,0)$ to $(1,2,3)$.  
**(6 marks)**

**Intuition:** Parametrize the line and evaluate $\int_C\mathbf F\cdot d\mathbf r$.

#### Solution and marking scheme

1. Parametrize:
   $$
   \mathbf r(t)=(t,2t,3t),\qquad0\le t\le1.
   $$
   **[1 mark]**

2. Then
   $$
   d\mathbf r=(1,2,3)\,dt.
   $$
   **[1 mark]**

3. Along the curve:
   $$
   \mathbf F=(2t,2t,3t).
   $$
   **[1 mark]**

4. Thus,
   $$
   \mathbf F\cdot d\mathbf r
   =(2t+4t+9t)\,dt=15t\,dt.
   $$
   **[1 mark]**

5. Hence,
   $$
   W=\int_0^1 15t\,dt.
   $$
   **[1 mark]**

6. Therefore,
   $$
   \boxed{W=\frac{15}{2}}.
   $$
   **[1 mark]**

---

### Q4(b) Apply Greenâ€™s theorem to evaluate
$$
\oint_C (x^2-y)\,dx+(x+y^2)\,dy,
$$
where $C$ is the positively oriented boundary of the unit square.  
**(7 marks)**

**Intuition:** Greenâ€™s theorem replaces the boundary integral by a double integral over the square.

#### Solution and marking scheme

1. Identify
   $$
   M=x^2-y,\qquad N=x+y^2.
   $$
   **[1 mark]**

2. Greenâ€™s theorem:
   $$
   \oint_C M\,dx+N\,dy
   =\iint_R\left(N_x-M_y\right)dA.
   $$
   **[1 mark]**

3. Compute
   $$
   N_x=1.
   $$
   **[1 mark]**

4. Compute
   $$
   M_y=-1.
   $$
   **[1 mark]**

5. Thus,
   $$
   N_x-M_y=1-(-1)=2.
   $$
   **[1 mark]**

6. For $0\le x,y\le1$:
   $$
   \iint_R2\,dA
   =2\int_0^1\int_0^1dy\,dx.
   $$
   **[1 mark]**

7. Therefore,
   $$
   \boxed{\oint_C M\,dx+N\,dy=2}.
   $$
   **[1 mark]**

---

### Q4(c) Using Stokesâ€™ theorem, evaluate
$$
\oint_C(-y\,dx+x\,dy),
$$
where $C$ is the counterclockwise boundary of
$$
0\le x\le2,\qquad0\le y\le1
$$
in the $xy$-plane.  
**(7 marks)**

**Intuition:** Treat the integrand as $\mathbf F\cdot d\mathbf r$ and replace the line integral by the flux of $\nabla\times\mathbf F$.

#### Solution and marking scheme

1. Take
   $$
   \mathbf F=-y\,\mathbf i+x\,\mathbf j.
   $$
   **[1 mark]**

2. Stokesâ€™ theorem gives
   $$
   \oint_C\mathbf F\cdot d\mathbf r
   =\iint_S(\nabla\times\mathbf F)\cdot\widehat{\mathbf n}\,dS.
   $$
   **[1 mark]**

3. Compute:
   $$
   \nabla\times\mathbf F
   =
   \begin{vmatrix}
   \mathbf i&\mathbf j&\mathbf k\\
   \partial_x&\partial_y&\partial_z\\
   -y&x&0
   \end{vmatrix}.
   $$
   **[1 mark]**

4. Therefore,
   $$
   \nabla\times\mathbf F=2\mathbf k.
   $$
   **[1 mark]**

5. For counterclockwise orientation,
   $$
   \widehat{\mathbf n}=\mathbf k.
   $$
   Hence the integrand is $2$.
   **[1 mark]**

6. The rectangle has area $2\times1=2$.
   **[1 mark]**

7. Consequently,
   $$
   \boxed{\oint_C(-y\,dx+x\,dy)=2(2)=4}.
   $$
   **[1 mark]**

### Module 2 formula glossary

- **Gradient:** $\nabla\phi$; points in the direction of maximum increase.
- **Directional derivative:** $D_{\widehat{\mathbf a}}\phi=\nabla\phi\cdot\widehat{\mathbf a}$.
- **Divergence:** $\operatorname{div}\mathbf F=\nabla\cdot\mathbf F$.
- **Curl:** $\operatorname{curl}\mathbf F=\nabla\times\mathbf F$.
- **Solenoidal:** $\nabla\cdot\mathbf F=0$.
- **Irrotational:** $\nabla\times\mathbf F=\mathbf0$.
- **Greenâ€™s theorem:**
  $$
  \oint_C M\,dx+N\,dy=\iint_R(N_x-M_y)\,dA.
  $$
- **Stokesâ€™ theorem:**
  $$
  \oint_C\mathbf F\cdot d\mathbf r
  =\iint_S(\nabla\times\mathbf F)\cdot\widehat{\mathbf n}\,dS.
  $$

---

# Module 3 â€” Partial Differential Equations

## Q5

### Q5(a) Form the PDE by eliminating the arbitrary function from
$$
z=f(x+2y).
\tag{6 marks}
$$

**Intuition:** Differentiate with respect to both independent variables and eliminate $f'$.

#### Solution and marking scheme

1. Let
   $$
   u=x+2y,\qquad z=f(u).
   $$
   **[1 mark]**

2. Put
   $$
   p=\frac{\partial z}{\partial x},\qquad
   q=\frac{\partial z}{\partial y}.
   $$
   **[1 mark]**

3. Differentiate with respect to $x$:
   $$
   p=f'(u)\frac{\partial u}{\partial x}=f'(u).
   $$
   **[1 mark]**

4. Differentiate with respect to $y$:
   $$
   q=f'(u)\frac{\partial u}{\partial y}=2f'(u).
   $$
   **[1 mark]**

5. Since $p=f'(u)$,
   $$
   q=2p.
   $$
   **[1 mark]**

6. Therefore, the required PDE is
   $$
   \boxed{q-2p=0}
   $$
   or
   $$
   \boxed{\frac{\partial z}{\partial y}
   -2\frac{\partial z}{\partial x}=0}.
   $$
   **[1 mark]**

---

### Q5(b) Solve
$$
\frac{\partial^2z}{\partial x^2}=6xy,
$$
given
$$
\frac{\partial z}{\partial x}=y\quad\text{at }x=0,
\qquad
z=y^2\quad\text{at }x=0.
\tag{7 marks}
$$

**Intuition:** Integrate twice with respect to $x$. The â€œconstantsâ€ of integration may be functions of $y$.

#### Solution and marking scheme

1. Integrate once with respect to $x$:
   $$
   z_x=3x^2y+A(y).
   $$
   **[1 mark]**

2. At $x=0$, $z_x=y$. Therefore,
   $$
   A(y)=y.
   $$
   **[1 mark]**

3. Hence,
   $$
   z_x=3x^2y+y.
   $$
   **[1 mark]**

4. Integrate again:
   $$
   z=x^3y+xy+B(y).
   $$
   **[1 mark]**

5. At $x=0$, $z=y^2$. Hence,
   $$
   B(y)=y^2.
   $$
   **[1 mark]**

6. Therefore,
   $$
   z=x^3y+xy+y^2.
   $$
   **[1 mark]**

7. Check:
   $$
   z_{xx}=6xy.
   $$
   Thus,
   $$
   \boxed{z=x^3y+xy+y^2}.
   $$
   **[1 mark]**

---

### Q5(c) Derive the one-dimensional heat equation.  
**(7 marks)**

**Intuition:** Equate the net heat entering a small rod element to the rate of increase of thermal energy within it.

#### Solution and marking scheme

1. Consider a uniform rod with cross-sectional area $A$, density $\rho$, specific heat $c$, and temperature $u(x,t)$.
   **[1 mark]**

2. By Fourierâ€™s law, heat flow rate in the positive $x$-direction is
   $$
   -KA\frac{\partial u}{\partial x},
   $$
   where $K$ is thermal conductivity.
   **[1 mark]**

3. Heat entering at $x$ during time $dt$ is
   $$
   -KA\,u_x(x,t)\,dt.
   $$
   **[1 mark]**

4. Heat leaving at $x+dx$ is
   $$
   -KA\left[u_x+\frac{\partial u_x}{\partial x}dx\right]dt.
   $$
   **[1 mark]**

5. Therefore, net heat gained is
   $$
   KA\,u_{xx}\,dx\,dt.
   $$
   **[1 mark]**

6. Increase in internal thermal energy is
   $$
   \rho cA\,dx\,u_t\,dt.
   $$
   Equating heat gained and energy increase:
   $$
   KA\,u_{xx}\,dx\,dt=\rho cA\,dx\,u_t\,dt.
   $$
   **[1 mark]**

7. Therefore,
   $$
   \boxed{\frac{\partial u}{\partial t}
   =\alpha^2\frac{\partial^2u}{\partial x^2}},
   \qquad
   \boxed{\alpha^2=\frac{K}{\rho c}}.
   $$
   **[1 mark]**

---

## OR

## Q6

### Q6(a) Form the PDE by eliminating $a$ and $b$ from
$$
z=(x-a)^2+(y-b)^2.
\tag{6 marks}
$$

**Intuition:** Differentiate once with respect to $x$ and $y$, solve for the shifted coordinates, and substitute into the original equation.

#### Solution and marking scheme

1. Put
   $$
   p=z_x,\qquad q=z_y.
   $$
   **[1 mark]**

2. Differentiate with respect to $x$:
   $$
   p=2(x-a).
   $$
   **[1 mark]**

3. Differentiate with respect to $y$:
   $$
   q=2(y-b).
   $$
   **[1 mark]**

4. Hence,
   $$
   x-a=\frac p2,\qquad y-b=\frac q2.
   $$
   **[1 mark]**

5. Substitute into the original relation:
   $$
   z=\frac{p^2}{4}+\frac{q^2}{4}.
   $$
   **[1 mark]**

6. Therefore,
   $$
   \boxed{p^2+q^2=4z}.
   $$
   **[1 mark]**

---

### Q6(b) Solve Lagrangeâ€™s PDE
$$
(y-z)p+(z-x)q=x-y.
\tag{7 marks}
$$

**Intuition:** Use the auxiliary equations and find two independent first integrals.

#### Solution and marking scheme

1. The auxiliary equations are
   $$
   \frac{dx}{y-z}
   =\frac{dy}{z-x}
   =\frac{dz}{x-y}.
   $$
   **[1 mark]**

2. Choose multipliers $(1,1,1)$. Since
   $$
   (y-z)+(z-x)+(x-y)=0,
   $$
   we obtain
   $$
   dx+dy+dz=0.
   $$
   **[1 mark]**

3. Integrating:
   $$
   x+y+z=C_1.
   $$
   **[1 mark]**

4. Choose multipliers $(x,y,z)$. Then
   $$
   x(y-z)+y(z-x)+z(x-y)=0.
   $$
   **[1 mark]**

5. Hence,
   $$
   x\,dx+y\,dy+z\,dz=0.
   $$
   **[1 mark]**

6. Integrating:
   $$
   x^2+y^2+z^2=C_2.
   $$
   **[1 mark]**

7. Therefore, the complete solution is
   $$
   \boxed{
   F\left(x+y+z,\ x^2+y^2+z^2\right)=0
   },
   $$
   where $F$ is arbitrary.
   **[1 mark]**

---

### Q6(c) Solve
$$
\frac{\partial^2z}{\partial y^2}=4z,
$$
given that at $y=0$,
$$
z=e^x,\qquad \frac{\partial z}{\partial y}=0.
\tag{7 marks}
$$

**Intuition:** Treat $x$ as a parameter and solve the equation as an ordinary differential equation in $y$.

#### Solution and marking scheme

1. Write the equation as
   $$
   z_{yy}-4z=0.
   $$
   **[1 mark]**

2. The auxiliary equation is
   $$
   m^2-4=0.
   $$
   **[1 mark]**

3. Thus,
   $$
   m=\pm2.
   $$
   **[1 mark]**

4. The general solution is
   $$
   z=A(x)e^{2y}+B(x)e^{-2y}.
   $$
   **[1 mark]**

5. At $y=0$:
   $$
   A(x)+B(x)=e^x.
   $$
   **[1 mark]**

6. Since
   $$
   z_y=2A(x)e^{2y}-2B(x)e^{-2y},
   $$
   the second condition gives $A(x)=B(x)=e^x/2$.
   **[1 mark]**

7. Therefore,
   $$
   z=\frac{e^x}{2}(e^{2y}+e^{-2y})
   =\boxed{e^x\cosh 2y}.
   $$
   **[1 mark]**

### Module 3 formula glossary

- **PDE:** Partial Differential Equation.
- $p=\dfrac{\partial z}{\partial x}$ and $q=\dfrac{\partial z}{\partial y}$.
- **Lagrange linear PDE:** $Pp+Qq=R$.
- **Auxiliary equations:** $\dfrac{dx}{P}=\dfrac{dy}{Q}=\dfrac{dz}{R}$.
- **One-dimensional heat equation:** $u_t=\alpha^2u_{xx}$.
- **Thermal diffusivity:** $\alpha^2=K/(\rho c)$.
- **ODE:** Ordinary Differential Equation.
- $\cosh u=\dfrac{e^u+e^{-u}}2$.

---

# Module 4 â€” Numerical Methods I

## Q7

### Q7(a) Apply four iterations of the Regula-Falsi method to approximate the positive root of
$$
x^2-2=0
$$
in $(1,2)$.  
**(6 marks)**

**Intuition:** Join the points at the ends of the sign-changing interval by a chord and use its $x$-intercept as the next approximation.

#### Solution and marking scheme

Let $f(x)=x^2-2$.

1. Since
   $$
   f(1)=-1,\qquad f(2)=2,
   $$
   a root lies in $(1,2)$.
   **[1 mark]**

2. Regula-Falsi formula:
   $$
   x=\frac{af(b)-bf(a)}{f(b)-f(a)}.
   $$
   **[1 mark]**

3. First iteration:
   $$
   x_1=\frac{1(2)-2(-1)}{2-(-1)}
   =\frac43=1.333333,
   $$
   with $f(x_1)=-0.222222$.
   **[1 mark]**

4. Second iteration:
   $$
   x_2=\frac{7}{5}=1.400000,
   \qquad f(x_2)=-0.04.
   $$
   **[1 mark]**

5. Further iterations:
   $$
   x_3=\frac{24}{17}=1.411765,
   \qquad
   x_4=\frac{41}{29}=1.413793.
   $$
   **[1 mark]**

6. Therefore, after four iterations,
   $$
   \boxed{x\approx1.4138}.
   $$
   The exact root is $\sqrt2\approx1.4142$, confirming the iteration.
   **[1 mark]**

---

### Q7(b) Using Newtonâ€™s forward interpolation formula, find $y$ at $x=1.5$:

| $x$ | 0 | 1 | 2 | 3 |
|---:|---:|---:|---:|---:|
| $y$ | 1 | 2 | 5 | 10 |

**(7 marks)**

**Intuition:** The $x$-values are equally spaced, so construct forward differences from the beginning of the table.

#### Solution and marking scheme

1. Here,
   $$
   x_0=0,\qquad h=1,\qquad
   u=\frac{x-x_0}{h}=1.5.
   $$
   **[1 mark]**

2. Difference table:

| $y$ | $\Delta y$ | $\Delta^2y$ | $\Delta^3y$ |
|---:|---:|---:|---:|
| 1 | 1 | 2 | 0 |
| 2 | 3 | 2 | |
| 5 | 5 | | |
| 10 | | | |

   **[2 marks]**

3. Newtonâ€™s forward formula is
   $$
   y=y_0+u\Delta y_0+
   \frac{u(u-1)}{2!}\Delta^2y_0+\cdots.
   $$
   **[1 mark]**

4. Substitute:
   $$
   y=1+(1.5)(1)
   +\frac{(1.5)(0.5)}2(2).
   $$
   **[1 mark]**

5. Thus,
   $$
   y=1+1.5+0.75.
   $$
   **[1 mark]**

6. Therefore,
   $$
   \boxed{y(1.5)=3.25}.
   $$
   **[1 mark]**

---

### Q7(c) Use Simpsonâ€™s $1/3$ rule with six equal subintervals to evaluate
$$
\int_0^1\frac{dx}{1+x^2}.
\tag{7 marks}
$$

**Intuition:** Simpsonâ€™s rule fits parabolas through consecutive groups of three ordinates.

#### Solution and marking scheme

1. Here,
   $$
   h=\frac{1-0}{6}=\frac16.
   $$
   **[1 mark]**

2. The function values are approximately:

| $x$ | 0 | $1/6$ | $2/6$ | $3/6$ | $4/6$ | $5/6$ | 1 |
|---:|---:|---:|---:|---:|---:|---:|---:|
| $f(x)$ | 1 | 0.972973 | 0.900000 | 0.800000 | 0.692308 | 0.590164 | 0.500000 |

   **[2 marks]**

3. Simpsonâ€™s $1/3$ formula:
   $$
   I\approx\frac h3
   [f_0+f_6+4(f_1+f_3+f_5)+2(f_2+f_4)].
   $$
   **[1 mark]**

4. Odd-index sum:
   $$
   f_1+f_3+f_5=2.363137.
   $$
   **[1 mark]**

5. Even-index sum:
   $$
   f_2+f_4=1.592308.
   $$
   **[1 mark]**

6. Therefore,
   $$
   I\approx\frac1{18}
   [1.5+4(2.363137)+2(1.592308)]
   =\boxed{0.785398\text{ approximately}}.
   $$
   **[1 mark]**

The exact value is $\tan^{-1}(1)=\pi/4\approx0.785398$.

---

## OR

## Q8

### Q8(a) Use the Newton-Raphson method to find $\sqrt3$, starting with $x_0=2$. Carry out three iterations.  
**(6 marks)**

**Intuition:** Apply the tangent-intercept iteration to $f(x)=x^2-3$.

#### Solution and marking scheme

1. Take
   $$
   f(x)=x^2-3,\qquad f'(x)=2x.
   $$
   **[1 mark]**

2. Newton-Raphson formula:
   $$
   x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}
   =\frac12\left(x_n+\frac3{x_n}\right).
   $$
   **[1 mark]**

3. First iteration:
   $$
   x_1=\frac12\left(2+\frac32\right)=1.75.
   $$
   **[1 mark]**

4. Second iteration:
   $$
   x_2=\frac12\left(1.75+\frac3{1.75}\right)
   =1.732142857.
   $$
   **[1 mark]**

5. Third iteration:
   $$
   x_3=\frac12\left(
   1.732142857+\frac3{1.732142857}
   \right)
   =1.732050810.
   $$
   **[1 mark]**

6. Therefore,
   $$
   \boxed{\sqrt3\approx1.7321}.
   $$
   **[1 mark]**

---

### Q8(b) Using Newtonâ€™s divided-difference formula, estimate $f(3)$:

| $x$ | 1 | 2 | 4 |
|---:|---:|---:|---:|
| $f(x)$ | 2 | 5 | 17 |

**(7 marks)**

**Intuition:** Divided differences work directly with unequal or equal intervals and build the interpolating polynomial incrementally.

#### Solution and marking scheme

1. First divided differences:
   $$
   f[1,2]=\frac{5-2}{2-1}=3.
   $$
   **[1 mark]**

2. Also,
   $$
   f[2,4]=\frac{17-5}{4-2}=6.
   $$
   **[1 mark]**

3. Second divided difference:
   $$
   f[1,2,4]=\frac{6-3}{4-1}=1.
   $$
   **[1 mark]**

4. Newtonâ€™s polynomial is
   $$
   P(x)=f(1)+(x-1)f[1,2]
   +(x-1)(x-2)f[1,2,4].
   $$
   **[1 mark]**

5. Thus,
   $$
   P(x)=2+3(x-1)+(x-1)(x-2).
   $$
   **[1 mark]**

6. At $x=3$:
   $$
   P(3)=2+3(2)+(2)(1).
   $$
   **[1 mark]**

7. Therefore,
   $$
   \boxed{f(3)=10}.
   $$
   **[1 mark]**

---

### Q8(c) Use Simpsonâ€™s $3/8$ rule with six equal subintervals to evaluate
$$
\int_0^1\frac{dx}{1+x}.
\tag{7 marks}
$$

**Intuition:** The composite $3/8$ rule assigns weight $2$ to interior indices divisible by $3$ and weight $3$ to the other interior indices.

#### Solution and marking scheme

1. Here,
   $$
   n=6,\qquad h=\frac16.
   $$
   **[1 mark]**

2. Values:

| $x$ | 0 | $1/6$ | $2/6$ | $3/6$ | $4/6$ | $5/6$ | 1 |
|---:|---:|---:|---:|---:|---:|---:|---:|
| $f(x)$ | 1 | 0.857143 | 0.750000 | 0.666667 | 0.600000 | 0.545455 | 0.500000 |

   **[2 marks]**

3. Composite Simpsonâ€™s $3/8$ formula:
   $$
   I\approx\frac{3h}{8}
   [f_0+f_6+3(f_1+f_2+f_4+f_5)+2f_3].
   $$
   **[1 mark]**

4. The weight-$3$ sum is
   $$
   f_1+f_2+f_4+f_5=2.752598.
   $$
   **[1 mark]**

5. Therefore,
   $$
   I\approx\frac1{16}
   [1.5+3(2.752598)+2(0.666667)].
   $$
   **[1 mark]**

6. Hence,
   $$
   \boxed{I\approx0.693195}.
   $$
   **[1 mark]**

The exact value is $\log2\approx0.693147$.

### Module 4 formula glossary

- **Regula-Falsi:** Method of false position.
  $$
  x=\frac{af(b)-bf(a)}{f(b)-f(a)}.
  $$
- **Newton-Raphson method:**
  $$
  x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}.
  $$
- **Newton forward interpolation:**
  $$
  y=y_0+u\Delta y_0+\frac{u(u-1)}{2!}\Delta^2y_0+\cdots.
  $$
- **Divided difference:** Interpolation difference suitable for unequal spacing.
- **Simpsonâ€™s $1/3$ rule:**
  $$
  I\approx\frac h3[y_0+y_n+4\Sigma y_{\rm odd}+2\Sigma y_{\rm even}].
  $$
- **Simpsonâ€™s $3/8$ rule:** Requires the number of subintervals to be divisible by $3$.

---

# Module 5 â€” Numerical Methods II

## Q9

### Q9(a) Using Taylorâ€™s series up to the fourth-degree term, find $y(0.1)$ if
$$
\frac{dy}{dx}=x+y,\qquad y(0)=1.
\tag{6 marks}
$$

**Intuition:** Obtain successive derivatives from the differential equation and substitute them into Taylorâ€™s expansion.

#### Solution and marking scheme

1. Taylorâ€™s formula:
   $$
   y(x+h)=y+hy'
   +\frac{h^2}{2!}y''
   +\frac{h^3}{3!}y'''
   +\frac{h^4}{4!}y''''.
   $$
   **[1 mark]**

2. At $(0,1)$:
   $$
   y'=x+y=1.
   $$
   **[1 mark]**

3. Differentiate:
   $$
   y''=1+y'=2.
   $$
   **[1 mark]**

4. Further,
   $$
   y'''=y''=2,\qquad y''''=y'''=2.
   $$
   **[1 mark]**

5. With $h=0.1$:
   $$
   y(0.1)\approx
   1+0.1+\frac{2(0.1)^2}{2}
   +\frac{2(0.1)^3}{6}
   +\frac{2(0.1)^4}{24}.
   $$
   **[1 mark]**

6. Therefore,
   $$
   \boxed{y(0.1)\approx1.110342}.
   $$
   **[1 mark]**

---

### Q9(b) Using the fourth-order Runge-Kutta method, find $y(0.1)$ for
$$
\frac{dy}{dx}=x+y,\qquad y(0)=1,
$$
taking $h=0.1$.  
**(7 marks)**

**Intuition:** RK4 estimates the weighted average slope using four slope calculations.

#### Solution and marking scheme

Using the increment convention $k_i=h f(\cdot)$:

1. Formula:
   $$
   y_1=y_0+\frac{k_1+2k_2+2k_3+k_4}{6}.
   $$
   **[1 mark]**

2. First increment:
   $$
   k_1=0.1f(0,1)=0.1.
   $$
   **[1 mark]**

3. Second increment:
   $$
   k_2=0.1f(0.05,1.05)
   =0.1(1.10)=0.11.
   $$
   **[1 mark]**

4. Third increment:
   $$
   k_3=0.1f(0.05,1.055)
   =0.1(1.105)=0.1105.
   $$
   **[1 mark]**

5. Fourth increment:
   $$
   k_4=0.1f(0.1,1.1105)
   =0.1(1.2105)=0.12105.
   $$
   **[1 mark]**

6. Hence,
   $$
   y_1=1+
   \frac{0.1+2(0.11)+2(0.1105)+0.12105}{6}.
   $$
   **[1 mark]**

7. Therefore,
   $$
   \boxed{y(0.1)\approx1.110342}.
   $$
   **[1 mark]**

---

### Q9(c) Given
$$
\frac{dy}{dx}=x
$$
and
$$
y(0)=1,\quad y(0.1)=1.005,\quad
y(0.2)=1.020,\quad y(0.3)=1.045,
$$
use Milneâ€™s predictor-corrector method to find $y(0.4)$.  
**(7 marks)**

**Intuition:** Use four known values to predict the next value and then improve it with the corrector formula.

#### Solution and marking scheme

1. Here,
   $$
   h=0.1,\qquad f_i=x_i.
   $$
   Thus,
   $$
   f_0=0,\ f_1=0.1,\ f_2=0.2,\ f_3=0.3.
   $$
   **[1 mark]**

2. Milneâ€™s predictor:
   $$
   y_4^{(p)}
   =y_0+\frac{4h}{3}(2f_1-f_2+2f_3).
   $$
   **[1 mark]**

3. Substitute:
   $$
   y_4^{(p)}
   =1+\frac{0.4}{3}
   [2(0.1)-0.2+2(0.3)].
   $$
   **[1 mark]**

4. Hence,
   $$
   y_4^{(p)}=1+\frac{0.4}{3}(0.6)=1.08.
   $$
   **[1 mark]**

5. At $x_4=0.4$:
   $$
   f_4^{(p)}=0.4.
   $$
   **[1 mark]**

6. Milneâ€™s corrector:
   $$
   y_4^{(c)}
   =y_2+\frac h3(f_2+4f_3+f_4^{(p)}).
   $$
   Thus,
   $$
   y_4^{(c)}
   =1.02+\frac{0.1}{3}(0.2+1.2+0.4).
   $$
   **[1 mark]**

7. Therefore,
   $$
   \boxed{y(0.4)=1.080}.
   $$
   **[1 mark]**

---

## OR

## Q10

### Q10(a) Use the modified Euler method to find $y(0.1)$ for
$$
\frac{dy}{dx}=x+y,\qquad y(0)=1,
$$
taking $h=0.1$ and three corrections.  
**(6 marks)**

**Intuition:** First predict using the starting slope, then repeatedly average the starting and ending slopes.

#### Solution and marking scheme

1. Predictor:
   $$
   y_1^{(0)}=y_0+hf(x_0,y_0)
   =1+0.1(1)=1.1.
   $$
   **[1 mark]**

2. Corrector formula:
   $$
   y_1^{(r+1)}
   =y_0+\frac h2
   [f(x_0,y_0)+f(x_1,y_1^{(r)})].
   $$
   **[1 mark]**

3. First correction:
   $$
   y_1^{(1)}
   =1+0.05[1+(0.1+1.1)]
   =1.11.
   $$
   **[1 mark]**

4. Second correction:
   $$
   y_1^{(2)}
   =1+0.05[1+(0.1+1.11)]
   =1.1105.
   $$
   **[1 mark]**

5. Third correction:
   $$
   y_1^{(3)}
   =1+0.05[1+(0.1+1.1105)]
   =1.110525.
   $$
   **[1 mark]**

6. Therefore,
   $$
   \boxed{y(0.1)\approx1.1105}.
   $$
   **[1 mark]**

---

### Q10(b) Use the fourth-order Runge-Kutta method to find $y(0.2)$ for
$$
\frac{dy}{dx}=2x+y,\qquad y(0)=1,
$$
taking $h=0.2$.  
**(7 marks)**

**Intuition:** Calculate four representative slope increments over the interval and combine them using RK4 weights.

#### Solution and marking scheme

1. Use
   $$
   y_1=y_0+\frac{k_1+2k_2+2k_3+k_4}{6}.
   $$
   **[1 mark]**

2. First increment:
   $$
   k_1=0.2f(0,1)=0.2.
   $$
   **[1 mark]**

3. Second increment:
   $$
   k_2=0.2f(0.1,1.1)
   =0.2(0.2+1.1)=0.26.
   $$
   **[1 mark]**

4. Third increment:
   $$
   k_3=0.2f(0.1,1.13)
   =0.2(0.2+1.13)=0.266.
   $$
   **[1 mark]**

5. Fourth increment:
   $$
   k_4=0.2f(0.2,1.266)
   =0.2(0.4+1.266)=0.3332.
   $$
   **[1 mark]**

6. Therefore,
   $$
   y_1=1+
   \frac{0.2+2(0.26)+2(0.266)+0.3332}{6}.
   $$
   **[1 mark]**

7. Hence,
   $$
   \boxed{y(0.2)=1.2642}.
   $$
   **[1 mark]**

---

### Q10(c) Given
$$
\frac{dy}{dx}=x+y
$$
and

| $x$ | 0 | 0.1 | 0.2 | 0.3 |
|---:|---:|---:|---:|---:|
| $y$ | 1.000000 | 1.110340 | 1.242806 | 1.399718 |

use Milneâ€™s predictor-corrector method to find $y(0.4)$. Use two corrections.  
**(7 marks)**

**Intuition:** Compute the derivative at each known point, predict $y_4$, and then apply the corrector twice.

#### Solution and marking scheme

1. Since $f=x+y$:
   $$
   f_0=1,\quad
   f_1=1.210340,\quad
   f_2=1.442806,\quad
   f_3=1.699718.
   $$
   **[1 mark]**

2. Predictor:
   $$
   y_4^{(p)}
   =y_0+\frac{4h}{3}
   (2f_1-f_2+2f_3).
   $$
   **[1 mark]**

3. Hence,
   $$
   y_4^{(p)}
   =1+\frac{0.4}{3}
   [2(1.210340)-1.442806+2(1.699718)]
   =1.583641.
   $$
   **[1 mark]**

4. Therefore,
   $$
   f_4^{(p)}=0.4+1.583641=1.983641.
   $$
   **[1 mark]**

5. First correction:
   $$
   y_4^{(1)}
   =y_2+\frac h3
   (f_2+4f_3+f_4^{(p)})
   =1.583649.
   $$
   **[1 mark]**

6. Update
   $$
   f_4^{(1)}=0.4+1.583649=1.983649,
   $$
   and correct again:
   $$
   y_4^{(2)}
   =1.242806+\frac{0.1}{3}
   [1.442806+4(1.699718)+1.983649]
   =1.583650.
   $$
   **[1 mark]**

7. Therefore,
   $$
   \boxed{y(0.4)\approx1.58365}.
   $$
   **[1 mark]**

### Module 5 formula glossary

- **ODE:** Ordinary Differential Equation.
- **Taylor method:**
  $$
  y(x+h)=y+hy'+\frac{h^2}{2!}y''+\cdots.
  $$
- **Modified Euler method:** Predictor followed by trapezoidal-slope corrections.
- **RK4:** Fourth-order Runge-Kutta method.
- **Milne predictor:**
  $$
  y_{n+1}^{(p)}
  =y_{n-3}+\frac{4h}{3}
  (2f_{n-2}-f_{n-1}+2f_n).
  $$
- **Milne corrector:**
  $$
  y_{n+1}^{(c)}
  =y_{n-1}+\frac h3
  (f_{n-1}+4f_n+f_{n+1}).
  $$
- In numerical ODE formulas, $f_i=f(x_i,y_i)$.

---

## Arithmetic-verification summary

- Every full question totals **$6+7+7=20$ marks**.
- Module 1 exact results were independently checked by direct integration.
- The Green and Stokes results agree with direct geometric interpretations.
- PDE solutions satisfy the original differential equations and supplied conditions.
- Simpsonâ€™s approximations agree with:
  $$
  \frac{\pi}{4}\approx0.785398,\qquad
  \log2\approx0.693147.
  $$
- Taylor and RK4 for $y'=x+y$, $y(0)=1$ both produce approximately
  $$
  y(0.1)=1.110342.
  $$
- The exact value for the final Milne problem is approximately $1.583649$, consistent with the computed result.
