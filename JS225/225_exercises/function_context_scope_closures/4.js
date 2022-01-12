function myBind(func, context) {
  return function(...args) {
    return func.apply(context, args);
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