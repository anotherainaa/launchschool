// // Problem
// // the first argument will always be an array
// // the second argument can be an array or another value - regardless what they value is add it to the exisiting array. (not as a nested array, unless an object)
// // they should be in the same order as they appreaed in the arguments 

// function concat(array1, secondArgument) {
//   let resultArray = [];

//   array1.forEach(element => {
//     resultArray.push(element);
//   })

//   if (Array.isArray(secondArgument)) {
//     secondArgument.forEach(element => {
//       resultArray.push(element);
//     })
//   } else {
//     resultArray.push(secondArgument);
//   }
//   return resultArray;
// }

console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
console.log(obj.a = 'two');
console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
console.log(obj.b = 'three');
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
obj; 

// Second attempt.

function concat(array, secondArgument) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i];
  }

  if (Array.isArray(secondArgument)) {
    for (let i = 0; i < secondArgument.length; i++) {
      newArray[newArray.length] = secondArgument[i];
    } 
  } else {
      newArray[newArray.length] = secondArgument;
  }

  return newArray;
}
