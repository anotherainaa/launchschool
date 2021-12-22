foo = 1;
var moreFoo = 3;
let evenMoreFoo = 42;

function bar() {
  return 1;
}

console.log(global.foo);           // 1
console.log(global.moreFoo);       // 3
console.log(global.evenMoreFoo);   // undefined
console.log(global.bar);           // function bar() { return 1; }