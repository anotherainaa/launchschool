/*

Input
  - string
  - spaces are acceptable
  - non alphabetic characters acceptable
Output
  - array of strings
  - representing all of the substrings of a string that are palindromic

Data Strcture
- String
- Array

Algorithm
- Find all of the substrings for the word

- iterate through the substrings and select only palindorme
- return the results

Palindrome method
- if a single character, return false
- if the string is the same reversed
  - return true


*/

function substrings(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    let substring = string.substring(i);
    result = result.concat(leadingSubstrings(substring));
  }

  return result;
}

function leadingSubstrings(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    result.push(string.substring(0, i + 1));
  }

  return result;
}

function isPalindrome(string) {
  return (string.length > 1 && string.split('').reverse().join('') === string);
}

function palindromes(string) {
  let allSubstrings = substrings(string);

  return allSubstrings.filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]
console.log(palindromes('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
