function extract(start, end) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(numbers[i]);
  }

  return result;
}

console.log(extract(2, 4));
