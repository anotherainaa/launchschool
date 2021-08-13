let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// This code will output false. 

// The b initialized in the block is local variable that is scoped to the block. 
// it shadows b on line 2.