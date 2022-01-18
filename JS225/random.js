// let obj = {};
// console.log(obj.toString()); // logs [object Object]

// console.log(Object.getPrototypeOf(obj) === Object.prototype);
// console.log(Object.getPrototypeOf(obj));
// console.log(Object.prototype.hasOwnProperty('toString'));


// obj.toString = function() {
//   return 'Meow'
// }

// console.log(obj.toString());

let House = {
  ringDoorbell: function() {
    console.log('Ding Dong');
  },

  describe: function() {
    console.log(`${this.owner}'s house has ${this.rooms} rooms.`);
  }
};

let bobsHouse = Object.create(House);

console.log(Object.getPrototypeOf(bobsHouse));
console.log(Object.getPrototypeOf(bobsHouse) === House);

bobsHouse.describe();

bobsHouse.owner = 'Bobby Tables';
bobsHouse.rooms = 4;

bobsHouse.describe();

console.log(Object.getOwnPropertyNames(bobsHouse));
// returns an array object with property names

console.log(Object.getPrototypeOf(bobsHouse).hasOwnProperty('ringDoorbell'));


let Castle = Object.create(House);
Castle.describe = function() {
  console.log(this.owner + " owns a mighty castle with " + this.rooms + " rooms!");
}

let heartCastle = Object.create(Castle);
heartCastle.owner = 'Queen of Hearts';
heartCastle.rooms = 56;

heartCastle.describe();

heartCastle.ringDoorbell();
