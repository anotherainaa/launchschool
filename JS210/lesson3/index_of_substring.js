function indexOf(firstString, secondString) {
  for (let i = 0; i < firstString.length; i++) {
    let count = 0;
    let index = i;
    for (let j = 0; j < secondString.length; j++) {
      if (firstString[index] === secondString[j]) {
        count += 1;

        if (count === secondString.length) {
          return i;
        }

        index++;
      }
      
    }
  }
  return -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1                    

function lastIndexOf(firstString, secondString) {
  for (let i = firstString.length - 1; i >= 0; i--) {
    let count = 0;
    let index = i;
    for (let j = secondString.length - 1; j >= 0; j--) {
      if (firstString[index] === secondString[j]) {
        count += 1;
        
        if (count === secondString.length) {
          return index;
        }
        
        index--;
      }
      
    }
  }

  return -1;
}

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1