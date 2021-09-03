let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);

// pop is a mutating method.
// therefor line 5 and 6 would log [1, 2, 3];

// line 9 would log [1, 2]
// line 10 would log [1, 2, 3]
