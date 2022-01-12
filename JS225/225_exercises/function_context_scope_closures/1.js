const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// logs NaN
// this not in a function always points to global object
// when in a function, depends on how it's called