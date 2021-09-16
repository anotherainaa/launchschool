// What values will be logged to the console? Can you explain these results?

const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python'] and 1 empty space
console.log(languages.length); // 4

languages.length = 1;
console.log(languages);  // ['JavaScript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript'] + 2 empty space
console.log(languages.length); // 3

languages.length = 1;
languages[2] = 'Python'; 
console.log(languages); // ['JavaScript'+ 1 empty space + Python]
console.log(languages[1]); // undefined
console.log(languages.length); // 3

// Because in JS, the length property is changeable. 
// If you make a length greater than what it currently is, JS fills the extra slots with "empty" items
// "empty" items are not undefined nor null, they are just slots that have no value. 
// However, when reading the length property, JS counts this empty slots as part of it's length count.

// If you make an array smaller than it currently is, it will remove the excess elements from the array and is not recoverable. 
// You can also fill in the empty space by assigning a value to that location, but it won't fill in any other slots before or after it.'

// Key points
// - Number of actual elements does not increase when 'empty slots' are created in the array. 
