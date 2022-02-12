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
const inputBirthdate = document.querySelector("#birthdate"); 
const inputQuantity = document.querySelector("#quantity"); 
const inputLocalisation = document.querySelector(".checked2"); 
const inputObligatoire = document.querySelector("#checkbox1");
const CheckValidation = document.querySelector(".checkbox2-label");
const reserve = document.querySelector("#reserve");


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
  small.innerHTML = 'Valid';
}

 // Input firstName  .

  inputFirstName.addEventListener('change',function () {
    validString();
    
  });

    function validString () {
        // test de la valeur de notre input
        let firstRegExp = new RegExp('^[a-zA-Z0-9-]{2,99}$', 'g');
        let stringValid = firstRegExp.test(inputFirstName.value);
        // condition pour l'affichage d'un test si les valeurs retrées son erroné
        if (!stringValid){
          smallColorRed(inputFirstName, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom !') ;
          return false ;
        } else {
          smallColorGreen(inputFirstName) ;
          return true ;
        }
    };

// input lastName

  inputLastName.addEventListener('change', function () {
    validString2();
  });

    function validString2 () {
        let firstRegExp = new RegExp('^[a-zA-Z0-9-]{2,99}$', 'g');
        let stringValid2 = firstRegExp.test(inputLastName.value);
              
        if (!stringValid2){
          smallColorRed(inputLastName, 'Veuillez entrer 2 caractères ou plus pour le champ du nom !') ;
          return false ;
        } else {
          smallColorGreen(inputLastName) ;
          return true ;
        };
        
    };
// input Email

  inputEmail.addEventListener('change', function () {
    validEmail();
  });
        
    function validEmail () {
        let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]{2,99}[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
        let emailValid = emailRegExp.test(inputEmail.value);
              
        if (!emailValid ){
          smallColorRed(inputEmail,'Veuillez entrer une adresse email valide (xyz@exemple.com)!') ; 
          return false ;
        } else {
          smallColorGreen (inputEmail);
          return true ;
        }
    };
      
// input Date de naissance 

  inputBirthdate.addEventListener('change', function () {
    validDate();
  });

    function validDate () {
        let dateRegExp = new RegExp('^[0-9]{4}[/-]{1}[0-9]{2}[/-]{1}[0-9]{2}$');
        let dateValid = dateRegExp.test(inputBirthdate.value);
              
        if (!dateValid){
          smallColorRed(inputBirthdate, 'Veuillez entrer une date de naissance valide (jj/mm/aaaa) !') ;
          return false ;
        } else {
          smallColorGreen(inputBirthdate) ;
          return true ;
        }
    };


// input Nombre de concour 

  inputQuantity.addEventListener('change', function () {
    validQuantity();
  });

    function validQuantity () {
        let quantityRegExp = new RegExp('^[0-9]{1,2}$', 'g');
        let quantityValid = quantityRegExp.test(inputQuantity.value);
              
        if (!quantityValid){
          smallColorRed(inputQuantity, 'Veuillez entrer une valeur numérique entre zéro - 99 !') ;
          return false ;
        } else {
          smallColorGreen(inputQuantity) ;
          return true ; 
        }
    };


// input checked box selection


  inputLocalisation.addEventListener('change', function () {
    validLocalisation();
  });

    function validLocalisation () {

      const local1 = document.querySelector('#location1').checked;
      const local2 = document.querySelector('#location2').checked;
      const local3 = document.querySelector('#location3').checked;
      const local4 = document.querySelector('#location4').checked;
      const local5 = document.querySelector('#location5').checked;
      const local6 = document.querySelector('#location6').checked;

      if (!local1 && !local2 && !local3 && !local4 && !local5 && !local6 ) { // Ici on lui indique que si toutes les valeurs sont fausses alors on entre le texte suivant .
        smallColorRed(inputLocalisation, 'Veuillez cocher au moin un concour !') ;
        return false ;
      } else {
        smallColorGreen(inputLocalisation);
        return true ;
      }
    };


// input lu et accepter 
        
  inputObligatoire.addEventListener('change' , function () {
    validLu();
  });

  function validLu () {

    let validObligatoire = inputObligatoire.checked;

    if (validObligatoire){
      smallColorGreen(CheckValidation);
      return true ;
    } else {
      smallColorRed(CheckValidation , 'Ce champ est requis !') ;
      return false ;
    }
  };


        
reserve.addEventListener("submit" , validate);

    function validate(e) {
    if( validString(inputFirstName) && validString2(inputLastName) && validEmail(inputEmail) && validDate(inputBirthdate) && validQuantity(inputQuantity) && validLocalisation(inputLocalisation) && validLu(inputObligatoire)) {
        reserve.submit();
        alert("Votre formulaire a bien été envoyé");
      } else {
         alert("Vous devez remplir tous les champs");
        e.preventDefault();
      }
    };


  



/*

  inputEmail.addEventListener('change', function () {
    validEmail();
  });

  const validEmail = function() {
    let emailRegExp = new RegExp(
      '^[a-zA-Z0-9.-_]{2,99}[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
    );
      let emailValid = emailRegExp.test(inputEmail.value);
    
      if (!emailValid ){
        smallColorRed(inputEmail, 'Veuillez entrer une adresse email valide (xyz@exemple.com) !') ; 
      } else {
        smallColorGreen (inputEmail);
      }
      return emailValid;
  };

*/