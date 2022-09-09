const person1 = {
  name: `Person`,
  age: 123,
  salary: 1542.33,
  contacts: {
    phone: `112`,
    email: "email@domain.com",
  },
  address: `Moldova`,
};
const person2 = {
  name: `Person`,
  age: 123,
  salary: 1542.33,
  contacts: {
    phone: `112`,
    email: "email@domain.com",
  },
  address: `Moldova`,
};

const intersect = (obj1, obj2) => {
  const newObject = {};

  for (const key in obj1) {
    if (obj1[key] === obj2[key]) {
      newObject[key] = obj1[key];
    }
    if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      let obj = intersect(obj1[key], obj2[key]);
      newObject[key] = obj1[key];
    }
  }
  return newObject;
};

console.log(intersect(person1, person2));
