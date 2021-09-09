

// function pop(arr) {
//   if (arr.length === 0) {
//     return;
//   }

//   let last_elem = arr[arr.length - 1]
//   arr.length = (arr.length - 1);
//   return last_elem;
// }


// function push(arr, ...args) {
//   for (let i = 0; i < args.length; i++) {
//     arr[arr.length] = args[i];
//   }
//   return arr.length;
// }




// // pop
// const array1 = [1, 2, 3];
// console.log(pop(array1));                        // 3
// console.log(array1);                // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// // push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0

// second attempt

function pop(array) {
  if (array.length === 0) {
    return;
  }

  let value = array[array.length - 1]
  array.length = array.length - 1;
  return value;
}

function push(array, ...args) {
  let length = args.length;

  for (let index = 0; index < length; index++ ) {
    array[array.length] = args[index]
  }

  let newLength = array.length;
  return newLength;
}

