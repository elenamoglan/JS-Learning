function getAge() {
  const birthday = new Date(prompt("When were you born?"));
  const now = new Date();
  const years = now.getFullYear() - birthday.getFullYear();
  const months = years * 12;
  const days = Math.ceil(
    (now.getTime() - birthday.getTime()) / (1000 * 60 * 60 * 24)
  );

  return `${years} год, ${months} месяца, ${days} дня`;
}

console.log(getAge());
