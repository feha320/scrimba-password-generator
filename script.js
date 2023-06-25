const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const characters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const pwLength = document.getElementById("length-counter");

const checkBoxUpper = document.getElementById("checkbox-uppercase")
const checkBoxLower = document.getElementById("checkbox-lowercase")
const checkBoxNumbers = document.getElementById("checkbox-numbers")
const checkBoxCharacters = document.getElementById("checkbox-characters")

let passwordArray = [];
let lengthVal = 10;

const generatePasswordBtn = document.getElementById("generate-password");
const copyPasswordBtn = document.getElementById("copy-password");

// Passwortlänge updaten
function updateLength(input) {
  lengthVal = input.value;
  pwLength.textContent = lengthVal;
}


// zu viel if ... verbessern?
function generatePassword() {
  passwordArray = [];

  if (checkBoxUpper.checked) {
    passwordArray = passwordArray.concat(uppercase);
  }
  if (checkBoxLower.checked) {
    passwordArray = passwordArray.concat(lowercase);
  }
  if (checkBoxNumbers.checked) {
    passwordArray = passwordArray.concat(numbers);
  }
  if (checkBoxCharacters.checked) {
    passwordArray = passwordArray.concat(characters);
  }
  
  console.log(passwordArray);
  console.log(lengthVal);


}



function copyPassword() {
  console.log("kopiert")
}