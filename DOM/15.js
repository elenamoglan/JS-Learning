const input = document.getElementById("input");

input.addEventListener("focusout", () => {
  if (isNaN(input.value)) {
    input.value = 0;
  }
});
