// var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

// var digit_name = function(n) {
//   return names[n];
// };

// alert(digit_name(3)); // three in popup box

// names is global variable and can fail unexpectedly because clashing with other code

// Private variable of the function - no global variable
// slow - re-initialize names array every time the function runs

// var digit_name = function(n) {
//   var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

//   return names[n];
// }

// alert(digit_name(3)); // three in popup box


// Closure 
// - names is private data
// - function have names bound to original array and continue to have it

var digit_name = function() {
  var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  return function(n) {
    return names[n];
  }
}

alert(digit_name(3)); // three in popup box