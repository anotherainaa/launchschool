let myArray = [1, 2, 3, 4];
const myOtherArray = [];

for (let i = 0; i < myArray.length; i += 1) {
  myOtherArray.push(myArray[i]);
}

let anotherArray = myArray.slice();

myArray.pop();
console.log(myArray);
console.log(myOtherArray);
console.log(anotherArray);

myArray = [1, 2];

console.log(myOtherArray);



