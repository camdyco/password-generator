// Define character sets for password requirements
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberChars = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','+','~','|','}','{','[',']',':',';','?','>','<',',','.','/','-','='];
var allCharacters = [];
var storePassword = "";

// creating onclick event
document.querySelector("#generate").onclick = generatePassword;

// function to generate the password
function generatePassword() {

  // prompt the user for password criteria
  var passwordLength = parseInt(prompt("how many characters is your password? (must be between 8 and 128"));

  // to determine the length of the password
  if (passwordLength < 8 || passwordLength > 128)
  {
    alert("Invalid input. Password length must be between 8 and 128 characters");
  } 
  // to make sure the entry is a number
  else if (isNaN(passwordLength))
  {
    alert("Entry is not a number");
  }
  
  // saving user response to prompts
  var includeNumbers = confirm("Would you like to include numbers?");
  var includeSpecialCharacters = confirm("Would you like to include special characters?");
  var includeUpperCase = confirm("Would you like to include upper case letters?");
  var includeLowerCase = confirm("Would you like to include lower case letters?");

  // check each include variable and add from corresponding character list if true
  // to determine if they want to use numbers
  if (includeNumbers == true){
    allCharacters = allCharacters.concat(numberChars);
    storePassword = storePassword.concat(generateRandomCharacter(numberChars));
     }
  
     
  // to determine if they want to use special characters
  if (includeSpecialCharacters == true){
    allCharacters = allCharacters.concat(specialCharacters);
    storePassword = storePassword.concat(generateRandomCharacter(specialCharacters));
    }
       
  if (includeUpperCase == true){
    allCharacters = allCharacters.concat(upperCase);
    storePassword = storePassword.concat(generateRandomCharacter(upperCase));
  }
    
  if (includeLowerCase == true){
    allCharacters = allCharacters.concat(lowerCase);
    storePassword = storePassword.concat(generateRandomCharacter(lowerCase));
  }
  
  // iterates to get password length based on user input
  for (let i = storePassword.length; i < passwordLength; i++)
  {
    storePassword = storePassword.concat(generateRandomCharacter(allCharacters));
  }

  // displays value and resets values for next generated password
  document.getElementById('password').value = storePassword;
  storePassword = "";
  allCharacters = [];
} 
  // step 2: select one random character for each prompt they confirm

// helper function to generate a random character
function generateRandomCharacter(placeholder)
{
  let placeholderLength = placeholder.length-1;
  let randomGeneratedNumber = Math.floor(Math.random() * placeholderLength);
  let randomCharacter = placeholder[randomGeneratedNumber];

  return randomCharacter;
}
