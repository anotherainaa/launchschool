const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  // return sum / array.length;
  // To fix this code, we can do this. 
  return sum / Object.keys(array).length;
}

console.log(average(myArray));

// My answer

// No this function call will not return 5. 
// It will return 10. 

// In line 1 and 2, we create a key using the values -1 and -2 respectively and assign it's value to 5 for both keys. 

// In the for loop, we add to the sum the value of array at array[i] starting with value of -2. 
// This for loop will iterate through the array 4 times and add values 5, 5, 5, 5, to sum. 

// However, when we return the value of sum divided by array.length, this equates to sum / 2. 
// This is because the length property is always. the value of the largest index + 1. 

// The values that were assigned to key -1 and -2 are not seen as array elements and not counted in the length. 

