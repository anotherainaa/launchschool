function union(arr1, arr2) {
  let unionArr = arr1.slice(0);

  arr2.forEach(element => {
    if (!unionArr.includes(element)) {
      unionArr.push(element);
    }
  });

  return unionArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

// LS

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
                  if (!resultArray.includes(value)) {
                    resultArray.push(value);
                  }
                });
}

function union(...args) {
  const newArray = [];

  args.forEach(value => copyNonDupsTo(newArray, value));

  return newArray;
}