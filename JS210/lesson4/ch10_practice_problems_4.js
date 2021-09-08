function matrixSums(arr) {
  let sumArr = [];
  for (let i = 0; i < arr.length; i += 1 ) {
    let sum = arr[i].reduce((elem, sum) => sum + elem);
    sumArr.push(sum);
  }
  return sumArr;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]