let userInput = prompt("Enter a number between 0 and 100:");
let trimmedInput = userInput === null ? "" : userInput.trim();
let num = Number(trimmedInput);
 
if (
  trimmedInput !== "" &&
  !isNaN(num) &&
  Number.isInteger(num) &&
  num >= 0 &&
  num <= 100
) {
  console.log(`Thank you! You entered ${num}, a valid number.`);
} else {
  console.log(`Sorry, ${userInput} is not a valid entry.`);
}