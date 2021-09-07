function startsWith(string, searchString) {
  let count = 0;

  for (let index = 0; index < searchString.length; index++) {
    if (string[index] === searchString[index]) {
      count += 1;
    }
  }
  return count === searchString.length 
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString)); 