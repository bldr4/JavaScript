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

let currentPlayer = "X";
const message = document.querySelector('.message');
message.textContent = "au tour de : " + currentPlayer ;

const cells = document.querySelectorAll('.box');
cells.forEach(cell=> cell.addEventListener("click", submitClick));

function submitClick(event){
const boxIndex = event.target.getAttribute("data-index");
if(currentGame[boxIndex] !== ""){
    return;
}
currentGame[boxIndex] = currentPlayer;
const symbol = event.target
symbol.textContent = currentPlayer ;
//vérification comabinaison gagnante

for (let i = 0; i < winningCombinations.length ; i++ ){
    let currenCombination = winningCombinations[i];
    let a = currentGame[currenCombination[0]];
    let b = currentGame[currenCombination[1]];
    let c = currentGame[currenCombination[2]];
    if (a === "" || b ==="" || c ==="" ){
        continue;
    }
    else if( a === b && b === c){
        message.textContent ="le joueur " + currentPlayer + " à gagner";
        cells.forEach(cell=> cell.removeEventListener("click", submitClick));
        currenCombination.forEach(val =>{
            document.querySelector(`[data-index="${val}"]`).style.backgroundColor ="red";
        })
        return;
    }
}
if(currentGame.every(cell => cell !== "")){
    message.textContent =" Match nul ";
    cells.forEach(cell => cell.removeEventListener("click", submitClick));
    return;
}
playerNext();

}

//changement de joueur
function playerNext(){
    if(currentPlayer === "O"){
        currentPlayer = "X" ;
    }
    else{
        currentPlayer = "O";
    }
    message.textContent = "au tour de  : " + currentPlayer;
}

//reset game
document.addEventListener("keydown", e =>{
    if(e.key === "R" || e.key === "r" ){
        reset();
    }
})
function reset(){
    currentPlayer === "X";
    currentGame.forEach( ( _, index) => {
        currentGame[index] = "";
    })
    message.textContent = " au tour de : " + currentPlayer;
    cells.forEach(cell =>{
        cell.textContent = "";
        cell.style.backgroundColor ="#090f29";
    });
    cells.forEach(cell=> cell.addEventListener("click", submitClick));



}