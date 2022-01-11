// # The Class Syntactic Sugar

class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  onXAxis() {
    return this.x === 0;
  }

  onYAxis() {
    return this.y === 0;
  }

  distanceToOrigin() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
}

let pointA = new Point(30, 40);
let pointB = new Point(20);

console.log(pointA instanceof Point); // true
console.log(pointB instanceof Point); // true

console.log(pointA.distanceToOrigin()); // 50
console.log(pointA.onXAxis()); // false
console.log(pointA.onYAxis()); // false
console.log(pointB.onYAxis()); // true