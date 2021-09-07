function rot13(string) {
  const ALPHABET_ROTATION = 13;

  let newString = ''
  for (let index = 0; index < string.length; index += 1) {
    let charCode = string.charCodeAt(index);
    if (string[index].toUpperCase() >= 'A' && string[index].toUpperCase() <= 'M') {
      charCode += ALPHABET_ROTATION;
    } else if (string[index].toUpperCase() >= 'N' && string[index].toUpperCase() <= 'Z') {
      charCode -= ALPHABET_ROTATION;
    } 

    newString += String.fromCharCode(charCode);
  }

  return newString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));