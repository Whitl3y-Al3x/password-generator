// Assignment Code
var generateBtn = document.querySelector("#generate");


// Password length between 8-128.
// Lowercase, uppercase, numbers, special characters.
const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '1234567890';
const specials = ',.!@#$%^&*';
const options = [lower, lower, lower, upper, upper, num, num, specials];

function generatePassword() {

  let passwordChar = "";
  // Create user prompt to select password length
  let passwordLengthUser = window.prompt("How many characters would you like your password to be? Password must be between 8-128 characters.");
  passwordLengthUser = parseInt(passwordLengthUser);

  if (passwordLengthUser < 8) {
    alert("Password must have more than 7 characters!");
    return "";
  };

  if (passwordLengthUser > 128) {
    alert("Password must not have more than 128 characters!");
    return "";
  };

  // Creates confirm boolean for lowercase "yes or no"
  let lowerq = window.confirm("Would you like to add lowercase characters?");

  if (lowerq) {
    passwordChar += lower;
  };

  // Create confrim boolenan for uppercase "yes or no"
  let upperq = window.confirm("Would you like to add uppercase characters?");

  if (upperq) {
    passwordChar += upper;
  };

  // Create confirm boolean for numbers "yes or no"
  let numq = window.confirm("Would you like to add numbers?");

  if (numq) {
    passwordChar += num;
  };

  // Create confirm boolean for special characters "yes or no"
  let specialsq = window.confirm("Would you like to add special characters?");

  if (specialsq) {
    passwordChar += specials;
  };
  console.log(passwordChar);

  let opt, choose;
  let password = "";
  for (let i = 0; i < passwordLengthUser; i++) {
    opt = Math.floor(Math.random() * passwordChar.length);
    password = password + passwordChar[opt];
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
