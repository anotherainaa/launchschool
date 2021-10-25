function myForEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    callback(array[index], index, array);
  }
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3