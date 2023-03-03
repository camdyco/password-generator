// Define character sets for password requirements
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberChars = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','+','~','|','}','{','[',']',':',';','?','>','<',',','.','/','-','='];
var allCharacters = []
var storePassword = 

document.querySelector("#generate").onclick = generatePassword;

function generatePassword() {

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
  var includeSpecialCharacters = confirm("Would you like to include special characters?");
  var includeUpperCase = confirm("Would you like to include upper case letters?");
  var includeLowerCase = confirm("Would you like to include lower case letters?");

  // step 1: check each include variable and add from corresponding character list if true
  if (includeNumbers == true){
    allCharacters = allCharacters.concat(numberChars);
     }
     console.log(allCharacters);
  if (includeSpecialCharacters == true){
    allCharacters = allCharacters.concat(specialCharacters);
    }
       console.log(allCharacters);
  if (includeUpperCase == true){
    allCharacters = allCharacters.concat(upperCase);
  }
    console.log(allCharacters);
  if (includeLowerCase == true){
    allCharacters = allCharacters.concat(lowerCase);
  }
  console.log(allCharacters);
}
  // step 2: select one random character for each prompt they said yes to



  // step 3: 

// helper function to generate a random character
function generateRandomCharacter(placeholder)
{
  let placeholderLength = placeholder.length;
  let randomGeneratedNumber = Math.floor((Math.randon() * placeholderLength) -1);
  let randomCharacter = placeholder[randomGeneratedNumber];
  return randomCharacter;
}
