// consigne 

// Etape 1 : sélectionner les éléments qui vous seront nécessaires :
// Le bouton pour changer le thème actuel (#mode)
// Le span qui contient le texte du bouton (span)

let bouton = document.querySelector("#mode");
let span = document.querySelector("span");
let icon = document.querySelector("i");
let themeWindows = window.matchMedia('(prefers-color-scheme:dark)').matches?"dark":"light"; 
let themeLocal = localStorage.getItem('theme')

function baseTheme(theme){
    if (theme === "dark") {
        document.body.classList.add("dark");
        span.textContent = "Mode Jour";
        icon.className = "fa-solid fa-sun";
    } else {
        document.body.classList.remove("dark");
        span.textContent = "Mode Nuit";
        icon.className = "fa-solid fa-moon";
    }
    localStorage.setItem('theme', theme);
};
baseTheme(themeLocal || themeWindows);

bouton.addEventListener("click", () => {
    let currentTheme = document.body.classList.contains("dark")?"light":"dark";
    baseTheme(currentTheme);
});

// Etape 2:  rendre le bouton fonctionnel.
// Pour cela, faites en sorte de détecter dès que l'utilisateur clique sur le bouton.
// Une fois que vous avez réussi à détecter le clic de votre utilisateur, ajoutez une condition pour vérifier si l'élément Body a la classe 'dark' ou non.
// Si la classe 'dark' est déjà présente, ceci veut dire que le thème actuel est le thème sombre. Donc :
// Retirez toutes les classes de l'élément Body
// Changez le texte du bouton grâce à votre élément span en "Thème sombre"
// Changez l'icône du bouton grâce à votre élément i en "fa-moon"
// Définissez un élément localStorage, qui s'appellera 'theme' et qui aura pour valeur 'clair'
// Si la classe 'dark' n'est pas déjà présente, alors nous sommes sur le thème clair. Donc :
// Appelez la fonction modeSombre(), que vous allez créer à la prochaine étape.




// Etape 3: La fonction modeSombre().
// Cette fonction devra :
// Ajouter la classe 'dark' sur l'élément Body
// Changer le texte du bouton grâce à l'élément span en "Thème clair"
// Changer l'icône du bouton grâce à l'élément i en "fa-sun"
// Définir avec localStorage un item qui s'appellera 'theme' et qui vaudra 'sombre'





// Etape 4 :  vous devrez vérifier si l'utilisateur dispose déjà d'un item stocké sur son navigateur qui s'appelle 'theme'. Si c'est le cas, c'est que notre utilisateur a déjà choisi son mode préféré.
// Vérifiez si l'élément 'theme' existe
// Il existe ? Sa valeur est-elle égale à 'sombre' ?
// Si Oui,  On appelle la fonction modeSombre()
// Si Non, On ne fait rien