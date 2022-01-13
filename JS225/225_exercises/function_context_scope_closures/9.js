// const name = 'Naveed';
// const greeting = 'Hello';

// Here, I'm trying to experiment with ways to change the message
// However, I changed message to a function to set this execution context to the obect
// If I cannot change the message into a function, then I can use IIFE
// The function is immediately executed when we execute greeter.message which returns the original value we want
// while the name and and greeting is no longer poluting the global variable (and it is private data - not directly accessible/changeable)

// const greeter = {
//   name: 'Naveed',
//   greeting: 'Hello',
//   message() {
//     return `${this.greeting} ${this.name}!`;
//   },
//   sayGreetings() {
//     console.log(this.message());
//   }
// };


const greeter = {
  message: (() => {
    const name = 'Naveed';
    const greeting = 'Hello';
    return `${greeting} ${name}!`;
  })(),
  sayGreetings() {
    console.log(this.message);
  }
};

greeter.sayGreetings();