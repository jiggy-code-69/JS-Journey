function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}


// 1 power(2, 3) is called.

// 2 exponent is not 0, so the else block is executed.

// 3 We return base times the result of calling power(2, 2).

// 4 We call power(2, 2).

// 5 exponent is not 0, so we return base times the result of calling power(2, 1).

// 6 We call power(2, 1).

// 7 exponent is not 0, so we return base times the result of calling power(2, 0).

// 8 We call power(2, 0).

// 9 exponent is 0, so we return 1.

// 10 The previous call to power(2, 1) now returns 2 * 1, which is 2.

// 11 The previous call to power(2, 2) now returns 2 * 2, which is 4.

// 12 The initial call to power(2, 3) now returns 2 * 4, which is 8.

// So, the power function computes the result of raising base to the power of exponent by repeatedly multiplying the base by the result of calling itself with a decremented exponent until exponent is reduced to 0. The base case is when exponent is 0, at which point the function returns 1. The function then returns the result of multiplying base by the result of the recursive call with the decremented exponent. This process continues until exponent is 0, at which point all the previous recursive calls start returning their results, with each call multiplying the returned result with the base argument.






// Consider this puzzle: by starting from the number 1 and repeatedly either
// adding 5 or multiplying by 3, an infinite set of numbers can be produced. How
// would you write a function that, given a number, tries to find a sequence of
// such additions and multiplications that produces that number?
// For example, the number 13 could be reached by first multiplying by 3 and
// then adding 5 twice, whereas the number 15 cannot be reached at all.
// Here is a recursive solution:
function findSolution(target) {
function find(current, history) {
if (current == target) {
return history;
} else if (current > target) {
return null;
} else {
return find(current + 5, `(${history} + 5)`) ||
find(current * 3, `(${history} * 3)`);
}
}
return find(1, "1");
}
console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
