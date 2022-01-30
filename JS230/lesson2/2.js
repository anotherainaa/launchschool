
// Question 1

let counterId;

function startCounting() {
  let count = 0;
  counterId = setInterval(() => {
    count += 1;
    console.log(count);
  }, 1000);
}

function stopCounting() {
  clearInterval(counterId);
}

startCounting();
setTimeout(stopCounting, 2000);


// Note that you have to explicitly call stopCounting when you want to stop.

