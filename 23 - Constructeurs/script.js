// Un constructeur c'est une usine à objet 

// Les params permettent d'initialiser les propriétés de l'objet.
function Utilisateur(nom1, prenom1, email1) {
    this.nom = nom1;
    this.prenom = prenom1;
    this.email = email1;


    this.sePresenter = function() {
        //  this fait référence à l'objet qui appelle la méthode cf ligne 20
        console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse " + this.email);
    }
}

//  Créer une instance de l'objet Utilisateur

let John = new Utilisateur("Doe", "John", "john@gmail.com");
let Jane = new Utilisateur("Doe", "Jane", "Jane@gmail.com");
// ici On appelle la méthode sePresenter de l'objet John, donc this fait référence à l'objet John. this.prenom c'est comme si on faisait John.prenom;
John.sePresenter();

function Logement(type, prix, ville, proprietaire) {
    this.type = type;
    this.prix = prix;
    this.ville = ville;
    this.proprietaire = proprietaire;

    this.afficher = function() {
        console.log("Ce logement est un " + this.type + " situé à " + this.ville + " et coûte " + this.prix + "€");
    }
}

let appartement1 = new Logement("appartement", 1000, "Paris", John);
console.log(appartement1);
