
function multipleOfThree(number) {
  return number % 3 === 0; 
}

function multipleOfFive(number) {
  return number % 5 === 0;
}


function multiplesOfThreeAndFive() {
  for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (multipleOfThree(currentNumber) && multipleOfFive(currentNumber)) {
      console.log('FizzBuzz');
    } else if(multipleOfThree(currentNumber)) {
      console.log('Fizz');
    } else if(multipleOfFive(currentNumber)) {
      console.log('Buzz');
    } else {
      console.log(currentNumber);
    }
  }
}


multiplesOfThreeAndFive();