// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {

// Password length between 8-128.
// Lowercase, uppercase, numbers, special characters.
const alpha = 'abcdefghijklmnopqrstuvwxyz';
const calpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '1234567890';
const specials = ',.!@#$%^&*';
const options = [alpha, alpha, alpha, calpha, calpha, num, num, specials];
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
