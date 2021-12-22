/*
what is a featured number

odd number that is a multiple of 7. 
and all of the digits occuring once each. - each digit is unique

49 - yes
98 - not odd
133 no 3 appears twice

- starting from current number
- check if it is a featured number
- find the next number that is divisible by 7. 
*/

function featured(number) {
  number += 1;
  while (!(number % 7 === 0)) {
    number += 1;
  };

  let currentNum = number; 
  while (number <= 9876543201) {
    if (isFeaturedNum(number)) {
      return number;
    }
    number += 7;
  }

  return "There is no possible number that fulfills those requirements."
}

function unique(array) {
  return array.filter((elem, index) => {
    return array.indexOf(elem) === index;
  })
}

function isFeaturedNum(number) {
  let digits = String(number).split('');
  return (number % 2 === 1) && (number % 7 === 0) && unique(digits).length === digits.length;
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."