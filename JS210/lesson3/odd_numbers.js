// Write a function that takes a positive integer as an argument, and logs all the odd numbers from 1 to the passed in number (inclusive). 
// All numbers should be logged on separate lines.

// Algorithm 
// loop from number 1 with the given number as the ending point. 
//  for each number, 
//    if the number is odd, log it. (else, do nothing)

function logOddNumbers(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 2 === 1) {
      console.log(n);
    }
  }
}

logOddNumbers(19);