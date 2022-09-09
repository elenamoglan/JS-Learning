const username = 'Helen';
const password = 'helen';

let username2 = prompt('Insert the username');
let password2 = prompt('Insert the password');

if (username == username2 && password == password2) {
    alert('Привет');
} else if (username == username2 && password !== password2) {
    alert('Неправильный пароль');
} else if (username !== username2 || password == password2) {
    alert('Неправильный username');
} else if (username2 == '' && password2 == '') {
    alert('Ошибка Валидации');
}
