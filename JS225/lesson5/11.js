// Problem 1

let shape = {
  getType() {
    return this.type;
  }
}

function Triangle(side1, side2, side3) {
  this.a = side1;
  this.b = side2;
  this.c = side3;
  this.type = 'triangle';
}

Triangle.prototype = shape;

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

Triangle.prototype.constructor = Triangle;

let t = new Triangle(3, 4, 5);
console.log(t.constructor ===  Triangle);   // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 12
console.log(t.getType());                   // "triangle"

// Problem 2

function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
} 


let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe

// Constructors built like this are called "scope-safe constructors"

// Problem 3

// my solution


// function createObject(obj) {
//   let newObj = {}
//   Object.setPrototypeOf(newObj, obj);
//   return newObj;
//   // note that this can be simplified to a one liner
//   // However, using setPrototypeOf is not recommended
// }

// // Alternate solution

// function createObject(obj) {
//   function F() {}
//   F.prototype = obj;

//   return new F();
// }

// let foo = {
//   a: 1
// };

// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));

// This is a simplified implementation for Object.create

// Problem 4

// Object.prototype.begetObject = function() {
//   function F() {}
//   F.prototype = this;
//   return new F();
// }

// let foo = {
//   a: 1,
// };

// let bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));         // true

// Problem 5

function neww(constructor, args) {
  let newObj = Object.create(constructor.prototype);
  let result = constructor.apply(newObj, args);
  
  return typeof result === 'object' ? result : newObj;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log(`Hello ${this.firstName} ${this.lastName}`);
}

let john = neww(Person, ['John', 'Doe']);
console.log(john);
console.log(john.greeting()); // => 'Hello John Doe
console.log(john.constructor === Person);  // Person - the constructor

