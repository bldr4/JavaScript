// Hoisting = hissage 
// prenom = "Romain";
// var prenom;
// console.log(prenom)


// var function scoped 
var nom; 
function hello(){
     nom = "Romain";
}
console.log(nom); // error

// let et const block scoped
if(true){
    var nom2 ='Doe';
}
console.log(nom2); 

// const = constante 
//  on ne peut pas réaffecter une constante
const prix = 200;
prix= 300;
console.log(prix);