function repeater(string) {
  let repeatedStr = '';
  for (letter of string) {
    repeatedStr += letter;
    repeatedStr += letter;
  }

  return repeatedStr;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater('') === '');             // ""