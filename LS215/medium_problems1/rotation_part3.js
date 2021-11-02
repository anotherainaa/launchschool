/*

starting from index zero, 
  - rotate the digits from zero to end
  - rotate the digits from index one to end
  - rotate the digits from index 2 to end
  .... 



*/

function rotateRightmostDigits(digits, n) {
  let leftSide = String(digits).slice(0, -n);
  let rightSide = String(digits).slice(-n);
  let rotated = leftSide + rotateArray(rightSide.split('')).join('');
  return parseInt(rotated, 10);
}

function rotateArray(array) {
  let validArray = Array.isArray(array) && array.length >= 0; 
  if (!validArray) return undefined;

  return array.slice(1).concat(array.slice(0, 1));
}


function maxRotation(digits) {  
  let length = String(digits).length;
  for (let i = 0; i < length; i++ ) {
    digits = rotateRightmostDigits(digits, length - i)
  }

  return digits;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845