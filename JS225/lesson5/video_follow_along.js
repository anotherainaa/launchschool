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

const arr = ['a', 'b'];
console.log(arr.hasOwnProperty(0)); // true 

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

console.log(typeof Array); // function
console.log(typeof Function); // function
console.log(typeof Object); // function

console.log(Array.__proto__ === Function.prototype); // true
console.log(Array.constructor === Function); // true

console.log(Function.__proto__ === Function.prototype); // true
console.log(Function.constructor === Function); // true

console.log(Object.__proto__ === Function.prototype); // true
console.log(Object.constructor === Function); // true

console.log(Function.prototype()); // returns undefined
console.log(typeof Function.prototype); // 'function'
console.log(typeof Object.prototype); // 'object'
console.log(typeof Array.prototype); // 'object'
// The function's prototype property is a function object(?) but it has no return value therefore returns undefined?
console.log(Object.prototype.__proto__); // null, the end of the line

// Example 5