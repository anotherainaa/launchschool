# JS blog: `this`

What is `this`?
- the current execution context of a JS function at any given point in your program

How is `this` determineed / resolved? 
- It depends on how the function is defined 
- but more so, it is absolutely dependant on how the function is invoked

Why do we need to know `this`?
- accurately predict how a funciton will execute
- invoke the same function in different execution context

What is the value of `this` by default?
- It's the global object, `window` in the browser

```js
function setName(name) {
  this.name = name
}

setName('Ainaa');
console.log(window.name);
console.log(this.name);
console.log(movie);

```

This code proves that even if the "scope" is an inner function in another function, `this` would still point
to the global object. THis is because the implicit execution context for a function is the global object. 
- This shows that a function execution context is dependent on how it is executed, and it doesn't work the same a scope does. 
- `this` resolves to the global object when we execute a function as shown in the examples. 

### Method Execution Context

What is a method? 
- It's a function within an object that is a property of the object
- It's a function that is defined within the property on an object. 


- we define a object theatre with a property loadproject that is assigned a function. (which makes loadProjector a method)
- we use method invocation to execute loadProjector
- however, this time we do so in the execution context of `theater` 



