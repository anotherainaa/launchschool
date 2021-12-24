// Examples

// let car = {
//   fuel: 7.9,
//   mpg: 3.7,
// }

function makeVehicle(fuel, mpg) {
  return {
    fuel, 
    mpg, 
    range() {
      return this.fuel * this.mpg;
    },
  };
}

let smallCar = makeVehicle(7.9, 37);
let largeCar = makeVehicle(9.4, 29);
let truck = makeVehicle(14.4, 23);

// Reducing duplication is not the goal, it's the side effect. 
