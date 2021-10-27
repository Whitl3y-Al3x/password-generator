// Assignment Code
var generateBtn = document.querySelector("#generate");


// Password length between 8-128.
// Lowercase, uppercase, numbers, special characters.
const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '1234567890';
const specials = ',.!@#$%^&*';
const options = [lower, lower, lower, upper, upper, num, num, specials];

function generatePassword () {

let passwordChar = "";
// Create user prompt to select password length
let passwordLengthUser = window.prompt("How many characters would you like your password to be? Password must be between 8-128 characters.");
passwordLengthUser = parseInt(passwordLengthUser);

if(passwordLengthUser < 8) {
  alert("Password must have more than 7 characters!");
  return "";
};

if (passwordLengthUser > 128) {
  alert("Password must not have more than 128 characters!");
  return "";
};

// Creates confirm boolean for lowercase "yes or no"
let lower = window.confirm("Would you like to add lowercase characters?");

if (lower) {
  passwordChar += options.lower;
};

// Create confrim boolenan for uppercase "yes or no"
let upper = window.confirm("Would you like to add uppercase characters?");

if (upper) {
  passwordChar += options.upper;
};

// Create confirm boolean for numbers "yes or no"
let num = window.confirm("Would you like to add numbers?");

if (num) {
  passwordChar += options.num;
};

// Create confirm boolean for special characters "yes or no"
let specials = window.confirm("Would you like to add special characters?");

if(specials) {
  passwordChar += options.specials;
};

let opt, choose;
let password = "";
for ( let i = 0; i < 8; i++ ) {
  opt = Math.floor(Math.random() * options.length);
  choose = Math.floor(Math.random() * (options[opt].length));
  password = password + options[opt][choose];
  options.splice(opt, 1);
}
console.log(password);

return (password);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
