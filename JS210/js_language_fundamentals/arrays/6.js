// function reverse(inputForReversal) {
//   const result = [];

//   for (let i = inputForReversal.length - 1; i >= 0; i--) {
//     result.push(inputForReversal[i]);
//   }

//   if (typeof inputForReversal === 'string') {
//     return result.join('');
//   } else {
//     return result;
//   }
// }

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);       

//second attempt

// function reverse(inputForReversal) {
//   let resultArray = [];

//   for (let i = inputForReversal.length - 1; i >= 0; i--) {
//     resultArray.push(inputForReversal[i]);
//   }

//   if (typeof inputForReversal === 'string') {
//     return resultArray.join('');
//   } else {
//     return resultArray;
//   }
// }

// LS solution

function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseString(inputForReversal);
  }
}

function reverseArray(array) {
  const reversed = [];
  const length = array.length;

  for (let i = 0; i < length; i += 1) {
    reversed[length - 1 - i] = array[i];
  }

  return reversed;
}

function reverseString(string) {
  const StringArray =  string.split('');
  return reverseArray(StringArray).join('');
}