# Challenge : présentation du DOM

Vous pouvez réaliser ces exercices dans l'ordre que vous voulez. N'hésitez pas à nous sollicitez pour toute question et blocage.

Pas d'inquiétude si vous n'arrivez pas à tout terminer. L'objectif est de vous faire expérimenter les différentes choses vues lors de cette présentation du DOM.

## Exercice 1
Posez la question à l'utilisateur si il souhaite activer le mode sombre : "Souhaitez-vous afficher cette page avec un thème sombre ?". Si il répond oui, ajouter un attribut class avec la valeur "darkTheme" sur le noeud body.

## Exercice 2
Rechercher dans la page tous les noeuds paragraphes ayant une classe CSS "uneClasse" et supprimer les attributs id présents sur ces paragraphes.

## Exercice 3
Rechercher dans la page le noeud span contenant le texte "Votre point de départ". A partir de ce noeud, parcourez les noeuds jusqu'à atteindre le noeud texte contenant "votre point d'arrivée". Utilisez la console du navigateur pour afficher les différents noeuds parcourus.

## Exercice 4
Afficher dans la console du navigateur les noeuds texte enfants du paragraphe présent dans la page. Note : pour pouvoir déterminer le type de noeud, il vous faudra utiliser une propriété nommée `nodeType` (`noeud.nodeType`). Cette propriété renvoie une valeur :

1. Égale à **1** si le noeud est un noeud élément ;
2. Égale à **3** si le noeud est un noeud texte.