// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = ['a','b','c','d','e','f']


//confirm('U want upper letters ??')

// Write password to the #password input
function writePassword() {
  console.log('HELLOOO FROM THE FIRST FUNCTION~!!!!')

  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword() {
  console.log('TIme to make password!!', lower[Math.floor(Math.random() * lower.length)])

  var finalPassword = "";

  for (let index = 0; index < lower.length; index++) {
    console.log('TIme to make password!!', lower[Math.floor(Math.random() * lower.length)]);
    
    finalPassword += lower[Math.floor(Math.random() * lower.length)];
  
  }

  return finalPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//generatePassword()