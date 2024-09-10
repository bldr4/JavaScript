// La POO repose sur 4 grands pilliers: l'encapsulation, l'abstraction, l'héritage et le polymorphisme


//  L'héritage
function Animal(nombreDePattes, poids){
    this.nombreDePattes = nombreDePattes;
    this.poids = poids;

    // this.presentation = function(){
    //     console.log("Cet animal a " + this.nombreDePattes + " pattes et pèse " + this.poids + " kg.");
    // }
}
Animal.prototype.presentation = function(){
    console.log("Cet animal a " + this.nombreDePattes + " pattes et pèse " + this.poids + " kg.");
}

function Oiseau(nombreDePattes, poids, longueurDesAiles){
    //  faire hériter les props de function Animal à Oiseau avec la méthode call()
    Animal.call(this, nombreDePattes, poids);
    this.longueurDesAiles = longueurDesAiles;
}
Oiseau.prototype = Object.create(Animal.prototype);
Oiseau.prototype.constructor = Oiseau;


function Mammifere(nombreDePattes, poids,typeDePoils){
    Animal.call(this, nombreDePattes, poids);
    this.typeDePoils = typeDePoils;
}

let perroquet = new Oiseau(2, 1, 'grandes');
console.log(perroquet);
perroquet.presentation();
