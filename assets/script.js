// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var charTypes = [];

var allowedCharacters = {
  specialCharacters: ['checkSpecial', specialCharacters],
  numericCharacters: ['checkNumbers', numericCharacters],
  lowerCasedCharacters: ['checkLower', lowerCasedCharacters],
  upperCasedCharacters: ['checkUpper', upperCasedCharacters]
}

function randomizer(limit) {
  return Math.floor(Math.random() * limit);
}

// Function for getting a random element from an array
function getCharacter(type) {
  var charArray = Object.values(allowedCharacters)[type][1];
  return charArray[randomizer(charArray.length)];
}

// Function to prompt user for password options
function getPasswordOptions() {
  charTypes = [];

  for (var i = 0; i < Object.keys(allowedCharacters).length; i++) {
    charTypes.push(document.getElementById(Object.values(allowedCharacters)[i][0]).checked);
  }

  return charTypes.find(function (arrayBooleans) {
    return arrayBooleans === true;
  })
}

function typeCheck(array) {
  var selectedTypes = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === true) {
      selectedTypes.push(i);
    }
  }
  console.log(selectedTypes);
  return selectedTypes;
}

function getPasswordString(length) {
  do {
    var passwordStringArr = [];
    var charComparison = [];
    for (var i = 0; i < length; i++) {
      var options = typeCheck(charTypes);
      var charType = options[randomizer(options.length)];
      console.log(charType);
      var character = getCharacter(charType);
      console.log(character);
      passwordStringArr.push(character)
    }

    for (var i = 0; i < Object.values(allowedCharacters).length; i++) {
      // console.log(array[1])
      console.log(Object.values(allowedCharacters)[i][0]);
      charComparison.push(findCommonElements3(passwordStringArr, Object.values(allowedCharacters)[i][1]));
    }
      console.log(charTypes);
      console.log(charComparison);
  } while (charComparison.join("") != charTypes.join(""));

  var passwordString = passwordStringArr.join("");
  console.log(passwordString);

  return passwordString;
}

function findCommonElements3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

// Function to generate password with user input
function generatePassword() {
  // var passwordLength = prompt("How many characters?");
  var passwordLength = parseInt(document.getElementById('noOfChars').value);
  if (Number.isNaN(passwordLength)) {
    return 1;
  }
  else if ((passwordLength < 10) || (passwordLength > 64)) {
    return 2;
  }
  // console.log(charTypes);
  if (getPasswordOptions() === undefined) {
    return 3;
  }

  return getPasswordString(passwordLength);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password === 1) {
    alert("Invalid value");
  }
  else if (password === 2) {
    alert("Incorrect length");
  }
  else if (password === 3) {
    alert("No characters selected.");
  }
  else {
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);