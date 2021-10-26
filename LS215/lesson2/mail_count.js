const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let earliestDate = new Date('06-25-2016');
let latestDate = new Date('08-11-2016');

function dateRange(first, last) {
  let firstDate = daysOfWeek[first.getDay()] + ' ' + months[first.getMonth()] + ' ' + first.getDate() + ' ' + first.getFullYear();
  let lastDate = daysOfWeek[last.getDay()] + ' ' + months[last.getMonth()] + ' ' + last.getDate() + ' ' + last.getFullYear();
  console.log(`${firstDate} - ${lastDate}`);
}

dateRange(earliestDate, latestDate);