const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// function searchWord(candidate, text) {
//   return text.split(' ').reduce((count, word) => {
//     if (word.toLowerCase().includes(candidate.toLowerCase())) {
//       return count + 1;
//     } else {
//       return count;
//     }
//   }, 0);
// } 

console.log(searchWord('sed', text));      // 3

// Regex way of matching 

// function searchWord(candidate, text) {
//   const regex = new RegExp(candidate, 'gi');

//   return text.split(' ').reduce((count, word) => {
//     if (word.match(regex)) {
//       return count + 1;
//     } else {
//       return count;
//     }
//   }, 0);
// } 

// The full regex way

// function searchWord(candidate, text) {
//   const regex = new RegExp(candidate, 'gi');
//   const matches = text.match(regex);

//   return matches ? matches.length : 0;
// } 

// Further exploration

function searchWord(candidate, text) {
  const regex = new RegExp(`\\b${candidate}\\b`, 'gi');
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}