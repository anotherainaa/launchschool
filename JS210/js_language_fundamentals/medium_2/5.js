// What will the following program log to the console? Can you explain why?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges'; 
console.log(array.length); // 3  
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length); // 3 
console.log(Object.keys(array).length); //  5 for sure


// The code pn line 5 gets added to the array as a "non-element"
// It will show up with a key of 3.4 and a values of oranges. 
// Length only takes into consideration the largest valid index (non-negative integers) which is 2 and adds 1 to it which results in 3. 

// The same can be said about code on line 9. 
// Object.keys method on the other hand would count all the available keys in the array, including the ones that are not considered valid indexes in an array. 
// Hence returning 4 and 5 respectively.

// Key point
// - Arrays are objects!
// - Arrays have length property and objects do not!
