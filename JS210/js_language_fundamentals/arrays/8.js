function slice(array, begin, end) {
  let length = array.length;

  if (begin > length) {
    begin = length;
  }

  if (end > length) {
    end = length;
  }
  
  let newArray= [];

  for (let i = begin; i < end; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

