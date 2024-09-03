let cube = document.querySelector(".cube");
let rollBtn = document.querySelector(".rollBtn");
let rollUp = document.querySelector(".rollUp");
let rollLeft = document.querySelector(".rollLeft");
let rollRight = document.querySelector(".rollRight");
let rollDown = document.querySelector(".rollDown");
let currentClass = '';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //random() roll un nombre entre 0 et 0.999 donc +min pour que minimum soit 1
  }
  
function rollDice() {
  let randNum =getRandomInt(1,7)//doit mettre 7 car max est exclut vu que arondi à l'entier inferieur
  let showClass = 'show-' + randNum;
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
}

rollBtn.addEventListener("click", rollDice);
// SA MARCHE PO DOMMAGE
function goUp(){
    currentClass === 'show-1'? (cube.classList.replace(currentClass, 'show-5'), currentClass = 'show-5')
    : currentClass === 'show-2'? (cube.classList.replace(currentClass, 'show-6'), currentClass = 'show-6')
    : currentClass === 'show-3'? (cube.classList.replace(currentClass, 'show-5'), currentClass = 'show-5')
    : currentClass === 'show-4'? (cube.classList.replace(currentClass, 'show-5'), currentClass = 'show-5')
    : currentClass === 'show-5'? (cube.classList.replace(currentClass, 'show-2'), currentClass = 'show-2')
    : currentClass === 'show-6'? (cube.classList.replace(currentClass, 'show-1'), currentClass = 'show-1')
    : (cube.classList.add('show-5'), currentClass = 'show-5');
}
rollUp.addEventListener("click", goUp);

function goLeft(){
    currentClass === 'show-1'? (cube.classList.replace(currentClass, 'show-2'), currentClass = 'show-2')
    : currentClass === 'show-2'? (cube.classList.replace(currentClass, 'show-3'), currentClass = 'show-3')
    : currentClass === 'show-3'? (cube.classList.replace(currentClass, 'show-4'), currentClass = 'show-4')
    : currentClass === 'show-4'? (cube.classList.replace(currentClass, 'show-5'), currentClass = 'show-5')
    : currentClass === 'show-5'? (cube.classList.replace(currentClass, 'show-6'), currentClass = 'show-6')
    : currentClass === 'show-6'? (cube.classList.replace(currentClass, 'show-1'), currentClass = 'show-1')
    : (cube.classList.add('show-2'), currentClass = 'show-2');
}
rollLeft.addEventListener("click", goLeft);

function goRight(){
    currentClass === 'show-1'? (cube.classList.replace(currentClass, 'show-2'), currentClass = 'show-2')
    : currentClass === 'show-2'? (cube.classList.replace(currentClass, 'show-3'), currentClass = 'show-3')
    : currentClass === 'show-3'? (cube.classList.replace(currentClass, 'show-4'), currentClass = 'show-4')
    : currentClass === 'show-4'? (cube.classList.replace(currentClass, 'show-5'), currentClass = 'show-5')
    : currentClass === 'show-5'? (cube.classList.replace(currentClass, 'show-6'), currentClass = 'show-6')
    : currentClass === 'show-6'? (cube.classList.replace(currentClass, 'show-1'), currentClass = 'show-1')
    : (cube.classList.add('show-2'), currentClass = 'show-2');
}
rollRight.addEventListener("click", goRight);

function goDown(){
    currentClass === 'show-1'? (cube.classList.replace(currentClass, 'show-2'), currentClass = 'show-2')
    : currentClass === 'show-2'? (cube.classList.replace(currentClass, 'show-3'), currentClass = 'show-3')
    : currentClass === 'show-3'? (cube.classList.replace(currentClass, 'show-4'), currentClass = 'show-4')
    : currentClass === 'show-4'? (cube.classList.replace(currentClass, 'show-5'), currentClass = 'show-5')
    : currentClass === 'show-5'? (cube.classList.replace(currentClass, 'show-6'), currentClass = 'show-6')
    : currentClass === 'show-6'? (cube.classList.replace(currentClass, 'show-1'), currentClass = 'show-1')
    : (cube.classList.add('show-2'), currentClass = 'show-2');
}
rollDown.addEventListener("click", goDown);
