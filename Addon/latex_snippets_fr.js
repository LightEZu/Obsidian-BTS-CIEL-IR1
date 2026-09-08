export default [
    // Mode mathématiques
	{trigger: "mk", replacement: "$$0$", options: "tA"},
    {trigger: "dm", replacement: "$$\n$0\n$$", options: "tAw"},
	{trigger: /(\S\s*)dm/, replacement: "[[0]]\n$$\n$0\n$$", options: "tAw", priority: 1},

	{trigger: /([^\\])beg/, replacement: "[[0]]\\begin{$0}\n$1\n\\end{$0}", options: "MA"},
	{trigger: /([^\\])beg/, replacement: "[[0]]\\begin{$0} $1 \\end{$0}", options: "nA"},

    // Tirets
	// {trigger: "--", replacement: "–", options: "tA"},
	// {trigger: "–-", replacement: "—", options: "tA"},
	// {trigger: "—-", replacement: "---", options: "tA"},

    // Greek letters
	{trigger: "@a", replacement: "\\alpha", options: "mA"},
	{trigger: "@b", replacement: "\\beta", options: "mA"},
	{trigger: "@g", replacement: "\\gamma", options: "mA"},
	{trigger: "@G", replacement: "\\Gamma", options: "mA"},
	{trigger: "@d", replacement: "\\delta", options: "mA"},
	{trigger: "@D", replacement: "\\Delta", options: "mA"},
	{trigger: "@e", replacement: "\\epsilon", options: "mA"},
	{trigger: ":e", replacement: "\\varepsilon", options: "mA"},
	{trigger: "@z", replacement: "\\zeta", options: "mA"},
	{trigger: "@t", replacement: "\\theta", options: "mA"},
	{trigger: "@T", replacement: "\\Theta", options: "mA"},
	{trigger: ":t", replacement: "\\vartheta", options: "mA"},
	{trigger: "@i", replacement: "\\iota", options: "mA"},
	{trigger: "@k", replacement: "\\kappa", options: "mA"},
	{trigger: "@l", replacement: "\\lambda", options: "mA"},
	{trigger: "@L", replacement: "\\Lambda", options: "mA"},
	{trigger: "@s", replacement: "\\sigma", options: "mA"},
	{trigger: "@S", replacement: "\\Sigma", options: "mA"},
	{trigger: "@u", replacement: "\\upsilon", options: "mA"},
	{trigger: "@U", replacement: "\\Upsilon", options: "mA"},
	{trigger: "@o", replacement: "\\omega", options: "mA"},
	{trigger: "@O", replacement: "\\Omega", options: "mA"},
	{trigger: "ome", replacement: "\\omega", options: "mA"},
	{trigger: "Ome", replacement: "\\Omega", options: "mA"},

    // Text environment
    {trigger: "text", replacement: "\\text{$0}$1", options: "mA"},
    {trigger: "\"", replacement: "\\text{$0}$1", options: "mA"},

    // Opérations de base
    {trigger: "carr", replacement: "^{2}", options: "mA"},
	{trigger: "cub", replacement: "^{3}", options: "mA"},
	{trigger: "rd", replacement: "^{$0}$1", options: "mA"},
	{trigger: "_", replacement: "_{$0}$1", options: "mA"},
	{trigger: "sts", replacement: "_\\text{$0}", options: "mA"},
	{trigger: "rac", replacement: "\\sqrt{ $0 }$1", options: "mA"},
	{trigger: "//", replacement: "\\frac{$0}{$1}$2", options: "mA"},
	{trigger: /\bee/, replacement: "e^{ $0 }$1", options: "mA"},
    {trigger: "inv", replacement: "^{-1}", options: "mA"},

    {trigger: /([^\\])(exp|log|ln)/, replacement: "[[0]]\\[[1]]", options: "rmA"},
    {trigger: "conj", replacement: "^{*}", options: "mA"},
    {trigger: "Re", replacement: "\\mathrm{Re}", options: "mA"},
	{trigger: "Im", replacement: "\\mathrm{Im}", options: "mA"},
    {trigger: "bf", replacement: "\\mathbf{$0}", options: "mA"},
	{trigger: "rm", replacement: "\\mathrm{$0}$1", options: "mA"},

    // Algèbre linéaire
    {trigger: /([^\\])(det)/, replacement: "[[0]]\\[[1]]", options: "rmA"},
    {trigger: "trace", replacement: "\\mathrm{Tr}", options: "mA"},

    // Opérations supplémentaires
	{trigger: "([a-zA-Z])hat", replacement: "\\hat{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])bar", replacement: "\\bar{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])dot", replacement: "\\dot{[[0]]}", options: "rmA", priority: -1},
	{trigger: "([a-zA-Z])ddot", replacement: "\\ddot{[[0]]}", options: "rmA", priority: 1},
	{trigger: "([a-zA-Z])tilde", replacement: "\\tilde{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])und", replacement: "\\underline{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])vec", replacement: "\\vec{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z]),\\.", replacement: "\\mathbf{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])\\.,", replacement: "\\mathbf{[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}),\\.", replacement: "\\boldsymbol{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK})\\.,", replacement: "\\boldsymbol{\\[[0]]}", options: "rmA"},

	{trigger: "hat", replacement: "\\hat{$0}$1", options: "mA"},
    {trigger: "bar", replacement: "\\bar{$0}$1", options: "mA"},
	{trigger: "dot", replacement: "\\dot{$0}$1", options: "mA", priority: -1},
	{trigger: "ddot", replacement: "\\ddot{$0}$1", options: "mA"},
	{trigger: "cdot", replacement: "\\cdot", options: "mA"},
	{trigger: "tilde", replacement: "\\tilde{$0}$1", options: "mA"},
	{trigger: "und", replacement: "\\underline{$0}$1", options: "mA"},
	{trigger: "vec", replacement: "\\vec{$0}$1", options: "mA"},
    {
        trigger: "pmod",
        replacement: "\\pmod{${0:n}}$1",
        options: "mA",
        description: "Modulo entre parenthèses (\\pmod{n})",
    },

    // Indice automatique après une lettre
	{
	  trigger: "(\\\\${GREEK}|[A-Za-z])(\\d)",
	  replacement: "[[0]]_{[[1]]}",
	  options: "rmA",
	  priority: -1,
	  excludedMacros: ["pu", "ce"]
	},
	{
	  trigger: "(\\\\${GREEK}|[A-Za-z])_{(\\d+)}(\\d)",
	  replacement: "[[0]]_{[[1]][[2]]}",
	  options: "rmA",
	  priority: -1,
	},
	{
	  trigger: "\\\\(${ACCENT})\\{(\\\\${GREEK}|[A-Za-z])\\}(\\d)",
	  replacement: "\\[[0]]{[[1]]}_{[[2]]}",
	  options: "rmA",
	  priority: -1,
	},
	{
	  trigger: "\\\\(${ACCENT})\\{(\\\\${GREEK}|[A-Za-z])\\}_\\{(\\d+)\\}(\\d)",
	  replacement: "\\[[0]]{[[1]]}_{[[2]][[3]]}",
	  options: "rmA",
	  priority: -1,
	},
	{
	  trigger: "\\\\(${ACCENT})\\{\\\\(${ACCENT})\\{(\\\\${GREEK}|[A-Za-z])\\}\\}(\\d)",
	  replacement: "\\[[0]]{\\[[1]]{[[2]]}}_{[[3]]}",
	  options: "rmA",
	  priority: -1,
	},
	{
	  trigger: "\\\\(${ACCENT})\\{\\\\(${ACCENT})\\{(\\\\${GREEK}|[A-Za-z])\\}\\}_\\{(\\d+)\\}(\\d)",
	  replacement: "\\[[0]]{\\[[1]]{[[2]]}}_{[[3]][[4]]}",
	  options: "rmA",
	  priority: -1,
	},

    {trigger: "xnn", replacement: "x_{n}", options: "mA"},
	{trigger: "\\xii", replacement: "x_{i}", options: "mA", priority: 1},
	{trigger: "xjj", replacement: "x_{j}", options: "mA"},
	{trigger: "xp1", replacement: "x_{n+1}", options: "mA"},
	{trigger: "ynn", replacement: "y_{n}", options: "mA"},
	{trigger: "yii", replacement: "y_{i}", options: "mA"},
	{trigger: "yjj", replacement: "y_{j}", options: "mA"},

    // Symboles
    {trigger: "ooo", replacement: "\\infty", options: "mA"},
	{trigger: "som", replacement: "\\sum", options: "mA"},
	{trigger: "prod", replacement: "\\prod", options: "mA"},
	{trigger: "\\sum", replacement: "\\sum_{${0:i}=${1:1}}^{${2:N}} $3", options: "m"},
	{trigger: "\\prod", replacement: "\\prod_{${0:i}=${1:1}}^{${2:N}} $3", options: "m"},
    {trigger: "lim", replacement: "\\lim_{ ${0:n} \\to ${1:\\infty} } $2", options: "mA"},
    {trigger: "+-", replacement: "\\pm", options: "mA"},
	{trigger: "-+", replacement: "\\mp", options: "mA"},
    {trigger: "...", replacement: "\\dots", options: "mA"},
    {trigger: "nabl", replacement: "\\nabla", options: "mA"},
	{trigger: "xx", replacement: "\\times", options: "mA"},
    {trigger: "**", replacement: "\\cdot", options: "mA"},
    {trigger: "para", replacement: "\\parallel", options: "mA"},
	{trigger: "deg", replacement: "\\degree", options: "mA"},

	{trigger: "===", replacement: "\\equiv", options: "mA"},
    {trigger: "!=", replacement: "\\neq", options: "mA"},
	{trigger: ">=", replacement: "\\geq", options: "mA"},
	{trigger: "<=", replacement: "\\leq", options: "mA"},
	{trigger: ">>", replacement: "\\gg", options: "mA"},
	{trigger: "<<", replacement: "\\ll", options: "mA"},
	{trigger: "simm", replacement: "\\sim", options: "mA"},
	{trigger: "sim=", replacement: "\\simeq", options: "mA"},
    {trigger: "prop", replacement: "\\propto", options: "mA"},

    {trigger: "<->", replacement: "\\leftrightarrow ", options: "mA"},
	{trigger: "->", replacement: "\\to", options: "mA", excludedMacros: ["ce"]},
	{trigger: "!>", replacement: "\\mapsto", options: "mA"},
    {trigger: "=>", replacement: "\\implies", options: "mA"},
	{trigger: "=<", replacement: "\\impliedby", options: "mA"},

	{trigger: "inter", replacement: "\\cap", options: "mA"},
	{trigger: "union", replacement: "\\cup", options: "mA"},
	{trigger: "app", replacement: "\\in", options: "mA"},
	{trigger: "napp", replacement: "\\not\\in", options: "mA"},
    {trigger: "\\\\\\", replacement: "\\setminus", options: "mA"},
    {trigger: "inclus=", replacement: "\\subseteq", options: "mA"},
    {trigger: "contient=", replacement: "\\supseteq", options: "mA"},
	{trigger: "ensv", replacement: "\\emptyset", options: "mA"},
	{trigger: "ens", replacement: "\\{ $0 \\}$1", options: "mA"},
	{trigger: "e\\xi sts", replacement: "\\exists", options: "mA", priority: 1},

	{trigger: "LL", replacement: "\\mathcal{L}", options: "mA"},
	{trigger: "HH", replacement: "\\mathcal{H}", options: "mA"},
	{trigger: "CC", replacement: "\\mathbb{C}", options: "mA"},
	{trigger: "RR", replacement: "\\mathbb{R}", options: "mA"},
	{trigger: "ZZ", replacement: "\\mathbb{Z}", options: "mA"},
	{trigger: "NN", replacement: "\\mathbb{N}", options: "mA"},
	{trigger: "QQ", replacement: "\\mathbb{Q}", options: "mA"},

	{trigger: "([^\\\\])(${GREEK})", replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before Greek letters"},
	{trigger: "([^\\\\])(${SYMBOL})", replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before symbols"},

	{
		trigger: "\\\\(${GREEK}|${SYMBOL}|${MORE_SYMBOLS})([A-Za-z])",
		replacement: function (match) {
			const [string, trigger, letter] = match;
			const new_trigger = new RegExp(this.trigger.source.replace("([A-Za-z])", "")); 
			if (new_trigger.test(string)) {
				return string;
			} else {
				return "\\" + trigger + " " + letter;
			}
		},
		options: "rmA",
		priority: 2
	},

	{
		trigger: "\\\\(${SYMBOLS}|${MORE_SYMBOLS})([0-9])",
		replacement: "\\[[0]] [[1]]",
		options: "mA",
		description: "Ajoute un espace après les symboles suivis d'un chiffre.",
	},

	{trigger: "\\\\(${GREEK}|${SYMBOL}) sr", replacement: "\\[[0]]^{2}", options: "rmA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) cb", replacement: "\\[[0]]^{3}", options: "rmA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) rd", replacement: "\\[[0]]^{$0}$1", options: "rmA"},
	{trigger: "\\\\(${GREEK}) hat", replacement: "\\hat{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}) dot", replacement: "\\dot{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}) bar", replacement: "\\bar{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}) vec", replacement: "\\vec{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}) tilde", replacement: "\\tilde{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}) und", replacement: "\\underline{\\[[0]]}", options: "rmA"},

    // Dérivées et intégrales
    {trigger: "derp", replacement: "\\frac{ \\partial ${0:y} }{ \\partial ${1:x} } $2", options: "m"},
    {trigger: /derp([0-9])/, replacement: "\\frac{ \\partial^{[[0]]} ${0:y} }{ \\partial ${1:x}^{[[0]]} } $2", options: "mA"},
    {trigger: /derpn/, replacement: "\\frac{ \\partial^{${0:n}} ${1:y} }{ \\partial ${2:x}^{${0:n}} } $2", options: "mA"},
    {trigger: /dp([A-Za-z])([A-Za-z])/, replacement: "\\frac{ \\partial [[0]] }{ \\partial [[1]] } ", options: "rm"},
    {trigger: "ddt", replacement: "\\frac{d}{dt} ", options: "mA"},

    {trigger: /([^\\])int/, replacement: "[[0]]\\int", options: "mA", priority: -1},
    {trigger: "\\int", replacement: "\\int $0 \\, d${1:x} $2", options: "m"},
    {trigger: "intd", replacement: "\\int_{${0:0}}^{${1:1}} $2 \\, d${3:x} $4", options: "mA"},
    {trigger: "oint", replacement: "\\oint", options: "mA"},
	{trigger: "iint", replacement: "\\iint", options: "mA"},
    {trigger: "iiint", replacement: "\\iiint", options: "mA"},
    {trigger: "intinf", replacement: "\\int_{0}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},
	{trigger: "intinfd", replacement: "\\int_{-\\infty}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},

    // Trigonométrie
    {trigger: /([^\\])(arcsin|sin|arccos|cos|arctan|tan|csc|sec|cot)/, replacement: "[[0]]\\[[1]]", options: "rmA", description: "Ajoute un antislash avant les fonctions trigo"},

    {trigger: /\\(arcsin|sin|arccos|cos|arctan|tan|csc|sec|cot)([A-Za-gi-z])/,
     replacement: "\\[[0]] [[1]]", options: "rmA",
     description: "Ajoute un espace après les fonctions trigo. Ignore la lettre h pour permettre sinh, cosh, etc."},

    {trigger: /\\(sinh|cosh|tanh|coth)([A-Za-z])/,
     replacement: "\\[[0]] [[1]]", options: "rmA",
     description: "Ajoute un espace après les fonctions trigo hyperboliques"},

    {
        trigger: /(arccsc|arcsec|arccot)/,
        replacement: "\\operatorname{[[0]]}$0",
        options: "mA",
        description: "Fonctions trigo inverses, absentes de MathJax par défaut",
		priority: 1,
    },

    // Opérations visuelles
	{trigger: "U", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }", options: "mA"},
	{trigger: "O", replacement: "\\overbrace{ ${VISUAL} }^{ $0 }", options: "mA"},
	{trigger: "B", replacement: "\\underset{ $0 }{ ${VISUAL} }", options: "mA"},
	{trigger: "C", replacement: "\\cancel{ ${VISUAL} }", options: "mA"},
	{trigger: "K", replacement: "\\cancelto{ $0 }{ ${VISUAL} }", options: "mA"},
	{trigger: "S", replacement: "\\sqrt{ ${VISUAL} }", options: "mA"},

    // Physique
	{trigger: "kbt", replacement: "k_{B}T", options: "mA"},
	{trigger: "msun", replacement: "M_{\\odot}", options: "mA"},

    // Mécanique quantique
    {trigger: "dag", replacement: "^{\\dagger}", options: "mA"},
	{trigger: "o+", replacement: "\\oplus ", options: "mA"},
	{trigger: "ox", replacement: "\\otimes ", options: "mA"},
    {trigger: "bra", replacement: "\\bra{$0} $1", options: "mA"},
	{trigger: "ket", replacement: "\\ket{$0} $1", options: "mA"},
	{trigger: "brk", replacement: "\\braket{ $0 | $1 } $2", options: "mA"},
    {trigger: "exter", replacement: "\\ket{${0:\\psi}} \\bra{${0:\\psi}} $1", options: "mA"},

    // Chimie
	{trigger: "pu", replacement: "\\pu{ $0 }", options: "mA"},
	{trigger: "cee", replacement: "\\ce{ $0 }", options: "mA"},
	{trigger: "he4", replacement: "{}^{4}_{2}He ", options: "mA"},
	{trigger: "he3", replacement: "{}^{3}_{2}He ", options: "mA"},
	{trigger: "iso", replacement: "{}^{${0:4}}_{${1:2}}${2:He}", options: "mA"},

    // Environnements
    {
        trigger: /([pbBvV]mat)/,
        replacement: "\\begin{[[0]]rix}\n$0\n\\end{[[0]]rix}",
        options: "rMA",
        description: "Environnements matrice avec retours à la ligne",
    },
    {
        trigger: /(matrix|cases|align|array)/,
        replacement: "\\begin{[[0]]}\n$0\n\\end{[[0]]}",
        options: "rMA",
        description: "Environnements divers avec retours à la ligne",
    },
    {
        trigger: /([pbBvV]mat)/,
        replacement: "\\begin{[[0]]rix}$0\\end{[[0]]rix}",
        options: "rnA",
    },
    {
        trigger: /(matrix|cases|align|array)/,
        replacement: "\\begin{[[0]]}$0\\end{[[0]]}",
        options: "rnA",
    },

    // Crochets et parenthèses
	{trigger: "moy", replacement: "\\langle $0 \\rangle $1", options: "mA"},
	{trigger: "norm", replacement: "\\lvert $0 \\rvert $1", options: "mA", priority: 1},
	{trigger: "Norm", replacement: "\\lVert $0 \\rVert $1", options: "mA", priority: 1},
	{trigger: "plaf", replacement: "\\lceil $0 \\rceil $1", options: "mA"},
	{trigger: "plan", replacement: "\\lfloor $0 \\rfloor $1", options: "mA"},
	{trigger: "mod", replacement: "|$0|$1", options: "mA"},
	{trigger: "(", replacement: "(${VISUAL})", options: "mA"},
	{trigger: "[", replacement: "[${VISUAL}]", options: "mA"},
	{trigger: "{", replacement: "{${VISUAL}}", options: "mA"},
	{trigger: "(", replacement: "($0)$1", options: "mA"},
	{trigger: "{", replacement: "{$0}$1", options: "mA"},
	{trigger: "[", replacement: "[$0]$1", options: "mA"},
	{trigger: "lr(", replacement: "\\left( $0 \\right) $1", options: "mA"},
	{trigger: "lr{", replacement: "\\left\\{ $0 \\right\\} $1", options: "mA"},
	{trigger: "lr[", replacement: "\\left[ $0 \\right] $1", options: "mA"},
	{trigger: "lr|", replacement: "\\left| $0 \\right| $1", options: "mA"},
	{trigger: "lra", replacement: "\\left< $0 \\right> $1", options: "mA"},

    // Divers

	{
		trigger: /\\([A-Za-z]+)(?:${GREEK}|${SYMBOL}|${MORE_SYMBOLS}){0}/,
		replacement: function (match) {
			const [string, trigger, letter] = match;
			const test_string = this.trigger.source.replace("\\\\([A-Za-z]+)", "");
			const new_trigger = new RegExp(`\\b${trigger}`); 
			if (new_trigger.test(test_string)) {
				return string;
			} else {
				return false
			}
		},
		options: "mAU",
		priority: 3,
		description: "Désactive les snippets pendant la frappe de macros",
	},

	{trigger: "taylor", replacement: "${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3", options: "mA", description: "Développement de Taylor"},

	{trigger: /idm(\d)/, replacement: (match) => {
		const n = match[1];

		let arr = [];
		for (let j = 0; j < n; j++) {
			arr[j] = [];
			for (let i = 0; i < n; i++) {
				arr[j][i] = (i === j) ? 1 : 0;
			}
		}

		let output = arr.map(el => el.join(" & ")).join(" \\\\\n");
		output = `\\begin{pmatrix}\n${output}\n\\end{pmatrix}`;
		return output;
	}, options: "mA", description: "Matrice identité N x N"},
	{
		trigger: /(?<positive_lookbehind>(?:\n|^)[ \t]*>*)(?<marker>\d+[.)]|[-*+])(?<whitespace>[ \t]+)(?<text>.*)dm/,
		replacement: (m) => {
			const { positive_lookbehind, whitespace, text, marker } = m.groups;
			const firstLine = marker + whitespace + text;
			const indent = " ".repeat(marker.length) + whitespace;
			return `${positive_lookbehind}${firstLine}\n${indent}$$\n${indent}$0\n${indent}$$`;
		},
		options: "rtA",
		priority: 2,
		description: "Bloc mathématique dans une liste"
	},
]
