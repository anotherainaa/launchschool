// Pseudo-classical with ES6 syntax

function AnswerPC(value) {
  this._val = value;
}

AnswerPC.prototype.get = function() {
  return this._val;
}

let testAnswer = new AnswerPC(1);
console.log(testAnswer.get());

function FirmAnswerPC(value) {
  AnswerPC.call(this, value);
}

FirmAnswerPC.prototype = Object.create(AnswerPC.prototype);
FirmAnswerPC.prototype.constructor = FirmAnswerPC;

FirmAnswerPC.prototype.get = function() {
  return AnswerPC.prototype.get.call(this) + "!!";
}

let dummyAnswer = new FirmAnswerPC(22);
console.log(dummyAnswer.get());

// Classical model
 // ES6 supports class syntax 

class Answer {
  constructor(value) {
    this._val = value;
  }
  
  get() {
    return this._val;
  }
}

let lifeAnswer = new Answer(43);
console.log(lifeAnswer.get());

let dessertAnswer = new Answer(3.142);
console.log(dessertAnswer.get());

class FirmAnswer extends Answer {
  constructor(value) {
    super(value);
  }

  get() {
    return super.get() + '!';
  }
}

let magicAnswer = new FirmAnswer(3);
console.log(magicAnswer.get());

// Prototypal modal

// let AnswerProto = {
//   constructor(value) {
//     this._val = value;
//   },

//   get() {
//     return this._val;
//   }
// };

// let lifeAnswer = Object.create(AnswerProto);
// lifeAnswer.constructor(42);
// console.log(lifeAnswer.get());

// let dessertAnswer = Object.create(AnswerProto);
// dessertAnswer.constructor(3.14159);
// dessertAnswer.get(); // 3.14159

// let FirmAnswerProto = Object.create(AnswerProto);
// FirmAnswerProto.get = function() {
//   return AnswerProto.get.call(this) + '!!';
// };

// let luckyAnswer = Object.create(FirmAnswerProto);
// luckyAnswer.constructor(7);
// console.log(luckyAnswer.get());
