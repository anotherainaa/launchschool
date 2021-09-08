// function twice(number) {
//   let stringNum = String(number);
//   let middle = stringNum.length / 2;

//   let firstHalf = '';
//   let secondHalf = '';

//   for (let i = 0; i < stringNum.length; i++ ) {
//     if (i < middle) {
//       firstHalf += stringNum[i];
//     } else {
//       secondHalf += stringNum[i];
//     }
//   }

//   if (firstHalf === secondHalf) {
//     return number;
//   } else {
//     return number * 2;
//   }
// }

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
 }

function isDoubleNumber(number) {
  let stringNum = String(number);
  let center = stringNum.length / 2;
  let leftNumber = stringNum.substring(0, center);
  let rightNumber = stringNum.substring(center);

  return leftNumber === rightNumber;
}


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676