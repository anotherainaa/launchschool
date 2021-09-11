// Question 1. 

const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz; // 3 + 42 + 3
}

console.log(foo(qux)); // qux is forever mutated into [1, 2]
console.log(qux);

// console.log is a side effect - i/o? - writes something to the console. 
// we are also mutating any array arguments passed into function by calling pop on it. 

// Question 2 - Which of the following functions are pure functions?

function sum(a, b) {
  console.log(a + b);
  return a + b;
}
// Function 1 is not because we write something to the console. which is a side effect

function sum(a, b) {
  a + b;
}
// function 2 = does this return a meaningful value? always undefined due to lack of return keyword.

function sum(a, b) {
  return a + b;
}
// function 3 - pure function

function sum(a, b) {
  return a + b + Math.random();
}

// accesses random number generator which is a side effect. 

function sum(a, b) {
  return 3.1415;
}

// does this return a meaningful value?

// Correct answer. 

// Function 1 and 4 have side effects. 

// The remaining are pure functions. 
