// Question 1 

// - a function that accept a function as an argument
// - a function that returns a function (as a value)
//  - or both!

// Question 2

let numbers = [1, 2, 3, 4];

function checkEven(number) {
  return number % 2 === 0;
}

console.log(numbers.filter(checkEven));

// The higher order function is filter
// filter accepts checkEven as an argument. 

// Question 3
// checkEven2 is assigned a function that filter uses
// therefore, we must make makeCheckEven return a function


function makeCheckEven() {
  return function(number) {
    return number % 2 === 0;
  }
}

let checkEven2 = makeCheckEven();

console.log(numbers.filter(checkEven2)); 

// Question 4
// function accepts a function and an operand 
// returns a function that when executed, operates on the operate. 

function execute(func, operand) {
  return func(operand);
}

console.log(execute(function(number) {
  return number * 2;
}, 10));

console.log(execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy'));

// Question 5

// makeList.. takes a function and returns a function that transforms using call back func. 

function makeListTransformer(func) {
  return function(collection) {
    return collection.map(func);
  };
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4]));