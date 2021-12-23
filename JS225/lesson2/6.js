// Example 1 - primitive data types

function change(a) {
  a = 2;
  console.log(a);
}

var b = 1;
change(b);
console.log(b);

// Example 2 - objects

function increment(thing) {
  thing.count += 1;
  console.log(thing.count);
}

var counter = { count: 0 };
increment(counter);
console.log(counter);