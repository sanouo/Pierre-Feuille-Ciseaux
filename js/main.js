var choix = document.querySelectorAll("button");
var utilisateur = prompt("Entrez votre pseudo");

var resultatjoueur= 0;
var resultatordi= 0;
var resultattotal=0;


var personnage = document.getElementById("personnage");
var personnage1 = document.getElementById("personnage1");



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
         resultatordi++; resultat = "Ordinateur a gagne";resultattotal++;
          }
           else {
         resultatjoueur++; resultat = "Joueur a gagne";resultattotal++;
           }
         }

         else if (joueur === "feuille"){
          if (ordinateur === "pierre"){
          resultatjoueur++; resultat = "Joueur a gagne";resultattotal++;
          }
           else {
          resultatordi++; resultat = "Ordinateur a gagne";resultattotal++;
           }
         }

         else if (joueur === "pierre"){
          if (ordinateur === "ciseaux"){
          resultatjoueur++; resultat = "Joueur a gagne";resultattotal++;
          }
           else {
          resultatordi++;  resultat = "Ordinateur a gagne";resultattotal++;
           }
       }

}


if (resultatjoueur === 3 || resultatordi === 3) {

  alert("Fin du game !");

if (resultatjoueur === 3){
  alert("Vous avez gagner");
}
else {
  alert("Vous avez perdu");
}

location.reload();

}

else{
  jeux();
}


if (resultatjoueur === 2 || resultatordi === 2) {
  document.querySelector(".resultatjoueur").innerHTML = resultatjoueur;
  document.querySelector(".resultatordi").innerHTML = resultatordi;
  document.querySelector(".resultat").innerHTML = `
  ${tof}
  ${resultat}
  ${image}
  `;



  if (resultattotal === 2 || resultattotal === 3) {

    alert("Attend je te ramene mon grand frere !");
    alert("ah c est comme sa ! moi aussi");
    resultattotal++;
  }



if (resultatjoueur >= 2 || resultatordi >= 2) {
  personnage.src="img/goku.png";
  personnage1.src="img/naru.png";
}
else {
  personnage.src="img/sangoku.png";
  personnage1.src="img/naruto.jpeg";
}

}
else {

   document.querySelector(".resultatjoueur").innerHTML = resultatjoueur;
   document.querySelector(".resultatordi").innerHTML = resultatordi;

   document.querySelector(".resultat").innerHTML = `
   ${tof}
   ${resultat}
   ${image}
   `;

}



})
}
