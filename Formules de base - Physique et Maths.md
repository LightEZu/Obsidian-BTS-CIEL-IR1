---
tags: [maths, physique, formules, fiche]
aliases: [Formulaire, Aide-mémoire]
---

# Formules de base : Maths et Physique

---

# 📐 Mathématiques

## Identités remarquables

$$(a+b)^2 = a^2 + 2ab + b^2$$
$$(a-b)^2 = a^2 - 2ab + b^2$$
$$a^2 - b^2 = (a-b)(a+b)$$
$$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$
$$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$
$$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$$
$$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$$

## Puissances

$$a^m \times a^n = a^{m+n} \qquad \frac{a^m}{a^n} = a^{m-n}$$
$$(a^m)^n = a^{mn} \qquad (ab)^n = a^n b^n$$
$$a^{-n} = \frac{1}{a^n} \qquad a^0 = 1 \qquad a^{1/n} = \sqrt[n]{a}$$

## Racines

$$\sqrt{ab} = \sqrt{a}\sqrt{b} \qquad \sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}$$
$$\sqrt{a^2} = |a|$$

## Équation du second degré

Pour $ax^2 + bx + c = 0$ :

$$\Delta = b^2 - 4ac$$

- $\Delta > 0$ : deux racines $x_{1,2} = \dfrac{-b \pm \sqrt{\Delta}}{2a}$
- $\Delta = 0$ : une racine double $x_0 = \dfrac{-b}{2a}$
- $\Delta < 0$ : pas de racine réelle

Somme et produit des racines :
$$x_1 + x_2 = -\frac{b}{a} \qquad x_1 x_2 = \frac{c}{a}$$

Forme canonique :
$$ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 - \frac{\Delta}{4a^2}\cdot a$$

## Logarithmes et exponentielles

$$\ln(ab) = \ln a + \ln b \qquad \ln\frac{a}{b} = \ln a - \ln b$$
$$\ln(a^n) = n\ln a \qquad \ln(e^x) = x \qquad e^{\ln x} = x$$
$$\log_a x = \frac{\ln x}{\ln a} \qquad \log_{10}(10^x) = x$$
$$e^{a+b} = e^a e^b \qquad e^{-a} = \frac{1}{e^a}$$

## Trigonométrie

$$\cos^2\theta + \sin^2\theta = 1 \qquad \tan\theta = \frac{\sin\theta}{\cos\theta}$$

**Valeurs remarquables**

| $\theta$ | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ |
|---|---|---|---|---|---|
| $\sin\theta$ | $0$ | $\frac12$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ | $1$ |
| $\cos\theta$ | $1$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ | $0$ |
| $\tan\theta$ | $0$ | $\frac{\sqrt3}{3}$ | $1$ | $\sqrt3$ | ∄ |

**Addition**
$$\cos(a+b) = \cos a\cos b - \sin a\sin b$$
$$\sin(a+b) = \sin a\cos b + \cos a\sin b$$

**Duplication**
$$\cos 2a = \cos^2 a - \sin^2 a = 2\cos^2 a - 1 = 1 - 2\sin^2 a$$
$$\sin 2a = 2\sin a\cos a$$

**Triangle rectangle** (SOH-CAH-TOA)
$$\sin\theta = \frac{\text{opposé}}{\text{hypoténuse}} \quad \cos\theta = \frac{\text{adjacent}}{\text{hypoténuse}} \quad \tan\theta = \frac{\text{opposé}}{\text{adjacent}}$$

**Pythagore**
$$a^2 + b^2 = c^2$$

## Dérivées usuelles

| $f(x)$ | $f'(x)$ |
|---|---|
| $k$ (constante) | $0$ |
| $x^n$ | $n x^{n-1}$ |
| $\dfrac1x$ | $-\dfrac1{x^2}$ |
| $\sqrt x$ | $\dfrac{1}{2\sqrt x}$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $\dfrac1x$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $1 + \tan^2 x = \dfrac{1}{\cos^2 x}$ |

**Règles de dérivation**
$$(u+v)' = u' + v' \qquad (uv)' = u'v + uv'$$
$$\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2} \qquad (u\circ v)' = v' \times u'\circ v$$

## Primitives usuelles

$$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$$
$$\int \frac1x\,dx = \ln|x| + C \qquad \int e^x\,dx = e^x + C$$
$$\int \sin x\,dx = -\cos x + C \qquad \int \cos x\,dx = \sin x + C$$

**Intégration par parties**
$$\int u\,v'\,dx = uv - \int u'\,v\,dx$$

## Suites

**Arithmétique** (raison $r$) :
$$u_n = u_0 + nr \qquad S = \frac{(\text{nb de termes})(u_{\text{premier}} + u_{\text{dernier}})}{2}$$

**Géométrique** (raison $q$) :
$$u_n = u_0\, q^n \qquad \sum_{k=0}^{n} q^k = \frac{1 - q^{n+1}}{1 - q} \quad (q \neq 1)$$

## Géométrie : aires et volumes

| Figure | Formule |
|---|---|
| Carré | $A = c^2$ |
| Rectangle | $A = L \times l$ |
| Triangle | $A = \dfrac{b \times h}{2}$ |
| Disque | $A = \pi R^2$ |
| Périmètre du cercle | $P = 2\pi R$ |
| Trapèze | $A = \dfrac{(B+b)h}{2}$ |
| Sphère (volume) | $V = \dfrac43\pi R^3$ |
| Sphère (surface) | $S = 4\pi R^2$ |
| Cylindre | $V = \pi R^2 h$ |
| Cône | $V = \dfrac13\pi R^2 h$ |
| Pavé | $V = L \times l \times h$ |

## Probabilités et combinatoire

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
$$P(\bar A) = 1 - P(A) \qquad P(A|B) = \frac{P(A\cap B)}{P(B)}$$
$$n! = n(n-1)\cdots 1 \qquad \binom{n}{k} = \frac{n!}{k!(n-k)!}$$

**Binôme de Newton**
$$(a+b)^n = \sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k$$

**Statistiques**
$$\bar x = \frac{1}{n}\sum x_i \qquad \sigma^2 = \frac1n\sum (x_i - \bar x)^2$$

---

# ⚡ Physique

## Électricité

| Grandeur | Formule | Unité |
|---|---|---|
| Loi d'Ohm | $U = R\,I$ | V |
| Puissance | $P = U\,I = R\,I^2 = \dfrac{U^2}{R}$ | W |
| Énergie | $E = P\,t$ | J (ou Wh) |
| Charge | $Q = I\,t$ | C |
| Condensateur | $Q = C\,U$ | C |
| Énergie d'un condensateur | $E = \dfrac12 C U^2$ | J |

**Associations de résistances**
$$R_{\text{série}} = R_1 + R_2 + \dots \qquad \frac{1}{R_{\text{//}}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots$$

**Diviseur de tension**
$$U_2 = U \times \frac{R_2}{R_1 + R_2}$$

**Lois de Kirchhoff**
- Loi des nœuds : $\sum I_{\text{entrant}} = \sum I_{\text{sortant}}$
- Loi des mailles : $\sum U = 0$

**Circuit RC**
$$\tau = RC \qquad u_C(t) = U_0\left(1 - e^{-t/\tau}\right) \text{ (charge)}$$

**Alternatif**
$$U_{\text{eff}} = \frac{U_{\max}}{\sqrt2} \qquad f = \frac1T \qquad \omega = 2\pi f$$

## Mécanique

**Cinématique**
$$v = \frac{d}{t} \qquad a = \frac{\Delta v}{\Delta t}$$

MRU : $x = x_0 + vt$

MRUA :
$$v = v_0 + at$$
$$x = x_0 + v_0 t + \frac12 a t^2$$
$$v^2 - v_0^2 = 2a(x - x_0)$$

**Chute libre** ($g \approx 9{,}81\ \text{m/s}^2$)
$$v = gt \qquad h = \frac12 g t^2$$

**Dynamique**
$$\sum \vec F = m\vec a \quad \text{(2e loi de Newton)}$$
$$P = m g \quad \text{(poids)}$$
$$p = m v \quad \text{(quantité de mouvement)}$$
$$F_{\text{frottement}} = \mu N$$
$$F_{\text{ressort}} = -k x$$

**Gravitation**
$$F = G\frac{m_1 m_2}{r^2} \qquad G = 6{,}674\times10^{-11}\ \text{N·m}^2\text{/kg}^2$$

**Énergie et travail**
$$W = F\,d\cos\theta$$
$$E_c = \frac12 m v^2 \qquad E_{pp} = m g h \qquad E_{p,\text{ressort}} = \frac12 k x^2$$
$$P = \frac{W}{t} = F\,v$$
$$E_m = E_c + E_p$$

**Mouvement circulaire**
$$v = \omega R \qquad a_c = \frac{v^2}{R} = \omega^2 R \qquad T = \frac{2\pi}{\omega}$$

**Pression et fluides**
$$P = \frac{F}{S} \qquad P = P_0 + \rho g h$$
$$\text{Poussée d'Archimède : } F_A = \rho_{\text{fluide}}\, V\, g$$
$$\rho = \frac{m}{V}$$

## Thermodynamique

$$Q = m\,c\,\Delta T \qquad Q = m\,L$$
$$PV = nRT \qquad R = 8{,}314\ \text{J/(mol·K)}$$
$$T(\text{K}) = T(^\circ\text{C}) + 273{,}15$$
$$\Delta U = Q + W$$
$$\eta_{\text{Carnot}} = 1 - \frac{T_f}{T_c}$$

## Ondes et optique

$$v = \lambda f \qquad T = \frac1f$$
$$c = 3{,}00\times10^8\ \text{m/s}$$

**Lois de Snell-Descartes**
$$n_1 \sin i_1 = n_2 \sin i_2 \qquad n = \frac{c}{v}$$

**Lentilles minces**
$$\frac{1}{OA'} - \frac{1}{OA} = \frac{1}{f'} \qquad \gamma = \frac{\overline{A'B'}}{\overline{AB}} = \frac{\overline{OA'}}{\overline{OA}}$$

**Son** : $v_{\text{son}} \approx 340\ \text{m/s}$ dans l'air à 20 °C

**Niveau sonore**
$$L = 10\log\frac{I}{I_0} \qquad I_0 = 10^{-12}\ \text{W/m}^2$$

## Physique moderne et nucléaire

$$E = h\,\nu = \frac{hc}{\lambda} \qquad h = 6{,}626\times10^{-34}\ \text{J·s}$$
$$E = mc^2$$
$$N(t) = N_0\,e^{-\lambda t} \qquad t_{1/2} = \frac{\ln 2}{\lambda}$$

---

# 🔢 Constantes utiles

| Constante | Symbole | Valeur |
|---|---|---|
| Vitesse de la lumière | $c$ | $3{,}00\times10^8\ \text{m/s}$ |
| Accélération de la pesanteur | $g$ | $9{,}81\ \text{m/s}^2$ |
| Constante de gravitation | $G$ | $6{,}674\times10^{-11}$ |
| Constante de Planck | $h$ | $6{,}626\times10^{-34}\ \text{J·s}$ |
| Charge élémentaire | $e$ | $1{,}602\times10^{-19}\ \text{C}$ |
| Constante des gaz parfaits | $R$ | $8{,}314\ \text{J/(mol·K)}$ |
| Constante d'Avogadro | $N_A$ | $6{,}022\times10^{23}\ \text{mol}^{-1}$ |
| Constante de Boltzmann | $k_B$ | $1{,}381\times10^{-23}\ \text{J/K}$ |
| Masse de l'électron | $m_e$ | $9{,}109\times10^{-31}\ \text{kg}$ |

## Préfixes SI

| Préfixe | Symbole | Facteur |
|---|---|---|
| téra | T | $10^{12}$ |
| giga | G | $10^{9}$ |
| méga | M | $10^{6}$ |
| kilo | k | $10^{3}$ |
| milli | m | $10^{-3}$ |
| micro | µ | $10^{-6}$ |
| nano | n | $10^{-9}$ |
| pico | p | $10^{-12}$ |
