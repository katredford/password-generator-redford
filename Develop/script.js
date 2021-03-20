// Assignment Code
var generateBtn = document.querySelector("#generate");

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var nums = ["1","2","3","4","5","6","7","8","9","0",];
var schars = ["!","@","#","$","%","^","&","*","(",")","=","+",];

var allChars = [];

var userPassword ="";
// confirm('U want upper letters ??')

// Write password to the #password input
function writePassword() {
  console.log('HELLOOO FROM THE FIRST FUNCTION~!!!!');

  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword() {
  // console.log('TIme to make password!!', lower[Math.floor(Math.random() * lower.length)]);

  var chatLength = window.prompt("How many characters do you want in your password? must be between 8 and 128.");

if (chatLength >=8 && chatLength <= 128) {
  console.log(chatLength);
  chatLength = parseInt(chatLength);
// } if (chatLength >=7 && chatLength <= 129) {
//   alert("Must be between 8 and 128 characters.");
}else{
  window.prompt("How many characters do you want in your password? must be between 8 and 128.");
}

var wantLower =confirm("include lower case letters?")
if(wantLower) {
  console.log(lower)
  allChars = allChars.concat(lower);
  console.log(allChars)
  var character = lower[Math.floor(Math.random() * lower.length)];
  userPassword = userPassword + character
  console.log(lower)
}

var wantUpper =confirm("include upper case letters?");

if(wantUpper) {
  allChars = allChars.concat(upper)
  var character = upper[Math.floor(Math.random() * upper.length)];
  userPassword = userPassword + character
  console.log(character)
}

var wantNums =confirm("include numbers?");

if(wantNums) {
  allChars = allChars.concat(nums)
  var character = nums[Math.floor(Math.random() * nums.length)];
  userPassword = userPassword + character
  console.log(nums)
}

var wantSchars =confirm("include special characters?");

if(wantSchars) {
 allChars = allChars.concat(schars)
  var character = schars[Math.floor(Math.random() * schars.length)];
  userPassword = userPassword + character
  console.log(schars)
}
  // var finalPassword = "";
  var remainingCharacters = chatLength - userPassword.length;

  for (var index = 0; index < remainingCharacters; index++) {
  console.log(allChars)    
    userPassword += allChars[Math.floor(Math.random() * allChars.length)]; 
     console.log(userPassword)                 
  
  }

  return userPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//generatePassword()