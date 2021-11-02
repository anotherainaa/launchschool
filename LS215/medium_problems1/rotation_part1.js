/*
Input:
- array
- elements can be any data type
Output:
- array with first element rotated to the back. 

Rules
- Rotate the first element to the back 
- if not array return undefined. 
- if the array is empty return empty array 

Edge cases? 
- If the array has non-elements, should I handle it? 

What is valid input? 
- An array whose length is not 0. 

Algorithm
- slice the array at index 1 and add the index 0 behind the array. 
  - (we will not mutate the array because slice provides a new array)

*/

function rotateArray(array) {
  let validArray = Array.isArray(array) && array.length >= 0; 
  if (!validArray) return undefined;

  return array.slice(1).concat(array.slice(0, 1));
}



console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]