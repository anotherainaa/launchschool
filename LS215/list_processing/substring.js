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

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
