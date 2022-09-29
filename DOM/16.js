const input = document.getElementById("input");

input.addEventListener("input", () => {
  input.value = input.value.replace(/[^0-9\.]/g, "");
});
