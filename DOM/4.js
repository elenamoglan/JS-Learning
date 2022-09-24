const list = document.getElementById("list");
let i = 1;

createList = setInterval(() => {
  const item = document.createElement("li");

  item.textContent = `Элемент ${i}`;
  list.appendChild(item);

  if (i % 2 === 0) {
    item.style.backgroundColor = "violet";
  } else {
    item.style.backgroundColor = "green";
  }

  if (i == 20) {
    clearInterval(createList);
  }

  i++;
}, 2000);
