// Question 1

function makeMultipleLister(number) {
  return function() {
    let i = number;
    while (i < 100) {
      console.log(i);
      i += number;
    }
  }
}

let lister = makeMultipleLister(13);

// Question 2 

let total = 0

function add(number) {
  total += number;
  console.log(total);
}

function subtract(number) {
  total -= number;
  console.log(total);
} 

console.log(add(1));

console.log(add(42));

console.log(subtract(39));

console.log(add(6));

// Question 3

function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
let systemStatus; // = ?

// How can you set the value of systemStatus 
// to the value of the inner variable status without changing startup in any way?

// Can't be done. 