// Question 1 

function question1() {
  return this;
}

// - undetermined. because we havent executed the function.

// Question 2

function question2() {
  return this;
}

question2();

// - `this` points to the global object, window. 
// - in strict mode, it is undefined. 
// - functions calls on the global object are implicitly set to the global context

// Question 3

function foo3() {
  function bar() {
    function baz() {
      console.log(this);
    }

    baz();
  }

  bar();
}

foo3();


// - `this` points to the global context. 
// - inner function, baz is called with the implicit global context - window

// Question 4

let obj4 = {
  count: 2,
  method() {
    return this.count;
  },
};

obj4.method(); 

// - this points to the object `obj4`. because we're calling a method on `obj4`

// Question 5

function foo5() {
  console.log(this.a);
}

let a = 2;
foo5();

// - it will raise an error. 
// this is set to undefined in strict mode. 
// let declarations doesn't create a property on the global object
// raises an error because we're trying to exists a non existant prooperty of undefined. 

// Question 6

let c = 1;

function bar() {
  console.log(this.a);
}

let obj6 = {
  a: 2,
  foo: bar,
};

obj6.foo();

// This will log 2
// We;re calling foo with the context set to `obj6`
// execution context for method calls are the calling object

// Question 7

let foo7 = {
  a: 1,
  bar() {
    console.log(this.baz());
  },

  baz() {
    return this;
  },
};

foo7.bar();
let qux = foo7.bar;
qux();

// This will log the obj `foo7`
// And then raise an error? Because there is no baz on the global object

