
function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false

// Why does line 12 and 13 return false. 

// Because strict equality operator check if they are the return value of oddities to be the same object as the operand on the right side. 
// It is not, hence it returns false. 

// If we want it to return true, we need to implement a method that check that the values are the same. 

