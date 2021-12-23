// Question 1 

// What will the code output? 
// - It will output
//   - First, 'Hello from the function scope!'
//   - Then, it will output 'Hello from the global scope'
// Because strings are primitive values, the re-assignement in the function doesn't change the variable in the global scope. 

let message = 'Hello from the global scope';

function func(message) {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(message);
console.log(message);

// Question 2
// What does this log? 
// - 'Greetings from the function scope!
// - 'Greetings from the function scope!
// the message property in myobj is changed. 
//  since myObj and obj point to the same thing when it is changed
// the change is reflected on both objects.

let myObj = { message: 'Greetings from the global scope!' };

function func2(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message);
}

func2(myObj);
console.log(myObj.message);


// Question 3 

let message3 = 'Hello from the global scope!';

function func3() {
  message3 = 'Hello from the function scope!';
  console.log(message3);
}

func3();
console.log(message3);

// Question 4

let a = 10;
let obj = {
  a
}

let newObj = obj;
newObj.a += 10;

console.log(obj.a === a); // logs false
console.log(newObj.a === obj.a); // logs true.


// Question 5

let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true

// The reassignment at 10 reassigns animal to a new object instead of mutating. 
// warthog is still pointing to the old object which has not been mutated. 
//  animal and meerkat are pointing to the new object.
