function Person(name, age) {
    this.name = name
    this.age = age
}

let person_one = new Person('Mfoniso', 25)
let person_two = new Person('Micheal', 23)

console.log(person_two.name)

console.log(typeof(true))

function Add(...numbers) {
    let sum = 0
    for (let i of numbers) {
        sum += i
    }
    return sum
}

console.log(Add(1, 3, 4, 5, 6))