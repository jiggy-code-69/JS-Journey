//  js program that continues to ask the user for a number until the entered number is less
// than or equal to 100. 
// using do while


let num;

do {
  num = prompt("Please enter a number");
} while (num > 100);

alert("The number you entered is less than or equal to 100.");
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
