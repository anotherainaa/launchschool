// console.log(typeof 1.2);
// console.log(typeof 'hello');
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof { a: 1 });
// console.log(typeof [1, 2, 3]);
// console.log(typeof null);

// console.log(String.fromCharCode(100));
// console.log('hello'.concat(" Bob"))

// 'Hello, world!'     // string literal
// 3.141528            // numeric literal
// true                // boolean literal
// { a: 1, b: 2 }      // object literal
// [ 1, 2, 3 ]         // array literal
// undefined           // undefined literal

// let foo = null;
// let bar = '';
// // let isOk = foo || bar;

// let isOk = !!(foo || bar);
// console.log(isOk);

// names = ['Neo', 'Alita', 'Levy', 'Wahlbert']
// names.forEach(function(n) {
//   console.log(n);
// });

// names.forEach(name => console.log(name.toUpperCase()));
// const newArray = [1, 2, 3]

// newArray[0] = 7
// console.log(newArray)

// let names = ['Alphinaud', 'Hauchrefant', 'Alita', undefined, 'Tataru'];

// names.forEach(name => {
//   try {
//     console.log(`${name}'s name has ${name.length} letters in it.`);
//   } catch (exception) {
//     console.log('Something went wrong.')
//   }
// });

// function foo(number) {
//   if (typeof number !== "number") {
//     throw new TypeError("expected a number");
//   }
//   console.log(number);
// }

// foo(3);
// foo('hello');

// Number.isNaN(value)

// Object.is(value, NaN)

// function isNotANumber(value) {
//   return value !== value;
// }

// console.log(isNotANumber(10));
// console.log(isNotANumber(NaN));

function isNegativeZero(value) {
  return (value === 0) && (1 / value === -Infinity);
};


console.log(isNegativeZero(0));
console.log(isNegativeZero(-0));llgit 