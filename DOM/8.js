let input = document.getElementById("input");
const add = document.getElementById("button");
const list = document.getElementById("list");

add.onclick = () => {
  let li = document.createElement("li");
  li.textContent = input.value;
  li.onclick = () => {
    alert(li.textContent);
  };
  list.append(li);
  input.value = "";
  input.focus();
  add.disabled = true;
};

input.oninput = () => {
  if (input.value != "") {
    add.disabled = false;
  } else {
    add.disabled = true;
  }
};
