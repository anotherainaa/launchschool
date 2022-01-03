
// Code example 1

let obj = {
  a: 'hello', 
  b: 'world',

  foo() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }
    
    bar();
  },
};

obj.foo(); // undefined undefined

// Why? -> call to bar does not provide an explciit context - therefore it is the global object

// Solution 1 - local variable in the lexical scope

let obj1 = {
  a: 'solution', 
  b: '1',

  foo() {
    let self = this;

    function bar() {
      console.log(self.a + ' ' + self.b);
    }
    
    bar();
  },
};

obj1.foo(); // undefined undefined

// Solution 2 - pass the context to internal functions

let obj2 = {
  a: 'Solution',
  b: '2',

  foo() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar.call(this);
  }
};

obj2.foo();

// Solution 3 - function expression + bind
// Pro - can call the same method many times

let obj3 = {
  a: 'Solution', 
  b: '3',

  foo() {
    let bar = function() {
      console.log(this.a + ' ' + this.b)
    }.bind(this);

    bar();

    bar();
  },
}

obj3.foo();

// Solution 4 -  arrow function solution
// WHy? => `this` inside arrow function points to obj, the execution context of foo. 
// - arrow function's `this` points to the current value of `this` in the calling function. 

let obj4 = {
  a: 'solution', 
  b: '4',

  foo() {
    let bar = () => {
      console.log(this.a + ' ' + this.b);
    }
    
    bar();
  },
};

obj4.foo(); // hello world
