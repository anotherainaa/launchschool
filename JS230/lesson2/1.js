// Question 1
// It loops through number 1 to 10, and logs each number after that number of seconds

function delayLog() {
  for (let i = 1; i <= 10; i += 1) {
    let milliseconds = i * 1000;
    setTimeout(() => {
      console.log(i);
    }, milliseconds);
  }
}

// Question 2
// Order of execution

setTimeout(() => {      // 1
  console.log('Once');  //5
}, 1000);

setTimeout(() => {      // 2
  console.log('upon'); // 7 
}, 3000);

setTimeout(() => {      // 3
  console.log('a');     //6
}, 2000);

setTimeout(() => {      // 4
  console.log('time');  // 8
}, 4000);

// Question 3 
// In what sequence. 

// setTimeout(() => {
//   setTimeout(() => {
//     q();
//   }, 15);

//   d();

//   setTimeout(() => {
//     n();
//   }, 5);

//   z();
// }, 10);

// setTimeout(() => {
//   s();
// }, 20);

// setTimeout(() => {
//   f();
// });

// g();

// g, f, d, z, n, s, q

// Question 4

function afterNseconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}