// var array = [2, 3, 4, 5];
// console.log(array);
// console.log(array.map(item => item * 2));

// let [a, b] = array;
// console.log(a);

// setInterval(() => console.log("hi"), 1000)

const multiplier = function(a, b) {
    return a * b;
}

console.log(multiplier(2, 3))

const power = (number, exponent) => {
    for (let i = 1; i <= exponent; i++) {
        return number * number
    }
}

console.log(power(9, 2))

greet()

function greet() { console.log("Hello") }