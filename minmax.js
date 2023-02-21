// Minimum of two numbers
// Let’s pretend the JavaScript Math.min() function doesn’t exist. Complete the following program// 
// so that the min() function returns the minimum of its two received numbers.
// TODO: write the min() function
// console.log(min(4.5, 5)); // Must show 4.5
// console.log(min(19, 9)); // Must show 9
// console.log(min(1, 1)); // Must show 1

function min(x,y){

    if(x < y){
console.log(x);
    }else if(x > y){
console.log(y);
    }
    
}
min(44,5);



// Calculator
// Complete the following program so that it offers the four basic arithmetical operations: addition,
// subtraction, multiplication and division. You can use either a function declaration or a function
// expression.
// // TODO: complete program
// console.log(calculate(4, "+", 6)); // Must show 10
// console.log(calculate(4, "-", 6)); // Must show -2
// console.log(calculate(2, "*", 0)); // Must show 0
// console.log(calculate(12, "/", 0)); // Must show Infinity

const calculator = function calc(num1, operator, num2){
 if(operator === '+'){
     return num1 + num2;
 }else if(operator === '-'){
     return num1 - num2;
 }else if(operator === '*'){
     return num1 * num2;
 }else if(operator === '/'){
     return num1 / num2;
 }else{
     return Nan;
 }
    
}
console.log(calculator(4, "+", 6)); // Must show 10
console.log(calculator(4, "-", 6)); // Must show -2
console.log(calculator(2, "*", 0)); // Must show 0
console.log(calculator(12, "/", 0)); // Must show Infinity











