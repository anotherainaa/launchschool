/*

return an object containing 3 properties
- count of lowercase chars
- count of uppercase chars
- count of chars that are neither

*/

function letterCaseCount(string) {
  let letterCount = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  string.split('').forEach(char => {
    if (/[a-z]/.test(char)) {
      letterCount.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      letterCount.uppercase += 1;
    } else if (/[^A-Za-z]/.test(char)) {
      letterCount.neither += 1;
    }
  });

  return letterCount;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }