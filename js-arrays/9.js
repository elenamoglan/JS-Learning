const arr = [
  1,
  "a",
  2,
  null,
  3,
  undefined,
  4,
  {},
  5,
  6,
  `word`,
  7,
  8,
  false,
  9,
  100,
];

function filter(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || arr[i] > 9) {
      arr.splice(i, 1);
    }
  }

  return arr;
}

console.log(filter(arr));
