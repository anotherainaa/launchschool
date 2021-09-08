/// fibonacci


function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let index = 2n;

  while (true) {
    index += 1n;

    sum = first + second;
    first = second;
    second = sum;
    
    if (String(sum).length == length) {
      return index;
    }
  }
}

// console.log(findFibonacciIndexByLength(2n) === 7n);  
// console.log(findFibonacciIndexByLength(3n) === 12n);
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);