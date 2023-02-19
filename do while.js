//  js program that continues to ask the user for a number until the entered number is less than or equal to 100. 
// using do while


// let num;

// do {
//   num = prompt("Please enter a number less than 100 to  quit");
// } while (num > 100);

// alert("The number you entered is less than or equal to 100.");


let num = 0;

while (num > 100 || num == 0) {
  let input = prompt("Please enter a number less than or equal to 100:");
  if (input !== null) {
    num = parseInt(input);
  }
}

alert("You entered a number less than or equal to 100!");

//this below program will prompt user again if the user input is not a number
//parseInt and Number works same.
//The Number() constructor works similarly to parseInt(), but it's a more general-purpose function that can handle decimal numbers as well as numbers in scientific notation. For example, Number("3.14") would return the number 3.14, whereas parseInt("3.14") would return the integer 3.


let num = 0;

while (num > 100 || num == 0) {
  let input = prompt("Please enter a number less than or equal to 100:");
  if (input !== null) {
    num = parseInt(input);
    while (isNaN(num)) {
      input = prompt("Invalid input. Please enter a number less than or equal to 100:");
      if (input !== null) {
        num = parseInt(input);
      }
    }
  }
}

alert("You entered a number less than or equal to 100!");



// ===============================================================================================================================
// ===============================================================================================================================


// terminating number between 50 and 100
let num2;

do {
  num2 = prompt("Please enter a number between 50 and 100");
} while (num2 < 50 || num > 100);

alert("The number you entered is between 50 and 100.");
// ===============================================================================================================================
// ===============================================================================================================================

// using if else

let num3 = prompt("Please enter a number");

if (num3 <= 100) {
  alert("The number you entered is less than or equal to 100.");
} else {
  while (num3 > 100) {
    num3 = prompt("Please enter a number");
  }
  alert("The number you entered is less than or equal to 100.");
}


//this program will ask the user to enter text if yes or no is entered then game over
let input;

do {
  input = prompt("Enter text (you cannot say 'yes' or 'no'):");
} while (input.toLowerCase() !== "yes" && input.toLowerCase() !== "no");

alert("Game over!");
