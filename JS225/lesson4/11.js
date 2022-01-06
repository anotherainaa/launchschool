// Partial Function Application

function add(first, second) {
  return first + second;
}

// PFA uses a "generator" function that creats a new function to call a third function. 





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