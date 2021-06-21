# Challenge : initiation à Javascript

Note : l'exercice 0 doit être réalisé avant de pouvoir réaliser les autres exercices. N'hésitez pas à nous sollicitez pour toute question et blocage.

Pas d'inquiétude si vous n'arrivez pas à tout terminer. L'objectif est d vous faire expérimenter les différentes choses vues lors de cette initiation. 

## Exercice 0
Pour chaque fichier HTML fournis, intégrer dans la page le script correspondant (chaque fichier js a un nom identique à une page PHP). 

Pour vous assurez de la réussite de cet exercice, regardez dans la console de votre navigateur si le texte "Script de l'exercice n°X chargé avec succès" est bien affiché.

## Exercice 1
Poser à l'utilisateur la question suivante : "Connaissez-vous la technologie Javascript ?". Si l'utilisateur répond oui, afficher une alerte avec le texte "Super :) !". Si non, afficher l'alerte "Dommage, vous loupez quelque chose :(.".

## Exercice 2
Demander à l'utilisateur de saisir un chiffre décimal et afficher dans la console de votre navigateur, le nombre entier le plus proche.

## Exercice 3
A partir de votre date de naissance, afficher dans la console de votre navigateur, le nom du jour de votre date de naissance.

## Exercice 4
Créer une fonction nommée **maFonction**. Cette fonction prend deux paramètres dans l'ordre suivant :

1. un paramètre **param1** correspondant à une chaine de caractères ;
2. un paramètre **param2** correspondant à une chaine de caractères à rechercher dans la chaine correspondant au premier paramètre.

Si la chaine à rechercher n'est pas trouvée, la fonction retourne le texte suivant : "Le texte {param2} n'a pas été trouvé dans le texte {param1}.".

Sinon "Le texte {param2} a bien été trouvé dans le texte {param1}.".

Pour tester votre script :

* `console.log(maFonction("Javascript est une technologie cliente.", "JS"));` doit afficher dans la console "Le texte JS n'a pas été trouvé dans le texte Javascript est une technologie cliente." ;
* `console.log(maFonction("Javascript est une technologie cliente.", "Javascript"));` doit afficher dans la console "Le texte Javascript a bien été trouvé dans le texte Javascript est une technologie cliente.".

## Exercice 5
A partir du tableau suivant (repris dans le fichier .js de l'exercice) :
`['PHP', 'JS (Javascript)', 'HTML', 'CSS (Cascading Style Sheets)']`

1. afficher dans la console de votre navigateur, chaque élément du tableau dans l'ordre inverse (de CSS à PHP) ;
2. lors de l'affichage, ajouter à côté du texte "HTML", le texte "(HyperText Markup Language)" ;
3. lors de l'affichage, ajouter à côté du texte "PHP", le texte "(PHP: Hypertext Preprocessor)".

Ce que vous devez obtenir dans la console :

* CSS (Cascading Style Sheets) ;
* HTML (HyperText Markup Language) ;
* JS (Javascript) ;
* PHP (PHP: Hypertext Preprocessor).