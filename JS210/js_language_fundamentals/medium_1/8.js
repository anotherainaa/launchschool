function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

// Will it produce the expected result? Why or why not?

// no, it won't. because on line 10, we are trying to add sum which has the value of undefined to numbers[i].
// This will coerce undefined into NaN and the sum to add NaN to numbers[i] for the rest of the loop and the retruning NaN. 
// note that there is no explicit return statemnet on line 13 as well, which will make this function always return undefined.

// NaN everywhere!