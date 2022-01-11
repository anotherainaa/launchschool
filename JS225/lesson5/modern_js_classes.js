// # Modern JavaScript: Classes

// - classes are syntactic sugar over the Pseudo Classical Pattern

// - Classes has twp definition styles: declarations VS expressions

// Simple type

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
}

let rec = new Rectangle(10, 5);

console.log(typeof Rectangle);
console.log(rec instanceof Rectangle);
console.log(rec.constructor === Rectangle);
console.log(rec.getArea());

// Class Declarations

// re-implement the above using class syntax

class RectangleCL {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  static getDescription() {
    return 'A rectangle is a shape with 4 sides';
  }

  static description = 'A rectangle is a shape with 4 sides';

  getArea() {
    return this.length * this.width;
  }
}

let rec2 = new RectangleCL(10, 5);

console.log(typeof RectangleCL);
console.log(rec2 instanceof RectangleCL);
console.log(rec2.constructor === RectangleCL);
console.log(rec2.constructor); // logs class rectangle
console.log(rec2.getArea());

// ## Class Expressions

let RectangleEx = class {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}

let rec3 = new RectangleEx(10, 5);

console.log(typeof RectangleEx);
console.log(rec3 instanceof RectangleEx);
console.log(rec3.constructor === RectangleEx);
console.log(rec3.constructor); // logs class expression
console.log(rec3.getArea());

// Class expressions is a style preference.

// ## Classes as First-class Citizens

function createObject(classDef) {
  return new classDef();
}

class Foo {
  sayHi() {
    console.log('Hi!');
  }
}

let obj = createObject(Foo); // passing the class as an argument - same as passing function
obj.sayHi(); 

// ## Static methods and properties

Rectangle.getDescription = function() {
  return 'A rectangle is a shape with 4 sides';
}

// Static methods 

console.log(Rectangle.getDescription());

// See above
console.log(RectangleCL.getDescription());

// Static properties

Rectangle.description = 'A rectangle is a shape with 4 sides';

RectangleEx.description = 'A rectangle is a shape with 4 sides';

console.log(RectangleEx.description);