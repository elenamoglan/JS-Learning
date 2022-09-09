// https://jsoneditoronline.org/#left=cloud.3e35ece7a3d941d8bf36ff4ae14475c3
const data = {
  employeeInformation: [
    {
      name: "Moglan Elena Veceaslav",
      date_of_birth: "2004-11-28",
      phone_number: "+37379007304",
      adress: "Suceava 7",
      email: "moglan.elena@gmail.com",
      sex: "female",
      function: "",
      date_of_start: "01.08.22",
      IDNP: "",
      payment: 10000,
      birth_place: "Balti",
      work_experience: "",
      department: "",
      home_number: "+37323167394",
      work_schedule: {
        begin: "08:00",
        end: "17:00",
        pause_begin: "12:00",
        pause_end: "13:00",
      },
    },
    {
      name: "Moglan Anna Veceaslav",
      date_of_birth: "2004-11-28",
      phone_number: "+37379007304",
      adress: "Suceava 7",
      email: "moglan.elena@gmail.com",
      sex: "female",
      function: "",
      date_of_start: "01.08.22",
      IDNP: "",
      payment: 15000,
      birth_place: "Balti",
      work_experience: "",
      department: "",
      home_number: "+37323167394",
      work_schedule: {
        begin: "08:00",
        end: "17:00",
        pause_begin: "12:00",
        pause_end: "13:00",
      },
    },
    {
      name: "Moglan Andreea Veceaslav",
      date_of_birth: "2004-11-28",
      phone_number: "+37379007304",
      adress: "Suceava 7",
      email: "moglan.elena@gmail.com",
      sex: "female",
      function: "",
      date_of_start: "01.08.22",
      IDNP: "",
      payment: 8000,
      birth_place: "Balti",
      work_experience: "",
      department: "",
      home_number: "+37323167394",
      work_schedule: {
        begin: "08:00",
        end: "17:00",
        pause_begin: "12:00",
        pause_end: "13:00",
      },
    },
  ],
};

function showList() {
  const mainOL = document.createElement("ol");
  // for (let i = 0; i < data.employeeInformation.length; i++) {
  //   const employeeNameLI = document.createElement("li");
  //   employeeNameLI.innerHTML =
  //     data.employeeInformation[i].name +
  //     " : " +
  //     data.employeeInformation[i].payment;
  //   mainOL.appendChild(employeeNameLI);
  // }
  data.employeeInformation.forEach(employee => {
    const employeeNameLI = document.createElement("li");
    employeeNameLI.innerHTML = `${employee.name}: ${employee.payment}`;
    mainOL.appendChild(employeeNameLI);
  });
  document.body.appendChild(mainOL);
}

function showPayment() {
  const averagePayment = document.createElement("p");
  const minimumPayment = document.createElement("p");
  const maximumPayment = document.createElement("p");
  const sumPayment = document.createElement("p");

  // let min = Math.min(...data.employeeInformation.map(employee => employee.payment));
  // let max = Math.max(...data.employeeInformation.map(employee => employee.payment));

  let min = data.employeeInformation.reduce((min, employee) => employee.payment < min ? employee.payment : min, data.employeeInformation[0].payment);
  let max = data.employeeInformation.reduce((max, employee) => employee.payment > max ? employee.payment : max, data.employeeInformation[0].payment);
  let sum = data.employeeInformation.reduce((sum, employee) => sum + employee.payment, 0)

  minimumPayment.innerHTML = `Минимальная ЗП: ${min}`;
  maximumPayment.innerHTML = `Максимальная ЗП: ${max}`;
  averagePayment.innerHTML = `Средняя ЗП по всем сотрудникам: ${sum / data.employeeInformation.length}`;
  sumPayment.innerHTML = `Сумма всех ЗПx: ${sum}`;

  document.body.appendChild(averagePayment);
  document.body.appendChild(minimumPayment);
  document.body.appendChild(maximumPayment);
  document.body.appendChild(sumPayment);
}

showList();
showPayment();
