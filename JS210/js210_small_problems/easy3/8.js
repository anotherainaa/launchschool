// algorithm 
// get all the words in an array
// iterate through words. for each word
//   - create a new string where the the first letter and last letter are swapped
// return the words joined. 

// how to swap the first and last letter? 
// create a new string. 
// - if first letter, take the last letter. 
// - if last letter, take the first letter.
// - else, copy letter as it is.


function swap(sentence) {
  let words = sentence.split(' ');

  let resultArray = words.map(word => {
    let newString = '';

    for (let i = 0; i < word.length; i++) {
      if (i === 0) {
        newString += word[word.length - 1];
      } else if (i === word.length - 1) {
        newString += word[0];
      } else {
        newString += word[i];
      }
    }

    return newString;
  });

  return resultArray.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"