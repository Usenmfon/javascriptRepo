// function CallMe() {
//     console.log("Hello there")
// }
// CallMe()

// // const MessageHim = () => {
// //     console.log('Hello Hommie')
// // }

// const MessageHim = function() {
//     console.log("Hello bro")
// }

// MessageHim()

// const DialUp = (() => {
//     console.log('Anything')
// })()

// function PriceList(name) {
//     function Books(sold, profit, num) {
//         console.log(`${name}'s ${num} books sold at #${sold}. with profit at #${profit}`)
//     }
//     Books(20, 23, 50)
// }

// PriceList('John')

// function Multiplier(factor) {
//     return number => number * factor
// }

// let twice = Multiplier(2)
// console.log(twice(5))
//     // console.log(twice(6))

// function ZeroPad(number, width) {
//     let string = String(number)
//     while (string.length < width) {
//         string = '0' + string
//     }
//     return string
// }

// function PrintResult(cow, chicken, pig) {
//     console.log(`${ZeroPad(cow, 3)} cows`)
//     console.log(`${ZeroPad(chicken, 3)} chickens`)
//     console.log(`${ZeroPad(pig, 3)} pigs`)
// }

// PrintResult(16, 7, 112)

// let obj = ['2', '4', '5']
// for (let i of obj) {
//     console.log(i)
// }

// obj.forEach(i => {
//     console.log(i)
// })
// const v = obj.reverse()
// console.log(v)

// let height = 5,
//     health = '10%',
//     gender = 'something',
//     id = '1234',
//     mobile = '08923'

// const Profile = {
//     height,
//     health,
//     [gender]: 'male',
//     [`user_${id}`]: `${mobile}`
// }

// console.log(Profile.something)
// console.log(Profile.user_1234)

// let person = {
//     name: 'Jack',
//     age: 18
// }

// let newPerson = Object.assign({}, person)
// newPerson.name = 'Bob'

// console.log(person.name)
// console.log(newPerson.name)

// console.log(newPerson)
// console.log(person)

// let { a, b } = { a: 'Hello', b: ' there' }
// console.log(a + b)

function asyncFunc(work) {
    return new Promise(function(resolve, reject) {
        if (work === '')
            reject(Error("Nothing"))
        setTimeout(function() {
            resolve(work)
        }, 1000)
    })
}

asyncFunc("Work 1")
    .then(function(result) {
        console.log(result)
        return asyncFunc("Work 2")
    }, function(error) {
        console.log(error)
    })
    .then(function(result) {
        console.log(result)
    }, function(error) {
        console.log(error)
    })
console.log("End")

console.log("Sololearn".startsWith("solo", 0))