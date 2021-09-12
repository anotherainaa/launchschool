// function greetings(array, object) {
//   let name = array.join(' ');
//   let jobTitle = object.title + ' ' + object.occupation
//   console.log(`Hello ${name}! Nice to have a ${jobTitle} around.`)
// }


greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// LS Approach

function greetings(name, status) {
  let nameGreet = 'Hello, ' + name.join(' ') + '!';
  let statusGreet = 'Nice to have a ' + status.title + ' ' + status.occupation + ' around.';
  console.log(nameGreet + ' ' + statusGreet); 
}