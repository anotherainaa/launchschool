
/*

find all the friday the 13ths. 

for the given year
- check the day of the 13th of each month 
- if it's Friday, add to count 

*/

const FRIDAY = 5;


function fridayThe13ths(year) {
  let count = 0;  

  for (let month = 0; month < 12; month += 1) {
    let date = new Date(year, month, 13);
    if (date.getDay() === FRIDAY) {
      count += 1;
    }
  }

  return count;
}


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2