function squareOfNumbers() {
  return Array.from({ length: 101 }, (_, index) => index * index);

  // const numbers = []

  // for (let i = 0; i <= 100; i++) {
  //   numbers.push(Math.pow(i, 2))
  // }

  // return numbers
}

console.log(squareOfNumbers());
