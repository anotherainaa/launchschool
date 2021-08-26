// Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5. 
// If the number is divisible by both 3 and 5, append an "!" to the number.

function multipleOfThree(number) {
  return number % 3 === 0; 
}

function multipleOfFive(number) {
  return number % 5 === 0;
}


function multiplesOfThreeAndFive() {
  for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (multipleOfThree(currentNumber) && multipleOfFive(currentNumber)) {
      console.log(`${currentNumber}!`);
    } else if(multipleOfThree(currentNumber) || multipleOfFive(currentNumber)) {
      console.log(`${currentNumber}`);
    }
  }
}


multiplesOfThreeAndFive();