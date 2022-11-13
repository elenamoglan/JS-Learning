const tasks = document.getElementById("totalTasks");
const addTask = document.getElementById("addTask");
const list = document.getElementById("tasksList");

let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

tasks.innerHTML = `${itemsArray.length} tasks`;

function createTask(text) {
  const deleteButton = document.createElement("span");
  const task = document.createElement("p");
  task.innerHTML = text;
  deleteButton.innerHTML = "X";
  deleteButton.setAttribute("item", text);
  deleteButton.addEventListener("click", (event) => {
    const targetElement = event.target;
    itemsArray.splice(
      itemsArray.indexOf(targetElement.getAttribute("item")),
      1
    );
    localStorage.setItem("items", JSON.stringify(itemsArray));
    list.removeChild(task);
    tasks.innerHTML = `${itemsArray.length} tasks`;
  });
  task.append(deleteButton);
  list.append(task);
}

addTask.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    itemsArray.push(addTask.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    createTask(addTask.value);
    tasks.innerHTML = `${itemsArray.length} tasks`;
    addTask.value = "";
  }
});

itemsArray.forEach((item) => {
  createTask(item);
});
