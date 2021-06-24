function currencyConverter(convertType, value) {
    convertedAmount = 0;
    return convertedAmount = convertType == "D2N" ? value * 411.50 : value / 411.50;
}

console.log(currencyConverter("N2D", 100));