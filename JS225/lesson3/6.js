// Question 1

// - Outputs window 
// - JS implicitly set the global object as execution context 

function foo() {
  return this;
}

let context = foo;
console.log(context());

// Question 2

// What will it output in strict mode? 
// - should be undefined. 

// Question 3

// the code will output obj
// we execute the method and set the return value to context2
// we call the method with a calling object which sets it execution context to object

let obj = {
  foo() {
    return this;
  },
};

let context2 = obj.foo();

console.log(context2);

// Question 4;

var message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let bar = {
  message: 'Hello from the function scope!',
};

bar.deliverMessage = deliverMessage;
bar.deliverMessage();

// What will the code output? 
// - First, hello from global scope
// - Then, hello from the function scope. 

// the first time we call the function, `this` resolves to window.
// the second time, we call the method, `this` resolves to bar object. 

// Question 5

var a = 10;
var b = 10;
let c = {
  a: -10,
  b: -10,
};

function add() {
  return this.a + b;
}

c.add = add;

console.log(add()); // 10 + 10 = 20
console.log(c.add()); // -10 + 10 = 0 

// What happens if we change line 1 to let
// - The output would then change to `NaN` and 0. 
// - line 73 this.a would result in undefined + 10 = NaN. 

// let and const create variables that don't belong to any object. 

// Question 6 

// call and apply allows us to explicitly set function execution context

// Question 7

let foo7 = {
  a: 1,
  b: 2, 
};

let bar7 = {
  a: 'abc', 
  b: 'def',
  add() {
    return this.a + this.b;
  },
};

bar7.add.call(foo7); // 3

// Code will return 3. 

// Question 8

let fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: 'A Collection of Fruit',
};

function outputList() {
  console.log(this.title + ':');

  let args = [].slice.call(arguments);

  args.forEach(function(elem) {
    console.log(elem);
  });
}

// invoke outputList here

outputList.apply(fruitsObj, fruitsObj.list);

// Note that we can also use spread syntax

outputList.call(fruitsObj, ...fruitsObj.list);

// Question 9 

// Why do we use [].slice.call in the method. 

//  Because `arguments` is array like and not an actual array
//  we won't be able to use forEach after that if not. 
