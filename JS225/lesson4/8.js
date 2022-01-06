// Garbage collection

function logName() {
  let name = 'Sarah';

  console.log(name);
}

logName();
// Sarag now available for GC. 


function solve(string) {
  let temp = '';
  let longestChain = temp;
 
  for (let i = 0; i < string.length; i += 1) {
    let currentChar = string[i];
    if ('aeiou'.includes(currentChar)) {
      temp += currentChar;
      console.log(temp);
    } else {
      console.log(temp);
      if (temp.length > longestChain.length) {
        longestChain = temp;
      };

      temp = '';
    }
  }

  return temp.length >= longestChain.length ? temp.length : longestChain.length;
}
console.log(solve('sudoiea')) 
console.log(solve('codewarriors')) // => 2 io 
console.log(solve('csuuuuio')) // => 2 io 
