
/*

sort 
  - two shortest must be greater than the longest. 

- if all three sides are of equal length
- if two sides are of equal length
- all three sides are different length

*/


function unique(array) {
  return array.filter((elem, index) => {
    return array.indexOf(elem) === index;
  })
}

// console.log(unique([3, 3, 3]))  ;
// console.log(unique([2, 3, 3]))  ;

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort((a, b) => a - b);
  let validTriangle = !sides.includes(0) && sides[0] + sides[1] > sides[2];

  if (!validTriangle) return 'invalid';

  if (unique(sides).length === 1) {
    return 'scalene';
  } else if (unique(sides).length === 2) {
    return 'isosceles';
  } else 
    return 'equilateral';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

