var choix = document.querySelectorAll("button");
var utilisateur = prompt("Entrez votre pseudo");


document.querySelector(".utilisateur").innerHTML = utilisateur;

 for (let i = 0; i < choix.length; i++){
 choix[i].addEventListener("click", function() {
   var joueur = choix[i].className;
   var boutonOrdinateur = choix[Math.floor(Math.random() * choix.length)];
   var resultat;
var ordinateur =  boutonOrdinateur.firstElementChild.alt;
var image =  boutonOrdinateur.innerHTML;

var resultatjoueur=0;
var resultatordi=0;

       if (joueur === ordinateur){
           resultat = "egalite";
       }
         else if (joueur === "ciseau"){
          if (ordinateur === "pierre"){
         resultatordi++; resultat = "Ordinateur a gagne";
          }
           else {
         resultatjoueur++; resultat = "joueur a gagne";
           }
         }

         else if (joueur === "feuille"){
          if (ordinateur === "pierre"){
          resultatjoueur++; resultat = "joueur a gagne";
          }
           else {
          resultatordi++; resultat = "Ordinateur a gagne";
           }
         }

         else if (joueur === "pierre"){
          if (ordinateur === "ciseau"){
          resultatjoueur++; resultat = "joueur a gagne";
          }
           else {
          resultatordi++;  resultat = "Ordinateur a gagne";
           }
       }

document.querySelector(".resultat").innerHTML = `
${image}
${resultat}
${image}
`;
})
}
