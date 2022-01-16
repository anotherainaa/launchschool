


// Example 1

const obj = {
  monkey: "yep",
};

console.log(typeof obj === 'object'); // true
console.log(typeof obj === 'function'); // false

console.log(obj.hasOwnProperty('monkey')); // true 
console.log(obj.hasOwnProperty('elephant')); // false

console.log(typeof Object); // 'function'

console.log(obj.__proto__ === Object.prototype); // true - deprecated
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

console.log(obj.constructor === Object); // true
console.log(obj.prototype); // undefined
