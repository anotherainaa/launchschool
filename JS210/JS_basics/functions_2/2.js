function greet(greeting = 'Hello', recipient = 'world') {
  console.log(greeting + ', ' + recipient + '!');
}

greet('Salutations');

greet(undefined);

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); 