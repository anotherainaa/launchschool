let school = new Promise(function(resolve, reject) {
  setTimeout(() => {
      resolve('Launch School')
  }, 2000);
})

school.then(value => console.log(value));

const promise = new Promise(function (resolve, reject) {
  resolve("I am a Promise");
});

promise.then(value => console.log(value));
console.log("I am NOT a Promise");
