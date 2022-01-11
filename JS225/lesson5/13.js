// The Pseudo-classical Pattern and the OLOO Pattern

// let pointA = {
//   x: 30,
//   y: 40,

//   onXAxis() {
//     return this.y === 0;
//   },

//   onYAxis() {
//     return this.x === 0;
//   },

//   distanceToOrigin() {
//     return Math.sqrt((this.x * this.x) + (this.y * this.y));
//   },
// };

// pointA.distanceToOrigin();
// pointA.onXAxis();
// pointA.onYAxis();

// Implement the Pseudo-classical Pattern

function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y; 
}

Point.prototype.onXAxis = function() {
  return this.x === 0;
};

Point.prototype.onYAxis = function() {
  return this.y === 0;
};

Point.prototype.distanceToOrigin = function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
};

let pointA = new Point(30, 40);
let pointB = new Point(20);

// console.log(pointA instanceof Point);
// console.log(pointB instanceof Point);

// console.log(pointA.distanceToOrigin());
// console.log(pointA.onXAxis());
// console.log(pointA.onYAxis());
// console.log(pointB.onYAxis()); 

// Implement the OLOO pattern

let PointProto = {
  x: 0,
  y: 0,

  init(x, y) {
    this.x = x;
    this.y = y;
    return this;
  },

  onXAxis() {
    return this.x === 0;
  },

  onYAxis() {
    return this.y === 0;
  },

  distanceToOrigin() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },
}

let OLOOPointA = Object.create(PointProto).init(30, 40);
let OLOOPointB = Object.create(PointProto);

console.log(PointProto.isPrototypeOf(OLOOPointA));
console.log(PointProto.isPrototypeOf(OLOOPointB));

console.log(OLOOPointA.distanceToOrigin());
console.log(OLOOPointB.onYAxis());
console.log(OLOOPointB.onXAxis());








