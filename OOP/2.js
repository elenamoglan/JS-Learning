class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getName() {
    return this.name;
  }

  getSurname() {
    return this.surname;
  }

  setSurname(surname) {
    this.surname = surname;
    return this.surname;
  }
}

const worker = new Person("Иван", "Иванов");
console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.setSurname("Петров"));
console.log(worker.getSurname());
