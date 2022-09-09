let str = prompt('Enter the price')

function extractCurrencyValue(str) {
    return +str.slice(1);
}

alert(extractCurrencyValue(str))

