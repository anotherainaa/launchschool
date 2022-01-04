// Code example
// Method separated from it's object when passed as an argument

function Animal(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function() {
    console.log(this === myCat);
    console.log('The ' + this.type + ' has ' + this.legs + ' legs.');
  }
}

var myCat = new Animal('Cat', 4);

setTimeout(myCat.logInfo.bind(myCat), 1000); // The undefined has undefined legs

// Constructor invocation

function Country(name, traveled) {
  this.name = name? name : 'United Kingdom';
  this.traveled = Boolean(traveled); // transform to a boolean;
}

Country.prototype.travel = function() {
  this.traveled = true;
};

let france = new Country('France', false);

let unitedKingdom = new Country;

france.travel();

class City {
  constructor(name, traveled) {
    this.name = name;
    this.traveled = false;
  }

  travel() {
    this.traveled = true;
  }
}

let paris = new City('Paris', false);
paris.travel();