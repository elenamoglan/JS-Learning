const fibonacci = (n) =>
  Array.from({ length: n }).reduce(
    (acc, _, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );

// const fibonacci = function (n) {
//   const series = [0, 1];

//   for (let i = 2; i < n; i++) {
//     series.push(series[i - 1] + series[i - 2]);
//   }

//   return n >= 2 ? series : n === 1 ? [0] : [];
// };

console.log(fibonacci(5));
