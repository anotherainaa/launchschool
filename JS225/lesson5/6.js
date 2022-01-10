// Prototypal Inheritance and Behavior Delegation

// Prototype chain lookup

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);

console.log(bar.a); // 1
console.log(baz.a); // 1 
console.log(baz.c); // undefined

// Notice how bar.a and baz.a logs 1 even though it's part of the foo property, not bar and baz

// c property was not found anywhere on baz's prototype chain, hence undefined is returned
 
let foo2 = {
  hello() {
    return 'hello ' + this.name;
  },
}

let bar2 = Object.create(foo2);
bar2.name = 'world';
console.log(bar2.hello()); // hello world

// hello method is found on the bar's object prototype object (foo2)

// Prototypal Inheritance and Behaviour Delegation

let Dog = {
  say() {
    console.log(this.name + ' says Woof!');
  },

  run() {
    console.log(this.name + ' runs away.');
  },
};

let fido = Object.create(Dog);
fido.name = 'Fido';
console.log(fido.say()); 
console.log(fido.run());

let spot = Object.create(Dog);
spot.name = 'Spot';
console.log(spot.say());
console.log(spot.run());

// Overriding default behaviour

fido.say = function() {
  console.log(this.name + ' says Woof Woof!');
}

console.log(fido.say());
console.log(spot.say());

// Object't own properties

let foo3 = {
  a: 1,

  toString: function foo3toString() {
    return "I'm a banana"
  },
};

let bar3 = Object.create(foo3);
bar3.a = 1;
bar3.b = 2;

console.log(bar3.hasOwnProperty('a'));
console.log(Object.getOwnPropertyNames(bar3));

delete bar3.a;
console.log(bar3.hasOwnProperty('a'));
console.log(Object.getOwnPropertyNames(bar3));

console.log(bar3.hasOwnProperty('c'));

// Methods on Object.prototype

Dog.toString = function dogToString() {
  return 'Doggy';
};

console.log(foo3.toString());
console.log(Object.prototype.toString(foo3));

console.log(spot.toString());
console.log(Object.prototype.toString(spot));

// Problem 1

let foo4 = {};
let bar4 = Object.create(foo4);

foo4.a = 1;

console.log(bar4.a) // This will log 1;

// Problem 2

let foo5 = {};
let bar5 = Object.create(foo5);

foo5.a = 1;
bar5.a = 2;
console.log(bar.a); // This will log 2

// Problem 3

let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code

console.log(far.myProp);       // 1
console.log(far.hasOwnProperty('myProp'));