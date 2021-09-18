const rlSync = require('readline-sync')

const numbers = [];

for (let counter = 1; counter <= 5; counter += 1) {
  let num = parseInt(rlSync.question(`Enter the ${numberSuffix(counter)} number: `), 10)
  numbers.push(num)
}

const lastNum = parseInt(rlSync.question(`Enter the last number: `), 10)

if (numbers.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${numbers.join(', ')}.`)
} else {
  console.log(`The number ${lastNum} does not appear in ${numbers.join(', ')}.`)
}

function numberSuffix(number) {
  if (number === 1) {
    return number + 'st';
  } else if (number === 2) {
    return number + 'nd';
  } else if (number === 3) {
    return number + 'rd';
  } else {
    return number + 'th';
  }
}