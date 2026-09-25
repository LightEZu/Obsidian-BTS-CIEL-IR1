---
tags:
  - Info
  - Progra
  - Explication
  - BTS
Date: 25/09/2026 23:31
Source: Lycée Diderot - Paul Léo
---

> TP Génération aléatoire de mot de passe 1 — Programmation C++ Linux Lycée Diderot, BTS CIEL 1

## Le code complet

```cpp
#include <iostream>
#include <string>
using namespace std;

int main ()
{
    string alphabet;
    int nbCaracteres;
    string motDePasse;

    cout << "Bienvenue dans le generateur de mot de passe!" << endl;
    cout << "Saisissez l'alphabet a utiliser : ";
    cin >> alphabet;

    cout << "Saisissez le nombre de caracteres du mot de passe : ";
    cin >> nbCaracteres;

    if (nbCaracteres > 0)
    {
        for (int i = 0; i < nbCaracteres; i++)
        {
            // le % donne le reste de la division, ca permet de revenir au debut de l'alphabet
            motDePasse += alphabet[i % alphabet.size()];
        }
        cout << "Mot de passe genere : " << motDePasse << endl;
    }
    else
    {
        cout << "Erreur : le nombre de caracteres doit etre positif!" << endl;
    }

    return 0;
}
```

---

## Explication détaillée

### Les directives de compilation

```cpp
#include <iostream>
```

Directive de compilation (repérée par le `#`). Elle dit au compilateur d'inclure la librairie `iostream`, qui contient `cout` (afficher) et `cin` (lire au clavier).

```cpp
#include <string>
```

Même principe, mais pour pouvoir utiliser le type `string` (les chaînes de caractères).

```cpp
using namespace std;
```

Permet d'écrire `cout` au lieu de `std::cout`. Sans cette ligne, il faudrait préfixer `std::` devant chaque élément de la librairie standard.

---

### La fonction main

```cpp
int main ()
{
```

Fonction principale, **obligatoire** dans tout programme C++. C'est le point de départ de l'exécution. `int` signifie que cette fonction renvoie un nombre entier à la fin (voir `return 0;`).

---

### Déclaration des variables

```cpp
string alphabet;
int nbCaracteres;
string motDePasse;
```

|Variable|Type|Rôle|
|---|---|---|
|`alphabet`|`string`|les caractères autorisés, saisis par l'utilisateur|
|`nbCaracteres`|`int`|longueur du mot de passe voulue|
|`motDePasse`|`string`|le mot de passe construit (vide au départ)|

> Rappel de syntaxe : la déclaration d'une variable se fait toujours `type nomDeLaVariable;`

---

### Dialogue avec l'utilisateur

```cpp
cout << "Bienvenue dans le generateur de mot de passe!" << endl;
```

`cout` affiche du texte à l'écran. L'opérateur `<<` "envoie" ce qui suit vers la sortie. `endl` ajoute un retour à la ligne.

```cpp
cout << "Saisissez l'alphabet a utiliser : ";
cin >> alphabet;
```

On affiche la question (sans `endl`, pour rester sur la même ligne que la réponse), puis `cin` lit ce que l'utilisateur tape au clavier et le stocke dans `alphabet`. Le programme attend que l'utilisateur tape quelque chose et appuie sur Entrée.

```cpp
cout << "Saisissez le nombre de caracteres du mot de passe : ";
cin >> nbCaracteres;
```

Même principe pour lire le nombre de caractères voulu.

---

### Le test conditionnel `if / else`

```cpp
if (nbCaracteres > 0)
{
    ...
}
else
{
    ...
}
```

On vérifie si `nbCaracteres` est strictement positif :

- **si vrai** → on génère et affiche le mot de passe
- **sinon** (négatif ou nul) → on affiche un message d'erreur

Un seul des deux blocs est exécuté, jamais les deux.

---

### La boucle `for`

```cpp
for (int i = 0; i < nbCaracteres; i++)
{
    ...
}
```

Trois parties séparées par des `;` :

1. `int i = 0` → condition de départ : on crée un compteur `i` qui commence à 0
2. `i < nbCaracteres` → condition de sortie : la boucle continue tant que c'est vrai
3. `i++` → le pas : à chaque tour, on ajoute 1 à `i`

Exemple avec `nbCaracteres = 5` : la boucle s'exécute pour `i` = 0, 1, 2, 3, 4 (5 fois au total).

---

### La ligne clé : construire le mot de passe

```cpp
motDePasse += alphabet[i % alphabet.size()];
```

Décomposition de l'intérieur vers l'extérieur :

1. **`alphabet.size()`** → donne la longueur de la chaîne `alphabet` (ex : 3 si `alphabet = "abc"`)
2. **`i % alphabet.size()`** → l'opérateur `%` (modulo) donne le **reste de la division** de `i` par la taille de l'alphabet. Ça produit une suite qui boucle : `0, 1, 2, 0, 1, 2, 0...`
3. **`alphabet[...]`** → accède au caractère de `alphabet` à cette position (comme `chaine[0]`, `chaine[1]`...)
4. **`motDePasse += ...`** → ajoute ce caractère **à la fin** de `motDePasse` (l'opérateur `+=` concatène)

#### Exemple pas à pas — alphabet `"abc"`, 5 caractères demandés

|i|i % 3|alphabet[i % 3]|motDePasse|
|---|---|---|---|
|0|0|a|`a`|
|1|1|b|`ab`|
|2|2|c|`abc`|
|3|0|a|`abca`|
|4|1|b|`abcab`|

Résultat final : **`abcab`** — cohérent avec l'exemple donné dans la fiche de tests du TP.

> Le `%` sert à **revenir au début** de l'alphabet une fois qu'on l'a parcouru en entier.

---

### Fin du programme

```cpp
return 0;
```

Termine la fonction `main` en renvoyant `0`, ce qui signifie conventionnellement que le programme s'est terminé **sans erreur**.

---

## Points de vigilance

- `cin >> alphabet` s'arrête au premier espace : un alphabet contenant un espace serait tronqué.
- Le type choisi pour `nbCaracteres` est `int` (et non `unsigned short` comme suggéré par le cours) car un `unsigned` ne peut pas être négatif — nécessaire pour détecter et gérer un nombre négatif (test n°8 de la fiche de tests).
- Si `alphabet` est vide, `alphabet.size()` vaut 0 et l'opération `i % alphabet.size()` provoquerait une erreur (division par zéro). Piste d'amélioration possible : ajouter `&& alphabet.size() > 0` dans la condition du `if`.

---

## Compiler et exécuter (Linux / WSL)

```bash
g++ genemdp.cpp -o genemdp
./genemdp
```

## Lien avec la fiche de tests du TP

|Test|Entrée|Attendu|
|---|---|---|
|6|alphabet `abc123!@#`, nb `6`|mot de passe généré et affiché|
|7|alphabet `abc`, nb `5`|`abcab`|
|8|nb négatif|message d'erreur _(ou rien selon la version de la fiche)_|

---
> [!quote] Source
> Lycée Diderot BTS CIEL IR - Document fait par Paul Léo

