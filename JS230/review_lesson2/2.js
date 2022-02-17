//  Problem 1 & 2

let counterId;

function startCounting() {
  let counter = 0;
  counterId = setInterval(() => {
    counter += 1;
    console.log(count);
  }, 1000);
}

function stopCounting() {
  clearInterval(counterId);
}
