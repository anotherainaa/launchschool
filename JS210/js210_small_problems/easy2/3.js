function stringy(number) {
  let newString = ''
  let currentString = '1'

  for (let counter = 1; counter <= number; counter += 1) {
    newString += currentString;
    currentString = currentString == '1' ? '0' : '1';
  }
  return newString;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"