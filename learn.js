const nombre1 = document.getElementById('number1');
const nombre2 = document.getElementById('number2');
const somme = document.getElementById('somme');
const resultat = document.getElementById('resultat');

// Ajout d'un écouteur d'événement "click" sur le bouton "somme"
somme.addEventListener('click', function() {
    // Convertir les valeurs des champs en nombres
    const valeur1 = parseFloat(nombre1.value) || 0;
    const valeur2 = parseFloat(nombre2.value) || 0;

    // Calculer la somme
    const total = valeur1 + valeur2;

    // Afficher le résultat dans l'élément <p> avec l'ID "resultat"
    resultat.textContent = `La somme est : ${total} `;
});
