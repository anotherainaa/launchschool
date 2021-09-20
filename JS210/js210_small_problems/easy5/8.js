function sequence(count, startNum) {
  let resultArray = [];
  for (let index = 0; index < count; index += 1 ) {
    let num = startNum + (startNum * index);
    resultArray.push(num);
  }
  return resultArray;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []