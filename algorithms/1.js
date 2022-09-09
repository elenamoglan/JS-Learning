function numbers() {
  const array = [];

  for (let i = 0; i < 100; i += 2) {
    array.push(i, 99 - i);
  }

  return array;
}

console.log(numbers());
