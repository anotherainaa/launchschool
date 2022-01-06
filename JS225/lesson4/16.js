// Question 1

// function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// }();

// Raises an error

// Question 2

(function() {
  console.log("Sometimes, syntax isn't intuitive!")
})();

// Question 3

var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

// After fixing with IIFE

sum += (function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);


// What kind of problem is it? => the function sum is being overwritten by var sum
// with the same name. 
// We can use IIFE to fix it. 

// Question 4

function countdown(number) {
  (function(n) {
    for (let i = number; i >= 0; i -= 1) {
      console.log(i);
    }
    console.log('Done!')
  })(number);
}

countdown(7);

// Question 5

(function foo() {
  console.log('Bar');
})();

// No ? - the function is named, but it's not visible outside of the scope created by the IIFE

// Question 6

function countdown2(number) {
  (function(n) {

    console.log(n);

    if (n === 0) {
      console.log('Done!');
      return;
    }

    countdown2(n - 1);
  })(number);
}

countdown2(7);