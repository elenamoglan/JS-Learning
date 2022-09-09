// https://jsoneditoronline.org/#left=cloud.3e35ece7a3d941d8bf36ff4ae14475c3
const data = {
  "employeeInformation": {
    "name": "Moglan Elena Veceaslav",
    "date_of_birth": "2004-11-28",
    "phone_number": "+37379007304",
    "adress": "Suceava 7",
    "email": "moglan.elena@gmail.com",
    "sex": "female",
    "function": "",
    "date_of_start": "01.08.22",
    "IDNP": "",
    "payment": "10000",
    "birth_place": "Balti",
    "work_experience": "",
    "department": "",
    "home_number": "+37323167394",
    "work_schedule": {
      "begin": "08:00",
      "end": "17:00",
      "pause_begin": "12:00",
      "pause_end": "13:00",
    }
  }
};

document.getElementById("myText").innerHTML = JSON.stringify(data, null, 4);
