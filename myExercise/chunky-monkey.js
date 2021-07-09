// console.log(['E', 'A', 'R'].slice(1, 3))
// console.log([1, 2, 8, 4].indexOf(8))
// console.log([1, 2, 8, 4].findIndex(x => x == 8))

// let arr = ['E', 'A', 'R', 'I', 'N', 'G', 'O'];
// arr.splice(3, 1);
// console.log(arr);

// let newCollection = []
// let numberFirst = [1, 2, 3]
// let numberSecond = [4, 5, 6]

// newCollection.push(numberFirst);
// newCollection.push(numberSecond)
// console.log(newCollection)

// let arr = [0, 1, 2, 3, 4, 5, 6];

// let chunkArray = [];
// let num = 3;
// let arrayLength = arr.length / num;
// for (let i = 0; i < arrayLength; i++) {
//     chunkArray.push(arr.splice(0, num))
// }

// console.log(chunkArray);

function chunkArrayInGroups(arr, size) {
    let chunkArray = [];
    let arrayLength = arr.length / size;
    for (let i = 0; i < arrayLength; i++) {
        chunkArray.push(arr.splice(0, size))
    }
    return chunkArray;
}

let result = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
console.log(result)