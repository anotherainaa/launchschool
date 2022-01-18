# Understand Links on the Object Prototype Chain

- DRY. Why?
  - Easier to reuse code
  - Easier to maintain
  - if we have two objects that share behavior and we have to change the code, we only have to do it once.

Does JS have classes and inheritance?
- Tecnically, no
- It has prototypes and prototypal delegation

What is classical inheritance?
- Classes are blueprints for creating objects
- Sub-classes inherit from super classes / parent classes

Why are class based languages powerful or useful
- Blueprints can create many instances
- We can use inheritance to create child-classes that extend the parent class
- Child classes can overwrite parents classes to achieve polymorphism
  - For when the child class needs a different of extended behaviours from the parent class

How does JS achieve this class-like behaviors?
- Using prototypal delegation (bottom up runtime perspective)

What is prototype Delegation? How does it work?
- In JS, every object has what is known as a prototype object
  - like links in a chain
- an object connected to the links on a chain
  - have access to methods that are not only defined in it's own properties
  - but also the properties of all the objects in its chain
  - this is why it's called delegation

```jsx
let obj = {};
console.log(obj.toString()); // logs [object Object]

console.log(Object.getPrototypeOf(obj) === Object.prototype);
console.log(Object.getPrototypeOf(obj));
console.log(Object.prototype.hasOwnProperty('toString'));
```
What about this code? 
- This objest has no properties
- But why are we able to call `toString()` on it? 
  - If we use `obj.hasOwnProperty('toString')` to check it, we would get `false`.
- The answer is, JS checks the `[[prototype]]` property of the object, it finds that it points to `Object.prototype`
- JS will find the `toString` property on `Object.prototype`
- This is why we can call the `toString` method on `obj`. 

How can I check the prototype of an object?
- `Object.getPrototypeOf(objName)`

How is prorotypal delegation different from classical inheritance?
- The `obj` delegated the `toString` behavior to its prototype.
- `obj` does not have its own `toString` method
  - rather, it relied on its prototype to define that behaviour
- it's not necessary for objects to rely on it's prototype
  - it can has its own, but when we need two objects of the same type to share the behaviour, we can delegate it to the prototype

```jsx
let obj = {};
console.log(obj.toString()); // logs [object Object]

obj.toString = function() {
  return 'Meow'
}
```

Does behavior delegation happen in this example?
- No, JS will find the method `toString` in the properties of `obj` , therefore this object is not delegating this behaviour to its prototype
- not that while it "covers" the `toString` implementation on `Object.prototype`, it does not completely shadow it.
  - we can use `call` or `apply` or `bind` to use the method in `Object.prototype`

#### Linking Objects

```jsx
let House = {
  ringDoorbell: function() {
    console.log('Ding Dong');
  },

  describe: function() {
    console.log(`${this.owner}'s house has ${this.rooms} rooms.`);
  }
};

let bobsHouse = Object.create(House);

console.log(Object.getPrototypeOf(bobsHouse));
console.log(Object.getPrototypeOf(bobsHouse) === House);

bobsHouse.describe();

bobsHouse.owner = 'Bobby Tables';
bobsHouse.rooms = 4;

bobsHouse.describe();
```
What can we say about this code here?
- we created a `House` object which became the prototype of `bobsHouse`. How? 
  - This is how `Object.create` works
  - It creates a new object and set the `[[prototype]]` property of `bobsHouse` to `House`
  - How do we know that? => Use `Object.getPrototypeOf(bobsHouse) === House` will log `true`.
- then we try to call `describe` method on `bobsHouse` object
- Note that `bobsHouse` object doesn't have this `describe` property. So what does JS do? => It looks in the prototype property, finds that it's House is in the prototype chain, finds the behaviour `describe` in this object and calls it. 
- Why does the output logs undefined? 
- because we don't have `this.name` and `this.rooms` property on bob object. How can we fix it? 
  - we add it to the object as per example
  - and now the code works as intended. 

How can we know and check that we're delegating behaviours in a prototype chain? 
- We can check using the `hasOwnProperty` method. 

But what if we want to check all the properties? 
- Use `Object.getOwnPropertNames(bobsHouse)` - Note that this is a static method.

- We also confirm that the prototype of `bobshouse` has the method on line 40. We get the prototype of bobHouse and then check that the object has the property name of `ringDoorbell`. 

- Prototypal delegation is a powerful way to define a behaviour in one place and then use it in many others. 

- We can create 1000 houses and they would all have the behaviours that we defined on `House`. 

### Multiple Links in the Chain

Benefits of classes => Creating subclasses
JS => Use prototypes to achieve the same behaviour

```jsx
let Castle = Object.create(House);
Castle.describe = function() {
  console.log(this.owner + " owns a mighty castle with " + this.rooms + " rooms!");
}

let heartCastle = Object.create(Castle);
heartCastle.owner = 'Queen of Hearts';
heartCastle.rooms = 56;

heartCastle.describe();

heartCastle.ringDoorbell();
```
What are we doing in this code here? 
- create a Castle object using House as its prototype.
- we overwrite the descibe method on Castle object. (All castle objects will have this behaviours throuh castle)
- while we do nothing to change the ringDoorBell method - all castles will have access to this behaviours through Castle's Prototype which is House. 
- we create an individual heartCastle using Castle as its prototype
- when we call the describe behaviour, it uses the behaviour defined in Castle
- when we call the ringDoorBell behaviour, it uses the behaviour defined in House

__Summary__
- Classes
  - define class, create subclasses that inherit that baheviour
  - we use classes to instantiate objects from a class
Prototype
  - each object in JS jas a prototype object
  - any object on the lower side of the protoype chain can use the properties defined on objects up tha chain 
  - this is why it's called delegation
  - lower-level objects can also define their own behaviour by the same name, which they will then use (instead of trying to delegate the behaviour up the chain)
- How can we check object propert
  - `Object.getOwnPropertyNames`
  - `Object.prototype.hasOwnProperty`

  
  








