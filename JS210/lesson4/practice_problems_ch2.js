// How do you access the last elementin an array? 

let arr = [1, 2, 3];
let lastElement = arr[arr.length - 1];

console.log(lastElement);

// Create a function rollCall that logs the name in the array. Use for loop. 

function rollCall(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

let names = ['Jenny', 'Ryan', 'Karen']
rollCall(names);

// Question 3

function reverse(array) {
  let newArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }

  return newArray;
}

let arr2 = ['x', 'y', 'z'];
console.log(reverse(arr2));

// Question 4

function join(arr) {
  let newString = '';

  for (let index = 0; index < arr.length; index++) {
    newString += arr[index];
  }

  return newString;
}

console.log(join([1, 'a', 4]));