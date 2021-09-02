let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// The return value of myValue is undefined. 
// Line 8 will log 7 to the console. 

// This is because the parameter a in the function myValue is a local variable that shadows the globally scope variable a. 
// a is a primitive value and any operations in the function does not mutate the argument passed to it. 
// there is no return keyword, so the function will return undefined. 

// finally, 7 is logged because variable a was not changed or mutated by the function myValue.
