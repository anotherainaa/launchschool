function splice(array, start, deleteCount, element1, elementN) {
  let length = array.length

  if (start > length) {
    start = length;
  }

  let numberOfElements = length - start;
  if (deleteCount > numberOfElements) {
    deleteCount = numberOfElements;
  }

  let end = start + deleteCount; 
  let deletedElements = array.slice(start, end);


  if (deleteCount < numberOfElements) {
    let secondHalf = array.slice(end - 1);

    for (let i = 0; i < array.length; i++) {
      if (i < start) {
        continue;
      } else {
        for (let j = 0; j < secondHalf.length; j++) {
          array[i] = secondHalf[j];
        }
      }
    }

    array.length = array.length - deleteCount;
    return deletedElements;

  } else {
    array.length = array.length - deleteCount;
    return deletedElements;
  }
}

// console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

// const arr3 = [1, 2, 3];
// splice(arr3, 1, 2, 'two', 'three');    // [2, 3]
// arr3;                                  // [1, "two", "three"]

// const arr4 = [1, 2, 3];
// splice(arr4, 1, 0);                    // []
// splice(arr4, 1, 0, 'a');               // []
// arr4;                                  // [1, "a", 2, 3]

// const arr5 = [1, 2, 3];
// splice(arr5, 0, 0, 'a');               // []
// arr5;                                  // ["a", 1, 2, 3]
