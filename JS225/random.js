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

let Sponge = {
  species: 'Sponge',
  sayHi() {
    console.log('Hi, I am a sponge!');
  },
}

let spongebob = Object.create(Sponge);
spongebob.eat = function() {
  console.log('Yummmm I love Krabby Patties!');
}

spongebob.eat();
spongebob.sayHi();
console.log(spongebob.constructor);

