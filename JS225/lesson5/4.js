// Constructor pattern

function Person(firstName, lastName = '') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };
}

let john = new Person('John', 'Doe');
let jane = new Person('Jane');

console.log(john.fullName());
console.log(jane.fullName());

console.log(john.constructor);
console.log(jane.constructor);

console.log(john instanceof Person);
console.log(jane instanceof Person);

// Things to note
// - the capital letter is only convention to note that it should be called with new
// - without strict mode, if we accidentally call without the new
//   - this will be set to the global object and a property on the global object is created!

// What happens when constructors funcitons are called? 
// - a new object is created
// - this in the function is set to point to the new object
// - the code in the function is executed
// - if the constructor doesn't explicitly return an object, this is returned instead. 

// Note the consequence of point number 4 above. 

// Question 1

// - constructor functions names are capitalized. 

// Question 2

// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = Lizard();
// lizzy.scamper(); // this will raise an error. 

// scamper function is not defined on the global object
// when we call the constructor function without new, scamper function is created on the global object
// The function doesn't return anything, therefore it explicitly returns undefined which is assigned to variable lizzy
// calling function scamper on undefined raises an error.

// Question 3

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // I'm scampering