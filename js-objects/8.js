const weekDays = {
    'Mo': 'Понедельник',
    'Tu': 'Вторник',
    'We': 'Среда',
    'Th': 'Четверг',
    'Fr': 'Пятница',
    'Sa': 'Суббота',
    'Su': 'Воскресенье',
}

function translate(weekDays) {
    Object.assign(weekDays, { 'Mo': "Luni" });
    Object.assign(weekDays, { 'Tu': "Marti" });
    Object.assign(weekDays, { 'We': "Miercuri" });
    Object.assign(weekDays, { 'Th': "Joi" });
    Object.assign(weekDays, { 'Fr': "Vineri" });
    Object.assign(weekDays, { 'Sa': "Sambata" });
    Object.assign(weekDays, { 'Su': "Duminica" });

    return weekDays
}


console.log(translate(weekDays))