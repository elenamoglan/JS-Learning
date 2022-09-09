const numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55]
function average(numbers) {
    return numbers.reduce((a, b) => (a + b)) / numbers.length;
}
console.log('Numbers<5:')
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 5) {
        console.log(numbers[i]);
    }
}

console.log('Numbers>average:')
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > average(numbers)) {
        console.log(numbers[i]);
    }
}
console.log('Min:' + Math.min(...numbers));
console.log('Max:' + Math.max(...numbers));
numbers.sort((a, b) => b - a)
console.log('Numbers in descending order:' + numbers)