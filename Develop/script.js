// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var nums = ["1","2","3","4","5","6","7","8","9","0",];
var schars = ["!","@","#","$","%","^","&","*","(",")","=","+",];

var allChars = ["lower","upper","nums","schars"]

// confirm('U want upper letters ??')
var chatLength = window.prompt("How many characters do you want in your password? must be between 8 and 128.");

if (chatLength >=8 && chatLength <= 128) {
  console.log(chatLength);
// } if (chatLength >=7 && chatLength <= 129) {
//   alert("Must be between 8 and 128 characters.");
}else{
  window.prompt("How many characters do you want in your password?");
}

var wantLower =confirm("include lower case letters?")
if(wantLower) {
  console.log(wantLower)
}

var wantUpper =confirm("include upper case letters?")

if(wantUpper) {
  console.log(wantUpper)
}

var wantNums =confirm("include numbers?")

if(wantNums) {
  console.log(wantNums)
}

var wantSchars =confirm("include special characters?")

if(wantSchars) {
  console.log(wantSchars)
}
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