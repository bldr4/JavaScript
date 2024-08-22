// Fonction simple
function myFunction(){

    console.log("Hello World!");
}



// myFunction();

// Fonction avec param 

function add(a, b){
    return a + b;
}
console.log(add(5,4));



// hoisting des fonctions 

// console.log(multiply(5));

function multiply(nb){
    return nb * 2;
}

// Eviter le hoiisting des fonctions en utilisant des expressions de fonctions
//  Ne s'execute pas car la fonction n'est pas encore declarée
// console.log(multiply2(5));
const multiply2 = function(nb){
    return nb * 2;
}

//  Les parama par defaut

function addition(a = 10, b = 5){
    return a + b;
}
console.log(addition());


//  Le rest parameter ... inclure un b de param ilimités
function sum(...nb){
    return nb.reduce((acc, currentVal) => acc + currentVal, 0);
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));

// Les fonctions de conversion de type
// let age = prompt("Quel est votre age?");
// Typer une var en entier 
// age = parseInt(age);
// Typer une var en decimal 
// age = parseFloat(age);
// Typer une var en numérique de manière dynamique 
// age = Number(age);
// let res = age + 1;
// console.log(res);

// convertir en chaine 
let nb = 56;
nbEnStr= nb.toString();
// coercition de type pour convertir en chaine
nbToStr = nb + "";
console.log(typeof nbToStr);


// Fonctions fléchées
// les fonctions fléchées n'apportent pas de nouveautés en terme de fonctionnalités, mais elle simplifie la syntaxe --> Sucre syntaxique
function foo(){
    console.log("Hello World");
}
// si 0 ou 2 ou + de param on doit mettre les parenthèses
// Si elle effectue un seul traitement on peut omettre les accolades
let bar = ()  => {
    console.log("Hello World");
    console.log("foo bar");
}
console.log(bar());

//  Le fonctions anonymes
// Pour exécuter une fonction anonyme2 possibilités:
// Expression de fonction 
let fonctionAnonyme = function(){
    console.log("Bonjour");
}
fonctionAnonyme();

// Fonction auto-invoquée
// On englobe la fonction dans des parenthèses et on l'execute avec des parenthèses
(function(param1, param2){
    console.log(param1 + " " + param2);
})('Hello', 'World');

// Fonctions récursives

function count(num){
    if(num >10){
        console.log("Fin de la récursion");
    }
    else{
        console.log(`Numéro: ${num}`);
        num++;
        count(num);
    }
}
count(0);

// les fonctions pures 
let x = 7;
let add2= (a, b) => a + b;
console.log(add2(5, 6), x);
console.log(add2(5, 6), x);
console.log(add2(5, 6), x);
console.log(add2(5, 6), x);
console.log(add2(5, 6), x);
console.log(add2(5, 6), x);
console.log(add2(5, 6), x);

// Les closure, garder en mémoire les variables locales d'une fonction

function timer(){
    let seconde = 0;
    let myClosure= () =>{
        seconde++;
        console.log(seconde);
    }
    return myClosure;

}
let myTimer = timer();
myTimer();
myTimer();
myTimer();
myTimer();
myTimer();


//  Exercice Gateaux Diapo 58
function cuisiner(nbGateaux, tpsPrepa=10, tpsCuisson=15){
    let tpsTotal = nbGateaux * (tpsPrepa + tpsCuisson);
    return tpsTotal;
}
let gateauAuChocolat = cuisiner(4);
let gateauAuCitron = cuisiner(1, 20);
console.log(gateauAuChocolat, gateauAuCitron);
