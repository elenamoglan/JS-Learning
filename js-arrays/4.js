function sumInputNumbers() {
  let numbers = [];
  let sum = 0;

  while (true) {
    let value = prompt("Insert the number");
    if (!value === "" || value === null || !isFinite(value)) break;
    numbers.push(parseInt(value));
  }

  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

alert(sumInputNumbers());
