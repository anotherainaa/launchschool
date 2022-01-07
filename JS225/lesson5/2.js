// FCOP review

function createPerson(firstName, lastName = '') {
  return {
    firstName, 
    lastName,
    fullName() {
      return (this.firstName + ' ' + this.lastName).trim();
    },
  };
}

let ainaa = createPerson('ainaa', 'doe');

console.log(ainaa.fullName());