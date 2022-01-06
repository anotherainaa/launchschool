// Problem 1

function subtract(a, b) {
  return a - b;
}

function sub5(a) {
  return subtract(a, 5);
}

console.log(sub5(10));
console.log(sub5(20));

// Problem 2

function makeSubN(number) {
  return function(subtractor) {
    return subtract(subtractor, number);
  }
}

let anotherSub5 = makeSubN(5);
console.log(anotherSub5(10));

// Problem 3

function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  }
}

function multiply(a, b) {
  return a * b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);
console.log(multiplyBy5(100)); // 500 

// Question 4
// Closures
// WHen a new function is created, it retains access to any variables that are defined 
// in the function's outer scope. (scope lexically?)

// Question 5

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    return rollCall('Math', students)
  }
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);



