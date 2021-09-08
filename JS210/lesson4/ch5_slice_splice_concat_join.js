// push from previous exercises

const push = (array, value) => {
  array[array.length] = value;
  return array.length;
}

// slice function

function slice(array, start, end) {
  const newArray = [];

  for (let index = start; index < end; index += 1) {
    push(newArray, array[index]);
  }
  return newArray;
}

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

// splice

function splice(array, start, count) {
  const removedValues = [];
  let index = start;

  for (let counter = 1; counter <= count; counter += 1 ) {
    push(removedValues, array[index]);

    array[index] = array[index + count]
    index += 1; 
  }

  array.length = array.length - count;

  return removedValues;
}

// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]

// concat function

function concat(arr1, arr2) {
  const concatArray = [];

  for (let index = 0; index < arr1.length; index += 1) {
    push(concatArray, arr1[index]);
  }
  
  for (let index = 0; index < arr2.length; index += 1) {
    push(concatArray, arr2[index]);
  }  
  return concatArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

function join(array, string) {
  let newString = '';

  for (let index = 0; index < array.length; index += 1) {
    newString += String(array[index]); 

    if (index !== array.length - 1) {
      newString += string;
    }
  }
  return newString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'