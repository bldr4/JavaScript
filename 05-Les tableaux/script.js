// Déclarer un tableau simple 
let arr = new Array(1, 2, 3, 4, 5);
let arr2 = Array(1, 2, 3, 4, 5);
// méthode à garder 
let arr3 = [1, 2, 3, 4, 5];
console.log(arr3[0]);

// Déclarer un tableau à 2 dimensions
let arr2d = [
    ['Mark', 'Jeff', 'Bill'], 
    ['Zuckerberg', 'Bezos', 'Gates'] 
]
console.log(arr2d[1][0], arr2d[0][0]);


// Déclarer un tableau associatif ou objet 
let arrAssoc = {
    'name': 'Mark',
    'surname': 'Zuckerberg',
    'age': 36
}
arrAssoc.nationality = 'American';
console.log(arrAssoc);


///////// Fonctions utiles /////////
// length --> permet de retourner la taille d'un tableau
let arr4 = [1, 2, 3, 4, 5];
// console.log(arr4.length);

// for(let i = 0; i < arr4.length; i++) {
//     console.log(arr4[i]);
// }

// indexOf --> permet de retourner l'index d'un élément dans un tableau
// console.log(arr4.indexOf(3));

// push --> permet d'ajouter un élément à la fin d'un tableau
// unshift --> permet d'ajouter un élément au début d'un tableau
arr4.push('élément ajouté à la fin');
arr4.unshift('élément ajouté au début');

// pop --> permet de supprimer le dernier élément d'un tableau
// shift --> permet de supprimer le premier élément d'un tableau
arr4.pop();
arr4.shift();

// splice --> permet d'ajouter/supprimer un ou plusieurs éléments à un index donné

// supprimer le 2 et 3 du tableau 
arr4.splice(1, 2);
// Ajouter 3 nouveaux éléments à l'index 4
arr4.splice(4, 0, 'nvx ele 1', 'nvx ele 2');

// slice --> permet de retourner une partie d'un tableau dans un autre tableau

let arr5 = arr4.slice(0, 2);


// concat --> permet de concaténer 2 tableaux
let arr6 = [6, 7, 8, 9, 10];

let arr7 = arr4.concat(arr6);


//  autre manière de concatener un tableau avec le spread operator.
let arr8 = [...arr4, ...arr6];


// include --> permet de vérifier si un élément est présent dans un tableau
console.log(arr6.includes(7));

// Flat --> permet de transformer un tableau à plusieurs dimensions en un tableau simple

let arr9 = [
    [1, 2, 3],
    [4, 5, 6, 
        [
            7, 8, 9,
            [10, 11, 12]
        ]
    ] 
]
console.log(arr9.flat(3));

// Join --> permet de transformer un tableau en une chaîne de caractères
let arr10 = ['Bonjour', 'tout', 'le', 'monde'];
console.log(arr10);
console.log(arr10.join(' '));

// reverse --> permet d'inverser l'ordre des éléments d'un tableau
let arr11 = ['fraise', 'banane', 'kiwi'];
let reversed = arr11.reverse();
console.log(reversed);

// sort --> permet de trier les éléments d'un tableau
// sur des chaînes 
let arr12 = ['orange', 'ananas', 'kiwi', 'banane', 'pomme', 'fraise'];
console.log(arr12);
let res  = arr12.sort();
console.log(res);

// sur des nombres
let arr13 = [5, 10, 2, 8, 1, 3, 6];

let res2  = arr13.sort(function(a,b){
 return a - b; 
})
//  Réduire la fonction avec une fonction fléchée 

let res3 = arr13.sort((a,b) => a - b );
console.log(res3);