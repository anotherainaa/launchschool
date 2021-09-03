
function concat(array1, ...theArgs) {
  let resultArray = [];

  array1.forEach(element => {
    resultArray.push(element);
  })

  theArgs.forEach(element => console.log(element)l=l)
}


concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]