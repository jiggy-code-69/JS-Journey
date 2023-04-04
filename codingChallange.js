// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
    let favFood = 'fries';
    let faFod = 'Burgers';
    alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let word = `Hello I'm a string`;
alert(word.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function ThreeNum(a,b,c){
    let sum = (a/b) * c;
    alert(sum)
}
ThreeNum(1,2,3)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(n){

    
    console.log(Math.cbrt(n))
}
cubeRoot(27);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function weather(){
    let climate = prompt("enter a weather").toLowerCase()
if(climate === 'summer'){
    alert('Yay');
}else{
alert("Booo")
}
}
weather();

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skip5Multiple(n){
    for(i = 1; i<=n; i++){
if(i % 5 !== 0){
console.log(i);   
} 
}
}
skip5Multiple(10);









