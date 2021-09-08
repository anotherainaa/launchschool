// push function

// function push(array, value) {
//   array[array.length] = value;
//   let newLength = array.length;

//   return newLength;
// } 

const push = (array, value) => {
  array[array.length] = value;
  return array.length;
}

// let count = [0, 1, 2];
// console.log(push(count, 3));         // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

// pop function

// function pop(array) {
//   let lastElement = array[array.length - 1]
//   array.length = array.length - 1;
//   return lastElement;
// }

const pop = (array) => {
  if (array.length === 0) {
    return undefined;
  }

  let newLength = array.length -1 ;
  let value = array[newLength];
  array.length = newLength;
  return value;
}

// let count = [1, 2, 3];
// console.log(pop(count));             // 3
// console.log(count);                  // [ 1, 2 ]

// unshift function

const unshift = (array, value) => {
  for (let index = array.length; index > 0; index -= 1) {
    array[index] = array[index - 1];
  }

  array[0] = value;
  return array.length;
}


// let count = [1, 2, 3];
// console.log(unshift(count, 0));      // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

// shift function

const shift = (array) => {
  let value = array[0];
  
  if (array.length === 0) {
    return undefined;
  } 

  for (let index = 0; index < array.length - 1 ; index++) {
    array[index] = array[index + 1];
  }

  array.length = array.length - 1;
  return value;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]