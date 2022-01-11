// Constructor, Prototypes, and the Prototypes Chain

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;

//   this.bark = function() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
//   };
// }

// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// let dexter = new Dog('Dexter', 'Rottweiler', 50);
// let biggie = new Dog('Biggie', 'Whippet', 9);

// maxi.bark();

// Each object has a copy of the bark method which is inefficient and wasteful on memory

// console.log(maxi.hasOwnProperty('bark'));
// console.log(dexter.hasOwnProperty('bark'));
// console.log(biggie.hasOwnProperty('bark'));

// console.log(maxi.bark === dexter.bark);
// console.log(maxi.bark === biggie.bark);
// console.log(dexter.bark === biggie.bark);

// Method delegation to prototypes

// Here, we create and explicitly set a DogPrototype (function prototype)
// let DogPrototype = {
//   bark() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
//   }
// };

// function Dog(name, breed, weight) {
//   Object.setPrototypeOf(this, DogPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// let dexter = new Dog('Dexter', 'Rottweiler', 50);
// let biggie = new Dog('Biggie', 'Whippet', 9);

// maxi.bark(); // 'Woof!'

// // Note that each object delegates the method to the prototype object
// // They no longer each have a copy of the function
// // - The objects don't have the methods - it's in the function prototype. 

// console.log(maxi.hasOwnProperty('bark')); // false
// console.log(dexter.hasOwnProperty('bark')); // false
// console.log(biggie.hasOwnProperty('bark')); // false
// console.log(Object.getPrototypeOf(maxi).bark === DogPrototype.bark); // true
// console.log(Object.getPrototypeOf(dexter).bark === DogPrototype.bark); // true
// console.log(Object.getPrototypeOf(biggie).bark === DogPrototype.bark); // true


// Setting the DogPrototype as a property instead 

// Previously we set the prototype to a DogPrototype object
// However, that object is not a property of our Dog object.

// function Dog(name, breed, weight) {
//   Object.setPrototypeOf(this, Dog.myPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.myPrototype = {
//   bark() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
//   }
// };

// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// let dexter = new Dog('Dexter', 'Rottweiler', 50);
// let biggie = new Dog('Biggie', 'Whippet', 9);
// maxi.bark(); // 'Woof!'

// console.log(maxi.hasOwnProperty('bark')); // false
// console.log(dexter.hasOwnProperty('bark')); // false
// console.log(biggie.hasOwnProperty('bark')); // false
// console.log(Object.getPrototypeOf(maxi).bark === Dog.myPrototype.bark); // true
// console.log(Object.getPrototypeOf(dexter).bark === Dog.myPrototype.bark); // true
// console.log(Object.getPrototypeOf(biggie).bark === Dog.myPrototype.bark); // true

// Using constructor's built in prototype property

function Dog(name, breed, weight) {
  // deleted Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

// This is the built in function prototype - it's an object
// and we assign the method bark as a property to the funciton prototype

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
maxi.bark(); // 'Woof!'

let biggie = new Dog('Biggie', 'Whippet', 9);
biggie.bark(); // 'Yip!'

// The constructor property in the function prototype

if (maxi.constructor === Dog) {
  console.log("It's a dog");
} else {
  console.log("It's not a dog");
}

// Re-assigning constructor property

Dog.prototype.constructor = function() {};

console.log(Dog.prototype.constructor);

console.log(maxi.constructor === Dog); // false
console.log(maxi instanceof Dog);      // true

console.log(Object.getPrototypeOf(maxi) === Dog.prototype);

// true, because: Object.getPrototypeOf(maxi) === Dog.prototype

// Over riding prototype

let dexter = new Dog('Dexter', 'Rottweiler', 50);

dexter.bark = function() {
  console.log('WOOF!')
};

maxi.bark();
dexter.bark(); // THis overrides the function prototype's bark method



