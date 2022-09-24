const table = document.querySelector("table");

for (i = 1; i <= 8; i++) {
  let tr = document.createElement("tr");
  for (j = 1; j <= 8; j++) {
    let td = document.createElement("td");
    td.style.backgroundColor = "white";
    if ((i + j) % 2 != 0) {
      td.style.backgroundColor = "black";
    }
    tr.append(td);
  }
  table.append(tr);
}
