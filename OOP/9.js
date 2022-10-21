const form = document.createElement("form");
document.body.appendChild(form);

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

  validate() {}
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

form.appendChild(formElementOne.create("input"));
form.appendChild(formElementTwo.create("input"));
form.appendChild(formElementThree.create("input"));
form.appendChild(formElementFour.create("input"));
form.appendChild(formElementFive.create("button"));
