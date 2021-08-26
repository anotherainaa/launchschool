let rlSync = require('readline-sync');
let counter = 1
const scores = []

while (counter <= 3) {
  scores.push(rlSync.question(`Enter score ${counter}: `))
  counter += 1;
}

let sum = 0;
scores.forEach(score => {
  sum += Number(score);
});

let average = sum / scores.length;
let grade;

if (average >= 90) {
  grade = 'A';
} else if(average >= 70) {
  grade = 'B';
} else if(average >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}


console.log(`Based on the average of your 3 scores, your letter grade is "${grade}".`)