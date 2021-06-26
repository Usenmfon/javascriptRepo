// console.log(__dirname)
// console.log('My name is Usenmfon');
// //console.log(process);
// // console.log(module);
// // console.log(require);

// // setInterval(() => {
// //     console.log('hello world')
// // }, 1000)

var arr = [
    [2, 4, 8, 1, 9, 5],
    [9, 10, 7, 8],
    [-3, -4]
];

var count = 0;
var largestNumber = [];
for (var arrBody = 0; arrBody < arr.length; arrBody++) {
    let number = arr[arrBody][0];
    for (var individualArr = 0; individualArr < arr[count].length; individualArr++) {
        if (arr[count][individualArr] > number) {
            number = arr[count][individualArr];
        }
    }
    largestNumber[arrBody] = number;
    count++;
}

console.log(largestNumber);


// var count = 0;
// for (var arrBody = 0; arrBody < arr.length; arrBody++) {

//     for (var individualArr = 0; individualArr < arr[count].length; individualArr++) {
//         console.log(arr[count][individualArr])
//     }
//     count++;
// }

// var highestNumber = 0;
// for (var i = 0; i <= arr[0].length; i++) {
//     if (arr[0][i] > highestNumber) {
//         highestNumber = arr[0][i];
//     }
// }
// console.log(highestNumber);

// function confirmEnding(str, target) {


//     return str;
//   }

//   confirmEnding("Bastian", "n");
// var str = 'Hello';