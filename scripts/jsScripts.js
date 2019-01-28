var alreadyScrolled = false;
  window.addEventListener('scroll', function() {
    if (Math.round(window.scrollY > 400)) {
      document.getElementById("navbar").classList.add("otherNav");
      alreadyScrolled = true;
    } else {
      document.getElementById("navbar").classList.remove("otherNav");
      if (alreadyScrolled){
        document.getElementById("navbar").classList.add("fuera");
      }
    }
  });

// Comprueba si un string tiene números. @param string @return true si tiene números, false en caso contrario
function haveNumbers(input) {
  var searhNumbers = /\d/g;
  var result = input.match(searhNumbers);
  if (result == null){
    return false;
  } else {
    return true;
  }
}
if (true) {

} else {

}
/*
 *  Comprueba si un string tiene letras @param string
 *  @param string
 *  @return true si tiene letras, false en caso contrario
*/
function haveLetters(input){
  var searchLetters = /\D/g;
  var result = input.match(searchLetters);
  if (result == null){
    return false;
  } else {
    return true;
  }
}
/*
 *  Comprueba si un string tiene la forma string@string.string sin espacios en blanco.
 *  @param string
 *  @return true si tiene la forma especificada y sin espacios, false en caso contrario
*/
function validEmail(input){
  var searchEmail = /\S+@\S+\.\S+/g;
  var result = input.match(searchEmail);
  var space = input.indexOf(" ");
  if (result == null != space >= 0){
    return false;
  } else {
    return true;
  }
}
/* Comprobamos si se ha selecionado un Radio o un CheckBox. Se recorre la lista de botones y se
 * comprueba si hay alguno seleccionado.
 * @param array
 * @return true si hay aguno selecionado, false en caso contrario
 */
function validateRadioCheck(input){
  var isChecket = false
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      isChecket = true;
      break;
    }
  }
  return isChecket;
}

/*
 *  Valida todo el formulario. No permite el envío de datos hasta que esté
 *  correctamente cumplimentado
*/

function validate(){
  var firstName = document.getElementById('firstName').value.trim();
  var lastName = document.getElementById('lastName').value.trim();
  var addres = document.getElementById('addres').value.trim();
  var city = document.getElementById('city').value.trim();
  var zipCode = document.getElementById('zipCode').value.trim();
  var birtDate = document.getElementById('birtDate')
  var gender = document.getElementsByName('gender');
  var grade = document.getElementsByName('grade');
  var parent = document.getElementById('parent').value.trim();
  var email = document.getElementById('email').value.trim();
  var firstClosestSchool = document.getElementsByName('first_closest_school');
  var secondClosestSchool = document.getElementsByName('second_closest_school');
  var normallyPlay = document.getElementsByName('normally_play');
  var wantPlay = document.getElementsByName('want_to_play');
  var haveUniform = document.getElementsByName('name');
  var jerseySize = document.getElementsByName('jersey_size');
  var shortSize = document.getElementsByName('shorts_size');

  var allCorrect = true;
  var warningMessage = "";

  if (haveNumbers(firstName)){
    allCorrect = false;
    warningMessage = warningMessage + "First Name can not contain numbers\n";
  }
  if (haveNumbers(lastName)) {
    allCorrect = false;
    warningMessage = warningMessage + "Last Name can not contain numbers\n";
  }
  if (haveNumbers(city)) {
    allCorrect = false;
    warningMessage = warningMessage + "City can not contain numbers\n";
  }
  if (!validateRadioCheck(gender)) {
    allCorrect = false;
    warningMessage = warningMessage + "Please select Gender\n";
  }
  if (!validateRadioCheck(grade)) {
    allCorrect = false;
    warningMessage = warningMessage + "Please select Grade\n";
  }
  if (haveNumbers(parent)) {
    allCorrect = false;
    warningMessage = warningMessage + "Parent/Guardian can not contain numbers\n";
  }
  if (!validEmail(email)) {
    allCorrect = false;
    warningMessage = warningMessage + "Please enter a valid email\n";
  }
  if (!validateRadioCheck(firstClosestSchool)) {
    allCorrect = false;
    warningMessage = warningMessage + "Please select First Closest School\n";
  }
  if (!validateRadioCheck(secondClosestSchool)) {
    allCorrect = false;
    warningMessage = warningMessage + "Please select Second Closest School\n";
  }
  if (!validateRadioCheck(normallyPlay)) {
    allCorrect = false;
    warningMessage = warningMessage + "Please select position(s) do you normally play\n";
  }
  if (!validateRadioCheck(wantPlay)) {
    allCorrect = false;
    warningMessage = warningMessage + "Please select position(s) do you want to play?\n";
  }
  if (!validateRadioCheck(jerseySize)) {
    allCorrect = false;
    warningMessage = warningMessage + "Please select your Jersey Size\n";
  }
  if (!validateRadioCheck(shortSize)) {
    allCorrect = false;
    warningMessage = warningMessage + "Please select your Short Size\n";
  }

  if (!allCorrect) {
    document.getElementById('register').removeAttribute("action");
    alert(warningMessage);
  }else{
    document.getElementById("register").setAttribute("action", "show_data.html");
  }
}
