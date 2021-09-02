console.log(a);

var a = 1;

// This will log undefined because of "hoisting"
// What actually happens is, in the creation phase the var "decalaration" is recognized but set to undefined. 
// Therefore when a is logged, it is showing this uninitialized value of a.