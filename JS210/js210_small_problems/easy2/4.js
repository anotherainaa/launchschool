function triangle(number) {
  for (let i = 0; i <= number; i++) {
    let row = '';
    row += repeatChar(' ', number - i) + repeatChar('*', i);
    console.log(row);
  }
}

function repeatChar(char, times) {
  let newString = '';

  for (let counter = 1; counter <= times; counter++) {
    newString += char;
  }
  return newString;
}

triangle(5);
triangle(9);