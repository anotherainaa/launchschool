const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

baz.qux();          // logs 'changed'

function delegate(context, methodName, ...args) {

  return function() {
    return context[methodName].apply(context, args);
  }
} 

/*

Input: object, methodName, argumnets of the method
Output: returns a function that can be called with it's original context

Examples
baz is an object
- we create property qux
  - we call delegate function and pass in the arguments.

we expect delegate to return a function as a value

when we call baz.qux - it should call the method with foo as it's context
when we change the foo.bar then we expect baz.qux to also be able to call this new method


*/