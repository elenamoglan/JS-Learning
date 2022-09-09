const weekDays = {
  Luni: "Mo",
  Marti: "Tu",
  Miercuri: "We",
  Joi: "Th",
  Vineri: "Fr",
  Simbata: "Sa",
  Duminica: "Su",
};

function oppositeObject(object) {
  const newObject = {};

  for (const key in object) {
    newObject[object[key]] = key;
  }

  return newObject;
}

console.log(oppositeObject(weekDays));
