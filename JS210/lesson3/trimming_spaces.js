function trim(string) {
  let resultStr = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ' && resultStr.length === 0) {
      continue;
    } else {
      resultStr += string[i];
    }
  }

  let resultStr2 = '';

  for (let i = resultStr.length - 1; i >= 0; i--) {
    if (resultStr[i] === ' ' && resultStr2.length === 0) {
      continue;
    } else {
      resultStr2 = resultStr[i] + resultStr2;
    }
  }

  return resultStr2;
}

console.log(trim('  abc  ') === "abc");  // "abc"
console.log(trim('abc   ') === "abc");   // "abc"
console.log(trim(' ab c') === "ab c");    // "ab c"
console.log(trim(' a b  c') === "a b  c");  // "a b  c"
console.log(trim('      ') === "");   // ""
console.log(trim('') === "");         // ""
