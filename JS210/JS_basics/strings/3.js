// function repeat(number, string) {
//   let result = '';

//   while (number > 0) {
//     result += string;
//     number -= 1;
//   }
//   return result;
// }


function repeat(number, string) {
  return string.repeat(3);
}


console.log(repeat(3, 'ha')); // 'hahaha'