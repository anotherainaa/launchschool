/*

input
- 2d array
  - each array contains 2 elements
  - representing name of fruit and quantity to purchase
Output
- one dimensional array
  - with the string fruits repeated as many times as quantity to purchase in that order

Data Structure
- 2d array => array
  - array methods here

Algorithm

- map each element to become an array with the fruits repeated as array 1 number times
- flatten the array into one array

repeat method
- initialize result array
- iterate through the given array
  - iterate array[1] number of times
  - add the fruit (array[0]) to the result
return result.


*/

function buyFruit(fruitsArr) {
  let repeatedFruits = fruitsArr.map(fruit => repeat(fruit));
  return repeatedFruits.reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruit) {
  let result = [];

  for (let i = 0; i < fruit[1]; i += 1) {
    result.push(fruit[0]);
  }

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
