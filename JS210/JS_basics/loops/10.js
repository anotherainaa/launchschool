// What's the difference between the two. 

let counter1 = 0;

while (counter1 > 0) {
  console.log('Woooot!');
  counter1 -= 1;
}
 
// The code below will run at least once, while do above would not.

let counter2 = 0;

do {
  console.log('Woooot!');
  counter2 -= 1;
} while (counter2 > 0);