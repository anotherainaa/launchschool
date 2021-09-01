function removeLastChar(word) {
  return word.slice(0, word.length - 1);
}

// function removeLastChar(word) {
//   return word.substring(0, word.length -1);
// }

let word = 'ciao!'

console.log(removeLastChar(word)); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'


console.log(word)