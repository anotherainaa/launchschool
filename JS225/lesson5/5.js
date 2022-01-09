// Objects and prototypes

let cat =  {};
let toro = Object.create(cat);
console.log(Object.getPrototypeOf(toro) === cat); // true

// checkin if an object is prototype of another object
// The function determines if whethen an object has a given value for its [[prototype]] property
// The calling object is the "Prototype" (the one that an object is created from)
// the argument passed is the object that is created using the "prototype" object

console.log(cat.isPrototypeOf(toro)); 

// Prototype chains

let foo = { 
  a: 1, 
  b: 2
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

console.log(foo.isPrototypeOf(qux));

console.log(Object.getPrototypeOf(foo)); // Object.prototype's object
// because we don't create foo from any prototypes using Object.create.

// Problem 1

let prot = {};

let random = Object.create(prot);

// Problem 2

console.log(Object.getPrototypeOf(random) === prot); // true

// Problem 3

console.log(prot.isPrototypeOf(random)); // true

// Problem 4

let prot2 = {};
let foo2 = Object.create(prot2);

console.log(prot2.isPrototypeOf(foo2)); // true , we explicit set prot2 as prototype of foo2
console.log(Object.prototype.isPrototypeOf(foo)); // true because of prototype chaining
// the end prototype for all obejcts is Object.prototype object. 