// SetTimeOut(callback, temps d'execution) et Setnterval()
// setTimeout(function() {
//     console.log('Hello');
// }, 2000);

// for(let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
        
//     }, 1000);
// }

// setInterval
// setInterval(function() {
//     console.log('Hello');
// }, 2000);
// exemple de clearInterval
// let compteur = 0;
// let inter = setInterval(function() {
//     if(compteur < 5){
//         compteur++;
//         console.log(compteur);
//     }else{
//         console.log('fin');
//         clearInterval(inter);
//     }
// }, 1000);

// Les requêtes asynchrones : ce sont des requêtes qui ne bloquent pas l'exécution du code et s'exécutent en parallèle.

// exemple synchrone
// console.log('Le premier client commence ses achats');
// for(let i = 0; i < 10; i++){
//     console.log('Le premier client est en train de payer');
// }
// console.log('Le premier client a fini ses achats');    
// console.log('Le deuxième client commence ses achats');
// exemple asynchrone
// function payer(callback){
//     setTimeout(() => {
//         for(let i = 0; i < 10; i++){
//             console.log('Le premier client est en train de payer');
//         }

//     let client = 'Le premier client a fini ses achats';
//     callback(client);
//     }, 0);
// }
// payer(function(res){
//     console.log(res);
// });
// console.log('Le deuxième client commence ses achats');


// Les promesses : les promesses sont des objets qui représentent l'achèvement ou l'échec d'une opération asynchrone.

// let prom = new Promise((resolve, reject) => {
// console.log('La promesse est en cours de traitement');
// resolve('La promesse est résolue');
// reject('La promesse est rejetée');
// });

// Réagir à une promesse
// prom.then((res) => {
//     console.log(res);
//     return 'La promesse est résolue2';
// })
// .then((val)=> {
//     console.log('un autre message ' + val);
// })
// .catch((err) => {
//     console.log(err);
// });

// Réagir à plusieurs promesses
// function foo(maVar){
// let prom2 = new Promise((resolve, reject) => {
//     console.log(maVar);
//     resolve('prom2 résolue');
//     });

// let prom3 = new Promise((resolve, reject) => {
//     console.log(maVar);
//     reject('prom3 rejettée');
//     });

//     Promise.all([prom2, prom3])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// }

// foo('test de promesses multiples');

//  Exemple chargement de script via une promesse 

function loadScript(script){
return new Promise((resolve, reject) => {
    let scriptEl = document.createElement('script');
    scriptEl.src = script;
    document.body.appendChild(scriptEl);

    scriptEl.addEventListener('load', () => {
        resolve('Le fichier ' + script + ' a été chargé');
    });

    scriptEl.addEventListener('error', () => {
        reject(new Error('Opératopn impossible pour le fichier ' + script));
    });
});
}

// Réagir à la promesse avec .then et .catch
// loadScript('script2.js')
// .then((res) => {
//     console.log(res);
//     return res
// })
// .then((val) => {
//     console.log('un autre message ' + val);
// })
// .catch((err) => {
//     console.log(err);
// });

// Réagir à la promesse avec async et await 

// async function loadAllScripts(){
//     try{
//         let script1 = await loadScript('script2.js');
//         console.log(script1);
        
//         let script2 = await loadScript('script3.js');
//         console.log(script2);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// loadAllScripts();

