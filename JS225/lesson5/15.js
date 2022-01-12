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

// creating a read-only obj

let obj = {
  name: 'Obj',
};

Object.defineProperties(obj, {
  age: {
    value: 30,
    writable: false,
  },
});

console.log(obj.age);
obj.age = 32;   // this will throw an error in strict mode
console.log(obj.age);

// Exercise

function newPerson(name) {
  return Object.defineProperties({ name: name }, {
    log: {
      value() {
        console.log(this.name);
      },
      writable: false,
    }
  })
}

let me = newPerson('Shane Riley');
me.log(); // Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log(); // Shane Riley

let newObj = {}

Object.defineProperties(newObj, {
  arr: {
    value: [1, 2, 3, 4],
    writable: false,
  },
});

console.log(newObj.arr);
console.log(newObj.arr[0] = 33); // Note that you can still change nested objects! 
console.log(newObj.arr); 
console.log(newObj.arr = [1, 4, 6]); // but you cannot change the array itself
console.log(newObj.arr);

// # Object.freeze

let frozen = {
  integer: 4,
  string: 'String',
  array: [1, 2, 3],
  object: {
    foo: 'bar'
  },
  func() {
    console.log('I\'m frozen');
  },
};

Object.freeze(frozen);
frozen.integer = 8;
frozen.string = 'Number';
frozen.array.pop();
frozen.object.foo = 'baz';
frozen.func = function() {
  console.log('I\'m not really frozen');
};

console.log(frozen.integer);      // => 4
console.log(frozen.string);       // => String
console.log(frozen.array);        // => [1, 2]
console.log(frozen.object.foo);   // => baz
frozen.func();                    // => I'm frozen


// Why is function frozen but not array or objects? 

// The references to the objects are frozen. Can't point to other objects, but can still use the frozen references to mutate.
// In the method, this is equivalent to trying to point to a new function but the reference is frozen.

// A frozen object can't be unfrozen