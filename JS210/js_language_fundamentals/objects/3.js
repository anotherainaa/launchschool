// What will this log?

const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

// My answer
// Array 2 will output ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']

// On lines 6 - 8, we copy all the elements on array1 and push them into Array2
// On lines 10 to 14, we upcase the element in array1 if the element starts with letter C. 
// This will upcase elements such as Curly and Chico into CURLY and CHICO for array1. 

// This change does not impact array2, because string are immutable objects. 
// The element at array1[i] is then re-assigned a new string object that is upcased. 
// This re-assignment does not impact array2.

// Further Exploration
// - If we want to see the changes in 1 one array2, the only way to see it is to make array2 reference the same array object as array1 by doing this array1 = array2;