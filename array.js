const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];




for ( let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if(rapperArray[i] === 'Notorious B.I.G.'){
    break;
  } 
}
 console.log("And if you don't know, now you know.");





//Create an array of movies with at least three movies.
let movies = ['Interstellar', 'Inception', 'Notebook']
//Using the array from above, store the first movie in a variable
let oneMovie = movies[0];
//Get the length of the original array and store it in a new variable
let lengthOfArray = movies.length
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let lastIndexOfArray = movies[lengthOfArray - 1]










//Create an array of movie titles. Loop through the array and each element to the h2.
let  movies = ['Interstellar', 'Dumb and Dumber', 'Spiderman', 'IronMan'];
for(let i = 0;i<movies.length;i++){
    document.querySelector('h2').innerText += movies[i];
   
}


//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [10,20,30];

nums.forEach((a,b) => {
nums[b]+= 3;
});
console.log(nums)
//Find the average of all the numbers from question three
let sum = 0;
for (let i = 0; i<nums.length;i++){
    sum += nums[i];
}


// Write a program that creates the following array, then calculates and shows the array's max and  min value.

// const values = [3, 11, 7, 2, 9, 10];

const values = [3, 11, 7, 2, 9, 10];

let max = values[0];
let min = values[0];

for (let i = 1; i < values.length; i++) {
  if (values[i] > max) {
    max = values[i];
  }
  if (values[i] < min) {
    min = values[i];
  }
}

console.log("The maximum value in the array is: " + max);
console.log("The minimum value in the array is: " + min);





// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".


function store(arr){
if(arr[0] < arr[arr.length-1]){
    alert("Hi");
}else if(arr[0] > arr[arr.length-1]){
    alert("Bye");
}else if(arr[0] === arr[arr.length-1]){
    alert("We close in an hour");
}

}
store([1,2,3]);
