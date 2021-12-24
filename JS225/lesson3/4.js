// Question 1

// No strict mode, implicit execution context is global object, window in browsers

// Question 2 

// Code will log true.
// undeclared variables are created as properties of the global object 

// Question 3

// it will raise an error. 
// undeclared variables will raise an error in strict mode
// the implicit context will be undefined. 

// Question4 

// What does the code do? 
// - raise an error
// - variables created in a function (using let) has function scope
// and can't be accessed from outside of the function

// Question 5

// What does the code do? 
// - it will log 1. 
// - undeclared variable in the function will be created as a property on the global object 

// Question 6

// What does the code log? 

// - raise an error. 
// - cant' create undeclared variable in strict mode.
// - cause we don't have accesss to the global object as the implicit execution context