// Partial Function Application

function add(first, second) {
  return first + second;
}

// PFA uses a "generator" function that creats a new function to call a third function. 

// Suppose we need to call add again and again 

function addOne(value) {
  return add(1, value);
}

// What if we needed function use an an argument of 2, 10 or something else. 
// PFA is a robust solution

function primaryFunction(arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
}

function generatorFunction(arg1) {
  return function(arg2) { // applicator see what the function returns? Another function to be called with the remaining argument
    return primaryFunction(arg1, arg2);
  }
}

let applicatorFunction = generatorFunction('Hello');
applicatorFunction(37.2); // Performs primaryFunction('Hello', 37.2);
// => Hello
// 37.2 

function makeAddN(addend) { // generator
  return function(number) { // applicator
    return add(addend, number); // call primary
  }
}

let add1 = makeAddN(1);
console.log(add1(1));
console.log(add1(41));

let add9 = makeAddN(9);
console.log(add9(1)); // 10
console.log(add9(9)); // 18

// The cons

function multiply(number1, number2) {
  return number1 * number2
}

// Notice how this method is the exact same with the first one
//  except for some variable naming difference

function makeMultiplyN(multiplicand) {
  return function(number) {
    return multiply(multiplicand, number);
  };
}


//  A more general approach to a flexible solution 

function repeat(count, string) {
  let result = '';
  let i;
  for (let i = 0; i < count; i += 1) {
    result += string;
  }

  return result;
}

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

let anotherAdd1 = partial(add, 1);
console.log(anotherAdd1(2));
console.log(anotherAdd1(6));

let threeTimes = partial(repeat, 3);
console.log(threeTimes('Hello'));
console.log(threeTimes('!'));
 
// Question 1


function greet(greeting, name) {
  greeting = greeting[0].toUpperCase() + greeting.slice(1, greeting.length);
  console.log(`${greeting}, ${name}!`)
};

greet('howdy', 'Joe');
greet('good morning', 'Sue');

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  } 
}

let sayHello = partial(greet, 'hello');

sayHello('Brandon');

let sayHi = partial(greet, 'hi');

sayHi('Sarah');