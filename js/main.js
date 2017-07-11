var choix = document.querySelectorAll("button");
var utilisateur = prompt("Entrez votre pseudo");


document.querySelector(".utilisateur").innerHTML = utilisateur;

 for (let i = 0; i < choix.length; i++){
 choix[i].addEventListener("click", function() {
   var joueur = choix[i].firstElementChild.alt;
   var boutonOrdinateur = choix[Math.floor(Math.random() * choix.length)];
   var resultat;
var ordinateur =  boutonOrdinateur.firstElementChild.alt;
var image =  boutonOrdinateur.innerHTML;
 



var resultatjoueur=0;
var resultatordi=0;



       if (joueur === ordinateur){
           resultat = "Egalite";
       }
         else if (joueur === "ciseaux"){
          if (ordinateur === "pierre"){
         resultatordi++; resultat = "Ordinateur a gagne";
          }
           else {
         resultatjoueur++; resultat = "Joueur a gagne";
           }
         }

         else if (joueur === "feuille"){
          if (ordinateur === "pierre"){
          resultatjoueur++; resultat = "Joueur a gagne";
          }
           else {
          resultatordi++; resultat = "Ordinateur a gagne";
           }
         }

         else if (joueur === "pierre"){
          if (ordinateur === "ciseaux"){
          resultatjoueur++; resultat = "Joueur a gagne";
          }
           else {
          resultatordi++;  resultat = "Ordinateur a gagne";
           }
       }

document.querySelector(".resultat").innerHTML = `
${joueur}
${resultat}
${image}
`;
})
}
