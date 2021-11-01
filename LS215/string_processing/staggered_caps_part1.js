/*

input:
  - string - words
output:
  - every character staggered in upcase and lowercase

rules
- first character capitalized
- followed by lowercase and then uppercase again
- non-alphabetic characters count as characters when straggering 


algorithm 

- iterate through string, for each chracter
  - if first lettter, uppercase it
  
- return resulting string. 

*/


function staggeredCase(string) {
  let newStr = '';
  let uppercase = true;
  
  string.split('').forEach((char, index) => { 

    if (index === 0) {
      newStr += char.toUpperCase();
      uppercase = false;
    } else if (uppercase === true) {
      newStr += char.toUpperCase();
      uppercase = false;
    } else if (uppercase === false) {
      newStr += char.toLowerCase();
      uppercase = true;
    }
  })

  return newStr;
}


console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"