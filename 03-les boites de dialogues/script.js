// alert
let message = "Hello, World!";
alert("Hello, World!");
alert(message);

// confirm -> retourne un booléen
if(confirm("Souhaitez vous continuer ?")){
    alert("Vous avez répondu oui");
}else{
    alert("Vous avez répondu non");
}

// prompt 
let age = prompt("Quel âge avez-vous ?");
// isNaN permet de vérifier si la valeur est un nombre
while(isNaN(age) || age === "" || age === null){
    age = prompt("Quel âge avez-vous ?");
}
alert(`Vous avez ${age} ans`);

// Exercice diapo 17 
let age2 = prompt("Quel âge avez-vous ?");
while(isNaN(age2) || age2 === "" || age2 === null){
    age2 = prompt("Quel âge avez-vous ?");
}
if(age2 >= 18){
    alert("Vous êtes majeur");
}else{
    alert("Vous êtes mineur");
}

// opérateurs de comparaison
= // affectation
== // égalité sur la valeur
=== // égalité sur la valeur et le type