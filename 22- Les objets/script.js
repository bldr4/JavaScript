//  Le mot clé this -> fais référance au context dans lequel il est appelé
let user = {
    prenom: 'John', 
    nom: 'Doe', 
    mail: 'john.doe@test.com',

    sePresenter:function(){
        console.log("Bonjour, je m'appelle " + user.prenom)
        console.log("Bonjour, je m'appelle " + this.mail)
    }
}
// appel de la méthode 
// user.sePresenter()


//  l'objet Set() - stocke des valeurs uniques 

let nombres = [1,2,3,3,1,6,7,6,14,2,13,14];
let mySet = new Set(nombres);
// Ajouter des élements 
mySet.add(5)
mySet.add([10,15])
// supprimer un élement 
mySet.delete(1)
// supprimer tous les élements 
// mySet.clear()
// vérifier si un élement fait partie du Set renvoie true ou false
// console.log(mySet.has(8))
// Renvoie des itérateurs, valeurs et clés sont la meme chose dans un Set 
// console.log(mySet.values())
// console.log(mySet.keys())
// Renvoie la taille du Set 
// console.log(mySet.size)

///////////////////// Exercice créer un tableau de nombres uniques sans utiliser Set -> indexOf ////////////////////////


//  Map 
let users  = new Map();
// Faire une nouvelle entrée dans le Map avec la méthode set()
users.set('John Doe',{
    email:'john.doe@test.com',
    poste:'PDG'
} )

users.set('Bill Gates',{
    email:'bill.gates@test.com',
    poste:'sauveur du monde'
} )

users.set('Elon Musk',{
    email:'elon@test.com',
    poste:'faire des trucs'
} )

// Afficher le Map()
// console.log(users)
// Affiche une entree du Map 
// console.log(users.get('John Doe'))
// supprimer une entrée 
users.delete('Bill Gates')
// Vérifier si une entrée existe 
// console.log(users.has('Elon Musk'))
//  supprimer toute sles entrées 
// users.clear()


// Object

let person = {
    prenom: 'John', 
    nom: 'Doe', 
    mail: 'john.doe@test.com',
}
//  On ne peut utiliser de fonction d'ordre suppérieur directement sur un obet car ce n'est pas un élement itérable 
// person.forEach(val => console.log(val))
//  Pour itérer sur un objet il faut le transformer avec l'objet Object
// Object.entries -> renvoie un tableau clé/valeur
// Object.values -> renvoie les valeurs du tableau
// Object.keys -> renvoie les clés du tableau
Object.entries(person).forEach((val,key) => console.log(val, key))

// assign fonctionne un peu comme le spread ou le concat
let obj1= {a:1};
let obj2 = {b:2};
let obj3 = {c:3};
let obj4 ={d:4};
let res = Object.assign(obj1,obj2,obj3,obj4);
//  meme chose avec le spread
let res2 = {...obj1,...obj2,...obj3,...obj4};
// console.log(res)
// console.log(res2)

// freeze bloquer un objet 
let frozenObj = Object.freeze(person);
frozenObj.prenom = 'Jane';
console.log(frozenObj)

// seal bloque les ajouts et les suppressions mais pas les modifications
let sealedObj = Object.seal(person);
sealedObj.prenom = 'Jane';
sealedObj.age = 25;
console.log(sealedObj);



//  l'objet Date 
let date = new Date();
//  renvoie le timestamp
let timeStamp = date.getTime();

///////  Exercice : à partir du timeStamp, renvoyer le nombre d'années, jours, heures, minutes et secondes écoulées depuis le 1er janvier 1970 //////////
let secondes = Math.floor(timeStamp /1000);
let minutes =Math.floor(secondes /60);
let heures = Math.floor(minutes/60);
let jours = Math.floor(heures/24);
let annees = Math.floor(jours/365.25);

console.log(`${annees} ans, ${jours % 365.25} jours, ${heures % 24} heures, ${minutes % 60} minutes, ${secondes % 60} secondes`);
///////  Exercice : à partir du timeStamp, renvoyer le nombre d'années, jours, heures, minutes et secondes écoulées depuis le 1er janvier 1970 //////////


//  date et heure 
let dateHeurefR = date.toLocaleString('fr-FR');
//  date 
let datefR = date.toLocaleDateString('fr-FR');
//  heure
let heurefR = date.toLocaleTimeString('fr-FR');
console.log(dateHeurefR, datefR, heurefR);


//  exemple sur un autre fuseau horaire
let exempleDate = date.toLocaleString('en-US', {
    timeZone: 'America/New_York',
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit', 
    hour12: true
});
console.log(exempleDate);




