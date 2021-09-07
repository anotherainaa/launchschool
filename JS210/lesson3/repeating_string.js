function validValue(times) {
  return typeof times === 'number' && times >= 0;
}

function repeat(string, times) {
  if (!validValue(times)) { 
    return; 
  } 

  let result = '';
  for (let counter = 0; counter < times; counter++) {
    result += string;
  }
  return result;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined