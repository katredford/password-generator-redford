// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var nums = ["1","2","3","4","5","6","7","8","9","0",];

// var wantLower =confirm("include lower case letters?")

//confirm('U want upper letters ??')

// if(wantLower) {
//   alert("lowercase plez!")
// }
// else {
  
// }

// var promptAsk = window.prompt("How many characters do you want in your password?");

// if (promptAsk <= 8 || promptAsk >= 128) {
//   var chatlength
// }


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