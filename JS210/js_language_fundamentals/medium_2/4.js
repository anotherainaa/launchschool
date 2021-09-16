
// function doubler(number, caller) {
//   console.log(`This function was called by ${caller}.`);
//   return number + number;
// }

// doubler(5, 'Victor');                   // returns 10
// // logs:
// // This function was called by Victor.


// My first attempt

// function makeDoubler(caller) {
//   console.log(`This function was called by ${caller}.`);
  
//   function innerDoubler(number) {
//     return number + number;
//   }

//   return innerDoubler;
// }

const doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10
console.log(doubler(10)); 
console.log(doubler(30));    
// logs:
// This function was called by Victor.

// LS answer

function makeDoubler(caller) {
  return number => {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  }
}