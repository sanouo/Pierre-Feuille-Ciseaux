var choix = document.querySelectorAll("button");
var utilisateur = prompt("Entrez votre pseudo");
document.querySelector(".utilisateur").innerHTML = ` ${utilisateur} `;
 for (let i = 0; i < choix.length; i++){
 choix[i].addEventListener("click", function() {
   var joueur = choix[i].innerHTML;
   var ordinateur = choix[Math.floor(Math.random() * choix.length)].innerHTML;
   var resultat;
     if (joueur === ordinateur)
       resultat = "Vous avez fait une egalité !";
     else if ((joueur === "pierre" && ordinateur === "ciseaux") || (joueur === "feuille" && ordinateur === "pierre") || (joueur === "ciseaux" && ordinateur === "feuille"))
       resultat = "Vous avez gagné !";
    else
       resultat = "Vous avez perdu !";
document.querySelector(".resultat").innerHTML = `
 ${utilisateur} : ${joueur}
 Ordinateur a choisi : ${ordinateur}
 ${resultat}
 `;
})
}
