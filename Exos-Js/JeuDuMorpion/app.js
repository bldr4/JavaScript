// Dans le htlm définir un index pour chaque case du jeu en utilisant l'attribut data-index exemple : <div class="case" data-index="0"></div> cela permettra de récupérer l'index de la case cliquée et de l'associer aux indices du tableau currentGame.

// Dans le JS 
// Définir une variable qui permet de savoir quel joueur doit jouer au début du jeu ( deux joueur X et O)

// Mettre à jour le texte avec le nom du joueur actuel 

// Récupèrer toutes les cases du jeu .

// Ajouter un écouteur d'événement "click" sur chaque case. 
// la fonction callBack de l'évenement va :
// - récupérer l'index de la case cliquée grace à la méthode getAttribute pour récuprér la valeur de l'attribut data-index
// - vérifier si la case est vide 
// - si la case est vide on met à jour le tableau currentGame avec la valeur du joueur actuel
// - on met à jour le texte de la case avec la valeur du joueur actuel
// - faire appelle à la fonction verification pour vérifier si le joueur a gagné ou si le match est nul

// Définir une fonction verification qui va vérifier si le joueur a gagné ou si le match est nul, pour ce faire vous allez:
// - parcourir le tableau winningCombinations
// - pour chaque combinaison gagnante, récupérer les valeurs correspondantes dans le tableau currentGame en utilisant les index de la combinaison
// - si l'une des cases est vide, on passe à la combinaison suivante
// - si les trois cases sont identiques et non vides, le joueur a gagné
// - si toutes les cases sont prises et qu'il n'y a pas de gagnant, le match est nul
// - Finalement faire appel à la fonction qui permet de passer au joueur suivant

// Définir une fonction qui permet de passer au joueur suivant, cette fonction va :
// - vérifier si le joueur actuel est X ou O et mettre à jour la variable qui permet de savoir quel joueur doit jouer
// - mettre à jour le texte avec le nom du joueur actuel.



// ps : 
// currentGame va contenir les valeurs des cases du jeu.cases.
// winningCombinations les combinaisons gagnantes.


const currentGame = ["","","","","","","","",""];


const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


