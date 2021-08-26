function gcd(num1, num2) {
  let smaller = num1 > num2 ? num2 : num1;

  for (let currentNum = smaller; currentNum >= 1; currentNum -= 1) {
    if(num1 % currentNum === 0 && num2 % currentNum === 0) {
      return currentNum;
    }
  }
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
console.log(gcd(200, 100));
console.log(gcd(33, 18));
