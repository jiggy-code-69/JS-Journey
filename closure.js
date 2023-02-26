function outerFunction(x) {
  function innerFunction(y) {
    return x + y;
  }
  return innerFunction;
}

let addFive = outerFunction(5);

console.log(addFive(3)); // Output: 8


// another example

function counter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  }
}

let increment = counter();

increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3

// In this example, we have an outerFunction that takes a single parameter x. Inside outerFunction, we define an innerFunction that takes a single parameter y.

// innerFunction returns the sum of x and y.

// Finally, outerFunction returns innerFunction.

// We then call outerFunction with an argument of 5 and assign the returned function to a variable addFive.

// We can then call addFive with an argument of 3, which adds 3 to the x parameter of 5 that was set when outerFunction was called. This results in a return value of 8.

// So how does this demonstrate a closure?

// When outerFunction is called and innerFunction is returned, innerFunction retains access to the x parameter of outerFunction. This is because innerFunction is defined inside outerFunction and therefore has access to its variables and parameters.

// Even after outerFunction has returned and addFive has been assigned the value of innerFunction, addFive still has access to the x parameter of outerFunction. This is the essence of a closure: a function that has access to the variables and parameters of its outer function, even after the outer function has returned.

// In summary, a closure is a function that retains access to the variables and parameters of its outer function, even after the outer function has returned. This can be useful for creating functions with persistent state or for encapsulating private data within a function.
