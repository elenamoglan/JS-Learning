let number = +prompt('Введите число');
function dividers(number) {
    for (let i = 2; i * 2 <= number; i++) {
        if (number % i == 0) {
            console.log(i);
        }
    }
}
console.log(dividers(number))