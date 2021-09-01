let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
  greet: function(name) {
    console.log(`Hej, ${name}`)
  },
};


console.log(jane.greet('Bobby')); // Hej, Bobby!