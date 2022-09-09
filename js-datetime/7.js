function add_years(date, addYears) {
  return new Date(date.setFullYear(date.getFullYear() + addYears));
}

date = new Date(2014, 10, 2);
console.log(add_years(date, 10));
