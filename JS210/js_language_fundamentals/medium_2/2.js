// Why does this not log the expected result?

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// This is because the strict equal operator in JS does not compare objects by it's values, but
// instead compare whether they are the same object or not. 

// The code must be changed to below to get the expected true value.

const person2 = { name: 'Victor' };
const otherPerson2 = person2;

console.log(person2 === otherPerson2);  