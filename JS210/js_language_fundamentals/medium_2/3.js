// What does the following code log? Why is this so?

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));

//  Because of closures? and lexical scoping? 
// totalPayable function holds a reference to the variable startingBalance which is accessible from the function because this variables was declared with a global scope. (outer scope of the function)
// function (inner scope) has access to variables in the outer scope. 
// since the inner scope only holds a reference to the variable from the outer scope, any re-assignment that happens on the outer scope is also reflected when the function is invoked. 
// hence logging, the return value of totaPayable is 40 and 45 which is logged to the console by code on line 12 and 15. 

// Keywords

// Closures have functions "retain access" to variables defined in an "enclosing scope".
