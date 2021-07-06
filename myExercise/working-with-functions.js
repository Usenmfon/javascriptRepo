"use strict"

const DECI_NUM = 2.33
Object.freeze(DECI_NUM)
try {
    DECI_NUM = 4
} catch (ex) {
    console.log("There is an error")

}

const books = {
    name: "The three muskerteers",
    author: "Alexander Grandell",
    year: 1892
}

const { name: bookName, author: authorName, year: yearPublished } = books
const { name } = books

console.log(name)

const [a, b, , , , , c] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(c)

class Planet {
    constructor(name) {
        this.name = name;
    }
}

const JUPITER = new Planet("Earth")
console.log(JUPITER.name)

class BOOKS {
    constructor(title) {
        this._title = title;
    }
    get edit() {
        return this._title
    }

    set edit(changeTitle) {
        this._title = changeTitle
    }
};

const book = new BOOKS("Longman dictionary")
console.log(book.edit)
book.edit = "Think and Grow Rich";
console.log(book.edit)

// Only change code below this line
class Thermostat {
    constructor(Fahrenheit) {
        this._Fahrenheit = Fahrenheit;
    }

    get temperature() {
        return (5 / 9) * (this._Fahrenheit - 32)
    }
    set temperature(Celcius) {
        this._Fahrenheit = Celcius * 9.0 / 5 + 32
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp)
thermos.temperature = 76;
temp = thermos.temperature; // 26 in Celsius
console.log(temp)