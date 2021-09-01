function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// Logs this is global if not in strict mode?
// We have an undeclared variables. 
