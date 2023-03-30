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
