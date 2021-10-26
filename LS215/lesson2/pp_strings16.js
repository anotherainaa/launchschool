const rlSync = require('readline-sync');

let name = rlSync.question('What is your name? >');

if (name.includes('!')) {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`.);
}






