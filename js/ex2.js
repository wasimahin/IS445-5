let userInput = prompt("Enter a number between 0 and 100:");
 
try {
  let trimmedInput = userInput === null ? "" : userInput.trim();
  let num = Number(trimmedInput);
 
  if (
    trimmedInput === "" ||
    isNaN(num) ||
    !Number.isInteger(num) ||
    num < 0 ||
    num > 100
  ) {
    throw `Sorry, ${userInput} is not a valid entry.`;
  }
 
  console.log(`Thank you! You entered ${num}, a valid number.`);
} catch (error) {
  console.log(error);
}