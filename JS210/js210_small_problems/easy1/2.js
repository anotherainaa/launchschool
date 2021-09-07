function evenNumbers() {
  for (let number = 1; number <= 99; number += 1) {
    if(number % 2 === 0) {
      console.log(number);
    }
  }
}

evenNumbers();