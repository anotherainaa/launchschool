function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

let result = []
let string ='launch school tech & talk'

string.split(' ').forEach(word => {
  result.push(capitalize(word));
});

console.log(result.join(" "));