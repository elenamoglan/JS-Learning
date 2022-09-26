const parentOfChild = document.getElementById("parent");
const child = document.getElementById("child");
const delete_button = document.getElementById("btn");

delete_button.addEventListener("click", () => {
  parentOfChild.removeChild(child);
});
