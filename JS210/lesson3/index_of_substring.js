// implement includes

function includesSubstr(firstString, secondString) {
  let count = 0;
  for (let letter of secondString) {
    for (let char of firstString) {
      if (letter !== char) {
        count = 0;
        continue;
      } else if (letter === char) {
        count += 1;
      }

      console.log(count);
      if (count === secondString.length) {
        return true;
      } 
    }
  }

  console.log(count);
  return count === secondString.length;
}

console.log(includesSubstr('Blue Whale', 'Whale'));  

// function indexOf(firstString, secondString) {
//   // statements
// }

// function lastIndexOf(firstString, secondString) {
//   // statements
// }