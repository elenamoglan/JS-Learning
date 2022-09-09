let arr = [
  {
    x: 1,
    y: 2,
  },
  {
    x: 3,
    y: 4,
  },
  {
    x: null,
    y: 4,
  },
  {
    x: 3,
    y: undefined,
  },
];

function check(arr) {
  return arr.filter(
    (element) =>
      element.x && element.y && !isNaN(element.x) && !isNaN(element.y)
  );
}

console.log(check(arr));
