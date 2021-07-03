let fB = num => {
    let fizzBuzzz = ""
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            fizzBuzzz += " FizzBuzz "
        } else if (i % 3 == 0) {
            fizzBuzzz += " Fizz "
        } else if (i % 5 == 0) {
            fizzBuzzz += "Buzz "
        } else {
            fizzBuzzz += i + " "
        }
    }
    return fizzBuzzz
}

console.log(fB(100))