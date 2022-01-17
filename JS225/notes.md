# A shallow dive into the constructor property of JavaScript

```jsx
let ainaa = {
  name: 'Ainaa',
}

console.log(ainaa.constructor);
```

We created an object literal with one property `name`. On line x, we call `constructor` property on the object `ainaa`. Where does the `constructor` property come from? From the `Object.prototype` object. 

Where does JS find the `constructor` property if it is not part of the object?

Since JS couldn't find it in the properties of `ainaa` object, it goes up the prototypal chain by looking at the object that `[[prototype]]` property is pointing to which is `Object.prototype`.

What objects implicitly get the `constructor` property?

ALl functions will have a prototype property. `constructor` properties are part of the prototype and the `constructor` prorperty will point back to the function itself. This code returns `true` based on the logic we have.



