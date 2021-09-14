// Identify the bug in the code. 

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;


// Line 11 is the bug because where we are trying to access the property `a` using bracket notation. 
// In this case this would raise a referenceerror. 