# Factory Functions aka or FCOP

```jsx
function makeCat(name, type) {
  return {
    name: name,
    type: type,
    say() {
      console.log('meow');
    }
  }
};
```
What is closures?
- Lexical scope - A function has access to the variables and functions that are visible in scope at the time of defintion. (Which are stored in closures.)

What is prototypal inheritance? What is Pseudo-classical pattern and how it relates to prototypal inheritance? 
- PC pattern is being implemented using prototypal inheritance

What is prototypal inheritance? 

What are prototypes? 
- It's the object that an object links to as part of it's hidden prototype property
- It is the prototype property of which belongs in every function created in JS, which points to an empty object, which we can fill in with functions for behaviour delegation. (or inheritance)


What are the two disadvantages of FF? 
- we can't tell which function the object was created from
- all objects created by FF will have copies of all the methods - which is a waste on resource.

# Function Execution Context

What is `this`?
- It's an execution context. 
- If not used in a function, it refers to the global scope. In strict mode, refers to undefined. 
- When used in a function, it depends on how the function is invoked. 

What about first class functions?
- Methods can be taken out of it's context and assigned to a function
- Resolves to an implicit execution context (unless we explicity specific one)

# Garbage Collection
https://launchschool.com/lessons/0b371359/assignments/48d2a179

- GC only applies to non-primitive values.
- JS does the allocation and releasing of memory
- It is not being done by the programmer
- It cannot be triggered manually by the programmer
- so what can we do if we need to manage resources manually
  - assign the variable value to `null` (make the code unreferenced by anything else) which would make it eligible for garbage collection.

## IIFE

This code works! It has a private scope for myPet, and it won't clash  with any other functions. (won't overwrite any existing functions);

```js
(function() {
  let myPet = {
    type: 'Dog',
    name: 'Spot',
  };

  console.log(`I have pet ${myPet.type} named ${myPet.name}`);
})();
```
### using and IIFE to return a function with access to private data

```jsx
let generateStudentId = (function() {
  let studentId = 0;

  return function() {
    studentId += 1;
    return studentId;
  };
})();
```
### using an IIFE to return an object with access to private data

Note that we can use this in combination of OLOO. 

```jsx
let inventory = (function() {
  let stocks = [];

  return {
    stockCounts() {
      stocks.forEach(function(stock) {
        console.log(stock.name + ': ' + String(stock.count));
      });
    },
    addStock(newStock) {
      let isValid = stocks.every(function(stock) {
        return newStock.name !== stock.name;
      });

      if (isValid) { stocks.push(newStock) }
    },
  };
})();
```

Describing how functions use `this` to reference the object and increment the property of that object 
- Within `advance`, `this` references the counter object. The function can use `this` to access and change the object's properties. Here, advance uses `this` to increment the `count` property in counter.

What is behaviour delegation? 
- From the runtime perpective, objects in the lower end of the prototype chain delegate "requests" to the objects on higher end of the prototype chain which is why it is called behavior delegation (apart from prototype inheritance - design perspective)



What should I improve on? 
- Code examples on
  - Static Properties and Methods
  - Examples on prototype chain
  - Examples on prototype property
  - Garbage Collection
  - Function execution context

Questions that I should practice on? 

- What does it mean that closures are lexically scoped? 
- What does `this` resolve to in this code? 

```js

let objA = {
}
```

- What is IIFE, how does it work? 
- How do we make something that closes over the same variable work? 

- How does closures work? Give some examples of closures?

- How does PFA work? 

- What are the caveats of classes? 
