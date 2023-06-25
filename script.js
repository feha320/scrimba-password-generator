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
// jedes Array 3x hinzugefügt, um z.B. 25-stelliges Passwort aus Zahlen zu ermöglichen
function generatePassword() {
  passwordArray = [];
  checkNum = 0;

  if (checkBoxUpper.checked) {
    passwordArray = passwordArray.concat(uppercase, uppercase, uppercase);
    checkNum += 1;
  }
  if (checkBoxLower.checked) {
    passwordArray = passwordArray.concat(lowercase, lowercase, lowercase);
    checkNum += 1;
  }
  if (checkBoxNumbers.checked) {
    passwordArray = passwordArray.concat(numbers, numbers, numbers);
    checkNum += 1;
  }
  if (checkBoxCharacters.checked) {
    passwordArray = passwordArray.concat(characters, characters, characters);
    checkNum += 1;
  }
  if (checkNum === 0) {
    copyPasswordBtn.textContent = "HALT";
    return;
  }
  console.log(checkNum);
  console.log(lengthVal);
  console.log(passwordArray);

  // Fisher-Yates-Sorting-Algorithm
  // kopiert/übernommen, nicht selbst erarbeitet
  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

  shuffledArray = shuffle(passwordArray);

  console.log(shuffledArray);

  // Passwort kürzen
  finishedPassword = ""
  for (let i = 0; i < lengthVal; i++) {
    finishedPassword += shuffledArray[i];
    console.log(finishedPassword);
  }

  copyPasswordBtn.textContent = finishedPassword;
}



function copyPassword() {
  console.log("kopiert")
}