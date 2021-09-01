let scores = [96, 47, 113, 89, 100, 102];

let count = 0;
scores.forEach(score => {
  if (score >= 100) {
    count += 1;
  } 
});

console.log(count);

const result = scores.filter(score => score >= 100);

console.log(result);

