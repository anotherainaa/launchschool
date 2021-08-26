function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let currentNumber = 2; currentNumber < number; currentNumber += 1) {
    if (number % currentNumber === 0) {
      return false;
    }
  }
  return true;
}

function findAllPrimes(number) {
  const primes = []

  for (let n = 2; n <= number; n += 1) {
    if (isPrime(n)) {
      primes.push(n);
    }
  }
  return primes;
}

function checkGoldbach(sum) {
  if (sum % 2 === 1 || sum < 4) {
    console.log(null);
    return;
  }

  const primes = findAllPrimes(sum / 2);

  primes.forEach(number => {
    if (isPrime(sum - number)) {
      console.log(`${number} ${sum - number}`);
    };
  });
}

checkGoldbach(3);
checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);