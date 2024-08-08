//  Types primitives chaine, nombre, bool

let prenom = 'John';
prenom = 12;
// typeof retourner le type de donnée
console.log(typeof prenom); // string


let bool = true;
console.log(typeof bool); // boolean

//  types complexes : array, object
let oldArr = Array(1, 2, 3);
let myArr = ['un', 'deux', 'trois'];
console.log(myArr[1]);

let myObj = {
    prenom: 'John',
    age: 25,
    isStudent: true
};
console.log(myObj.prenom);
console.log(myObj['age']);


////////////////////////// La concatenation //////////////////////////

let prenom2 = 'John';
let nom = 'Doe';

// concatenation avant ES6 
let fullName = prenom2 + ' ' + nom;
console.log("Bonjour " + prenom2 + " " + nom + " comment vas tu ?");
// concatenation template literals -> backticks `` ET interpolation ${}
console.log(`Bonjour ${prenom2} ${nom} comment vas tu ?`);


////////////////////////////// Opérateurs Arithmétiques //////////////////////////
let n1 = 10 , n2 = 5, res;
res = (n1 + n2) * 5;
// On ajoute 50 à la valeur de res
res += 50;
// On incremente la valeur de res de 1
res++;
// On decremente la valeur de res de 1
res--;
console.log(res);