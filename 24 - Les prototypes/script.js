function Utilisateurs(prenom, nom, mail){
    this.prenom = prenom;
    this.nom = nom;
    this.mail = mail;
// ici on stock la méthode sePresenter directement dans l'objet, c'est une mauvaise pratqiue car trop couteuse en ressources
// il faut la faire passer dans le constructeur 
    // this.sePresenter = function(){
    //     console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse " + this.mail);
    // }
}
//  ici on fait passer la méthode sePresenter dans le constructeur
Utilisateurs.prototype.sePresenter = function(){
    console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse " + this.mail);
}


let John = new Utilisateurs("John", "Doe", "john@gmail.com");
console.log(John);
John.sePresenter();

