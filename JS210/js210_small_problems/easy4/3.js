function halvsies(array) {
  let center = Math.floor(array.length / 2);
  let firstHalf = [];
  let secondHalf = [];

  for (let i = 0; i < array.length; i++) {
    if (i <= center) {
      firstHalf.push(array[i])
    } else {
      secondHalf.push(array[i]);
    }

  }

  return [firstHalf, secondHalf];
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]