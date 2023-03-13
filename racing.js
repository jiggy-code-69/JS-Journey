let raceNumber = Math.floor(Math.random() * 1000);
let runner;
let registeredEarly = false;

let runnerAge = 17;

if ((runnerAge > 18) && registeredEarly){
  raceNumber += 1000;
}
if((runnerAge > 18) && !registeredEarly ){
  console.log(`You will race at 9:30am, your racenumber is ${raceNumber}`);
}else if((runnerAge > 18) && (registeredEarly = false)){
  console.log(`You will race at 11:00am, your racenumber is ${raceNumber}`);
}else if(runnerAge < 18){
console.log(`You will race at 12:30pm, your racenumber is ${raceNumber}`);
}else{
  console.log("You have to get registered")
}
