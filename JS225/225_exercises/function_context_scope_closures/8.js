/* PEDAC

Problem

- a stack is like an array
- a stack has a rule
  - add new elements in any order but remove only the last inserted element

- create a function new Stack
  - when callen, returns a new stack object 

Input : nothing? 
Output: a stack object with 3 methods
  - push
  - pop
  - printStack

push
input: value
appends it to the stack

pop
input: none
removes and returns the last element from the stack

printStack
input: none
logs each remaining element of the stack from first added to last added

Data Structure 
- use an array to implement the stack 
  - the array must be private - it cannot be accessed outside of the methods!

Test cases

[]
newStack.push()


*/

function newStack() {
  const stack = [];
  return {
    push(element) {
      stack.push(element);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(elem => console.log(elem));
    },
  };
}

const myStack = newStack();

myStack.push(1);
myStack.push(44);
myStack.push(99);
myStack.push(102);
console.log(myStack.pop()); // 102
myStack.printStack(); // logs 1, then 44 then 99

console.log(myStack);

