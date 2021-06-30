console.log('Vous pouvez commencer votre exercice 2 :).');
// On recherche les paragraphes.
var paragraphes = document.querySelectorAll("p.uneClasse");
for (var i = 0; i < paragraphes.length; i++) {
    // On supprime les attributs id présents sur ces paragraphes.
    paragraphes[i].removeAttribute("id");
}