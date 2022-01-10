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

let DogPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, DogPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'

console.log(maxi.hasOwnProperty('bark')); // false
console.log(dexter.hasOwnProperty('bark')); // false
console.log(biggie.hasOwnProperty('bark')); // false
console.log(Object.getPrototypeOf(maxi).bark === DogPrototype.bark); // true
console.log(Object.getPrototypeOf(dexter).bark === DogPrototype.bark); // true
console.log(Object.getPrototypeOf(biggie).bark === DogPrototype.bark); // true