const yourName = prompt("Ваше имя?");
alert(`Привет ${yourName}`);

let answer = prompt('Ты знаком с языком JavaScript?')
if (answer == 'Да') {
    confirm('Молодец')
} else if (answer == 'Нет') {
    confirm('Можно начать изучение прямо сейчас')
}
