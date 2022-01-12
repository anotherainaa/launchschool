// # More Methods on the Object Constructor

// ## Object.create and Object.getPrototypeOf

console.log(Object.getPrototypeOf([]) === Array.prototype);

function NewArray() {}
NewArray.prototype = Object.create(Object.getPrototypeOf([]));

NewArray.prototype.first = function() {
  return this[0];
};

let newArr = new NewArray();
let oldArr = new Array();

oldArr.push(5);
newArr.push(5);
oldArr.push(2);
newArr.push(2);
console.log(newArr.first());           // => 5
console.log(oldArr.first);             // => undefined // raises an error if we try to execute as function

// # Object.defineProperties



// # Object.freeze