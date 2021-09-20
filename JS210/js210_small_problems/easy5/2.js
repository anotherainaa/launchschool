function doubleConsonants(string) {
  let doubled = [];

  for (let i = 0; i < string.length; i ++) {
    let currentChar = string[i];

    if (isVowel(currentChar) || isNonAlphbetticalCharacter(currentChar)) {
      doubled.push(currentChar);
    } else {
      doubled.push(currentChar, currentChar);
    }
  }
  return doubled.join('');
}

function isVowel(char) {
  return ['a', 'i', 'e', 'o', 'u'].includes(char);
}

function isNonAlphbetticalCharacter(char) {
  return char.match(/[^a-z]/)
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants('') == '');                // ""