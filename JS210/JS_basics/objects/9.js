let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

// let person = {};

// for (let i = 0; i < nestedArray.length; i++) {
//   obj[nestedArray[i][0]] = nestedArray[i][1];
// }

// console.log(obj);

// for (let i = 0; i < nestedArray.length; i++) {
//   let pair = nestedArray[i];

//   person[pair[0]] = pair[1];
// }

// console.log(person);

let person = Object.fromEntries(nestedArray);
console.log(person);