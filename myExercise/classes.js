class Laptop {
    constructor(name, model, price, specs) {
        this.name = name
        this.model = model
        this.price = price
        this.specs = specs
    }

    addSpecs(spec) {
        this.specs.push(spec)
    }

    changeProp() {
        this.name = 'Toshiba'
    }
}

let hp = new Laptop('hp', 'hp2000', 60000, ['processor: AMD', 'os: Windows', 'speed: 1.3ghz', 'batteryLife: 1min'])
hp.addSpecs('keyboardType: Qwerty')
hp.changeProp()
console.log(hp)