const arr = [8, 7, 2, 2, 3, 4, 2, 5, 5, -2, 6, 7, 8, 5, 9, 0, 1];

function uniqueSorted(arr) {
  const store = {};
  const uniqArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!store[arr[i]]) {
      store[arr[i]] = true;
      uniqArr.push(arr[i]);
    }
  }

  return uniqArr.sort();
}

console.log(uniqueSorted(arr));
