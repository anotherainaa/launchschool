function removeNonLetters(string) {
  let lowercaseString = string.toLowerCase();
  let newString= '';

  for (char of lowercaseString) {
    if (isAlphabet(char))
      newString += char;
  }
  return newString;
}

function isAlphabet(char) {
  return char >= 'a' && char <= 'z';
}


function wordSizes(sentence) {
  let words = sentence.split(' ').map(word => removeNonLetters(word));
  let wordCount = {};

  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length === 0) {
      continue
    } else if (wordCount[words[i].length]) {
      wordCount[words[i].length] += 1;
    } else {
      wordCount[words[i].length] = 1;
    }
  }

  return wordCount;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}