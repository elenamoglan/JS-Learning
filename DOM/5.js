const plus = document.getElementById("button_plus");
let input = document.getElementById("input");
const minus = document.getElementById("button_minus");

input.disabled = true;
input.value = 0;
minus.disabled = true;

plus.onclick = () => {
  if (input.value <= 9 && input.value >= 0) {
    input.value++;
    if (input.value == 9) {
      plus.disabled = true;
    } else {
      minus.disabled = false;
    }
  }
};

minus.onclick = () => {
  if (input.value <= 9 && input.value >= 0) {
    input.value--;
    if (input.value == 0) {
      minus.disabled = true;
    } else {
      plus.disabled = false;
    }
  }
};
