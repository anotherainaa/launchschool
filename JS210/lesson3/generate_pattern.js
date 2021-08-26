

function generatePattern(nStars) {
  let result = '';
  for (let i = 1; i <= nStars; i += 1) {
    let oneLine = '';
    for (let j = 1; j <= nStars; j += 1) {
      if (j <= i) {
        oneLine += String(j);
      } else {
        oneLine += '*'
      }
    }
    
    if (i < nStars) {
      oneLine += '\n';
    }

    result += oneLine;
  }
  console.log(result);
};

generatePattern(11);
