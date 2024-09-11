// Créez un simulateur de combat . Vous devrez écrire du programme pour définir deux classes,     Magicien et Guerrier, avec des méthodes pour attaquer un autre personnage et pour évoluer de niveau.

// Instructions :

//    1-  Créer une classe Personnage avec les propriétés suivantes :

//     pseudo : le nom du personnage
//     classe : la classe du personnage 
//     sante : les points de vie du personnage
//     attaque : la puissance d'attaque du personnage
//     niveau : le niveau du personnage, initialisé à 1

//     Ajouter une méthode informations à la classe Personnage qui renvoie une chaîne de caractères contenant les informations suivantes sur le personnage : pseudo, classe, points de vie et niveau.

//     Ajouter une méthode evoluer() à la classe Personnage qui incrémente le niveau du personnage de 1 et affiche une notification de niveau.

//     Ajouter une méthode verifierSante() à la classe Personnage qui vérifie si le personnage est mort (santé <= 0) et affiche une notification si c'est le cas.




//     2- Créer une classe Magicien qui hérite de la classe Personnage avec les propriétés suivantes :

//     sante initialisé à 170
//     attaque initialisé à 90
//     classe initialisé à "magicien"

//     Ajouter une méthode attaquer() à la classe Magicien qui inflige des dégâts à un autre personnage en utilisant une attaque magique et met à jour la santé de l'ennemi. Cette méthode doit également appeler les méthodes evoluer() et verifierSante() du personnage attaqué.

//     Ajouter une méthode coupSpecial() à la classe Magicien qui inflige des dégâts supplémentaires à un autre personnage en utilisant un sort de puissance supérieure et met à jour la santé de l'ennemi. Cette méthode doit également appeler la méthode verifierSante() du personnage attaqué.






//     3- Créer une classe Guerrier qui hérite de la classe Personnage avec les propriétés suivantes :

//     sante initialisé à 350
//     attaque initialisé à 50
//     classe initialisé à "guerrier"

//     Ajouter une méthode attaquer() à la classe Guerrier qui inflige des dégâts à un autre personnage en utilisant une attaque physique et met à jour la santé de l'ennemi. Cette méthode doit également appeler les méthodes evoluer() et verifierSante() du personnage attaqué.

//     Ajouter une méthode coupSpecial() à la classe Guerrier qui inflige des dégâts supplémentaires à un autre personnage en utilisant une arme spéciale et met à jour la santé de l'ennemi. Cette méthode doit également appeler la méthode verifierSante() du personnage attaqué