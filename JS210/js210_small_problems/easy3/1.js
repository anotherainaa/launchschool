function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const age = randomAge(20, 200);
console.log(`Teddy is ${age} years old!`)