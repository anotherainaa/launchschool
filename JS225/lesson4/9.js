// Closures and GC

function makeHello(name) {
  return function() {
    console.log('Hello, ' + name + '!');
  };
}

let helloSteve = makeHello('Steve');

// Steve sticks around

// Removing a reference explicitly 

helloSteve = null;

function makeHello2(name) {
  let message = 'Hello, ' + name + '!';
  return function() {
    console.log(message);
  };
}

let helloSteve = makeHello2('Steve');

// Modern browsers will GC steve because it is no longer referenced. 

// Problems 1

let a = [1];

function add(b) {
  a = a.concat(b);
}

function run() {
  let c = [2];
  let d = add(c);
}

run();

// [1] is collected after line 33 execeuted

// [2] can bd GCed after the `run` function returns 

// [1. 2] can only be GCed after the program ends. 

// Problem 2

// After the program finishes. 