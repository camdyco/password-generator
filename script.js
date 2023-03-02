// Define character sets for password requirements
var lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var numberChars = ['0123456789'];
var specialCharacters = '!@#$%^&*()_+~`|}{[]:;?><,./-='

document.querySelector("#generate").onclick = generatePassword;

function generatePassword () {

  // prompt the user for password criteria
  var passwordLength = parseInt(prompt("how many characters is your password? (must be between 8 and 128"));

  if (passwordLength < 8 || passwordLength > 128)
  {
    alert("Invalid input. Password length must be between 8 and 128 characters");
  } 
  else if (isNaN(passwordLength))
  {
    alert("Entry is not a number");
  }

  var includeNumbers = confirm("Would you like to include numbers?");
  var includeSpecialChars = confirm("Would you like to include special characters?");
  var includeUpperCase = confirm("Would you like to include upper case letters?");
  var includeLowerCase = confirm("Would you like to include lower case letters?");

  // if (includeNumbers == true){
  //  } else if (includeNumbers == false){
  // }
  // if (includeSpecialChars == true){ 
  // } else if (includeSpecialChars == false){
  // }
}