function lastNOf(arr, length) {
  let index = arr.length - length;

  if (index < 0) {
    index = 0;
  }

  return arr.slice(index);
}


let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 9));    // returns [16, 23, 42]