// Example 1

let sedan = {
  speed: 0,
  rate: 8,

  accelerate() { //  Here, we're using the concise method syntacticals sugar
    this.speed += this.rate;
  },
};

console.log(sedan);
sedan.accelerate();
console.log(sedan);

// What if we need anoher car?

let coupe = {
  speed: 0,
  rate: 12,
  accelerate() {
    this.speed += this.rate;
  },
};

coupe.accelerate();
console.log(coupe);

// Problem 1

function makeCar(accelRate, brakeRate) {
  return {
    speed: 0,
    accelRate,
    brakeRate,
    accelerate() {
      this.speed += this.accelRate;
    },
    brake() {
      this.speed -= brakeRate;
      if (this.speed < 0) {
        this.speed = 0;
      }
    },
  };
}

// Problem 2

let hatchback = makeCar(9);

// Problem 3

let sedan2 = makeCar(8, 6); 
sedan2.accelerate();
console.log(sedan2.speed);

sedan2.brake();
console.log(sedan2.speed);

sedan2.brake();
console.log(sedan2.speed);