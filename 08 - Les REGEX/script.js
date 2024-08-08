
//  Les regex 

let str3 = 'lorem ipsum dolor sit amet4';
let regex = /a/;
// Le marqueur g permet de rechercher toutes les occurences
let regex = /[oea]/g;
// Vérifier la présence d'un caractère de a à z en minuscule
let regex = /[a-z]/g;
let regex = /[a-zA-Z]/g;
// Vérifier la présence de tous les caractères sauf ceux de a à z en minuscule
let regex = /[^a-z]/g;
// Vérifier la présence de chiffres de 0 à 9
let regex = /\d/g;
// equivalent 
let regex = /[0-9]/g;
// vérifier la présence d'espace 
let regex = /\s/g;
// chercher toutes les lettres et chiffres
let regex =/[a-zA-Z0-9]/g
// equivalent
let regex =/[\w]/g
// Match(pattern) renvoi un tableau contenant les occurences trouvées
console.log(str3.match(regex));

//  Les groupes 
let date = '01-02-2021';
let regex = /(?<day>\d{2})-(?<month>\d{2})-(?<year>\d{4})/;
console.log(date.match(regex));

//  la méthode pattern.test(element à tester) renvoi true ou false
let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
let email = 'exemple@test.com';
// console.log(emailRegex.test(email))

// au mini 1 maj 2 chiffres et 1 caractère spécial et 8 caractères
let pwdRegex = /^(?=.*[A-Z])(?=.*\d{2})(?=.*[!@#$^&*]).{8,}$/
let mdp = 'Exemple1^';
console.log(pwdRegex.test(mdp));