# First Class Functions

JS can be used in 
- OOP
- FP

- First class function is feature common in FP languages.

What does it mean that a a function is first class?
- Treated like a value
  - we can pass it around as arguments
  - we can return function as value
  - we can assign it to variables as a value

What does this allow us to do ?
- Partial Function Application
- Higher-order function
- Callbacks more

```jsx
// Function definition and invocation
function speak(string) {
  console.log(string);
}
speak("Hello");                     // logs "Hello"

// Store in a variable
var talk = speak;
talk("Hi");                         // logs "Hi"

// Pass as an argument to a function
// Return from a function
function functionReturner(fn) {
  return fn;
}
var chat = functionReturner(talk);
chat("Good Morning");               // logs "Good Morning"

// Store in a data structure
var myFuncs = [talk];
myFuncs[0]("Good Afternoon");       // logs "Good Afternoon"

// Owns properties
talk.myProperty = "bananas";
console.log(talk.myProperty);       // logs "bananas"
```

__Storage in a variable__
- storing a function in a variable
- we can then call the function by appending parenthesis to the end. 

__Passage as an Argument to a Function / Returned as a value from a function__
- we declared a function that returns a function that is passed to it as an argument

__Storage in Data Structure__
- in the example, we store talk function in an array.
- which we also a assign to a variable
- and then we call it by passing an argument.


__Owner of a Property__
- in JS, functions are also objects
- therefore they can hold their own properties

What are the common uses of a first class function? 
- Higher-order function
  - takes an function as a parameter
  - returns a function as a value
  - or both
- Partial Function Application

- passing an anonymous function as an argument (callback)
- passing a function that we created (callback)

__Partial Function Application__

- accepts another function as a parameter (and another argument)
- the function then returns another function (calling the function that we passed an argument) that can be called with less arguments than it expects
- the returned function has access to the first argument through closures. 
- this allows us to generate functions with pre-applied values over and over again.

__Asynchronous functions__

```jsx
function speak(string) {
  console.log(string)
}

let delayedFunction = function(fn) {
  return function(val, delay) {
    setTimeout(function() {
      fn(val);
    }, delay);
  }
}

var delayedSpeak = delayedFunction(speak);
delayedSpeak("I'm late!", 1000); 
```

What are we doing here?
- define a `delayedFunction`
- it accepts a function as an argument
- returns a new function which accepts a value and a delay

- the new function uses `setTimeout` to wait `delay` length before executing the original function we provided
- we use delayed function to create a new funcion delayedSpeak (by passing our speak function)
- now we can use speak with some `delay`. 










