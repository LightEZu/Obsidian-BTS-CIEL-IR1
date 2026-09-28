$$
\begin{array}{|cccccccc|r|}
\hline
\scriptstyle(-2^7) & \scriptstyle(2^6) & \scriptstyle(2^5) & \scriptstyle(2^4) & \scriptstyle(2^3) & \scriptstyle(2^2) & \scriptstyle(2^1) & \scriptstyle(2^0) & \\
B_7 & B_6 & B_5 & B_4 & B_3 & B_2 & B_1 & B_0 & C_2 \\
\text{(msb)} & & & & & & & \text{(lsb)} & \\
\hline
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & +0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & +1 \\
0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & +127 \\
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & -128 \\
1 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & -127 \\
1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & -1 \\
\hline
\end{array}
$$
Complémenter a 2 le nombre, revient a le complémenter a 1 et ajouter 1
Attention : Complémenter un nombre change le signe mais pas le poids
Exemple
$|-25|= +25 = (00011001)_{2}$
On inverse les Bits $(11100110)_{2}$
Puis on rajoute $1$ $(11100111)_{2}$ 
