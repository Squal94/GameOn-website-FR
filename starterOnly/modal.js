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
const inputLastName = document.querySelector("#last"); 
const inputEmail = document.querySelector("#email"); 


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close formulaire on click 
btnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// fonction pour l'affichage des champs valid ou non .

function smallColorRed (input ,string) {
  let small = input.nextElementSibling;
  small.style.fontSize = '0.5em';
  small.style.color = 'red';
  small.innerHTML = string ;
}

function smallColorGreen (input) {
  let small = input.nextElementSibling;
  small.style.fontSize = '0.5em';
  small.style.color = 'green';
  small.innerHTML = 'Champ Valide';
}

// Fonction condition pour l'affichage des sous texte .
//Question je ne peux pas crée des fonctions pour les if else parce qu'il y a deja des argument a placer pour les fonctions smallColor ?


// Vérification et validation des champs du formulaire .

// Input firstName et lastName .

inputFirstName.addEventListener('change', function () {
  validString(this);
});

const validString = function() {
  // Reg Exp validation d'un texte .
  let firstRegExp = new RegExp(
    '^[a-zA-Z0-9-]{2,99}$', 'g'
  );

    // test de la valeur de notre input
    let stringValid = firstRegExp.test(inputFirstName.value);
  
    // condition pour l'affichage d'un test si les valeurs retrées son erroné
    if (stringValid){
      smallColorGreen(inputFirstName) ;
    } else {
      smallColorRed(inputFirstName, 'Veuillez entrer 2 caractères ou plus pour le champ du nom !') ;
    }
};


// input Last name

inputLastName.addEventListener('change', function () {
  validString2(this);
});

const validString2 = function() {
  let firstRegExp = new RegExp(
    '^[a-zA-Z0-9-]{2,99}$', 'g'
  );
    let stringValid2 = firstRegExp.test(inputLastName.value);
  
    if (stringValid2){
      smallColorGreen(inputLastName) ;
    } else {
      smallColorRed(inputLastName, 'Veuillez entrer 2 caractères ou plus pour le champ du nom !') ;
    }
};

// input Email


inputEmail.addEventListener('change', function () {
  validEmail(this);
});

const validEmail = function() {
  let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]{2,99}[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
  );
    let emailValid = emailRegExp.test(inputEmail.value);
  
    if (emailValid){
      smallColorGreen(inputEmail) ;
    } else {
      smallColorRed(inputEmail, 'Veuillez entrer une adresse email valide (xyz@exemple.com) !') ;
    }
};















/* email regexp .
let emailRegExp = new RegExp(
  '^[a-zA-Z0-9.-_]{2,99}[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
); */