// Garbage collection

function logName() {
  let name = 'Sarah';

  console.log(name);
}

logName();
// Sarah now available for GC. 

// Why? - The string is no longer accessible, JS can release the memory the string used

// What happens if we save the name into a variable like below? 

let loggedName = logName();
// loggedName variable is assigned the value 'Sarah'
// 'Sarah' assigned to logName is not available for GC.
// 'Sarah' assigned to `name` is available for GC. 


// Above is the case for primitive values

// What happens if we store the value of Sarah as a property of an object

function logName2() {
  let name = {
    firstName: 'Sarah'
  };

  console.log(name.firstName);
  return name;
}

let loggedName2 = logName(); // The values returned by logname and saved into loggedName
// is not eligible for GC. 
// This value is the same value that is assigned to name


// Example not eligible for GC

function go() {
  let foo = {};
  let bar = { qux: foo };
  foo.xyz = bar;
}

go();
// Neither `foo` nor `bar` is eligible for GC. 
// Because they reference each other. 

for (let count = 0; count < 1000; count += 1) {
  go();
}
// There are now 2000 objects still on the heap but ineligible for GC

