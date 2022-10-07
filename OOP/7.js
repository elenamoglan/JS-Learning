class Animal {
  constructor(food, location) {
    this.food = food;
    this.location = location;
  }

  makeNoise() {}

  eat() {}

  sleep() {
    return "Животное спит";
  }
}

class Dog extends Animal {
  constructor(name, food, location) {
    super(food, location);
    this.name = name;
  }

  makeNoise() {
    return "Гав-гав-гав!!!";
  }

  eat() {
    return "Собака ест.";
  }
}

class Cat extends Animal {
  constructor(name, food, location) {
    super(food, location);
    this.name = name;
  }

  makeNoise() {
    return "Мя-я-я-я-я-я-у!!!!";
  }

  eat() {
    return "Кошка ест.";
  }
}

class Horse extends Animal {
  constructor(name, food, location) {
    super(food, location);
    this.name = name;
  }

  makeNoise() {
    return "Иго-го-го-го!!!";
  }

  eat() {
    return "Лошадь ест.";
  }
}

class Veterinar {
  treatAnimal(animal) {
    return `${animal.name} должен прийти на прием к ветеринару, ест ${animal.food} ${animal.location}`;
  }
}

const veterinar = new Veterinar();

const animals = [
  new Cat("Мурзик", "мясо", "дома"),
  new Dog("Шэдоу", "мясо", "дома"),
  new Horse("Принц", "мясо", "дома"),
];

animals.forEach((animal) => {
  console.log(veterinar.treatAnimal(animal));
});
