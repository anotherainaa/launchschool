function century(year) {
  let century = Math.floor(year / 100);
  
  if (year % 100 !== 0) {
    century += 1;
  }
  
  return String(century) + centurySuffix(century);
}

function centurySuffix(century) {
  let stringCentury = String(century)
  
  if (['11', '12', '13'].includes(stringCentury.slice(-2))) {
    return 'th';
  } else if (stringCentury.slice(-1) == '1') {
    return 'st';
  } else if (stringCentury.slice(-1) == '2') {
    return 'nd';
  } else if (stringCentury.slice(-1) == '3') {
    return 'rd';
  } else {
    return 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"

