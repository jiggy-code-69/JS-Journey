// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = Christmas.toUpperCase();
console.log(holiday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = "Jiggy"
alert(str.substring(str.length - 3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function subtractFrom100(num1, num2, num3, num4, num5) {
    let diff1 = Math.abs(100 - num1);
    let diff2 = Math.abs(100 - num2);
    let diff3 = Math.abs(100 - num3);
    let diff4 = Math.abs(100 - num4);
    let diff5 = Math.abs(100 - num5);
    
    let totalDiff = diff1 + diff2 + diff3 + diff4 + diff5;
    
    alert(`The absolute value of the total difference is ${totalDiff}`);
  }
  
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function highLowNums(num1,num2,num3){
    console.log(Math.min(num1,num2,num3));
    console.log(Math.max(num1,num2,num3));
    }
    highLowNums(1,2,3);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function coinFlip() {
    let randomNum = Math.random();
    return randomNum > 0.5 ? "heads" : "tails";
  }
//   coinFlip()
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flip2(n){
    for(let i =1;i <=n;i++){
        let result = coinFlip()
        console.log(randomNum)
    }
}
flip2(9);





//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let arrSeries = ['Dark','Witcher','GOT','Suits','AOS']
for(let i = 0;i < arrSeries.length; i++){
    console.log(arrSeries[i]);
}
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let arrNum = [1,2,3,4,5,6];
let arrEvenNums =console.log(arrNum.filter(x => x % 2 === 0))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
let nums = [12,34,46,34,23,69,23]
let sortedArr = nums.sort((a,b) => a - b)
console.log(sortedArr);
alert(sortedArr[1] + sortedArr[sortedArr.length - 2])
