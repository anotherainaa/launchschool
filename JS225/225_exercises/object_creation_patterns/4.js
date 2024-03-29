// Anonymizer

let Account = (() => {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function generateRandomLetters() {
    let randomIndex = Math.floor(Math.random() * 26);
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    return letters[randomIndex];
  }

  function anonymize() {
    let result = '';

    for (let i = 0; i < 16; i += 1) {
      result += generateRandomLetters();
    }

    return result;
  }

  function validPassword(testPassword) {
    return userPassword === testPassword;
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    reanonymize(pass) {
      if (validPassword(pass)) {
        this.displayName = anonymize();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(pass, newPassword) {
      if (validPassword(pass)) {
        userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    email(pass) {
      if (validPassword(pass)) {
        return userEmail;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(pass) {
      if (validPassword(pass)) {
        return userFirstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName(pass) {
      if (validPassword(pass)) {
        return userLastName;
      } else {
        return 'Invalid Password';
      }
    },
  }
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));            // returns true
console.log(displayName === fooBar.displayName);   // logs false