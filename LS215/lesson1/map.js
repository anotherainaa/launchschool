function myMap(array, func) {
  let result = [];

  array.forEach((value, index, array) => {
    result.push(func(value, index, array))
  });

  return result;
}

let plusOne = n => n + 1;
let result = myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]
console.log(result);