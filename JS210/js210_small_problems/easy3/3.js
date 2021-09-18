const rlSync = require('readline-sync');

const age = rlSync.question('What is your age?' );
const retireAge = rlSync.question('At what age would you like to retire? ');

let currentYear = (new Date).getFullYear();
let remainingWorkYears = retireAge - age;
let retirementYear = remainingWorkYears + currentYear;


console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`)
console.log(`You have only ${remainingWorkYears} years of work to go!`)