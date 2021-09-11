// Problem 1
function radianToDegree(radian) {
  return Math.round((radian * 180) / Math.PI);
}

console.log(radianToDegree(0.524));

// Problem 2

let num = -180
console.log(Math.abs(num));


// Problem 3

console.log(Math.sqrt(16777216));

// Problem 4

console.log(Math.pow(16, 6));

// Problem 5

let a = 50.72;
let b = 49.2;
let c = 49.86;

console.log(Math.ceil(b));
console.log(Math.round(c));
console.log(Math.floor(a));

// Problem 6

function randomInt(min, max) {
  if (min === max) {
    return min;
  } else if (min > max) {
    let swap = min;
    min = max;
    max = swap;
  }

  let difference = max - min + 1;
  return Math.floor(Math.random() * difference) + min;
};

console.log(randomInt(2, 5));
