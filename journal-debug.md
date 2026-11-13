# Journal de débogage
Nom : Mohamed Baker Jannane

| N° | Action pour reproduire | Résultat attendu / obtenu | Hypothèse et cause identifiée | Correction | Test après correction |
| --- | --- | --- | --- | --- | --- |
| 1 | recherche | fix, recherche correctement / fix correct | event 'change' | champRecherche.addEventListener('keyup', afficherProduits); | recherche fonctionelle |
| 2 | affichage apres ajout | quand ajoute affichage / quand ajout affichage direct| maque appel fonction afficherProduits() | ajoute de afficherProduits() dans button submit |sa marche |
| 3 | ajoute fix | espace non pris en compte + fix / fix du resultat attendu | .value appeler alors que il sont deja utiliser + trim error | if (nom.trim() == "" || champQuantite == "") // .trim() removed .value | sa marche |
| 4 | ajoute | fix value | value deja utiliser | if (nom == "" || champQuantite == "") // remouved .value | sa marche |
| 5 | totale quantity | count qui marche / il marche| oublie de parsInt | produits.push({ nom: nom, quantite: parseInt(quantite) }); // ajoute de parseInt(quantite) | sa marche |

Bilan : quelle méthode réutiliserai-je sur mon prochain brief ?
method trim
