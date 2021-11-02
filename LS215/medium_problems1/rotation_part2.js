/*
rotate the 
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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917