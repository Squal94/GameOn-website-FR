function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnClose = document.querySelectorAll(".close"); // ajout du lien vers la class "close" pour la fermeture du formulaire
const inputFirstName = document.querySelector("#first"); 

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close formulaire on click 
btnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function closeModal() {
  modalbg.style.display = "none";
}


// Vérification et validation des champs du formulaire .

// Input firstname .

inputFirstName.addEventListener('change', function () {
  validString(this);
});

const validString = function(input) {
  // Reg Exp validation d'un texte .
  let firstRegExp = new RegExp(
    '^[a-zA-Z0-9-]{2,99}$', 'g'
  );

  // test de la valeur de notre input
  let stringValid = firstRegExp.test(inputFirstName.value);
  let small = inputFirstName.nextElementSibling;

  // condition pour l'affichage d'un test si les valeurs retrées son erroné
  if (stringValid){
    small.style.color = 'green';
    small.style.fontSize = '0.5em';
    small.innerHTML = 'Champ Valide.';
  } else {
    small.style.color = 'red';
    small.style.fontSize = '0.5em';
    small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom !';
  }
};








/* email regexp .
let emailRegExp = new RegExp(
  '^[a-zA-Z0-9.-_]{2,99}[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
); */