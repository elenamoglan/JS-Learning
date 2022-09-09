function createMatrix(size) {
  const matrix = [];
  let n = 0; // starting number

  // initialize matrix
  for (let i = 0; i <= size - 1; i++) {
    matrix.push([]);
  }

  for (let i = 0; i <= size - 1; i++) {
    // fill the upper diagonals
    for (let k = 0; k <= size - 1 - i; k++) {
      matrix[k][k + i] = n++;
    }

    // fill the lower diagonals
    if (i !== 0) {
      for (k = i; k <= size - 1; k++) {
        matrix[k][k - i] = n++;
      }
    }
  }

  // print matrix
  for (let i = 0; i <= size - 1; i++) {
    let line = "";

    for (let j = 0; j <= size - 1; j++) {
      line = `${line}${`   ${matrix[i][j]}`.slice(-4)} `;
    }

    console.log(line);
  }
}

createMatrix(10);
