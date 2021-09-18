const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degrees) {
  let degreesInt = Math.floor(degrees);
  let minutes = Math.floor((degrees - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor((degrees - degreesInt - (minutes / MINUTES_PER_DEGREE)) * SECONDS_PER_DEGREE);

  return `${String(degreesInt) + DEGREE + padZeroes(minutes)}'${padZeroes(seconds)}"`
}

function padZeroes(number) {
  let numStr = String(number);
  if (numStr.length < 2) {
    return `0${numStr}`;
  } else {
    return numStr;
  }
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"