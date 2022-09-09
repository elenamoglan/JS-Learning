let str = prompt('Enter the line');

function ucFirst(str) {
    return str.charAt(0).toUppercase() + str.slice(1);
}

console.log(ucFirst(str))