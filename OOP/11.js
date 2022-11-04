const form = document.createElement("form");
document.getElementsByTagName("body")[0].appendChild(form);

class FormElement {
  constructor(id, type, placeholder, value, rules) {
    this.type = type;
    this.id = id;
    this.placeholder = placeholder;
    this.value = value;
    this.rules = rules;
  }

  create(elementName) {
    const element = document.createElement(elementName);

    element.setAttribute("id", this.id);
    if (elementName === "input") {
      element.setAttribute("type", this.type);
      element.setAttribute("placeholder", this.placeholder);
      element.setAttribute("value", this.value);

      let rule = "";

      for (const elem in this.rules) {
        if (rule !== "") {
          rule += "|";
        }
        rule += this.rules[elem];
      }

      element.setAttribute("rules", rule);
    }

    return element;
  }

  getValue() {
    return this.value;
  }

  validate(inputId) {
    const input = document.getElementById(inputId);

    if (inputId === "age") {
      if (input.value) {
        input.style.borderColor = "";
        document.getElementById("errorAge").innerHTML = "";
        errorAge.style.display = "none";
        return true;
      } else {
        errorAge.style.display = "block";
        input.style.borderColor = "red";
        document.getElementById(`error${inputId}`).innerHTML =
          "Please enter a valid age";
        return false;
      }
    } else if (inputId === "name") {
      if (input.value) {
        input.style.borderColor = "";
        document.getElementById("errorName").innerHTML = "";
        errorName.style.display = "none";
        return true;
      } else {
        input.style.borderColor = "red";
        errorName.style.display = "block";
        document.getElementById("errorName").innerHTML =
          "Please enter a valid name";
        return false;
      }
    } else {
      return true;
    }
  }
}

const formElementOne = new FormElement("name", "text", "Имя", "John", [
  "required",
]);
const formElementTwo = new FormElement(
  "email",
  "text",
  "Е-мэйл",
  "mail@mail.com",
  ["required", "mail"]
);
const formElementThree = new FormElement("age", "text", "Возраст", "62", [
  "required",
  "min:10",
]);
const formElementFour = new FormElement(
  "birthdate",
  "text",
  "Дата рождения",
  "01.01.1970",
  ["required", "date"]
);
const formElementFive = new FormElement("submit");

form.append(formElementOne.create("input"));
const errorName = document.createElement("div");
errorName.id = "errorName";
errorName.style.display = "none";
form.append(errorName);
form.appendChild(document.createElement("br"));

form.append(formElementTwo.create("input"));
form.appendChild(document.createElement("br"));

form.append(formElementThree.create("input"));
const errorAge = document.createElement("div");
errorAge.id = "errorAge";
errorAge.style.display = "none";
form.append(errorAge);
form.appendChild(document.createElement("br"));

form.append(formElementFour.create("input"));
form.appendChild(document.createElement("br"));

form.append(formElementFive.create("button"));
form.elements["submit"].textContent = "Submit";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (formElementFive.validate("name") && formElementFive.validate("age")) {
    alert("Данные сохранены");
  } else {
    alert("Ошибка валидации");
  }
});
