var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// What will this log? 
// This is local. 
// Because of lexical scoping. The myVar initialization in the someFunction has an block scope and shadows the myVar in global scope. 
