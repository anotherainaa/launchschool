// # Practice Problems: Garbage Collection

// Problem 1

// Answer - Yes, it is. 
// JS runtime handles memory allocation (not the developer!

// Problem 2

// let myNum = 1;

// function foo() {
//   let myStr = 'A string';
//   // what is eligible for GC here?
//   // 1 and A string both not eligible for GC here. 
// }

// foo();

// what is eligible for GC here?
// 1 is not. stored on the stack, 1 is never eligible for GC (until after the code finishes executing?)
// foo has finished executing, that means 'A string' is eligible for GC'

// more code

// Problem 3

// let outerFoo;

// function bar() {
//   let innerFoo = 'abc';
//   outerFoo = innerFoo;
// }

// bar();

// can outerFoo's value be garbage collected here?
// - no, not until the code finishes running. because outerFoo is a global variable
// 'abc' however is available for GC

// more code

// Problem 4

function makeString() {
  let index = 'abc';
  return function() {
    return index += 'xyz';
  };
}

let str = makeString();

// is 'abc' eligible for GC here?

// No, because it is in the closure of the function stored in str. which prevents it from being GC.

// more code

// Problem 5

let bash = "Some val";

// Will the value "Some val" ever be eligible for garbage collection?


// only when the script finishes running? 
// or if we explicitly re-assign the value?