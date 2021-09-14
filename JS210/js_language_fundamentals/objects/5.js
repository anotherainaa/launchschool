// What will this log?

const myArray = ['a', 'b', 'c'];

console.log(myArray[0]);
console.log(myArray[-1]);

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);
console.log(myArray['e']);
console.log(myArray);

// Line 5 will log a
// Line 6 will log undefined. 
// Because there is no value at key -1. 

// Line 12 will log d
// Line 13 will log 5
// Line 14 will log the array and also show the 'non-elements' as key-value pair.  