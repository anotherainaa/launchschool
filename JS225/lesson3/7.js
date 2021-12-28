// Example

let object = {
  a: 'hello', 
  b: 'world',
  foo() {
    return this.a + ' ' + this.b;
  },
};

let bar = object.foo;
bar();

let baz = object.foo.bind(object);
baz;

let object2 = {
  a: 'hi', 
  b: 'there',
}

baz.call(object2);
// In contrast
object.foo.call(object2); 

// More Example

let greetings = {
  morning: 'Good morning, ',
  afternoon: 'Good afternoon, ',
  evening: 'Good evening, ',

  greeting(name) {
    let currentHour = (new Date()).getHours();

    if (currentHour < 12) {
      console.log(this.morning + name);
    } else if (currentHour < 18) {
      console.log(this.afternoon + name);
    } else {
      console.log(this.evening + name);
    }
  },
};

let spanishWords = {
  morning: 'Buenos dias, ',
  afternoon: 'Buenas  tardes',
  evening: 'Buenas noches, ',
};

let spanishGreeter = greetings.greeting.bind(spanishWords);
