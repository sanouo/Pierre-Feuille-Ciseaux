var choix = document.querySelectorAll("button");
var utilisateur = prompt("Entrez votre pseudo");

var resultatjoueur= 0;
var resultatordi= 0;




document.querySelector(".utilisateur").innerHTML = utilisateur;


 for (let i = 0; i < choix.length; i++){
 choix[i].addEventListener("click", function() {
   var joueur = choix[i].firstElementChild.alt;
   var boutonOrdinateur = choix[Math.floor(Math.random() * choix.length)];
   var resultat;
var ordinateur =  boutonOrdinateur.firstElementChild.alt;
var image =  boutonOrdinateur.innerHTML;
var tof = choix[i].innerHTML;

function jeux (){


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

}

jeux();



 document.querySelector(".resultatjoueur").innerHTML = resultatjoueur;
 document.querySelector(".resultatordi").innerHTML = resultatordi;

document.querySelector(".resultat").innerHTML = `
${tof}
${resultat}
${image}
`;
})
}
