// Question 1

// let chile = {
//   name: 'The Republic of Chile',
//   continent: 'South America',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// }

// let canada = {
//   name: 'Canada',
//   continent: 'North America',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// }

// let southAfrica = {
//   name: 'The Republic of South Africa',
//   continent: 'Africa',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// }

// Duplication? 
// - getDescription is repeated  3 times even though the body is the same. The name and continent though need to take from it's respective countries.

// Question 2  - 6

function makeCountry(name, continent, visited = false) {
  return {
    name, 
    continent,
    visited,
    getDescription() {
      return `${this.name} is located in ${this.continent}. ` +
      `I ${this.visited ? 'have' : "haven't"} visited ${this.name}.`
    },
    visitCountry() {
      this.visited = true;
    }
  }
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(chile.getDescription());       // "The Republic of Chile is located in South America."
console.log(canada.getDescription());      // "Canada is located in North America."
console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa.

console.log(chile);
chile.visitCountry();
console.log(chile);
console.log(chile.getDescription()); 