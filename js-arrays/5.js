function square(x) {
  return x * x;
}

function convert(square, array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(square(array[i]));
  }

  return newArray;
}

const arr = [1, 2, 3];
console.log(convert(square, arr));
console.log(arr);
