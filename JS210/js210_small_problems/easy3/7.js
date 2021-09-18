//  algorithm
// iterate through the array. 
// push into a new array, the total of sum of all values from 1st index up to the current index. 

function runningTotal(numbers) {
  let total = [];
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
    total.push(sum);
  }
  return total;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []