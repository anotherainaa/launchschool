// Write a function that returns a substring of a string based on a starting index and length.

// Problem
// - start is the starting index. If negative , treat it as strlength + start where stglenth is the
// length of the string. strLength - 3 (start)
// - length argument is the maximum length of the desired substring. if length excees, use the available characters. 
// - if length is negative, it should not select anything. treat it like 0? 

// Example 
// substr(string, 2, 4);      // "llo " = because we start at index 2 which l, with a length of 4, which results to llo (space counted)

// Data structure
// - string => string

// Approach / Algorithm 
// - if the starting point is below 0, start at strlength + start.  else, use the start 
// - if length is bigger than string length - start index, use strlength - startindex, else use length
// - initialize a resultStr to keep the substring. 

// - loop through the string from the starting point up until length
//   -  keep adding into the string until the end 

// - return the resulting string. 


// function substr(string, start, length) {
//   let index = start < 0 ? string.length + start : start;
//   let finalLength = length > string.length - index ? string.length - index : length;
  
//   let resultStr = '';
//   for (let counter = 0; counter < finalLength; counter++) {
//     resultStr += string[index];
//     index++;
//   }
//   console.log(resultStr);
// }

// let string = 'hello world';

// substr(string, 2, 4);      // "llo "
// substr(string, -3, 2);     // "rl"
// substr(string, 8, 20);     // "rld"
// substr(string, 0, -20);    // ""
// substr(string, 0, 0);  // ""

function substr(string, start, length) {
  let index = start < 0 ? string.length + start : start;
  let finallength = length > string.length - index? string.length - index : length;
  
  let newString = '';
  for (let counter = 0; counter < finallength; counter++) {
    newString += string[index];
    index++;
  }
  return newString;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));  // ""
