// const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

// function wordToDigit(words) {
//   return words.split(' ').map(word => {
//     let cleaned = word.match(/[a-z]/ig).join('');
//     let index = digits.indexOf(cleaned.toLowerCase());

//     if (index !== -1) {
//       return word.replace(cleaned, index);
//     } else {
//       return word;
//     }
//   }).join(' ');
// }

// const NUM_WORDS = {
//   zero:  0,
//   one:   1,
//   two:   2,
//   three: 3,
//   four:  4,
//   five:  5,
//   six:   6,
//   seven: 7,
//   eight: 8,
//   nine:  9,
// };

// function wordToDigit(sentence) {
//   Object.keys(NUM_WORDS).forEach(word => {
//     let regex = new RegExp(`\\bword\\b`, 'g'); 
//     sentence = sentence.replace(regex, NUM_WORDS[word]);
//   })

//   return sentence;
// }

// Without looping

const NUM_WORDS = {
  zero:   0, 
  one:    1,
  two:    2,
  three:  3,
  four:   4,
  five:   5,
  six:    6,
  seven:  7,
  eight:  8,
  nine:   9,
}

const REGEX = new RegExp('\\b(' + Object.keys(NUM_WORDS).join('|') + ')\\b',
                         'gi');

function wordToDigit(string) {
  return string.replace(REGEX, word => NUM_WORDS[word]);
}


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
console.log(wordToDigit('The weight is done.')); 
// "Please call me at 5 5 5 1 2 3 4. Thanks."