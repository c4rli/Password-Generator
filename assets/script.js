// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var allowedCharacters = {
  specialCharacters: specialCharacters,
  numericCharacters: numericCharacters,
  lowerCasedCharacters: lowerCasedCharacters,
  upperCasedCharacters: upperCasedCharacters
}

function randomizer(limit) {
  return Math.floor(Math.random() * limit);
}

function returnCharacter(type) {
  var charArray = Object.values(allowedCharacters)[type];
  return charArray[randomizer(charArray.length)];
}

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}








var charTypes = [true, true, true, true];




function typeCheck(array) {
  var selectedTypes = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] === true) {
      selectedTypes.push(i);
    }
  }
  return selectedTypes;
}

function generateString(length) {
  var passwordString = [];

  for (var i = 0; i < length; i++) {
    var charType = randomizer(typeCheck(charTypes).length);
    var character = returnCharacter(charType);
    console.log(character);
    passwordString.push(character)
  }
  console.log(passwordString.join(""));

  return passwordString;
}




// console.log(typeCheck(charTypes));




// input true false for each char type 
// make an array that has indexes of types of characters 


// Function to generate password with user input
function generatePassword() {
  charTypes[2] = document.getElementById('checkLower').checked;
  console.log(document.getElementById('checkLower').value);
  charTypes[3] = document.getElementById('checkUpper').checked;
  console.log()

  return generateString(prompt("How many characters?"));
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);