// Closures and function review

// Function declaration

function ainaaGreets() {
  console.log('Ainaa says Hi!');
}

ainaaGreets();

// Function expressions - this is the [anonymous] function expression syntax 
let hello = function() {
  console.log('Welcome!');
};

hello();


// Using a function expression on a higher order function

let squares = [1, 2, 3, 4, 5].map(function(number) {
  return Math.pow(number, 2);
});

console.log(squares);

