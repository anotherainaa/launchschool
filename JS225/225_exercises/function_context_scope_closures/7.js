
function makeArrays() {
  let array = [];

  return () => {
    array.push('');
    return array;
  };
}

const pushIt = makeArrays();
console.log(pushIt());
console.log(pushIt());
console.log(pushIt());
console.log(pushIt());
// more code

// no it won't be garbage collected.
// the array is alive through closures of the returned anonymous arrow function.
//  and we can continue pushing empty string to it as many times we want to
