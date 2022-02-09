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








