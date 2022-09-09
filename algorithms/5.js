function dividers(number) {
  let divider = 0;

  for (let j = 2; j * 2 <= number; j++) {
    if (number % j == 0) {
      divider++;
    }
  }

  return divider;
}

function primesUpTo(numberFrom, numberTo) {
  const primes = [];

  for (let i = numberFrom; i <= numberTo; i++) {
    if (dividers(i) == 0) {
      primes.push(i);
    }
  }

  return primes;
}

console.log(primesUpTo(2, 10));
