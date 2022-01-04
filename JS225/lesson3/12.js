// Code example

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

let ainaa = {
  firstName: 'Ainaa',
  lastName: 'Doe',
  greetings() {
    repeatThreeTimes(function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    });
  },
};

ainaa.greetings();

// Another frequent example where context loss occcurs

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

let aya = {
  firstName: 'Aya',
  lastName: 'Doe',
  greetings() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.firstName + ' ' + this.lastName);
    });
  },
};

aya.greetings();

// forEach executes the anonymous function - which gets executed with global object as context

// Solution 1 - local variable to store this

let obj1 = {
  a: 'Solution',
  b: '1',

  foo() {
    let self = this;
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + self.a + ' ' + self.b);
    });
  },
}

obj1.foo();

// Solution 2 - bind the argument function with the surrounding context

let obj2 = {
  a: 'Solution', 
  b: '2',

  foo() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this. a + ' ' + this.b);
    }.bind(this));
  },
}

obj2.foo();

// Solution 3 - use the optional thisArg argument

let obj3 = {
  a: 'Solution', 
  b: '3', 

  foo() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }, this);
  },
}

obj3.foo();

// Solution 4 - use arrow functions

let obj4 = {
  a: 'Solution', 
  b: '4',

  foo() {
    [1, 2, 3].forEach(number => {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  },
}

obj4.foo();