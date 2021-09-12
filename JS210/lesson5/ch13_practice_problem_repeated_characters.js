function repeatedCharacters(word) {
  let count = {};
  for (let i = 0; i < word.length; i++) {
    let lowerChar = word[i].toLowerCase();
    if (count[lowerChar]) {
      count[lowerChar] += 1;
    } else {
      count[lowerChar] = 1;
    }
  }

  for (prop in count) {
    if (count[prop] === 1) {
      delete count[prop];
    }
  }
  
  return count;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }