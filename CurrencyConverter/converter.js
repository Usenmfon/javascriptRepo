console.log(`Choose conversion:
1 - Naira to Dollars
2 - Dollars to Naira
3 - Naira to Euro
                `);

function foreignExchange(currencyToCovert, foreignValue, domesticValue) {
    convertedAmount = 0;
    switch (currencyToConvert) {
        case 1:
            console.log(`${domesticValue} Naira to ${foreignValue} Dollars`)
            convertedAmount = fX(foreignValue, domesticValue)
            break;
        case 2:
            //convertedAmount = 
            break;
        case 1:
            //convertedAmount = 
            break;
        default:
            //convertedAmount =
            break;
    }
    return convertedAmount;
}

console.log(foreignExchange(1, 100, 411))

function fX(foreignValue, domesticValue) {
    return foreignValue / domesticValue;
}












// const numbers = function() {
//     return 2;

// }

// function addN(a, b = 4) {
//     return a + b;
// }

// console.log(addN(numbers()));