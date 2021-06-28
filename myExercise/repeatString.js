const repeatString = (str, num) => {
    return num > 0 ? Array(num + 1).join(str) : "";
}

console.log(repeatString('abc', 3));

// console.log(`${Array(11).join('a')}`)