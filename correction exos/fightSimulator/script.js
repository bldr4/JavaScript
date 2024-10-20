class Personnage {
  #pseudo;
  #classe;
  #sante;
  #attaque;
  #niveau;

  constructor(pseudo, classe, sante, attaque) {
    this.#pseudo = pseudo;
    this.#classe = classe;
    this.#sante = this.#chargerSante() || sante;
    this.#attaque = attaque;
    this.#niveau = 1;
  }

  getPseudo() {
    return this.#pseudo;
  }

  setPseudo(value) {
    this.#pseudo = value;
  }

  getClasse() {
    return this.#classe;
  }

  setClasse(value) {
    this.#classe = value;
  }

  getSante() {
    return this.#sante;
  }

  setSante(value) {
    this.#sante = value;
    this.#sauvegarderSante(); 
  }

  getAttaque() {
    return this.#attaque;
  }

  setAttaque(value) {
    this.#attaque = value;
  }

  getNiveau() {
    return this.#niveau;
  }

  setNiveau(value) {
    this.#niveau = value;
  }

  getInformations() {
    return `${this.getPseudo()} (${this.getClasse()}) a ${this.getSante()} points de vie et est au niveau ${this.getNiveau()}.`;
  }

  evoluer() {
    this.setNiveau(this.getNiveau() + 1);
    console.log(`${this.getPseudo()} passe au niveau ${this.getNiveau()} !`);
  }

  verifierSante() {
    if (this.getSante() <= 0) {
      this.setSante(0);
      console.log(`${this.getPseudo()} a perdu !`);
      return true;  
    }
    return false; 
  }


  #sauvegarderSante() {
    localStorage.setItem(this.getPseudo() + '_sante', this.getSante());
  }

  #chargerSante() {
    return parseInt(localStorage.getItem(this.getPseudo() + '_sante'), 10);
  }
}

class Magicien extends Personnage {
  constructor(pseudo, classe = "magicien", sante = 170, attaque = 90) {
    super(pseudo, classe, sante, attaque);
  }

  attaquer(personnage) {
    personnage.setSante(personnage.getSante() - this.getAttaque());
    console.log(`${this.getPseudo()} attaque ${personnage.getPseudo()} en lançant un sort (${this.getAttaque()} dégâts)`);
    if (personnage.verifierSante()) {
      this.evoluer();  
    }
  }

  coupSpecial(personnage) {
    personnage.setSante(personnage.getSante() - this.getAttaque() * 5);
    console.log(`${this.getPseudo()} attaque avec son coup spécial puissance des arcanes ${personnage.getPseudo()} (${this.getAttaque() * 5} dégâts)`);
    if (personnage.verifierSante()) {
      this.evoluer();  
    }
  }
}

class Guerrier extends Personnage {
  constructor(pseudo) {
    super(pseudo, "guerrier", 350, 50);
  }

  attaquer(personnage) {
    personnage.setSante(personnage.getSante() - this.getAttaque());
    console.log(`${this.getPseudo()} attaque ${personnage.getPseudo()} avec son épée (${this.getAttaque()} dégâts)`);
    if (personnage.verifierSante()) {
      this.evoluer(); 
    }
  }

  coupSpecial(personnage) {
    personnage.setSante(personnage.getSante() - this.getAttaque() * 5);
    console.log(`${this.getPseudo()} attaque avec son coup spécial haches de guerre ${personnage.getPseudo()} (${this.getAttaque() * 5} dégâts)`);
    if (personnage.verifierSante()) {
      this.evoluer(); 
    }
  }
}

// Exemple d'utilisation
var gandalf = new Magicien('Gandalf', 'magicien', 200, 100);
var thor = new Guerrier('Thor');


gandalf.attaquer(thor);
thor.attaquer(gandalf);

console.log(thor.getInformations());
console.log(gandalf.getInformations());
