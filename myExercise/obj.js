class Animal {
    constructor(name, color, breed, legs) {
        this.name = name
        this.color = color
        this.breed = breed
        this.numLegs = legs
    }
}

Animal.prototype.living = true

let cat = new Animal('bloomy', 'white-gray', 'local', '4')

console.log(cat instanceof Animal)

let ownProps = []
let prototypeprops = []

for (let property in cat) {
    if (cat.hasOwnProperty(property)) {
        ownProps.push(property)
    } else {
        prototypeprops.push(property)
    }
}

console.log(`Own properties: ${ownProps} and Prototype properties: ${prototypeprops}`)

class Vehicle {
    constructor(name, brand, wheels) {
        this.name = name
        this.brand = brand
        this.numWheels = wheels
    }
}

Vehicle.prototype.industry = 'automobile'

let toyota = new Vehicle('Toyota', 'Venza', 4)
let volvo = new Vehicle()

console.log(volvo instanceof Vehicle)

let vehicleOwnProps = []
let vehiclePrototypeProsps = []

for (let property in volvo) {
    if (volvo.hasOwnProperty(property)) {
        vehicleOwnProps.push(property)
    } else {
        vehiclePrototypeProsps.push(property)
    }
}

console.log(`Own properties: ${vehicleOwnProps} and Prototype properties: ${vehiclePrototypeProsps}`)

dog = {
    name: 'billy',
    age: '4',
    numLegs: 4,
}

console.log(Object.keys(dog))