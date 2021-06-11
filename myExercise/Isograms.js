const simpleCalculator = (num1, num2, operation) => {
    let answer;
    switch (operation) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = num1 / num2;
            break;
        default:
            answer = "Retry with valid inputs";
            break;
    }
    return answer;
}

var addition = simpleCalculator(2, 3, '+');
console.log("Additon:  " + `${addition}`);

var addition = simpleCalculator(2, 3, '*');
console.log("multiplication:  " + `${addition}`);

var addition = simpleCalculator(3, 2, '-');
console.log("Substraction:  " + `${addition}`);

var addition = simpleCalculator(3, 2, '/');
console.log("Division:  " + `${addition}`);

console.log("************************");
const greetings = () => "Hey!";

console.log(greetings());

console.log("************************");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", function(name) {
    rl.question("Where do you live? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});