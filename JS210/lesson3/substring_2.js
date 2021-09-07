function substring(string, start, end) {
  if (start > end) {
    temp = start;
    start = end;
    end = temp;
  }

  if (end === undefined) {
    end = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  if (start > string.length) {
    start = string.length;
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  }
  
  if (end < 0 || isNaN(end)) {
    end = 0;
  }
  
  let newString = '';

  for (let index = start; index < end; index += 1) {
    newString += string[index]
  }
  return newString;
}


let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"

console.log(substring(string, 4, 2));    // "ll"

console.log(substring(string, 0, -1));   // ""

console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"