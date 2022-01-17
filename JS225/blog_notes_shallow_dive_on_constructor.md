# A shallow dive into the constructor property of JavaScript

```jsx
let ainaa = {
  name: 'Ainaa',
}

console.log(ainaa.constructor);
console.log(ainaa.hasOwnProperty('constructor'));
console.log(Object.hasOwnProperty('constructor'));
console.log(Object.prototype.hasOwnProperty('constructor'));
console.log(Object.prototype.constructor === ainaa.constructor);
```

We created an object literal with one property `name`. On line x, we call `constructor` property on the object `ainaa`. Where does the `constructor` property come from? From the `Object.prototype` object. 

Where does JS find the `constructor` property if it is not part of the object?

Since JS couldn't find it in the properties of `ainaa` object, it goes up the prototypal chain by looking at the object that `[[prototype]]` property is pointing to which is `Object.prototype`.

```jsx
function sayHi(name) {
  console.log(name);
}

console.log(sayHi.prototype.hasOwnProperty('constructor')); // logs true
```

What objects implicitly get the `constructor` property?

All functions will have a prototype property. `constructor` properties are part of the prototype and the `constructor` prorperty will point back to the function itself. This code returns `true` based on the logic we have.

```jsx
let Sponge = {
  species: 'Sponge',
  sayHi() {
    console.log('Hi, I am a sponge!');
  },
}

let spongebob = Object.create(Sponge);
spongebob.eat = function() {
  console.log('Yummmm I love Krabby Patties!');
}

spongebob.eat();
spongebob.sayHi();
console.log(spongebob.constructor);

```


Lines 1 - 6, we create a Sponge object with a `species` property and a `sayHi` property that is assigned a function expression. On line 8, we use `Object.create`, this creates an empty object and set it's `[[prototype]]` property to the object passed as an argument to it (In this case, this would be the object referenced by `Sponge`). At this point `spongebob` is essentially an empty object that has a `__proto__` property that refers to the object referenced by Sponge. From line 9 - 11, we declare an `eat` property on spongebob that refers to a function. On line 13, `spongebob` is able to access the `eat` property directly because the object itself contains the property

- spongebob is able to invoke sayHi by looking at it's proto, and is able to find the `sayHi` property on that object. 

- on line 15, calling constructor on spongebob returns object, rathern than sponge. But why? 

- the constructor property is only created as a property on a function's prototype (the object that the prototype property of the function refers to), in this case, Sponge is not a function, so it does not have one. 
- it goes up the prototype chain and finds constructor on the Object.prototype. (sponge is an object literal, therefore it's prototype is pointing to Object.prototype)







