// function passed as an argument

[1, 2, 3, 4, 5].forEach(function(number) {
  console.log(number);
});

// function as return value

function helloFactory() {
  return function() {
    console.log('hi');
  };
}

// Examples in use

console.log(helloFactory()); // this returns a function that isn't invoked yet
helloFactory()(); // this is an immediate invocation of return value

let hello = helloFactory(); // storing returned function in a variable
hello(); // invoking it later, whenever we want to!

// Taking both a function as an argument and returning a function as a value. 

function timed(func) {
  return function() {
    let start = new Date();
    func();
    let stop = new Date();
    console.log((stop - start).toString() + ' ms have elapsed');
  };
}

// Example in action

let timedHi = timed(function() { console.log('hi') });
timedHi();

// Another function to test the timer

function loopy() {
  let sum = 0;
  let i;

  for (i = 1; i < 1000000; i += 1) {
    sum += i;
  }

  console.log(sum);
}

timed(loopy)();

let timedLoopy = timed(loopy); // we store the returned function from timed
timedLoopy(); // we invoke it, which then invokes the function sandwiched between a start and end timer.
