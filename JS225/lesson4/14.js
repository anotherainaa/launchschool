// Private Scope with an IIFE

/// Approach 1 - why can this be problematic?

// thousands of messy code 

let myPet = {
  type: 'Dog',
  name: 'Spot',
};

console.log(`I have pet ${myPet.type} named ${myPet.name}`);

// more messy code 

// Approach 2 - why can this be problematic?

function createAndLogPet() {
  let myPet = {
    type: 'Dog',
    name: 'Spot',
  };

  console.log(`I have pet ${myPet.type} named ${myPet.name}`);
}

createAndLogPet();

// Approach 3 - IIFE - what problem does this solve? 

(function createAndLogPet() {
  let myPet = {
    type: 'Dog',
    name: 'Spot',
  };

  console.log(`I have pet ${myPet.type} named ${myPet.name}`);
})();

// Passing in argument to IIFE

(function createAndLogPet(type, name) {
  let myPet = {
    type,
    name,
  };

  console.log(`I have pet ${myPet.type} named ${myPet.name}`);
})('Cat', 'Raha');