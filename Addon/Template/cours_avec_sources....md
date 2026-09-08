---
type: cours
tags:
c-date: <% tp.file.creation_date() %>
---

---
### Sources  :
```dataview
TABLE WITHOUT ID
	link(outlink) AS "Dans le docs",
	regexreplace(meta(outlink).path, ".*/(.*?)/?$", "$1") AS "Noms"
WHERE file.name = this.file.name
FLATTEN file.outlinks AS outlink
SORT meta(outlink).path ASC
```

### Exercices tirés : 
```dataview
TABLE WITHOUT ID
	file.link as "Exercice",
	file.ctime as "Créé le"
FROM "Exercices"
WHERE type = "exercice" AND contains(cours, this.file.link)
SORT file.ctime DESC
```