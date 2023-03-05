const myString = '   HeLLo, WoRLd!   ';
const newString = myString.toLowerCase().trimEnd().toLocaleUpperCase();
const value = newString.valueOf();
const str = value.toString();

console.log(myString); // '   HeLLo, WoRLd!   '
console.log(newString); // 'hello, world!'
console.log(value); // 'HELLO, WORLD!'
console.log(str); // 'HELLO, WORLD!'
