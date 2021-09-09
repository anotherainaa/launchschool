// Question 1 

function objectHasProperty(object, string) {
  return Object.keys(object).includes(string);
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true

// indexOf approach

function objectHasProperty2(object, propertyName) {
  let keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}

// console.log(objectHasProperty2(pets, 'dog'));       // true
// console.log(objectHasProperty2(pets, 'lizard'));    // false
// console.log(objectHasProperty2(pets, 'mice'));      // true

// Question 2 

function incrementProperty(object, propertyName) {
  if (objectHasProperty(object, propertyName)) {
    object[propertyName] += 1;
  } else {
    object[propertyName] = 1;
  }
  return object[propertyName];
}

let wins = {
  steve: 3,
  susie: 4,
};

// console.log(incrementProperty(wins, 'susie'));   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// console.log(incrementProperty(wins, 'lucy'));    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

// Question 3

function copyProperties(object1, object2) {
  let count = 0;
  for (let prop in object1) {
    object2[prop] = object1[prop];
    count += 1;
  }
  return count;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }

// Question 4

function wordCount(string) {
  let count = {};

  string.split(' ').forEach(elem => {
    if (count[elem]) {
      count[elem] += 1;
    } else {
      count[elem] = 1;
    }
  });
  return count;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }