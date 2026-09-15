---
tags:
  - Maths
  - Fonctions
  - Cours
  - BTS
Date: 15/09/2026 16:55
Source: Lycée Diderot - Paul Léo
---

Pout tout $x$ dans $\mathbb{R}$, $f(x) =ax+b$ 
$a\in \mathbb{R}\text{ }b\in \mathbb{R}$ 
$f$ est alors représenté par la droite d'équation $y=ax+b$ 
On peut calculer $a$ et $b$ grâce a ces formules :

$$
\begin{align}
&a= \frac{f(v)-f(u)}{v-u} \\
&b= f(u)-a\times u
\end{align}
$$
On peut aussi trouver $a$ par représentation graphique :
```desmos-graph
left=-10; right=10;
top=10; bottom=-10;
---
y=3x+2|RED
(0,2)|POINT|BLUE|label:A(0;2)
(1,5)|POINT|PURPLE|label:B(1;5)
```

Pour trouver $a$ de manière graphique il va falloir compter les carreaux. 
Grace a deux point visible sans calcul nous allons les relier, un carreaux vaut 1.
On va prendre le point A et le point B. 
Prenons comme point de départ le point A, on va compter les carreaux horizontalement, si on va a gauche le résultat sera négatif si on va a droite le résultat sera positif. 
En l'occurrence nous allons a droite. On compte 1 carreaux a droite donc la distance vaut 1. 
On compte maintenant verticalement, si on descend le résultat sera négatif si on monte le résultat est positif. 
On compte 3 carreaux la distance vaut donc 3.
Pour trouver $a$ on doit diviser les deux valeurs.

$$\begin{align}
&a = \frac{\Delta y}{\Delta x} = \frac{\text{déplacement vertical}}{\text{déplacement horizontal}}\\
&a=\frac{3}{1}=3\\
&\text{la fonction est } f(x)=3x+2
\end{align}$$
On a bien trouvé $a$



Variations de $f$ : Les variations de $f$ dépendent de $a$ 
Si $a>0$ alors $f$ est strictement croissante,
Si $a<0$ alors $f$ est strictement décroissante, 
Si $a = 0$ alors $f$ est constante.

Tableau de Signe de $f$ :

$$
\begin{array}{c|ccccc}
x & -\infty & & -\frac{b}{a} & & +\infty \\
\hline
f(x) & & \text{signe de } -a & 0 & \text{signe de } a & 
\end{array}
$$

Exemple avec $f(x)=3x+2$ :
$$
\begin{array}{c|ccccc}
x & -\infty & & -\frac{2}{3} & & +\infty \\
\hline
3x + 2 & & - & 0 & + & 
\end{array}
$$

> [!quote] Source
> Lycée Diderot BTS CIEL IR - Document fait par Paul Léo
