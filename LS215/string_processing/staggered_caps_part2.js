function staggeredCase(string) {
  let uppercase = true;

  return string.split('').map((char, index) => { 
    if (isAlphabeticCharater(char) && uppercase) {
      uppercase = false;
      return char.toUpperCase()
    } else if (isAlphabeticCharater(char) && !uppercase) {
      uppercase = true;
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

function isAlphabeticCharater(char) {
  return (/[a-z]/ig.test(char));
}


console.log(staggeredCase('I Love Launch School!') ===  "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase('ALL CAPS') === "AlL cApS"); 
console.log(staggeredCase('ignore 77 the 444 numbers') === "IgNoRe 77 ThE 444 nUmBeRs");