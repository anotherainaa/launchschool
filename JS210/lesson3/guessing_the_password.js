let rlSync = require('readline-sync');
const PASSWORD = 'secret';
let passwordTries = 0;

do {
  let guess = rlSync.question('What is the password: ');
  
  if (guess === PASSWORD) {
    console.log('You have successfully logged in.')
    break;
  }

  passwordTries += 1;
} while (passwordTries < 3);

if (passwordTries === 3) {
  console.log('You have been denied access.');
};