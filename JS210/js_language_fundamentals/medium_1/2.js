// Will it produce the expected result? Why or why not?

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// No, this will loop forever? 
// i % 3 === 0 will always evaluate to 3 which means, at each iteration the code will always evaluate to true on this branch condition which will log 0 in an infinite loop.
// i is never incremented. 

