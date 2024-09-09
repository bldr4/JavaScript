// Par valeur -> données primitives ( chaine, nombre, booleen)
let a = 'abc';
let b = a;
a = 'def';
// console.log(a, b); 


// Par référence --> données complexes (tableaux, objets)
let obj1 = { str: 'abc' };
let obj2 = obj1;
obj1.str = 'def';

// console.log(obj1);
// console.log(obj2);

let objet = {x:10}
//  Ici on crée une copie superficielle de l'objet donc objet2 n'y fait plus référence directement
let objet2 = {...objet}
objet2.x =20
console.log(objet) // 10
console.log(objet2) // 20



// Destructuring
// Extraire des valeurs d'un tableau ou d'un objet et les assigner à des variables

// exemple 1 
let arr1  = ['john', 'doe', 30];
// sans destructuring
let firstName = arr1[0];
let lastName = arr1[1];
let age = arr1[2];
// avec destructuring
let [firstName1, lastName1, age1] = arr1;


// console.log(firstName, lastName, age);
// console.log(firstName1, lastName1, age1);

// Exemple 2
let number = [1, 2, 3, 4, 5];
let [first, , third] = number;  
// console.log(first, third);

// Exemple 3
let colors = ['red']; 
let [primary, secondary = 'green'] = colors;
// console.log(primary, secondary);

// Exemple 4
let arr2  = [1, [2, 3]];
let [first1, [second1, third1]] = arr2;  
// console.log(first1, second1, third1);

// Exemple 5
// Utiliser le destructuring pour récupérer les deux premieres var et le spread pour récupérer le reste dans un tableau 
let number2 = [1, 2, 3, 4, 5];
let [firstNb, secondNb, ...rest] = number2;
// console.log(firstNb, secondNb, rest);

// Exemple 6 sur un objet 

let user  = {
    prenom : 'John', 
    nom : 'Doe', 
    age2:30
};
// Sans destructuration
// let prenom = user.prenom;
// let nom = user.nom;
// let ageUser = user.age;
// console.log(prenom,nom,age)

// Avec destructuration 
//  attetion les nom des var doivent correspondre aux clés de l'objet 
let {prenom, nom, age2} = user;
// console.log(prenom, nom, age2)

// Exemple 7 : les alias sur les prop d'objet 
let user2 = {
    id:42,
    isVerified :true
}
let {id:userId, isVerified:status} = user2;
// console.log(userId, status);

//  Exemple 8 : 
let student = {
    name: 'John',
    marks:{
        maths:90,
        science: 78, 
   }
}
let {name, marks:{maths, science}}= student;
// console.log(name, maths, science)

//  Exemple 9 destructuration avec une fonction

function displayUser({name, age}){
    // console.log(name + ' ' + age);
}
let user3 = {
    name:'Bob', 
    age:'30'
}
displayUser(user3);

// Les spread operator, combiner plusieurs tableaux ou obj, créer une copie superficielle d'un objet ou tableau ( éviter le passage de données par référence) 

//  exemple 1 
let fruits = ['fraise', 'banane', 'poire'];
let fruits2 = ['pomme', 'kiwi', 'orange', ...fruits];
//  Même chose que le concat()
let allfruits = [...fruits, ...fruits2];
let total = fruits.concat(fruits2);
// console.log(total)

// Exemple 2
let obj11 = {a:1, b:2};
let obj22 = {c:3, d:4};
let combined = {...obj11, ...obj22};
// console.log(combined);

// Exemple 3
let user22 = {
    firstName:'John', 
    lastName:'Doe',
    age:30,
    address:{
        city:'Paris',
        country:'France'
    }
};
let userAddress = {...user22.address}
// console.log(userAddress)

// Exemple 4 
let str = 'Bonjour';
let strToArr = [...str];
let strToArr2 = str.split('');
let ArrToStr = strToArr2.join('');
// console.log(ArrToStr);

// Exemple5: spread avec une fonction 
function sum(a, b ,c){
    return a + b + c;
}
let nbr = [1, 2, 3];
// console.log(sum(...nbr));


//  Les rest operator : définir un nombre indéfini de paramètres
function sum2(...params){
    return params.reduce((accu, current)=>accu + current, 0)
}
console.log(sum2(1,2,3,4,5,6))

