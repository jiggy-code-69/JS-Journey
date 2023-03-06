const person = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["reading", "hiking", "traveling"],
  address: {
    street: "123 Main St",
    apt: "4B",
    zip: "10001"
  },
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I'm from ${this.city}.`);
  }
};

// In this example, we've created an object called person that has several properties:

// name: a string that represents the person's name.
// age: a number that represents the person's age.
// city: a string that represents the person's city of residence.
// hobbies: an array of strings that represents the person's hobbies.
// address: an object that contains several properties that represent the person's street address.
// greet: a function that logs a greeting message to the console.
// To access a property of an object, you can use either dot notation or bracket notation. For example, to access the name property of the person object, you can use either of the following syntaxes:


console.log(person.name); // Output: "John"
console.log(person["name"]); // Output: "John"
// In both cases, the result is the same. The first syntax uses dot notation, while the second syntax uses bracket notation. The advantage of bracket notation is that it allows you to use a variable or an expression as the key. For example:

const key = "name";
console.log(person[key]); // Output: "John"
// In this case, the value of the key variable is used as the key to access the name property of the person object.
