let a = 'hi';                        // Create a primitive string with value "hi"
typeof a;                            // "string"; This is a primitive string value

let stringObject = new String('hi'); // Create a string object
typeof stringObject;                 // "object"; This is a String object

a.toUpperCase();                     // "HI"
stringObject.toUpperCase();          // "HI"

typeof a;                            // "string"; The coercion is only temporary
typeof stringObject;                 // "object"

// Creating custom objets 

let colors = {
  red: '#f00',
  orange: '#ff0',
}

typeof colors;
colors.red;
colors.orange;

// Accessing properties

let animal = 'turtle';
animal.length //  6

colors.red;
'blue'.length;

// setting a new value to a property

let count = [0, 1, 2, 3, 4];
count.length = 2;

colors.blue = '#00f';

// Method calls

console.log((123).toString());
console.log('pizza'.match(/z/));
console.log(Math.ceil(8.3478374));
console.log(Date.now());

// Compact method notation

// From this

let myObj = {
  foo: function(who) {
    console.log(`hello ${who}`);
  },
  bar: function(x, y) {
    return x + y;
  }
};

// To this

let myObj = {
  foo(who) {
    console.log(`hello ${who}`);
  },
  bar(x, y) {
    return x + y;
  },
}