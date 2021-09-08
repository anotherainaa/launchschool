function uniqueElements(arr) {
  let uniqArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (!uniqArr.includes(arr[index])) {
      uniqArr.push(arr[index]);
    }
  }

  return uniqArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]