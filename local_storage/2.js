const tasks = document.getElementById("totalTasks");
const addTask = document.getElementById("addTask");
const list = document.getElementById("tasksList");

const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

tasks.textContent = `${itemsArray.length} tasks`;

function createTask(text) {
  const deleteButton = document.createElement("span");
  const task = document.createElement("p");

  task.textContent = text;
  deleteButton.textContent = "X";
  deleteButton.setAttribute("item", text);

  deleteButton.addEventListener("click", ({target}) => {
    itemsArray.splice(
      itemsArray.indexOf(target.getAttribute("item")),
      1
    );
    localStorage.setItem("items", JSON.stringify(itemsArray));
    list.removeChild(task);
    tasks.textContent = `${itemsArray.length} tasks`;
  });

  task.append(deleteButton);
  list.append(task);
}

addTask.addEventListener("keypress",  (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

    itemsArray.push(addTask.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    createTask(addTask.value);
    tasks.textContent = `${itemsArray.length} tasks`;
    addTask.value = "";
  }
});

itemsArray.forEach((item) => {
  createTask(item);
});
