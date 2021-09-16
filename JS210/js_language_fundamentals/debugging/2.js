// Why the code doesn't work? 

// because the code is using the non-strict equality operator which will do some type coercion 
// and can cause falsy values to evaluate to true when compared to boolean false. 

//  How to fix it? 

// If the method is looking explicity for only false boolean values, then we can use the strict equality operator instead.

function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element === false) {
      return true;
    }
  }

  return false;
}
                                                                  // returns:
console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false]));       // true
console.log(includesFalse(['programming', undefined, 37, 64, true, 'false'])); // false
console.log(includesFalse([9422, 'lambda', true, 0, '54', null]));             // true