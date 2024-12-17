// script.js

// Récupérer les votes depuis le localStorage (si déjà existants)
let valerieVotes = parseInt(localStorage.getItem("valerieVotes")) || 0;
let alexandraVotes = parseInt(localStorage.getItem("alexandraVotes")) || 0;
let anneVotes = parseInt(localStorage.getItem("anneVotes")) || 0;

// Sélection des images
const valerieImage = document.getElementById("valerie");
const alexandraImage = document.getElementById("alexandra");
const anneImage = document.getElementById("anne");

// Sélection des éléments où les résultats des votes seront affichés
const valerieVotesElement = document.getElementById("valerieVotes");
const alexandraVotesElement = document.getElementById("alexandraVotes");
const anneVotesElement = document.getElementById("anneVotes");

// Sélectionner le bouton de réinitialisation
const resetButton = document.getElementById("resetVotes");

// Fonction pour mettre à jour l'affichage des résultats
function updateVotes() {
    valerieVotesElement.textContent = valerieVotes;
    alexandraVotesElement.textContent = alexandraVotes;
    anneVotesElement.textContent = anneVotes;
    
    // Enregistrer les résultats dans le localStorage
    localStorage.setItem("valerieVotes", valerieVotes);
    localStorage.setItem("alexandraVotes", alexandraVotes);
    localStorage.setItem("anneVotes", anneVotes);
}

// Ajouter des écouteurs d'événements pour chaque image
valerieImage.addEventListener("click", function() {
    valerieVotes++;
    updateVotes(); // Met à jour l'affichage et le stockage
});

alexandraImage.addEventListener("click", function() {
    alexandraVotes++;
    updateVotes(); // Met à jour l'affichage et le stockage
});

anneImage.addEventListener("click", function() {
    anneVotes++;
    updateVotes(); // Met à jour l'affichage et le stockage
});

// Fonction pour réinitialiser les votes
function resetVotes() {
    valerieVotes = 0;
    alexandraVotes = 0;
    anneVotes = 0;
    updateVotes(); // Met à jour l'affichage et réinitialise le localStorage
}

// Ajouter un écouteur d'événement pour réinitialiser les votes
resetButton.addEventListener("click", resetVotes);

// Initialiser les votes au démarrage de la page
updateVotes();
