function reverseString(str) {
    let start = str.length
    let reverse = '';
    for (let i = start - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
console.log(reverseString("hello"));

function reversal(str) {
    return str.split('').reverse().join('');
}

console.log(reversal("fun"));
//var result = reverseString("hello");
//console.log(result);

// function factorialize(num) {
//     var count = 1;
//     for (let i = 1; i <= num; i++) {
//         if (i > 0) {
//             count *= i;
//         }
//     }
//     return count;
// }

// var result = factorialize(5);
// console.log(result);


var arrayA = 'hello Universe of the planetary bodies';
var splitArrayA = arrayA.split(" ");
let maxLength = 0;
for (let i = 0; i < splitArrayA.length; i++) {

    if (splitArrayA[i].length > maxLength) {
        maxLength = splitArrayA[i].length;
    }
}
console.log(maxLength);