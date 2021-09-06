function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }
  let result = [];
  let temp = '';

  for (let i = 0; i < string.length; i++) {
    if (delimiter === '') {
      result.push(string[i]);
    } else if (string[i] === delimiter) {
      result.push(temp);
      temp = '';
    } else {
      temp += string[i]
    }
  }
  if (temp !== '') { 
    result.push(temp);
  }
  result.forEach(elem => console.log(elem));
}

splitString('abc,123,hello world', ',');

splitString('hello');

splitString('hello', '');

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');