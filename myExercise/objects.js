let motor = {
    name: "Benz",
    model: "S-class",
    numberOfWheels: 4,
    brand: "exquisite",
    carSound: function() {
        console.log(`${this.name} Voom Vooooom!`)
    }
}

motor.carSound()




function Dog(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.numLegs = 4;
}

Dog.prototype = {
    constructor: Dog,
    size: "Big",
    eat: function() {
        console.log("nom nom nom")
    },
    describe: function() {
        console.log("My name is " + this.name)
    }
}

// Dog.prototype.size = "Big";
let terrier = new Dog("Cookie", "Caucassian", "Black")
console.log(Dog.prototype.isPrototypeOf(terrier))
console.log(terrier.size)
console.log(typeof Dog.prototype)
console.log(Object.prototype.isPrototypeOf(Dog.prototype))
console.log(terrier)
console.log(terrier instanceof Dog)

let ownProps = []
let prototypeProps = []
for (let property in terrier) {
    if (terrier.hasOwnProperty(property)) {
        ownProps.push(property)
    } else {
        prototypeProps.push(property)
    }
}
console.log(ownProps)
console.log(prototypeProps)
console.log(terrier.constructor == Dog)

function Computer() {

}

Computer.prototype = {
    constructor: Computer,
    work: function() {
        console.log("All computers are great")
    }
}

function Windows() {

}

Windows.prototype = {
    constructor: Windows
}

// let w = Object.create(Computer.prototype)


Windows.prototype = Object.create(Computer.prototype)
let w = new Windows()
w.work();