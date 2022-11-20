const saveButton = document.getElementById("saveButton");
const clearButton = document.getElementById("clearButton");
const form = document.querySelector("#form");
const formElements = form.elements;
console.log(formElements);
const boxes = document.getElementsByName("language");
console.log(boxes);

const getFormData = () => {
  const data = {};

  for (const element of formElements) {
    if (element.name.length > 0) {
      data[element.name] = element.value;
    }
  }

  return data;
};

saveButton.addEventListener("click", (event) => {
  event.preventDefault();
  data = getFormData();
  data.boxes = [...boxes].map((box) => box.checked);
  localStorage.setItem("data", JSON.stringify(data));
});

clearButton.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.clear();
  for (const element of formElements) {
    element.value = "";
  }
});

function populateForm() {
  if (localStorage.key("data")) {
    const savedData = JSON.parse(localStorage.getItem("data"));

    for (const element of formElements) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
      if (element.name === "language") {
        boxes.forEach((box, index) => {
          box.checked = savedData?.boxes?.[index];
        });
      }
    }
  }
}

document.addEventListener("load", populateForm());
