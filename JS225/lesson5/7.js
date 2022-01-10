
// Question 1

// function getDefiningObject(object, propKey) {
//   while (object && !object.hasOwnProperty(propKey)) {
//     object = Object.getPrototypeOf(object);
//   }

//   return object;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// bar.c = 3;

// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'e'));             // => null

// Problem 2

// function shallowCopy(object) {
//   let newObj = Object.create(Object.getPrototypeOf(object));
//   // set the prototype of new Obj to the prototype of object
//   // set the same amount of properties 

//   let props = Object.getOwnPropertyNames(object);

//   props.forEach(prop => newObj[prop] = object[prop]);

//   return newObj;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false

// Problem 3

function extend(destination, ...sources) {
  // ...
  let obj = destination;

  // for each source object
    // getOwn property names, add it to the obj

  sources.forEach(source => { 
    let properties = Object.getOwnPropertyNames(source);
    properties.forEach(prop => obj[prop] = source[prop]);
  })

  return obj;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object)
console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe