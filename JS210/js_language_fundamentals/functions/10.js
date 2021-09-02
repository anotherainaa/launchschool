// logValue();

// function logValue() {
//   console.log('Hello, world!')
// }

// // This logs hello world? 
// // because functions declarations gets hoisted to the top? including both function name and body.

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);