const plus = document.getElementById("button_plus");
let input = document.getElementById("input");
const minus = document.getElementById("button_minus");

input.disabled = true;
input.value = 0;
minus.disabled = true;

plus.addEventListener("click", () => {
  input.value++;
  minus.disabled = false;
  if (input.value >= 9) {
    plus.disabled = true;
  }
});

minus.addEventListener("click", () => {
  input.value--;
  plus.disabled = false;
  if (input.value <= 0) {
    minus.disabled = true;
  }
});
