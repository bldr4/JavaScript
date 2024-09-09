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