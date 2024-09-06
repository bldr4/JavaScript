let img = document.querySelectorAll("img");
let choices = document.querySelector("#choices");
let result = document.querySelector("#result");
let score = document.querySelector("#score");
let end = document.querySelector("#end")
let reset = document.querySelector("#reset")
img.forEach(i => {
    i.addEventListener("click", game)   
})
reset.addEventListener("click", function(){
    compteurUser = 0;
    compteurComputer = 0;
    endGame = false;
    choices.innerHTML = "";
    result.textContent = "";
    score.innerHTML = "";
    end.innerHTML = "";
    reset.style.display = "none";
})
const winconditions = {
    "pierre" : "ciseaux",
    "ciseaux" : "feuille",
    "feuille" : "pierre"
}
let compteurUser = 0;
let compteurComputer = 0;
let endGame = false;

function game(event){
    if (!endGame){
        makeChoices(event)
        gameOver();
    }}
    
function makeChoices(e){
    let user = e.target.id ;
    let pfc = ["pierre", "feuille", "ciseaux"];
    let computer = Math.floor(Math.random()*pfc.length);
    checkResult(user, pfc, computer);
}

function checkResult(user, pfc, computer){
    choices.innerHTML = "Vous avez choisi <strong>" + user + " </strong> et la machine a choisi <strong> " + pfc[computer] + "</strong>."
        if (user === pfc[computer]){
            result.textContent = "Match nul!";
            result.style.color = "grey";
        }
        else if (winconditions[user] === pfc[computer]){
            result.textContent = "Vous avez gagné!";
            result.style.color = "green";
            compteurUser++ ;
        }
        else {
            result.textContent = "Vous avez perdu!";
            result.style.color = "red";
            compteurComputer++ ;
        }
        score.innerHTML = "Votre score est de <strong> " + compteurUser + "</strong>.";
        score.innerHTML += " Le score de l'ordinateur est de <strong> " + compteurComputer + "</strong>.";
}

function gameOver(){
    if (compteurComputer === 5 || compteurUser ===5){
        end.innerHTML = "<img src='ressources/arbitre.jfif'>";
        end.innerHTML += (compteurUser === 5)
        ? "<span style='color: green'>Vous avez <strong>gagné</strong>!</span>" 
        : "<span style='color: red;'>Vous avez <strong>perdu</strong>.</span>"   
   //stop le click quand la partie est terminé
    endGame = true;
    reset.style.display = "inline-block";
    // img.forEach(i => {
    //     i.removeEventListener("click", game)
    // })         
}
}
