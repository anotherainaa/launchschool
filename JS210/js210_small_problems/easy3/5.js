function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function removeNonLetterNumbers(string) {
  let lowercaseString = string.toLowerCase();
  let newString= '';

  for (char of lowercaseString) {
    if (isStringNumber(char) || isAlphabet(char))
      newString += char;
  }
  return newString;
}

function isStringNumber(char) {
  return char >= '0' && char <= '9';
}

function isAlphabet(char) {
  return char >= 'a' && char <= 'z';
}


function isRealPalindrome(string) {
  let newString = removeNonLetterNumbers(string);
  return isPalindrome(newString);
}


console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false