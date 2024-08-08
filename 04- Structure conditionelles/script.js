// Opérateurs de comparaisons 
let nb = 3;
// On vérfie si nb est égal à la valeur 3 --> true 
if(nb == "3"){
    console.log("true")
}else{
    console.log("false")
}
// On vérifie si nb est égal à la valeur 3 et si nb est de type number --> false 
if(nb === "3"){
    console.log("true")
}else{
    console.log("false")
}

// Exercice diapo 20 
let age = 17;
if(age < 18){
    console.log("Vous êtes mineur")
}else if(age < 21){
    console.log("Vous êtes majeur en France")
}else{
    console.log("Vous êtes majeur partout")
}

//////////////// Les switch //////////////////////
let consommable = "pomme";

switch(consommable){
    case "pomme":
    case "banane":
        console.log("Ceci est un fruit");
        break;

    case "carotte":
    case"courgette":
        console.log("Ceci est un légume");
        break;

    default:
        console.log("Ceci n'est ni un fruit ni un légume");
}

////////////// Les conditions ternaires ///////////
let x = 1;
if(x > 3){
    console.log("x est supérieur à 3");
} else{
    console.log("x est inférieur ou égal à 3");
}

x > 3?console.log("x est supérieur à 3"):console.log("x est inférieur ou égal à 3");

/////////////////  Boucle while et do while //////////////////

let i = 1; 
while(i <= 10){
    console.log(i);
    //  Sur la boucle while pensez à incrémenter le compteur sinon vous aurez une boucle infinie
    i++;
}

// ici même reflexion il faut un compteur pour sortir de la boucle
do{
    console.log(i);
    }while(false);

    //////////////// Boucle for //////////////////
for(let i = 1; i <= 10; i++){
    console.log(i);
}
    //////////////// Break et continue ///////////////////
    let y = 1;
    while(y <= 5){
        // if(y === 3){
        //     break;
        // }
        if(y === 3){
          y++;
            continue
        }
        console.log(`ligne : ${y}`);
        y++;
    }

    ////////////////// Gestion des exceptions //////////////////

    try{
        alert(hello);
    }catch(e){
        console.error(e);
        console.log(e.name);
        console.log(e.message);
    }