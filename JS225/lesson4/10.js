// Question 1

// Yes, JS is GC language. 
// JS runtime, rather than the developer handles memory deallocation. 
// There is no way for the developer to trigger GC manually. 


// Question 2

let myNum = 1;

function foo() {
  let myStr = 'A string';
  // what is eligible for GC here => None - 1 is stored on the stack. Neve GCed. 
}

foo();

// What is eligible for GS here? => 'A string'. 
// - myStr is function scoped, the reference to it is broken after function finishes

// more code 


// Question 3

let outerFoo;

function bar() {
  let innerFoo = 'abc';
  outerFoo = innerFoo;
}

bar();

// can outerFoo's value be GCed here? 

// No. because it is a global variable. 
// only innerFoo's copy of 'abc' is eligible for garbage collection when bar returns. 


// Question 4

function makeString() {
  let index = 'abc';
  return function() {
    return index += 'xyz';
  };
}

let str = makeString();

// is 'abc' aligible for GC here? 
// no, it's in a closure referenced by the function returned by makestring
// which is now assigned to str. 

// Question 5

let bash = 'Some val';

// Will this ever be eligible for GC? 

// Yes, after the script finishes running. 