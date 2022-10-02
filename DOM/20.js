const add_button = document.getElementById("add_button");
const table = document.getElementById("table");
const newRow = document.getElementById("newRow");

table.addEventListener("click", function (event) {
  if (event.target.closest(".delete_button")) {
    event.target.closest("tr").remove();
  }
});

add_button.addEventListener("click", () => {
  const row = document.createElement("tr");
  const firstCell = document.createElement("td");
  const secondCell = document.createElement("td");
  firstCell.textContent = newRow.value;
  secondCell.setAttribute("class", "delete_button");
  secondCell.textContent = "X";
  row.appendChild(firstCell);
  row.appendChild(secondCell);
  table.append(row);
});
