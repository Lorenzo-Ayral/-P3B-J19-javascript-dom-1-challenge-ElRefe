console.log('Vous pouvez commencer votre exercice 4 :).');
// On cherche le paragaphe.
var paragraphe = document.querySelector("p");
for (var i = 0; i < paragraphe.childNodes.length; i++) {
    // On affiche uniquement les noeuds enfant texte.
    var noeud = paragraphe.childNodes[i];
    if (noeud.nodeType == 3) {
        console.log(noeud);
    }
}