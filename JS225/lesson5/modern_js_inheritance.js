// # Modern JavaScript: Inheritance with Classes

// ## Inhertiance with class declarations

// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// };

// Rectangle.prototype.toString = function() {
//   return `[Rectangle ${this.length} x ${this.width}]`;
// };

// function Square(size) {
//   Rectangle.call(this, size, size);
// }

// Square.prototype = Object.create(Rectangle.prototype);
// Square.prototype.constructor = Square;

// Square.prototype.toString = function() {
//   return `[Square ${this.length} x ${this.width}]`;
// };

// Implement the above using Class syntax

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  toString() {
    return `[Rectangle ${this.length} x ${this.width}]`;
  }

  getArea() {
    return this.length * this.width;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  toString() {
    return `[Square ${this.length} x ${this.width}]`;
  }
}

let rec = new Rectangle(3, 4);
let squ = new Square(5);

console.log(rec.getArea());
console.log(squ.getArea());
console.log(rec.toString());
console.log(squ.toString());

// ## super

// calls a function that is represented by the keyword super. 
// when called inside the constructor method, super keyword refers to the constructor method

// equivalent to writing this

// function Square() {
//   Rectangle.call(this, size, size);
// } 

// ## Inheritance With Class Expressions

let Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`My name is ${this.name}.`);
  }
};

let Student = class extends Person {
  constructor(name, age, semester) {
    super(name, age);
    this.semester = semester;
  }

  enrollInCourse(courseNumber) {
    console.log(`${this.name} has enrolled in course ${courseNumber}.`)
  }
};

let student = new Student('Kim', 22, 'Fall');
student.sayName();
student.enrollInCourse('JS120');



