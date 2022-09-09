let a = prompt('Insert the first number of the interval');
let b = prompt('Insert the last number of the interval');
a = parseInt(a);
b = parseInt(b);
let sum = 0;

for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}

console.log(sum)