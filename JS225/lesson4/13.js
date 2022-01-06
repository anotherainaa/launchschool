// Code example

(function() {
  console.log('Hello world!');
})();

// Wrapping values in a parenthese doesn't change the value
// Used for grouping and controlling evalution in experssions. 

// Another style 

(function() {
  console.log('Konnichiwa world');
}());

// IIFE - omitting parentheses

let foo = function() {
  return function() {
    return 10;
  }();
}();

console.log(foo);