let me = {
  firstName: 'Ainaa',
  lastName: 'Doe',
};

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

fullName(me);

let friend = {
  firstName: 'Aya',
  lastName: 'Doe',
}

fullName(friend);

let mother = {
  firstName: 'Jumie',
  lastName: 'Doe',
}

let father = {
  firstName: 'Azuma',
  lastName: 'Doe',
}

fullName(mother);
fullName(father);

let people = [];

people.push(me);
people.push(friend);
people.push(mother);
people.push(father);

function rollCall(collection) {
  let length;
  let i;
  for (i = 0, length = collection.length; i < collection.length; i += 1) {
    fullName(collection[i]);
  }
}

// rollCall(people);

// Use higher order function to itereate

function rollCall2(collection) {
  collection.forEach(function(item) {
    fullName(item);
  });
}

// rollCall2(people);

// simpler

function rollCall3(collection) {
  collection.forEach(fullName);
}

rollCall3(people);

let people2 = {
  collection: [me, friend, mother, father],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollcall: function() {
    this.collection.forEach(this.fullName);
  },

  add: function(person) {
    this.collection.push(person);
  },
}



people2.rollcall();