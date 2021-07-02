// // The global variable
// var s = [23, 65, 98, 5];

// Array.prototype.myMap = function(callback) {
//     var newArray = [];
//     // Only change code below this line
//     for (let i = 0; i < this.length; i++) {
//         newArray.push(callback(this[i]));
//     }
//     // Only change code above this line
//     return newArray;
// };

// var new_s = s.myMap(function(item) {
//     return item * 2;
// });

// var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
// console.log(cities.splice(3, 1))
// console.log(cities)

// console.log(null || "Agnes")
// console.log("user" || "Agnes")
// console.log("user" || null)

// console.log(null && "Agnes")
// console.log("user" && "Agnes")
// console.log("user" && null)

// const factorial = (num) => {
//     if (num == 0) {
//         return 1
//     } else {
//         return factorial(num - 1) * num;
//     }
// }

// const systemPrint = {
//     writeline: function(display) {
//         console.log(display);
//     }
// }
// systemPrint.writeline("Hello Usenmfon")

function findTheNumber(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num
        }
    }
    return undefinded
}

console.log(findTheNumber([1, 2, 3, 4, 5], num => num % 2 === 0))