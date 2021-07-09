// let arr = [10, 20, 30, 40, 50];

// arr.sort();
// console.log(arr);

// console.log(arr.map(x => arr.indexOf(x)))
// console.log(arr.map(x => x < 2))
// let placeIn = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 30) {
//         placeIn = arr.indexOf(arr[i]) + 1;
//     }
// }
// console.log(placeIn)

function getIndexToIns(arr, num) {
    arr.sort();
    let placeIn = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            placeIn = arr.indexOf(arr[i]) + 1;
        }
    }
    return placeIn;
}

console.log(getIndexToIns([40, 60], 50));

// function fizzBuzz(count) {
//     for (let i = 1; i <= count; i++) {
//         let word = '';
//         if (i % 3 === 0) word += 'Fizz';
//         if (i % 5 === 0) word += 'Buzz';
//         console.log(word || i);
//     }
// }
// fizzBuzz(50)