function range(start, end, step) {
    result = [];
    for (let i = 1; i <= end / step; i++) {
        result.push(start)
        start += step
    }
    return result
}

let nums = range(1, 10, 2)
console.log(`Range: ${nums}`)

function sum(...numbers) {
    result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]
    }
    return result
}

console.log(`Sum of Range: ${sum(...nums)}`)

function ReverseArray(arr) {
    // console.log(arr.length)
    let newArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i])
    }
    return newArray
}

console.log(ReverseArray([1, 2, 3, 4, 5, 6]))