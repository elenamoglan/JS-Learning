function month_name(date) {
  return date.toLocaleString("default", { month: "long" });
}

console.log(month_name(new Date("10/11/2009")));
