// Static and Instance Properties and Methods

// instances of a type (objects general term - instance specific term)

// even factory function create instances - even though there is no way to test it

// Code examples

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  Dog.allDogs.push(this);
}

Dog.allDogs = [];

Dog.prototype.bark = function() {
  console.log(`${this.weight > 20 ? 'Woof!' : 'Yip!'}`);
};

let maxi = new Dog('Maxi', 'Mixed', 30);
maxi.bark();

let dexter = new Dog('Dexter', 'French Bulldog', 82);

dexter.bark = function() {
  console.log('WOOF WOOF!')
}

dexter.bark();

Dog.species = 'Canis lupus';


console.log(maxi.species);
console.log(Dog.allDogs.forEach((dog, index) => console.log(`${index + 1} - ${dog.name}`)));

Dog.showSpecies = function() {
  console.log(`Dogs belong to the species ${Dog.species}`);
};

Dog.showSpecies();