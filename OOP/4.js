class Validator {
  static isEmail(email) {
    return email === email.match(/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i);
  }

  static isPhone(phone) {
    return phone === phone.match(/^[\d\+][\d\(\)\ -]{4,14}\d$/);
  }

  static isDate(date) {
    return date === date.match(/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/);
  }

  static isDomain(domain) {
    return (
      domain ===
      domain.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
      )
    );
  }
}

const validator = new Validator();
console.log(Validator.isEmail("phphtml@mail.ru"));
console.log(Validator.isPhone("8 999 123-45-67"));
console.log(Validator.isDate("12.05.2020"));
console.log(Validator.isDomain("test.net"));
