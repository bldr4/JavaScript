//  for ... in --> plus utilisée pour les objets 
//  for ... of --> plus utilisée pour les tableaux


//  Tableau indexé
let fruits = ['pomme', 'poire', 'banane', 'fraise', 'cerise'];

for (let fruit of fruits) {
    // Renvoyer la valeur de l'élément
    console.log(fruit);
    // Renvoyer l'index de l'élément
    console.log(fruits.indexOf(fruit));
}

for (let fruit in fruits) {
    // Renvoyer l'index de l'élément
    console.log(fruit);
    // Renvoyer la valeur de l'élément
    console.log(fruits[fruit]);
}

// Tableau associatif/ objets

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person) {
    console.log(`${key} : ${person[key]}`);
}

for (let [key, val] of Object.entries(person)) {
    console.log(`${key} : ${val}`);
}


//////////////////////////// Les callbacks ////////////////////////////

// forEach()
let pays = ['France', 'Allemagne', 'Angleterre', 'Espagne', 'Italie'];

pays.forEach(function(el){
    console.log(el);
})
// La même chose avec une arrow function
pays.forEach(el => console.log(el));

//  tous les params de la fonction forEach
pays.forEach(function(el, index, tab){
    console.log(el, index, tab);
});

// Exo : Créer une fonction qui prend en paramètre un tableau et une fonction de callback

function customForEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array);
    }
}
customForEach(pays, function(el, index, tab){
    console.log(el, index, tab);
});

// map()
let arr = [1, 2, 3, 4, 5];
let res  = arr.map(function(el){
    return el * 2;
})
// fonction fléchée 
let res2 = arr.map(el => el * 2);

console.log(res2);


// Filter 
let fruits2 = ['pomme', 'poire', 'banane', 'fraise', 'cerise'];
let res3 = fruits2.filter(function(el){
    return el.length > 5;
})

// fonction fléchée 
let res4 = fruits2.filter(el => el.length > 5);
// Si dans l'execution de la fonction on a plus de 1 instruction
let res5 = fruits2.filter(el => {
    console.log(`Fruit : ${el}`);
    return el.length > 5;
});
console.log(res5);

// Reduce()
// avec while
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somme = 0;
let i = 0;
while(i < arr2.length){
    somme += arr2[i];
    i++;
}
let moyenne = somme / arr2.length;
console.log(`Moyenne avec while : ${moyenne}`);
// Avec reduce 
let sommeReduce = arr2.reduce((acc, val) => acc + val, 0);
let moyenneReduce = sommeReduce / arr2.length;
console.log(`Moyenne avec reduce : ${moyenneReduce}`);
