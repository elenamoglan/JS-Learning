const cells = document.querySelectorAll("td");

for (row = 1; row <= 8; row++) {
  for (col = 1; col <= 8; col++) {
    cells[(row - 1) * 8 + col - 1].style.backgroundColor =
      row % 2 != 0
        ? ((row - 1) * 8 + col - 1) % 2 == 0
          ? "black"
          : "white"
        : ((row - 1) * 8 + col - 1) % 2 == 0
        ? "white"
        : "black";
  }
}

/*let row = 0;

for (i = 0; i < 64; i++) {
  if (i % 8 == 0) {
    row++;
  }

  if (row % 2 != 0) {
    if (i % 2 == 0) {
      cells[i].style.backgroundColor = "black";
    } else {
      cells[i].style.backgroundColor = "white";
    }
  } else {
    if (i % 2 == 0) {
      cells[i].style.backgroundColor = "white";
    } else {
      cells[i].style.backgroundColor = "black";
    }
  }
}
*/
