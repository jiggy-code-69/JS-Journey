function outerFunction() {
  const outerVariable = "Hello";

  function innerFunction() {
    const innerVariable = "World";
    console.log(outerVariable + " " + innerVariable);
  }

  innerFunction();
}

outerFunction(); // Output: "Hello World"



In this example, we have two nested functions: outerFunction and innerFunction. outerVariable is declared within outerFunction, while innerVariable is declared within innerFunction.

When outerFunction is called, it declares the variable outerVariable and then calls innerFunction. When innerFunction is called, it declares the variable innerVariable and then logs the values of both outerVariable and innerVariable to the console.

Because of lexical scoping, innerFunction has access to both outerVariable and innerVariable. However, outerFunction does not have access to innerVariable, since it is declared within innerFunction and is therefore scoped to that function only.
