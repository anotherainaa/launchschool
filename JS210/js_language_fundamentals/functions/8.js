let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// myValue will return undefined. 
// Line will log [1, 2, 10] 

// because an array is an object an mutable methods can mutate it's value. 

// in this case, when myValue is invoked, b is pointing at the same object as the argument passed into it. 
// the element setter method b[2] is changing the valu it's pointing to, to a new primitive object of 10
// however, the array remains the same object that has been changed and logs [1, 2 10] one line 8.