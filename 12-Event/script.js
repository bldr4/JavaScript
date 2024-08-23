// Ecouteurs sur le script
let a = document.querySelector('.link');
a.onclick = function() {
    if(confirm('Voulez-vous quitter cette page')){
        location.href = 'https://www.google.com';
    }
};

// La même chose mais avec un gestionnaire d'event
a.addEventListener('click', function(event) {
    if(confirm('Voulez-vous quitter cette page')){
        location.href = 'https://www.google.com';
    }
});

//  différence entre mouseenter et mouseover
let btn = document.querySelector('.btn');

btn.addEventListener('mouseover', function() {
    document.body.style.backgroundColor = 'red';
});
btn.addEventListener('mouseout', function() {
    document.body.style.backgroundColor = 'white';
});

// !!!!!!!!!!!!!  A privilégier car pas de propagation d'événement  !!!!!!!!!!!!!!!!!!
btn.addEventListener('mouseenter', function() {
    document.body.style.backgroundColor = 'red';
});
btn.addEventListener('mouseleave', function() {
    document.body.style.backgroundColor = 'white';
});

// Le param event est un objet qui contient des informations sur l'événement

document.addEventListener('keydown', function(event) {
    console.log(event);
});


// Stopper le comportement par defaut d'un élément
let form = document.querySelector('form');
let input = document.querySelector('input');
form.addEventListener('submit', function(e) {
if(input.value === ''){
    e.preventDefault();// empeche le comportement par defaut d'un élement ici le submit
    alert('Veuillez remplir le champ');
}
});


// propagation d'event
let article = document.querySelector('.article');
let titreA = document.querySelector('.Tarticle');

article.addEventListener('click', function() {
    alert('article cliqué');
});

titreA.addEventListener('click', function(e) {
    alert('titre cliqué');
    e.stopPropagation();// empeche la propagation de l'event
});