let age = prompt('How old are you?');

//method 1
if (!(age >= 14 && age <= 90)) {
    alert('Allowed');
} else {
    alert('Denied');
};

//method 2
let age2 = prompt('How old are you?');
if (age2 < 14 || age2 > 90) {
    alert('Allowed');
} else {
    alert('Denied');
};

