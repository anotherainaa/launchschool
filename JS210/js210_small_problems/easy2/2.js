function logInBox(string) {
  let length = string.length;

  let topBottomBorder = '+-' + repeatChar('-', length) + '-+'
  let middleOuterBorder = '| ' + repeatChar(' ', length) + ' |' 
  let middleBorder = '| ' + string + ' |' 

  console.log(topBottomBorder);
  console.log(middleOuterBorder);
  console.log(middleBorder);
  console.log(middleOuterBorder);
  console.log(topBottomBorder);
}

function repeatChar(character, times) {
  let result = '';

  for (let counter = 1; counter <= times; counter += 1) {
    result += character;
  }
  return result;
}

logInBox('To boldly go where no one has gone before.');
logInBox('');