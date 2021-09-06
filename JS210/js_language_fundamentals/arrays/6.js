function reverse(inputForReversal) {
  const result = [];

  for (let i = inputForReversal.length - 1; i >= 0; i--) {
    result.push(inputForReversal[i]);
  }

  if (typeof inputForReversal === 'string') {
    return result.join('');
  } else {
    return result;
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);       