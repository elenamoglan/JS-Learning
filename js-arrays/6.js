const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function change(numbers) {
  numbers.push(0, 0);

  for (i = numbers.length; i >= numbers.length - 4; i--) {
    numbers[i - 1] = numbers[i - 3];
  }

  for (i = 4; i <= 6; i++) {
    numbers[i] = 0;
  }

  return numbers;
}

console.log(change(numbers));
