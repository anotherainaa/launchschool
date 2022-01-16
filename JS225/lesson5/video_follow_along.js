// Example 1

// const obj = {
//   monkey: "yep",
// };

// console.log(typeof obj === 'object'); // true
// console.log(typeof obj === 'function'); // false

// console.log(obj.hasOwnProperty('monkey')); // true 
// console.log(obj.hasOwnProperty('elephant')); // false

// console.log(typeof Object); // 'function'

// console.log(obj.__proto__ === Object.prototype); // true - deprecated
// console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// console.log(obj.constructor === Object); // true
// console.log(obj.prototype); // undefined

// Example 2

// const func = function() {};
// func.call(); // why can we invoke call method on the func? 

// console.log(func.__proto__ === Function.prototype); // true 
// console.log(func.constructor === Function); // true

// Example 3

// const arr = ['a', 'b'];
// console.log(arr.join('')) // ab
  
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.constructor === Array);

// console.log(typeof arr); // 'object'
// console.log(typeof Array); // 'function'
// console.log(arr[0]); // 'a'
// console.log(arr[1]); // 'b'
// console.log(arr.prototype); // undefined

// Example 4

// const arr = ['a', 'b'];
// console.log(arr.hasOwnProperty(0)); // true 

// console.log(arr.__proto__ === Array.prototype); // true
// console.log(arr.constructor === Array); // true
// console.log(Array.prototype.__proto__ === Object.prototype); // true
// console.log(Object.prototype.__proto__) // null - the end of prototypal chain 
// console.log(arr.hasOwnProperty('fantastical')); // false

// console.log(Array.from('foo')); // creates a shallow copied array from an array like/ iterable object. Static property of Array
// console.log(Array.hasOwnProperty('from')); // true
// console.log(arr.hasOwnProperty('from')); 
// // false because it's not an instance method, it's not in the function prototype of array
// // therefore arr instance doesn't have access to it 

// console.log(typeof Array); // function
// console.log(typeof Function); // function
// console.log(typeof Object); // function

// console.log(Array.__proto__ === Function.prototype); // true
// console.log(Array.constructor === Function); // true

// console.log(Function.__proto__ === Function.prototype); // true
// console.log(Function.constructor === Function); // true

// console.log(Object.__proto__ === Function.prototype); // true
// console.log(Object.constructor === Function); // true

// console.log(Function.prototype()); // returns undefined
// console.log(typeof Function.prototype); // 'function'
// console.log(typeof Object.prototype); // 'object'
// console.log(typeof Array.prototype); // 'object'
// // The function's prototype property is a function object(?) but it has no return value therefore returns undefined?
// console.log(Object.prototype.__proto__); // null, the end of the line

// console.log(Array.prototype.constructor === Array);
// console.log(Function.prototype.constructor === Function);
// console.log(Object.prototype.constructor === Object);

// Example 5 - demonstrating how to create a function prototype manually with a factory creator function (not a constructor function)

// const userfunctions = {
//   add: function() { this.points += 1 },
//   login: function() {console.log("You're logged in")},
// }

// function userCreator(name, points) {
//   const newUser = Object.create(userfunctions);
//   newUser.name = name;
//   newUser.points = points;
//   return newUser;
// }

// const user = userCreator("Ryan", 3);

// user.add(); // Where does add come from? Behavior delegated to userFunctions
// console.log(user.points);

// Example 6 - re-writing example 5 with pc approach

// function UserCreator(name, points) {
//   this.name = name;
//   this.points = points;
// }

// UserCreator.prototype.add = function() {
//   this.points += 1;
// }

// const user = new UserCreator('Ryan', 3);

// console.log(UserCreator.prototype.constructor);

// // Confusion check

// console.log(user.__proto__ === UserCreator.prototype); // true
// console.log(user.__proto__ === UserCreator); // false
// console.log(user.constructor === UserCreator); //true

// // What happens when we invoke add on user? 

// Example 7 - Inheritance

// function UserCreator(name) {
//   this.name = name;
// }

// UserCreator.prototype.sayName = function() {
//   console.log(`I'm ${this.name}`);
// }

// function PaidUserCreator(paidName, balance) {
//   UserCreator.call(this, paidName); // equivalent to calling super in class syntactical sugar
//   this.balance = balance;
// }

// PaidUserCreator.prototype = Object.create(UserCreator.prototype);
// PaidUserCreator.prototype.constructor = PaidUserCreator;

// PaidUserCreator.prototype.increase = function() {
//   this.balance += 1;
// }

// const user1 = new UserCreator('Dean');

// const paidUser1 = new PaidUserCreator('Ryan', 3);

// console.log(PaidUserCreator.prototype.constructor === PaidUserCreator);

// console.log(user1.sayName());
// console.log(paidUser1.sayName());

// paidUser1.increase();
// console.log(paidUser1.balance);
// console.log(user1.increase()); // fails because undefined on user1

// Example 8 - class syntax

class UserCreator {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`I'm ${this.name}`);
  }
}

class PaidUserCreator extends UserCreator {
  constructor(paidName, balance) {
    super(paidName);
    this.balance = balance;
  }

  increase() {
    this.balance += 1;
  }
}

const user1 = new UserCreator('Dean');

const paidUser1 = new PaidUserCreator('Ryan', 3);

console.log(PaidUserCreator.prototype.constructor === PaidUserCreator);

console.log(user1.sayName());
console.log(paidUser1.sayName());

paidUser1.increase();
// console.log(paidUser1.balance);