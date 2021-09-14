// fill in the blanks so it works

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000

// Because arguments are available locally within the function. (even though there is no parameter explicitly defined. )
// This is because all functions have arguments function that is available locally.



