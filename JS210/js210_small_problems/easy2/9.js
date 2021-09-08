function cleanUp(string) {
  let cleaned = '';

  for (let i = 0; i < string.length; i += 1) {
    if (isAlphabet(string[i])) {
      cleaned += string[i];
    } else if (cleaned[cleaned.length - 1] !== ' ') {
      cleaned += ' ';
    }
  }
  return cleaned;
}

function isAlphabet(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "