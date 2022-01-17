# Making Sense of Closures

What does closures allow us todo? 
- create private data
- define application interfaces

Javascript is lexically scoped. What does that mean? 
- the scope is defined lexically, the scope is defined based on how the program is structured.

What is scope?
- Scope is composed of a set of nested boundaries that define which variable are accessible at any given point in your code. 
- the top layer is global scope which is universally accessible.
- nested within the global scope are individual layers of local scope or function scope.

How does scope work?
- it moves from inside to outside when it tries to resolve a variable
- variables intialized in the outer scope can be accessed from the inner scope while, variables initialized in inner scope can't be accessed from the outer scope

```jsx
let event = 'Coffee with Ada'.

function calendar() {
  let event = 'Party at Charle\'s house';
  console.log(event);
}

calendar();
```

We create a global variable called `event` which is assigned the value `Coffee with Ada`. 
We have a function called `calendar`, which also contains a variable called `event`, but has another string value. 
In this case, when we invoke the function calendar, the local variable `event` shadows the global variable `event`, JS finds the local variable and logs the value reference by `event` within the function. 
However when we try to log the value of `event` from outside of the function, we get the value referenced by the global variable `event` instead. 

What is closure?
- When we define a function, the function closes over the currently accesible scope and retains access to the variables defined in that scope. 

```jsx
var event = "Coffee with Ada.";

function describeEvent() {
  console.log(event);
}

function calendar() {
  var event = "Party at Charles' house.";
  
  describeEvent();
}

calendar();               // Logs: "Coffee with Ada."
```
Why does this log `Coffee with Ada`? 
- The function `describeEvent` function had already closed over the variable `event` in global scope. 
- It doesn't matter that we're calling describeEVent from inside calendar. For `describeEvent` , the `event` variable inside `calendar` doesn't exist. (It' doesn't exist in describeEvents clousre).

## Closure in Higher-Order Functions

What is a good way to use closure?
- In higher-order functions. (We're interested in the ability of functions to return another function here)

What is higher-order function?
- A function that takes another function as an argument
- A function that returns another function
- Or both. 

```jsx
function makeEventDescriber(event, date) {
  return function() {
    console.log(date + ": " + event);
  };
}

var coffeeWithAda = makeEventDescriber("Coffee with Ada.", "8/1/2018");
var partyAtCharles = makeEventDescriber("Party at Charles' house.", "8/4/2018");

coffeeWithAda();          // Logs: "8/1/2018: Coffee with Ada."
partyAtCharles();         // Logs: "8/4/2018: Party at Charles' house."
```

Why does `coffeeWithAda` and `partyAtCharles` log what they log? 
- the functions close over the the values that we pass as arguments (they're put in the envelope)
- and those values are then used when we invoke the function that is assigned to the two different variables, even though we don't pass any more arguments (and the returned function that is assigned to those variables don't take any parameters)'

**Partial Function Application**

## Private Data and Application Interfaces



