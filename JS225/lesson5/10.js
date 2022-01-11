// Question 1

let a = 1;
let foo;
let obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

foo = new Foo(); // logs 2

foo.bar(); // logs 2
Foo(); // call the constructor function without new - this is set to the global object
// logs 2

obj = {};
Foo.call(obj); // logs 2 
obj.bar(); // logs 2

console.log(this.a) // logs 2

// Logs 2 to the console 6 times. 

// Problem 2

// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// }

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area();
//   this.perimeter = RECTANGLE.perimeter();
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area); // logs NaN
// console.log(rect1.perimeter); // logs NaN

// because when we call RECTANGLE.area, this is set to the calling object which is RECTANGLE
// and width and height property is undefined in the RECTANGLE object.

// To fix this, we need to explicitly set the execution context to the instance

// How to fix it?

let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
}

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area); // logs 6
console.log(rect1.perimeter); // logs 10

// Problem 3

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * (this.radius ** 2);
}

let x = new Circle(3);
let z = new Circle(4);

console.log(x.area().toFixed(2));
console.log(z.area().toFixed(2));

// Problem 4

// let ninja;

// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword()); // logs true

// swingSword is method is defined on the prototype afer the ninja object is created,
// but the chain lookup happens when the swingSword method is called on the object

// Note that it will not work if we try to call the swingSword method before it is defined. 

// Problem 5

// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };

// console.log(ninja.swingSword()); // raises an error. 

// we made the prototype point to a different object 
// all while ninja object still points to the original prototype object 
// ninja couldn't find the method

// Problem 6

// let ninjaA;
// let ninjaB;

// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// }

// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

// Problem 7

let ninjaA = (function() {
  function Ninja() {};
  return new Ninja();
})();

let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

// create a ninjaB object

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true

// Second way - using the constructor function

// let ninjaB = new ninjaA.constructor;

// the caveat is that this object would also have the properties assigned within the constructon function Ninja.


