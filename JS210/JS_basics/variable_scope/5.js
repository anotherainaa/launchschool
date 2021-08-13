function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

// This code raises an error.
// variables declared by `let` aren't available until the code runs.

// variable a on line 6 shadows the variable declared on line 2. 

// Within th inner scope the let is hoisted , therefore leaving a in temporal dead zone.