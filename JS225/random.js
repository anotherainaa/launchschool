let ainaa = {
  name: 'Ainaa',
}

console.log(ainaa.constructor);
console.log(ainaa.hasOwnProperty('constructor'));
console.log(Object.hasOwnProperty('constructor'));
console.log(Object.prototype.hasOwnProperty('constructor'));
console.log(Object.prototype.constructor === ainaa.constructor);

function sayHi(name) {
  console.log(name);
}

console.log(sayHi.prototype.hasOwnProperty('constructor')); // logs true