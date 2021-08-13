// write a while loop that logs the elements of array at each index

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}

// On line 3, we initialize a variable called array and assign to it a value of `[1, 2, 3, 4]`
// On line 4, we initialize a variable (with a global scope) called index and assign it's value to a promitive value of `0` 

// On line 6 - 9, we invoke a while loop setting it to execure as long as `index < array.length`
// On line 7, we invoke the method `console.log` passing in the array variable accessing the element at the current index. 
// On line 8, we increment index by 1. 

// If the index is empty, nothing is output. The while loop is not even executed.
