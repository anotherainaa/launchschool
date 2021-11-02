/*
for each instruction, figure out what it does

let stack
let register 

number - place value in register 
PUSH  - push the register value to stack
ADD - pop a value from the stack and add it to the register value 
SUB - subtract from stack, store in register
MULT - mult from stack store in register
DIV
REMAINDER
POP
PRINT 


*/

function minilang(instructions) {
  let stack = [];
  let register = 0; 

  instructions.split(' ').forEach(token => {
    if (token === 'ADD') {
      register += stack.pop(); 
    } else if (token === 'SUB') {
      register -= stack.pop(); 
    } else if (token === 'MULT') {
      register *= stack.pop(); 
    } else if (token === 'DIV') {
      register = Math.round(register / stack.pop()); 
    } else if (token === 'REMAINDER') {
      register = Math.round(register % stack.pop()); 
    } else if (token === 'POP') {
      register = stack.pop();
    } else if (token === 'PUSH') {
      stack.push(register);
    } else if (token == 'PRINT') {
      console.log(register);
    } else if (/[0-9]/.test(token)) {
      register = parseInt(token, 10);
    }
  });
};


// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)