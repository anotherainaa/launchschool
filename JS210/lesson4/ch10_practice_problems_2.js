function mirroredArray1(array) {
  let result = [];

  for (let index = 0; index < array.length; index += 1) {
    result.push(arr[index]);
  }

  for (let index = array.length - 1; index >= 0; index -= 1) {
    result.push(arr[index]);
  }

  return result;
}

// LS solution 

function mirroredArray(array) {
  return array.concat(array.slice().reverse());
}

let arr = [1, 2, 3]

console.log(mirroredArray(arr));