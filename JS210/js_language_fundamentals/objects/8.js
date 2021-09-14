function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"


// Unlike Ruby, we can't access elements from the back of the array using negative integers. 
// But we can use methods slice, which can take negative index arguments and will take elemnts from the back of an array.

// Note that we must provide an ending index which is not inclusive of the index index. 
// therefore we can provide -1 so that we can get the string at -2 index without the string at -1 index from the back of an array. 
