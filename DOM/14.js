const parentOfChild = document.getElementById("parent");
const child = document.getElementById("child");
const deleteButton = document.getElementById("btn");

deleteButton.addEventListener("click", () => {
  parentOfChild.removeChild(child);
});
