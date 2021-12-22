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

/*
The function is returning an object with two properties
- bar
- qux - which defines a method (note that it's called method because we have a receiver, the object)

Study up on 
- destructuring
- spread operator
- rest parameters 

*/