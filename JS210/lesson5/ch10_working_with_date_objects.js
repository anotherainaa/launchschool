// Problem 1

let today = new Date()
console.log(today);

// Problem 2

console.log(`Today's day is ${today.getDay()}`)

// Problem 3

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let dayNum = today.getDay();
console.log(`Today's day is ${daysOfWeek[dayNum]}`)

// Problem 4

console.log(`Today's date is ${daysOfWeek[dayNum]}, the ${today.getDate()}th`)

// Problem 5

function dateSuffix(date) {
  let dateString = String(date);

  if (['11', '12', '13'].includes(dateString.slice(-2))) {
    return dateString + 'th';
  } else if (dateString.slice(-1) === '1') {
    return dateString + 'st';
  } else if (dateString.slice(-1) === '2') {
    return dateString + 'nd';
  } else if (dateString.slice(-1) === '3') {
    return dateString + 'rd';
  } else {
    return dateString + 'th';
  }
}

console.log(`Today's date is ${daysOfWeek[dayNum]}, the ${dateSuffix(23)}`)

// Problem 6

console.log(`Today's date is ${daysOfWeek[dayNum]}, ${today.getMonth()} ${dateSuffix(today.getDate())}`)

// Problem 7

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
console.log(`Today's date is ${daysOfWeek[dayNum]}, ${months[today.getMonth()]} ${dateSuffix(today.getDate())}`)

// Problem 8

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}


function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);

  console.log("Today's date is " + day + ', ' + month + ' ' + dateSuffix(date.getDate()));
}

formattedDate(today);

// Problem 9

console.log(today.getFullYear());
console.log(today.getYear()); // deprecated

// Problem 10

console.log(today.getTime());

// Problem 11

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

// Problem 12

let nextWeek = new Date(today.getTime());

console.log(today.toDateString() === nextWeek.toDateString());

// Problem 13
nextWeek.setDate(today.getDate() + 7);

console.log(today.toDateString() === nextWeek.toDateString());

// Problem 15

function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(value) {
  let timeComponent = String(value);
  return timeComponent.length < 2 ? '0' + timeComponent : timeComponent;
}

console.log(formatTime(new Date(2013, 2, 1, 1, 10)));