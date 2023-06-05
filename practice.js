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






// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
var favDrink = "Whisky";
console.log(favDrink.trim());
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
var multipleWords = "An apple a day keeps the doctor away";
console.log(multipleWords.includes("apple"));
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor(){
    let rsp= Math.floor((Math.random() * 3))
 return rsp === 0 ? 'rock' : rsp === 1 ? 'paper' : 'scissor';

} 
// rockPaperScissor()
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function botPlayer(myChoice){
    let botChoice = rockPaperScissor();
    if((myChoice === 'rock' && botChoice === 'scissor') || (myChoice === 'paper' && botChoice === 'rock')|| (myChoice === 'scissor' && botChoice === 'paper')){
        console.log("I Win, suck it bot")
    }else if(myChoice === botChoice){
        console.log("It's a Tie")
    }else{
        console.log("Bot wins")
    }
}
// botPlayer('rock')
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playX(arr){
    arr.forEach(choice=> botPlayer(choice))
}
playX(['rock','paper','scissor'])


// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor(){
let randomNumber = Math.floor(Math.random() * 3)
return rsp = randomNumber === 0 ? 'rock' : randomNumber === 1 ? 'paper' : 'scissor'
} 
// rockPaperScissor()
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function botPlayer(myChoice){
let botChoice = rockPaperScissor();
// console.log(`This is my choice ${myChoice}`)
// console.log(`Bot chose ${botChoice}`)
if((myChoice === 'rock' && botChoice === 'scissor') || (myChoice === 'paper' && botChoice === 'rock') || myChoice === 'scissor' && botChoice === 'paper'){
console.log("I win")
}else if(myChoice === botChoice){
console.log("Tie")
}else{
    console.log("Bot Wins")
}
}
// botPlayer(`rock`)
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playX(arr){
    arr.forEach(choices => botPlayer(choices));
}
playX(['rock','paper','scissor']);




//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
arrOfNum = [1,2,3,4,5,69]
let sum = arrOfNum.reduce( (accu, currVal)=> {return accu+currVal;},0)



// alert(sum)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not



//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
arrOfNum = [1,2,3,4,5,69]
let sum = arrOfNum.reduce( (accu, currVal)=> {return accu+currVal;},0)



// alert(sum)
//Create a function that takes in an array of numbers
function arrOfNums(...numbers) {
    const arr = [...numbers];
    return arr;
  }
//   const result = arrOfNum(1, 2, 3, 4, 5);
//   console.log(result); // Output: [1, 2, 3, 4, 5]
    
//Return a new array of numbers that is every original number squared
const num = arrOfNums(1,2,3,4,5)
let newArr = num.map(arr => arr ** 2)
console.log(newArr)

//Create a function that takes string
//Print the reverse of that string to the console
function takeString(str){
return str.split("").reverse().join("");
}
// takeString("iamastring");
const str1 = "racecar"
const newStr = takeString(str1)
console.log(newStr);
//Create a function that takes in a string
//Alert if the string is a palindrome or not
let palindrome = str1 === newStr ? "its a palindrome" : "not a palindrome"
console.log(palindrome)


//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function streetFighterCharacter(Jignesh,Massive,Powerfull,fast){
this.name = Jignesh
this.build = Massive
this.strength = Powerfull
this.speed = fast
this.finisher = function(){
    console.log(`You can't handle my ${this.speed}`)
}
this.attack=function(){
    console.log("Used kick")
}

this.jump = function(){
    console.log("Jumped and kicked")
}

this.slide= function(){
    console.log("used slide")
}
}

let Ji69Y = new streetFighterCharacter("Ji69Y","Aesthetic","Super_Powerfull","speed_of_light")
 
//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1,2,3,4,5]
let sum = arr.reduce((a,y)=> a+y,0)
console.log(sum)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function sqNum(arr){
console.log( arr.map(x => x*2))
}
sqNum([1,2,3,4,5]);
//Create a function that takes string
//Print the reverse of that string to the console
function reverseStrAndPalindrome(str){
    let reverseStr =str.split("").reverse().join("")
console.log(reverseStr)
palindrome()
}
reverseStrAndPalindrome("12345")
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(){
    reverseStr === str ? 'Palindrome' : 'Not Palindrome'
}
// palindrome()







"New chat
Hide sidebar
Today
User Request: hi Assistant Response: Hello! How can I assist you today? Title: User inquiry about assistance



May
HTML list creation.
April
Animate element with fadeinup.
New chat
Regex shorthand characters explained.
30 Words, 1 Char.
Random JavaScript String Character
Find "on" twice.
Float to 10
JS Function Analyzes String.
Upgrade to Plus
NEW



Chat Gpt


hi

ChatGPT
Hello! How can I assist you today?






what is array

ChatGPT
An array is a data structure that stores a fixed-size sequence of elements of the same type. It is commonly used in programming to organize and manipulate collections of data. The elements in an array are typically accessed by their index, which represents their position within the array.

Arrays can be one-dimensional, two-dimensional (also known as matrices), or multi-dimensional, depending on the number of indices needed to access elements. One-dimensional arrays are like lists of elements, while multi-dimensional arrays can be thought of as tables or grids.

Arrays are used for various purposes, such as storing a list of numbers, strings, or objects. They provide efficient and direct access to elements based on their index, making it easy to retrieve, modify, and iterate over the data.

Here's an example of a one-dimensional array in Python:

css
Copy code
numbers = [1, 2, 3, 4, 5]
In this case, the variable numbers is an array containing five elements, where each element can be accessed using its index. For example, numbers[0] would give you the value 1, numbers[1] would give you 2, and so on.

Arrays are a fundamental concept in computer programming and are supported in various programming languages, including C, C++, Java, Python, and many others.






cool

ChatGPT
I'm glad you found the explanation helpful! Arrays are indeed an essential concept in programming, and they are widely used in various applications. If you have any more questions or need further assistance, feel free to ask.






const ages2 = [19, 22, 19, 21, 20, 25, 26, 24, 25, 23,44,55,32,43]
    - Find the average age(all items divided by number of items) in js

ChatGPT
To find the average age of the given array ages2 in JavaScript, you can follow these steps:

Sum up all the ages in the array.
Divide the sum by the total number of items in the array.
Here's the code to accomplish this:

javascript
Copy code
const ages2 = [19, 22, 19, 21, 20, 25, 26, 24, 25, 23, 44, 55, 32, 43];

// Step 1: Calculate the sum of ages
const sum = ages2.reduce((accumulator, currentAge) => accumulator + currentAge, 0);

// Step 2: Calculate the average by dividing the sum by the number of items
const average = sum / ages2.length;

console.log("Average age:", average);
When you run this code, it will output the average age, which in this case is approximately 29.857.

Please note that in JavaScript, the reduce() method is used to calculate the sum of the array elements. The reduce() method takes a callback function and an initial value (in this case, 0), and it iterates over each element, adding it to the accumulator.

If you have any further questions, feel free to ask!






now find the range of ages

ChatGPT
To find the range of ages in the given array ages2 (i.e., the difference between the maximum and minimum age values), you can use the following JavaScript code:

javascript
Copy code
const ages2 = [19, 22, 19, 21, 20, 25, 26, 24, 25, 23, 44, 55, 32, 43];

// Find the maximum age
const maxAge = Math.max(...ages2);

// Find the minimum age
const minAge = Math.min(...ages2);

// Calculate the range
const range = maxAge - minAge;

console.log("Range of ages:", range);
In this code, we make use of the Math.max() and Math.min() functions, along with the spread operator (...), to find the maximum and minimum age values in the array. Then, we calculate the range by subtracting the minimum age from the maximum age.

When you run this code, it will output the range of ages, which in this case is 36 (i.e., 55 - 19).

If you have any more questions, feel free to ask!






Compare the value of (min - average) and (max - average), use _abs()_ method

ChatGPT
To compare the absolute differences between (min - average) and (max - average) in JavaScript, you can use the Math.abs() method. Here's the updated code:

javascript
Copy code
const ages2 = [19, 22, 19, 21, 20, 25, 26, 24, 25, 23, 44, 55, 32, 43];

// Calculate the average age
const sum = ages2.reduce((accumulator, currentAge) => accumulator + currentAge, 0);
const average = sum / ages2.length;

// Find the maximum age
const maxAge = Math.max(...ages2);

// Find the minimum age
const minAge = Math.min(...ages2);

// Calculate the absolute differences
const minDifference = Math.abs(minAge - average);
const maxDifference = Math.abs(maxAge - average);

console.log("Absolute difference (min - average):", minDifference);
console.log("Absolute difference (max - average):", maxDifference);
In this updated code, we calculate the average age as before. Then, we use the Math.abs() method to compute the absolute differences between (min - average) and (max - average).

By taking the absolute value of the differences, we ensure that the result is always a positive value, regardless of whether (min - average) or (max - average) is larger.

When you run this code, it will output the absolute differences (min - average) and (max - average).

If you have any further questions, feel free to ask!






im proving a code don't run it, im just pasting it here

ChatGPT
I apologize for the confusion. If you have a code that you would like to share or discuss, please feel free to paste it here, and I'll do my best to assist you with it.






i will paste it dont read it

ChatGPT
Understood. Feel free to paste the code here when you're ready.






// ## 💻 Exercise

// ### Exercise: Level 1

// ```js
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// ```

// 1. Declare an _empty_ array;
let emptyArr = [];
// 2. Declare an array with more than 5 number of elements
let arr = [1, 2, 3, 4, 5];
// 3. Find the length of your array
console.log(arr.length)
// 4. Get the first item, the middle item and the last item of the array
console.log(`first item is : ${arr[0]}, mid item is : ${arr[2]}, last item is ${arr[5]}`)
// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
let mixedDataTypes = ['number', 'string', 'boolean', 'truthy', 'falsy']
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// 7. Print the array using _console.log()_
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
// 8. Print the number of companies in the array
console.log(itCompanies.length)
// 9. Print the first company, middle and last company
// 10. Print out each company
let allArr = itCompanies.forEach(x => console.log(x.toUpperCase()))
// 11. Change each company name  to uppercase one by one and print them out
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(itCompanies.toLocaleString())
let wordsExcludingLast = itCompanies.slice(0, itCompanies.length - 1);
let lastWord = itCompanies[itCompanies.length - 1];
console.log(wordsExcludingLast.join(', ') + ' and ' + lastWord + ' are big IT companies')
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
console.log(itCompanies.includes("Facebook") ? "company exists" : " not found")
// 14. Filter out companies which have more than one 'o' without the filter method
let allArr2 = itCompanies.forEach(x => console.log(x.includes("o" > 1) ? x : ""))
// 15. Sort the array using _sort()_ method
// console.log(itCompanies.sort())
// 16. Reverse the array using _reverse()_ method
// console.log(itCompanies.reverse())
// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))
// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3))
// 19. Slice out the middle IT company or companies from the array
// 20. Remove the first IT company from the array
// console.log(itCompanies.shift())
// console.log(itCompanies)
// 21. Remove the middle IT company or companies from the array
// console.log(itCompanies.splice(3,1))

// 22. Remove the last IT company from the array

// console.log(itCompanies.pop())
// // 23. Remove all IT companies
// console.log(itCompanies.splice(""))

// ### Exercise: Level 2

// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// 1. First remove all the punctuations and change the string to array and count the number of words in the array

//     ```js
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.split(" ").length)
// console.log(words.length)
//     ```

//     ```sh
//     ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

//     13
//     ```

// 1. In the following shopping cart add, remove, edit items

//     ```js
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     ```

//    - add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat")
console.log(shoppingCart)
//    - add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar")
console.log(shoppingCart)
//    - remove 'Honey' if you are allergic to honey
let allrg = shoppingCart.splice(-2, 1)
console.log(allrg)
//    - modify Tea to 'Green Tea'
console.log(shoppingCart.toString().replace("Tea", "Green Tea"))
const countries2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs2 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
// 1. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
console.log(countries2.includes("Ethiopia") ? "ETHIOPIA" : countries2.push("Ethiopia"))
// 1. In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
console.log(webTechs2.includes("Sass") ? "Sass is a CSS preprocess" : webTechs2.push("Sass"), console.log(webTechs2))

// 1. Concatenate the following two variables and store it in a fullStack variable.

//     ```js
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
//     ```

//     ```sh
//     ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
//     ```

// ### Exercise: Level 3

// 1. The following is an array of 10 students ages:

//     ```js
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     ```

//     - Sort the array and find the min and max age
// console.log(ages.sort())
//     - Find the median age(one middle item or two middle items divided by two)
const ages2 = [19, 22, 19, 21, 20, 25, 26, 24, 25, 23,44,55,32,43]

function median() {
    let sortedArr = ages2.sort((a, b) => a - b)
    console.log(sortedArr)
    console.log(ages2.length);
    if ((ages2.length % 2) === 0) {
        let midNum = ages2.length / 2;
        let midNum2 = midNum - 1
        console.log(midNum)
        console.log(midNum2)
let median = (ages2[midNum] + ages2[midNum2]) / 2
console.log(median)
    } else if((ages2.length % 2) !=0){
        let midNum = Math.floor(ages2.length / 2);
        let median = ages2[midNum];
        console.log(median)
    }
}
median()
//     - Find the average age(all items divided by number of items)
let avg = ages2.reduce((x,y) => x+y,0)
console.log(Math.floor(avg/ages2.length))
//     - Find the range of the ages(max minus min)
let minN = Math.min(...ages2)
let maxN = Math.max(...ages2)
let diff =console.log(maxN - minN)
//     - Compare the value of (min - average) and (max - average), use _abs()_ method
let abs = Math.abs(maxN-avg)
console.log(abs)
// 1.Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
// 1. Find the middle country(ies) in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
// 2. Divide the countries array into two equal arrays if it is even.  If countries array is not even , one more country for the first half.

(countries2.length % 2) === 0 ? 

ChatGPT
It seems that you have pasted a code snippet from an exercise. If you have any specific questions or need assistance with any part of the code, please let me know, and I'll be happy to help you.






function divideAndAddArr(arr2) {
    if ((arr.length % 2) === 0) {
        let firstHalf = arr2.length / 2
        console.log(arr2)
    } else {

    }
}

divideAndAddArr([
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
])

ChatGPT
The divideAndAddArr function you provided seems to be incomplete. It currently checks if the length of the input array arr2 is even, but it doesn't handle the case when the length is odd. If you have a specific requirement for what should be done when the length is odd, please let me know, and I'll assist you further.

Here's an updated version of the function that divides the array into two equal parts when the length is even:

javascript
Copy code
function divideAndAddArr(arr2) {
  if (arr2.length % 2 === 0) {
    const halfLength = arr2.length / 2;
    const firstHalf = arr2.slice(0, halfLength);
    const secondHalf = arr2.slice(halfLength);
    console.log('First half:', firstHalf);
    console.log('Second half:', secondHalf);
  } else {
    console.log('Array length is not even. Handle this case accordingly.');
  }
}

divideAndAddArr([
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]);
In this updated version, if the length of the array is even, it divides the array into two equal halves using the slice method and stores them in firstHalf and secondHalf variables. Then it logs both halves to the console.

If the length of the array is odd, it displays a message indicating that the array length is not even, and you can customize the handling of this case as per your requirements.

Let me know if there's anything else I can assist you with!






let arr = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

ChatGPT
Thank you for providing the array arr. If you have any specific question or need assistance with this array, please let me know, and I'll be happy to help you.






write a js function  that Divide the countries array into two equal arrays if it is even.  If countries array is not even , one more country for the first half.

ChatGPT
Certainly! Here's a JavaScript function that divides the arr array into two equal arrays if the length is even, and if the length is odd, it adds one more country to the first half:

javascript
Copy code
function divideArray(arr) {
  const length = arr.length;
  const halfLength = Math.floor(length / 2);

  if (length % 2 === 0) {
    const firstHalf = arr.slice(0, halfLength);
    const secondHalf = arr.slice(halfLength);
    return [firstHalf, secondHalf];
  } else {
    const firstHalf = arr.slice(0, halfLength + 1);
    const secondHalf = arr.slice(halfLength + 1);
    return [firstHalf, secondHalf];
  }
}

const arr = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

const dividedArray = divideArray(arr);
console.log('First half:', dividedArray[0]);
console.log('Second half:', dividedArray[1]);
In this function, the divideArray function takes the arr array as input. It first calculates the length and the half length of the array.

If the length is even, it uses the slice method to divide the array into two equal halves (firstHalf and secondHalf), and it returns an array containing these two halves.

If the length is odd, it adds one more country to the first half by using slice with halfLength + 1, and then divides the remaining countries into the second half. It also returns an array with the two halves.

You can call the divideArray function with your arr array, and it will print the first half and second half of the divided arrays.

Let me know if there's anything else I can help you with!






// ## 💻 Exercise

// ### Exercise: Level 1

// ```js
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// ```

// 1. Declare an _empty_ array;
let emptyArr = [];
// 2. Declare an array with more than 5 number of elements
let arr = [1, 2, 3, 4, 5];
// 3. Find the length of your array
console.log(arr.length)
// 4. Get the first item, the middle item and the last item of the array
console.log(`first item is : ${arr[0]}, mid item is : ${arr[2]}, last item is ${arr[5]}`)
// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
let mixedDataTypes = ['number', 'string', 'boolean', 'truthy', 'falsy']
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// 7. Print the array using _console.log()_
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
// 8. Print the number of companies in the array
console.log(itCompanies.length)
// 9. Print the first company, middle and last company
// 10. Print out each company
let allArr = itCompanies.forEach(x => console.log(x.toUpperCase()))
// 11. Change each company name  to uppercase one by one and print them out
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(itCompanies.toLocaleString())
let wordsExcludingLast = itCompanies.slice(0, itCompanies.length - 1);
let lastWord = itCompanies[itCompanies.length - 1];
console.log(wordsExcludingLast.join(', ') + ' and ' + lastWord + ' are big IT companies')
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
console.log(itCompanies.includes("Facebook") ? "company exists" : " not found")
// 14. Filter out companies which have more than one 'o' without the filter method
let allArr2 = itCompanies.forEach(x => console.log(x.includes("o" > 1) ? x : ""))
// 15. Sort the array using _sort()_ method
// console.log(itCompanies.sort())
// 16. Reverse the array using _reverse()_ method
// console.log(itCompanies.reverse())
// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))
// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3))
// 19. Slice out the middle IT company or companies from the array
// 20. Remove the first IT company from the array
// console.log(itCompanies.shift())
// console.log(itCompanies)
// 21. Remove the middle IT company or companies from the array
// console.log(itCompanies.splice(3,1))

// 22. Remove the last IT company from the array

// console.log(itCompanies.pop())
// // 23. Remove all IT companies
// console.log(itCompanies.splice(""))

// ### Exercise: Level 2

// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// 1. First remove all the punctuations and change the string to array and count the number of words in the array

//     ```js
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.split(" ").length)
// console.log(words.length)
//     ```

//     ```sh
//     ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

//     13
//     ```

// 1. In the following shopping cart add, remove, edit items

//     ```js
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     ```

//    - add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat")
console.log(shoppingCart)
//    - add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar")
console.log(shoppingCart)
//    - remove 'Honey' if you are allergic to honey
let allrg = shoppingCart.splice(-2, 1)
console.log(allrg)
//    - modify Tea to 'Green Tea'
console.log(shoppingCart.toString().replace("Tea", "Green Tea"))
const countries2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs2 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
// 1. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
console.log(countries2.includes("Ethiopia") ? "ETHIOPIA" : countries2.push("Ethiopia"))
// 1. In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
console.log(webTechs2.includes("Sass") ? "Sass is a CSS preprocess" : webTechs2.push("Sass"), console.log(webTechs2))

// 1. Concatenate the following two variables and store it in a fullStack variable.

//     ```js
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
//     ```

//     ```sh
//     ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
//     ```

// ### Exercise: Level 3

// 1. The following is an array of 10 students ages:

//     ```js
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     ```

//     - Sort the array and find the min and max age
// console.log(ages.sort())
//     - Find the median age(one middle item or two middle items divided by two)
const ages2 = [19, 22, 19, 21, 20, 25, 26, 24, 25, 23, 44, 55, 32, 43]

function median() {
    let sortedArr = ages2.sort((a, b) => a - b)
    console.log(sortedArr)
    console.log(ages2.length);
    if ((ages2.length % 2) === 0) {
        let midNum = ages2.length / 2;
        let midNum2 = midNum - 1
        console.log(midNum)
        console.log(midNum2)
        let median = (ages2[midNum] + ages2[midNum2]) / 2
        console.log(median)
    } else if ((ages2.length % 2) != 0) {
        let midNum = Math.floor(ages2.length / 2);
        let median = ages2[midNum];
        console.log(median)
    }
}
median()
//     - Find the average age(all items divided by number of items)
let avg = ages2.reduce((x, y) => x + y, 0)
console.log(Math.floor(avg / ages2.length))
//     - Find the range of the ages(max minus min)
let minN = Math.min(...ages2)
let maxN = Math.max(...ages2)
let diff = console.log(maxN - minN)
//     - Compare the value of (min - average) and (max - average), use _abs()_ method
let abs = Math.abs(maxN - avg)
console.log(abs)
// 1.Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
// 1. Find the middle country(ies) in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
// 2. Divide the countries array into two equal arrays if it is even.  If countries array is not even , one more country for the first half.
console.log(countries2)

function divideAndAddArr(arr2) {
    let firstHalf = Math.floor(arr2.length / 2);
    let firstHalfArr = arr2.slice(0, firstHalf);
    let otherHalf = arr2.slice(firstHalf, arr2.length);

    if ((arr2.length % 2) != 0) {
firstHalf.push("newitem")
    } else if ((arr2.length % 2) === 0) {

        console.log(`Thi is first half array: ${firstHalfArr}`)
        console.log(`Thi is second half array: ${otherHalf}`)

    }
}

divideAndAddArr([
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
])
function divideArray(arr) {
    const length = arr.length;
    const halfLength = Math.floor(length / 2);
  if (length % 2 === 0) {
      const firstHalf = arr.slice(0, halfLength);
      const secondHalf = arr.slice(halfLength);
      return [firstHalf, secondHalf];
    } else {
      const firstHalf = arr.slice(0, halfLength + 1);
      const secondHalf = arr.slice(halfLength + 1);
      return [firstHalf, secondHalf];
    }
  }
