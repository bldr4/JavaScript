//  les class et les types de méthodes
class User {
    //  le but du constructeur est d'initialiser les propriétés de l'objet
    constructor(prenom, nom, mail){
        this.prenom = prenom;
        this.nom = nom;
        this.mail = mail;
    }

    //  Méthode classique qui s'appelle par biais d'un instance de l'objet 
    sePresenter(){
        console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom} et mon adresse mail est ${this.mail}`);
    }

    // Les méthodes static sont des méthodes qui s'appellent directement sur la class sans passer par une instance de l'objet.
    static bienvenue(){
        console.log('Bienvenue sur notre site');
    }
}
let bob = new User('Bob', 'Dylan', 'bob@gmail.com');

 bob.sePresenter()
 User.bienvenue()


//  L'héritage avec les class

//  une class qui n'est pas déstinée à être instanciée s'appelle une class abstraite
class Animal{
    constructor(nombreDePattes, poids){
        this.nombreDePattes = nombreDePattes;
        this.poids = poids;
    }

    presentation(){
        console.log(`Cet animal a ${this.nombreDePattes} pattes et pèse ${this.poids} kg`);
    }
}

class Oiseau extends Animal {
    constructor(nombreDePattes, poids, envergure){
        super(nombreDePattes, poids);
        this.envergure = envergure;
    }

    static voler(){
        console.log('Cet oiseau vole');
    }

}

let perroquet = new Oiseau(2, 1, 'grande');
console.log(perroquet);
perroquet.presentation();
Oiseau.voler();


//  Encapsulation avec les class

class Utilsateur{
    //  On défini les propriétés privées avec le symbole #, et les propriétés publiques sans symbole
    #prenom;
    #nom;
    #mail;
    age;
// On initilaise les propriétés dans le constructeur
    constructor(prenom, nom, mail, age){
        this.#prenom = prenom;
        this.#nom = nom;
        this.#mail = mail;
        this.age = age;
    }

    getPrenom(){
        return this.#prenom;
    }
    setPrenom(prenom){
        this.#prenom = prenom;
    }

    getNom(){
        return this.#nom;
    }
    setNom(nom){
        this.#nom = nom;
    }

    getMail(){
        return this.#mail;
    }
    setMail(mail){
        //  On ajoute des cérifications dans le setteur avant de modifier la propriété
        let regex= /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$/;
        if(regex.test(mail)){
            this.#mail = mail;
        }else{
            console.log('Adresse mail invalide');
        }
    }
}
let jean = new Utilsateur('Jean', 'Dupont', 'jean@test.com', 26);
//  Onpasse par le setter pour modifier une propriété privée
jean.setNom('Durand');
console.log(jean.getNom());
//  Pour récupérer une propriété privée, on utilise la méthode getter
console.log(jean.getPrenom());
//  récupérer une propriété public
console.log(jean.age);

jean.setMail('durand@test.com');
console.log(jean.getMail());


//  Le poylmorphisme avec les class

//  représente une interface qui définit un contrat que toutes les class qui l'implémentent doivent respecter
class Animal2 {
    faireDuBruit(){
        throw new Error('La méthode doit être implémentée');
    }
}

//  En utilisant une interface on extends pas mais on implémente
class Chien extends Animal2 {
    faireDuBruit(){
        console.log('Le chien aboie');
    }
}

class Chat extends Animal2 {
    faireDuBruit(){
        console.log('Le chat miaule');
    }
}

function faireDuBruit(animal){
    if(animal instanceof Animal2){
    animal.faireDuBruit();
    }else{
        console.log('Ce n\'est pas un animal valide');
    }
}
let chien = new Chien();
let chat = new Chat();

faireDuBruit(chien);
faireDuBruit(chat);