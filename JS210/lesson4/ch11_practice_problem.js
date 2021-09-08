function missing(array) {
  let start = array[0]
  let end = array[array.length - 1]
  let missingElems = [];

  for (let number = start; number <= end; number += 1) {
    if (!array.includes(number)) {
      missingElems.push(number);
    }
  }
  return missingElems;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []