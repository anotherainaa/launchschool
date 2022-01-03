// Question 1

// - to permanently bind an execution context to a particular function, use `bind`
// - note that `bind` does not execute the function and just returns a new function 


// Question 2 

let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);

// - This will log nothing because binding obj to the foo function returns a new funciton (but we don't do anything with it)


// Question 3

let obj2 = {
  a: 2, 
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj2);

console.log(bar());

// This would log 5. 
// On line 33, we explcitly bind foo to an execution context, obj 
// And we save the new function to bar. 
// and then we execute the function bar. 

// as a result, code on 35 references the object;s prorpeties `a` and `b` when invoked. 

// Question 4

let positiveMentality = {
  message: 'JavaScript makes sense!',
};

let negativeMentality = {
  message: 'JavaScript makes no sense!',
};

function foo2() {
  console.log(this.message);
};

let bar2 = foo2.bind(positiveMentality);

negativeMentality.logMessage = bar2;
negativeMentality.logMessage();

// This will log Javascript makes sense 
// we've permenanently bound the foo to positive mentality and save the returnd function in bar2 
// we create a new property in negative mentality called logmessage assigning bar2 as it's value/ 
//  when it gets executed, it executes using the permanently bound execution context. 

// Question 5 

let obj3 = {
  a: 'Amazebulous!',
};

let otherObj = {
  a: 'That\'s not a real word!',
};

function foo3() {
  console.log(this.a);
}

let bar3 = foo3.bind(obj3);

bar3.call(otherObj);

// This will log amazebulous
// context permanently bound
// can't change context using the call method 