/* function and method invocation

- method is a function with a receiver
- this, is always available when a method executes 

 
 */

let greeter = {
  morning: function() {
    console.log('Good Morning!');
  },
};

function evening() {
  console.log('Good evening!');
}

// Method invocation - greeter is the receiver/ calling object
greeter.morning();

// Function invocation - no explicit receiver (calling object)
evening();

// One function object can use both invocations
// Variable functionGreeter is poiting at the greeter.morning method. 
let functionGreeter = greeter.morning;

// Function invocation: executing a function
functionGreeter();

// this during method invocation 

let counter = {
  count: 0,
  advance: function() {
    this.count += 1;
  },
};

console.log(counter);

console.log(counter.advance());
console.log(counter);

console.log(counter.advance());
console.log(counter.advance());

console.log(counter);

// What does this refer to? 
// - within the method advance, this refers to the counter object. 

let car = {
  fuel: 7.8,
  running: false,
  start: function() {
    this.running = true;
  },
};


console.log(car);

car.start();

console.log(car);

car.stop = function() {
  this.running = false;
}

car.stop();
console.log(car);

car.drive = function(distance) {
  this.fuel -= distance / 52;
}

car.drive(139);

console.log(car);




