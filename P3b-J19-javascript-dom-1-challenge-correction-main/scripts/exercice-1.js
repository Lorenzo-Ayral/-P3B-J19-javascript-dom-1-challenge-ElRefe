console.log('Vous pouvez commencer votre exercice 1 :).');
// On questionne l'utilisateur.
if (confirm("Souhaitez-vous activer le thème sombre ?")) {
    // On change la classe du noeud body.
    document.querySelector("body").setAttribute("class", "darkTheme");
}