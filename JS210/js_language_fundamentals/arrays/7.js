function shift(arr) {
  if (arr.length === 0) { return; };

  let firstElem = arr[0];
  let length = arr.length - 1;


  for (let index = 1; index <= length; index++) {
    arr[index - 1] = arr[index];

    if (index === length) {
      arr.length = length;
    }
  }

  return firstElem;
}


// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

// const testArray = [1, 2, 3];
// console.log(shift(testArray));                // 1
// console.log(testArray);                       // [2, 3]

function unshift(arr, ...args) {
  let indexLastElem = arr.length - 1;
  let numberOfElements = args.length;
  arr.length += numberOfElements;
  let newArrLength = arr.length;

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[indexLastElem];
    indexLastElem -= 1;
  }

  for (let i = 0; i < args.length; i++) {
    arr[i] = args[i];
  }
  return newArrLength;
}

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));     // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
