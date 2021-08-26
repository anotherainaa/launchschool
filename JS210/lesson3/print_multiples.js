

function logMultiples(multiplier) {
  for (let number = 100; number >= 0; number -= 1) {
    if (number % multiplier === 0 && number % 2 === 1) {
      console.log(number);
    }
  }
}

logMultiples(17);
logMultiples(21);