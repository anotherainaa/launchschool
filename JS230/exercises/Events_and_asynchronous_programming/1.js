/*
1 - Randomizer

function that accespts n callbacks 
& calls each callback at some random point in time betwen and and 2 * n seconds

input : n, number of callbacks
output: -
- the function will call each callback at some random point in time between now and 2 * n seconds from now

Example
- If the caller provides 5 callbacks, the function should run them all sometime within 10 seconds. 
 (each callback has a random time to be called upon which is within 2 seconds)

- I need a random that calculates between 0 to 2 seconds fo each callback. 
- callbacks are being called randomly at random times
- the reason for that is because they all get a random time assigned to them, making it random 

Algorithm
- get a random second
- call each callback with the randomize seconds 


*/

function randomizer(...callbacks) {
  const maxSeconds = 2 * callbacks.length;
  let randomSeconds = () => Math.floor(Math.random() * maxSeconds * 1000 + 1);

  for (let i = 1; i <= maxSeconds; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }

  callbacks.forEach(callback => {
    setTimeout(callback, randomSeconds());
  })
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}


