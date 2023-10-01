// Élément du bouton
const playSoundButton = document.getElementById("playSoundButton");

// Élément audio pour le son
const audioElement = document.getElementById("audioElement");

// Fonction pour jouer le son
function playSound() {
    audioElement.play(); // Joue le son
}

// Écouteur d'événement pour le clic sur le bouton
playSoundButton.addEventListener("click", playSound)


// Tableau contenant les noms des images
const images = ["img/inOutAngle1.jpg", "img/inOutAngle2.jpg", "img/inOutAngle3.jpg", "img/inOutAngle4.webp"];
let currentIndex = 0;

// Élément image
const imageElement = document.getElementById("changeImage");

// Bouton de changement d'image
const changeButton = document.getElementById("changeButton");

// Fonction pour changer l'image
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Passe à l'image suivante
    imageElement.src = images[currentIndex]; // Change la source de l'image
}

// Écouteur d'événement pour le clic sur le bouton
changeButton.addEventListener("click", changeImage);