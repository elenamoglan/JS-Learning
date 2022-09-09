const students = [
  {
    name: "First",
    marks: [8, 10, 7, 5, 4],
  },
  {
    name: "Second",
    marks: [5, 10, 6, 5, 4],
  },
  {
    name: "Fird",
    marks: [8, 9, 7, 8, 4],
  },
  {
    name: "Fourth",
    marks: [4, 4, 6, 5, 4],
  },
  {
    name: "Fifth",
    marks: [4, 4, 4, 5, 4],
  },
];

const avStudents = students.map((element) => ({
  name: element.name,
  average: element.marks.reduce((a, i) => a + i) / element.marks.length,
}));

console.log(avStudents);

const avMarks = avStudents
  .filter((element) => element.average < 5)
  .map((element) => element.name);

console.log(avMarks);

const maxMin = avStudents
  .filter((element) => {
    const min = Math.min(...avStudents.map((mark) => mark.average));
    const max = Math.max(...avStudents.map((mark) => mark.average));

    return element.average == min || element.average == max;
  })
  .map((element) => element.name);

console.log(maxMin);

const sortedStudents = avStudents.sort((a, b) => b.average - a.average);

console.log(sortedStudents);

const bigAverage = avStudents
  .filter((element) => {
    const averageAll =
      avStudents.reduce((total, next) => total + next.average, 0) /
      avStudents.length;

    return element.average > averageAll;
  })
  .map((element) => element.name);

console.log(bigAverage);
