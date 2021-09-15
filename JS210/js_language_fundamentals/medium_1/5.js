// What will the following code snippets log?

var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

// Logs 15. 
// Function gets hoisted. And then re-assigned. 

// code 2

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;

// counter will be function
// rate will be undefined? 
// total value is NaN

// Function gets hoisted. And then re-assigned. Function gets hoisted. And then re-assigned. 

// code 3

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// // logs 15. 

// // code 4

let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// // raise error because counter already exists.