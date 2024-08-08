// Méthodes pour les chaînes de caractères
let str = 'lorem ipsum dolor sit amet';
// Les chaînes de caractères sont des tableaux de caractères
console.log(str[0]);
console.log(str.charCodeAt(0));// renvoi le unicode de la lettre l
console.log(str.includes('ipsum')) 
console.log(str.length);
// replace(elementRecherché, elementRemplacé)
console.log(str.replace('ipsum', 'hello'));
// slice(caractère de début, nb de caractères)
console.log(str.slice(0, 7));
//  renvoi le dernier caractère
console.log(str.slice(-1));

// transformer une chaîne de caractères en tableau pour pouvoir utiliser les méthodes propres aux tableaux
let strToArr = str.split(' ');
let sorted = strToArr.sort();
let arrToStr = sorted.join(' ');
// console.log(arrToStr);

let str1 = 'Hello';
let str2 = 'World';
console.log(str1.concat(', ', str2, ' !'));
