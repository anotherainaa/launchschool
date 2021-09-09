// Property names and values

let myCat = {
  name: 'Figaro',
  age: 5,
  'nick name': 'Fig',
  true: true,
  interests: {
    toy: 'mouse',
    food: 'raw meat'
  },
  speak() {
    console.log('Meow!')
  },
};

myCat;

// Accessing property values

console.log(myCat['nick name']); // This is an invalid identifier? Therefore must use bracket notation.

console.log(myCat.true);
console.log(myCat.speak());

// Updating property or creating new ones 

myCat.color = 'Black';
myCat.age = 2;
myCat['nick name'] = 'Tweety';

console.log(myCat)

// deleting properties

delete myCat['nick name'];
console.log(myCat);