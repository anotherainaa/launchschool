let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = Object.keys(vehicle);
console.log(keys);

let keys2 = [];

for (let property in vehicle) {
  keys2.push(property);
}

console.log(keys2);