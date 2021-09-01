
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]


let array = [];

for (prop in person) {
  array.push([prop, person[prop]]);
}

console.log(array);

let nestedPerson = Object.entries(person);

console.log(nestedPerson);