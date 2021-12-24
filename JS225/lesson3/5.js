// Function Execution Context

// Examples 

function foo() {
  return 'this here is ' + this;
};

let object = {
  foo() {
    return 'this here is ' + this;
  },
};

let bar = object.foo;

let foo2 = {
  bar() {
    return this;
  },
};

let foo3 = {
  bar() {
    return this;
  },
};

let baz = foo3.bar;

// Explicit Function Execution Context

a = 1;

let object1 = {
  a: 'hello',
  b: 'world',
};

function foo() {
  return this.a;
};

let strings = {
  a: 'hello',
  b: 'world',
  foo() {
    return this.a + this.b;
  },
};


let numbers = {
  a: 1,
  b: 2,
};

// Call function examples

let iPad = {
  name: 'iPad',
  price: 40000,
};

let kindle = {
  name: 'kindle',
  price: 30000,
};

function printLine(lineNumber, punctuation) {
  console.log(lineNumber + ': ' + this.name + ', ' + this.price / 100 + ' dollars' + punctuation);
}

