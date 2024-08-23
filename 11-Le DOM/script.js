// Séletionner un élement du DOM

// Récupère le premier p dans l'ordre du document 
let p = document.querySelector('p');
// Récupère tous les p sous forme de NodeList( tableau)
let pAll = document.querySelectorAll('p');
// Sélectionner une classe
let container = document.querySelector('.container');
// Sélectionner un id
let logo = document.querySelector('#logo');
// Sélectionner un attribut html comme un dataset 
let btn = document.querySelector('button[data-test="4"]');
console.log(btn);

// Modifier un élément du DOM
let title = document.querySelector('h1');
// modifier le contenu textuel
title.textContent = 'Nouveau titre';

// modifier le contenu html
title.innerHTML = "<span style='color:red'>Hello World</span>";

// Modifier toutes les listes à puces
let liste = document.querySelectorAll('.item');
liste.forEach(item => item.textContent = 'Nouveau texte');
// Equivalent
liste.forEach(function(item){
item.textContent = 'Nouveau texte'
});

//  Créer un élément et l'ajoiuter au DOM
let text1 = document.createElement('p');
text1.textContent = 'MON PREMIER TEXTE';
// ajoute l'élement à la fin de l'élément container
container.append(text1);

let text2 = document.createElement('p');
text2.textContent = 'MON DEUXIEME TEXTE';
// ajoute un ou plusieurs élements au début de l'élément container
container.prepend(text2);

// Ajouter un ou plusieurs éléments à la fin de l'élément container
container.prepend(text1, text2);
// Ajoute un seul élément à la fin de l'élément container
container.appendChild(text1);


// Supprimer un élément du DOM
// title.remove();


//  AJouter du style CSS via JS 
let head = document.querySelector('header');
head.style.backgroundColor = 'red';
// autre syntaxe

document.querySelector('header').style.backgroundColor = 'blue';

// Ajouter une classe CSS
// className: va venir supprimer les autres classes déjà présentes sur l'élément.
// title.className = 'colorBlue'
// classList : add -> AJoute simplement la nouvelle classe sans écraser mes autres.
title.classList.add('colorBlue');
// replace(élémet à remplacer, élément de remplacement)
title.classList.replace('colorBlue', 'colorRed');
//  supprimer une classe
title.classList.remove('text');
//  contains : vérifie si une classe est présente
if(title.classList.contains('colorRed')){
    console.log('La classe est présente');
}

//  Faire un toggle
document.querySelector('.myBtn').addEventListener('click', () => {
    let el = document.querySelector('.ele');
    if(el.classList.contains('hidden')){
        el.classList.remove('hidden');
    }else{
        el.classList.add('hidden');
    }
});
//  Même chose avec la méthode toggle()
document.querySelector('.myBtn').addEventListener('click', () => {
    let el = document.querySelector('.ele');
    el.classList.toggle('hidden');
});