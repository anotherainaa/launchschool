// function toLowerCase(string) {
//   let lowerCasedStr = '';

//   for (let index = 0; index < string.length; index++) {
//     let asciiNumeric = string[index].charCodeAt(0);
//     if (asciiNumeric >= 65 && asciiNumeric <= 90) {
//       lowerCasedStr += String.fromCharCode(asciiNumeric + 32);
//     } else {
//       lowerCasedStr += string[index];
//     }
//   }

//   return lowerCasedStr;
// }

function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let newString = '';

  for (let index = 0; index < string.length; index++) {
    let charCode = string.charCodeAt(index);

    if (string[index] >= 'A' && string[index] <= 'Z') {
      charCode += CONVERSION_OFFSET;
    }

    newString += String.fromCharCode(charCode);
  }

  return newString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"