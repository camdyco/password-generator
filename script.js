// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  console.log("Hey! You clicked the button");

// 1. prompt the user for password criteria
var length = Number(prompt("how long is your password?", "8-128"));
//  a. password length 8 <128
//  b. lowercase, uppercase, numbers, or special characters
// 2. Validate input
// 3. Generate password based on criteria


// 4. Display password to the page.
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
