// Context Loss 

// Examples 

let ainaa = {
  firstName: 'Ainaa',
  lastName: 'Doe',
  greetings() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  },
};

// imagine some more code here 

let foo = ainaa.greetings;
foo(); // => hello, undefined undefined

// But why? 
// The greetings method has lost it's context by the time we execute the function foo 
// (context execution is the global object). 

// Why not use `call`? 
// Because we may not want to immediately execute foo like the above. 
// foo could be called much much later


// Another example

function repeatThreeTimes(func) {
  func(); // can't do func.call(john), out of scope
  func();
  func();
}

function foo2() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings); 
}

foo2(); // Logs hello, undefined undefined 3 times. 

// One solution - update the function to accept a context parameter

function repeatThreeTimes(func, context) {
  func.call(context);
  func.call(context);
  func.call(context);
};

function foo3() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings, john);  
}

foo3();

// Common in methods like foreach


// What if you cannot supply a context object  - hard binding solution

function repeatThreeTimes(func, context) {
  func.call(context);
  func.call(context);
  func.call(context);
};

function foo4() {
  let john = {
    firstName: 'Jane',
    lastName: 'Doe',
    greetings() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings.bind(john));  
}

foo4();