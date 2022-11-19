const url = location.href; //  href for the page
const formIdentifier = `${url} form`; // Identifier used to identify the form
const saveButton = document.getElementById("saveButton"); // select save button
const clearButton = document.getElementById("clearButton"); // select save button
let form = document.querySelector("#form"); // select form
let formElements = form.elements;
const boxes = document.getElementsByName("language").length;

console.log(formElements);

const getFormData = () => {
  let data = { [formIdentifier]: {} };

  for (const element of formElements) {
    if (element.name.length > 0) {
      data[formIdentifier][element.name] = element.value;
    }
  }

  return data;
};

saveButton.addEventListener("click", (event) => {
  event.preventDefault();
  data = getFormData();
  localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
  for (let i = 1; i <= boxes; i++) {
    const checkbox = document.getElementById(String(i));
    localStorage.setItem("checkbox" + String(i), checkbox.checked);
  }
});

clearButton.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.clear();
  for (const element of formElements) {
    element.value = "";
  }
});

function populateForm() {
  if (localStorage.key(formIdentifier)) {
    const savedData = JSON.parse(localStorage.getItem(formIdentifier));

    for (const element of formElements) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
      if (element.name === "language") {
        for (let i = 1; i <= boxes; i++) {
          if (localStorage.length > 0) {
            const checked = JSON.parse(
              localStorage.getItem("checkbox" + String(i))
            );
            document.getElementById(String(i)).checked = checked;
          }
        }
      }
    }
  }
}

document.addEventListener("load", populateForm());
