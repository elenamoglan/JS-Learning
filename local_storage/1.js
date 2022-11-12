const area = document.getElementById("area");
const button = document.getElementById("clearButton");

area.value = localStorage.getItem("area");
area.addEventListener("input", () => {
  localStorage.setItem("area", area.value);
});

button.addEventListener("click", () => {
  localStorage.removeItem("area");
  area.value = "";
});
