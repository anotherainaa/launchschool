function interleave(arr1, arr2) {
  let resultArr = [];

  for (let i = 0; i < arr1.length; i++) {
    resultArr.push(arr1[i], arr2[i]);
  }
  return resultArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]