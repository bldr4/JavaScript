const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

//  Gérez les inputs, retrouvez leur valeur dans votre script quand on clique sur le bouton.
//  Faites une validation basique, empêchez le calcul si l'utilisateur laisse un ou deux inputs vides. 
// Montrez également un message pour l'informer de l'erreur (ex : "Veuillez remplir les inputs").
//  Calculez l'IMC avec les valeurs rentrées.
//  Calculez le rang de l'IMC par rapport à "IMCData"
//  Remplissez l'interface en fonction des résultats
   