console.log('Vous pouvez commencer votre exercice 3 :).');
// Point de départ.
var spanStart = document.querySelector("span");
console.log(spanStart);
// On part vers le parent du noeud point de départ.
var spanStartParent = spanStart.parentNode;
console.log(spanStartParent);
// Puis, on part vers son frère.
// Note : petite subtilité ici, un saut de ligne s'est glissé entre p et div frère.
var div = spanStartParent.nextSibling.nextSibling // il est possible d'utiliser nextElementSibling pour cibler directement le noeud élément.
console.log(div);
// On part sur le premier enfant.
// Note : petite subtilité ici, un saut de ligne s'est glissé entre div et p enfant.
var p = div.firstChild.nextSibling; // il est possibl d'utiliser firstElementChild pour cibler directement le noeud élément.
console.log(p);
// Point d'arrivée.
console.log(p.lastChild);
