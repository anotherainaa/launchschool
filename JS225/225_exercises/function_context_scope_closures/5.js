function myBind(func, context, ...args1) {
  return function(...args2) {
    return func.apply(context, args1.concat(args2));
  }
}

let obj = {
  name: 'Ainaa', 
  greet() {
    console.log(`Hello ${this.name}`)
  } 
};

let greetAinaa = myBind(obj.greet, obj);
greetAinaa();

function add(first, second) {
  return first + second;
}

function repeat(count, string) {
  let result = '';
  let i;
  for (i = 0; i < count; i += 1) {
    result += string;
  }

  return result;
}

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

let add1 = partial(add, 1);
console.log(add1(2));

let threeTimes = partial(repeat, 3);
console.log(threeTimes('Hello'));