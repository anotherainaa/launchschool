
// function concat(...theArgs) {
//   const resultArray = [];

//   theArgs.forEach(element => {
//     if (Array.isArray(element)) {
//       element.forEach(e => resultArray.push(e))
//     } else {
//       resultArray.push(element);
//     }
//   })
//   return resultArray;
// }


console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]

// Second attempt

function concat(...theArgs) {
  const newArray = [];

  for (let i = 0; i < theArgs.length; i++) {
    let currentArg = theArgs[i];

    if (Array.isArray(theArgs[i])) {
      let len = currentArg.length;
      for (let j = 0; j < len; j++) {
        newArray[newArray.length] = currentArg[j];
      }
    } else {
      newArray[newArray.length] = currentArg;
    } 
  }

  return newArray;
}
