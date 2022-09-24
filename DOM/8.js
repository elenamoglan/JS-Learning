let input = document.getElementById("input");
const add = document.getElementById("button");
const list = document.getElementById("list");

add.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = input.value;
  list.append(li);
  li.addEventListener("click", () => {
    alert(li.textContent);
  });
  input.value = "";
  input.focus();
  add.disabled = true;
});

input.addEventListener("input", () => {
  add.disabled = !input.value;
});
