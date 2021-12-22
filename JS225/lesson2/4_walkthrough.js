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
    if (this.isInvalidPerson(person)) {
      return;
    }

    this.collection.push(person);
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },

  getIndex: function(person) {
    let index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName && comparator.lastName === person.lastName) {
        index = i;
      }
    });
    
    return index;
  },

  remove: function(person) {
    let index;
    if (this.isInvalidPerson(person)) {
      return;
    }

    index = this.getIndex(person);
    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },
}



people2.rollcall();

people2.remove({ firstName: 'Ainaa', lastName: 'Doe' })

console.log(people2);


people2.update({ firstName: 'Amir', lastName: 'Doe'});

console.log(people2.get({firstName: 'Amir', lastName: 'Doe'}));
console.log(people2);

// Further exploration
// Add an index or ID that increments each time we add a new person.