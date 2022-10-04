class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.days * this.rate;
  }
}

const worker = new Worker("Иван", "Иванов", 10, 31);
const worker2 = new Worker("Иван", "Иванов", 9, 31);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());
console.log(worker.getSalary() + worker2.getSalary());
