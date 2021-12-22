function foo(bar) {
  return {
    bar: bar,
    qux: function() {
      console.log("hello");
    },
  };
}

// Syntactical sugar

function foo(bar) {
  return {
    bar,    // same as bar: bar
    qux() { // same as qux: function()
      console.log('Hello');
    },
  };
}

function xyz(foo, bar, qux) {
  return {
    foo, 
    bar, 
    qux,
  }
}

// Mixing it up

function xyzzy(foo, bar, qux) {
  return {
    foo, 
    bar, 
    answer: qux, // not using the same name, not using syntactical sugar. 
  }
}

/*
The function is returning an object with two properties
- bar
- qux - which defines a method (note that it's called method because we have a receiver, the object)

Why would you use the syntactical sugar (concise property initializers)?
- Sometimes we need to initialize an object from a bunch of variables, often using the same name

What's happening?
- we're only using the name of the property we want to initialize
  - JS looks for a variable with the same name to use as the initial value. 

Notes
- Use a consistent style within each object defintion. (especially in regards to concise methods)
  - there are subtle differences between concise method definition and classic definition. 

Study up on 
- destructuring
- spread operator
- rest parameters 

*/