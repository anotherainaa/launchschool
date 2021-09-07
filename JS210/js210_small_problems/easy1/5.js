const rlSync = require('readline-sync');

function computeSum(number) {
  let total = 0;

  for (let i = 1; i <= number; i++) {
    total += i;
  }
 return total;
}

function computeProduct(number) {
  let total = 1;

  for (let i = 1; i <= number; i++) {
    total *= i;
  }

 return total;
}

let integer = 0;

console.log('Please enter an integer greater than 0: ');
integer = parseInt(rlSync.prompt(), 10);
console.log(typeof integer);

let operation = rlSync.question('Enter "s" to compute the sum or "p" to compute the product. ');

if (operation === 's') {
  let sum = computeSum(integer);
  console.log(`The sum of the integers between 1 and ${sum} is ${sum}.`);
} else {
  let product = computeProduct(integer);
  console.log(`The sum of the integers between 1 and ${integer} is ${product}.`);
}
