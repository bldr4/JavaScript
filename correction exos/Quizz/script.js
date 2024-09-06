// Réponses correctes pour chaque question
let responses = ["c", "b", "c", "b", "a"];

// Sélection des éléments nécessaires
let form = document.querySelector(".quiz-form"); // Formulaire du quiz
let question = document.querySelectorAll(".question-block"); // Chaque bloc de question
form.addEventListener("submit", submitForm); // Événement lors de la soumission du formulaire

function submitForm(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    let compteur = 0; // Compteur de bonnes réponses
    let userResponse = document.querySelectorAll("input:checked"); // Sélectionne les réponses cochées par l'utilisateur
    let tab1 = [];

    // Vérifie chaque réponse
    userResponse.forEach((btn, index) => {
        if (btn.value === responses[index]) {
            tab1.push("green");
            compteur++;
        } else {
            tab1.push("red");
        }
    });

    addColor(tab1); // Change la couleur des questions en fonction des bonnes ou mauvaises réponses
    addMessage(compteur); // Affiche un message en fonction du score
}

// Fonction pour ajouter la couleur en fonction des réponses
function addColor(array) {
    array.forEach((color, index) => {
        question[index].style.backgroundColor = color;
    });
}

// Fonction pour afficher un message en fonction du score
function addMessage(count) {

    let r1 = document.querySelector(".mark"); // Sélectionne l'élément où afficher le résultat
    console.log(r1);
    switch (count) {
        case 0:
            r1.textContent = "Nous n'avons plus de respect pour vous ! Vous êtes nul !";
            r1.textContent += " Vous avez 0/5 bonnes réponses.";
            r1.style.display = "block";
            setTimeout(() => {
                window.close();
            }, 2000);
            break;
        case 1:
            r1.textContent = "Vous êtes vraiment nul, mais ça commence à venir.";
            r1.textContent += " Vous avez 1/5 bonnes réponses.";
            r1.style.display = "block";
            break;
        case 2:
            r1.textContent = "Vous êtes encore loin du compte.";
            r1.textContent += " Vous avez 2/5 bonnes réponses.";
            r1.style.display = "block";
            break;
        case 3:
            r1.textContent = "Pas mal, mais vous pouvez mieux faire!";
            r1.textContent += " Vous avez 3/5 bonnes réponses.";
            r1.style.display = "block";
            break;
        case 4:
            r1.textContent = "Très bien! Presque parfait!";
            r1.textContent += " Vous avez 4/5 bonnes réponses.";
            break;
        case 5:
            r1.textContent = "Félicitations! Vous avez tout bon!";
            r1.textContent += " Vous avez 5/5 bonnes réponses.";
            r1.style.display = "block";
            break;
    }
}

// Réinitialiser la couleur de fond des questions
let changeColor = document.querySelectorAll("input[type='radio']");
changeColor.forEach(radio => radio.addEventListener("input", resetColor));

function resetColor(event) {
    let innputIndex = event.target.getAttribute("name").match(/\d/g)[0] - 1;
    let resetBlock = question[innputIndex];
    resetBlock.style.backgroundColor = "white";
}
