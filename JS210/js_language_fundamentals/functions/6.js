let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// - myValue function returns undefined 
// - line 8 logs 7. 
//  -  because when we pass a as an argument into the function myValue, b point to the same value of 7 as a, but then on line 4, we reassign the value of b to 17. 
//  - at this point, b is now pointing to a new primitive value of 17 and does not change the value that it was originally pointing at. 
// this function does not have a return keyword which means it returns undefined. 
 
// this shows that re-assignment does not change or mutate any arguments that is passed into a function which is why 7 is logged. 


// Notes
// - primitive value is immutable - any operation in a function with primitive value will not be able to mutate the argument.

