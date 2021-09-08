function multipleOf(number, divisor) {
  return number % divisor === 0;
}

function multisum(number) {
  let sum = 0;
  
  for (let i = 1; i <= number; i += 1) {
    if (multipleOf(i, 3) || multipleOf(i, 5)) {
      sum += i;
    }
  }
  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168