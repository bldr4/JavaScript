//  Définir un cookie en JS 

document.cookie = "username=John Doe; max-age=86400; path=/; samesite=Lax; secure";

// Supprimer un cookie
document.cookie = "prenom=";


// localStorage & SessionStorage

// enregistrer des données dans le localStorage
localStorage.setItem("prenom", "John");
localStorage.setItem("nom", "Doe");

// récupérer des données dans le localStorage
let prenom = localStorage.getItem("prenom");
let nom = localStorage.getItem("nom");

// récupérer une clé dans le localStorage
let key = localStorage.key(3);

// Récupérer le nombre d'éléments dans le localStorage
let length = localStorage.length;

// supprimer une donnée dans le localStorage
localStorage.removeItem("prenom");

// Vider le localStorage
localStorage.clear();


// Stocker un tableau ou un objet dans le localStorage
// convertir en Json avec JSON.stringify() avant de l'envoyer dans le localStorage
// Lorsqu'on le récupère on le converti en objet JS avec JSON.parse

let myObj = {
    prenom: "John",
    nom: "Doe", 
    age: 25
};

localStorage.setItem('myObj', JSON.stringify(myObj));

let myObj2 = JSON.parse(localStorage.getItem('myObj'));
console.log(myObj2);

    // Faire une boucle sur les élements du localStorage
    for( let i = 0 ; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let val = localStorage.getItem(key); 

        console.log(key + ' = ' + val);
    }


let p = document.createElement('p');
if(localStorage.getItem('prenom') === null){
    let prenom = prompt("Entrez votre prénom");
    localStorage.setItem('prenom', prenom);
}
p.textContent = localStorage.getItem('prenom');
document.body.appendChild(p);
