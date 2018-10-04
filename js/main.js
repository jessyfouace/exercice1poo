// function homme (prenom, nom, pays, age, payement) {
//   this.prenom = "Jessy";
//   this.nom = "Fouace";
//   this.pays = "France";
//   this.age = 19;
//   this.payement = ["visa", "mastercard"];
//   this.getName = function() {
//     alert(this.prenom);
//     alert(this.nom);
//     var calculage = 2018 - this.age;
//     alert("Vous êtes née en: " + calculage);
//   };
//   getName();
// }
// homme();


function homme (prenom, nom, pays, age, payement) {
  var name = prompt("Quel est votre prénom ?");
  this.prenom = name;
  var surname = prompt("Quel est votre nom ?");
  this.nom = surname;
  var lives = prompt("Dans quel pays résidez vous ?");
  this.lives = ["France", "Angleterre"];
  var age = prompt("Quel âge avez vous ?");
  this.age = age;
  var payement = prompt("Choisisez un moyen de payement (visa, mastercard)");
  this.payement = ["visa", "mastercard"];
  this.getName = function() {
    var calculage = 2018 - this.age;
    for (var i = 0; i < this.payement.length; i++) {
      if (payement == this.payement[i] && lives == this.lives[i] && calculage > 18) {
        alert("Bonjour " + this.prenom + " " + this.nom + ". Vous êtes née en: " + calculage + ". Et vous habitez en: " + lives);
      } else {
        alert("Le moyen de payement ou le lieu d'habitation ne sont pas bon.")
      }
    }
      if (calculage < 18) {
        alert("Vous n'avez pas l'âge requis pour avoir accès à ce site.");
      }
  };
  getName();
}
homme();
