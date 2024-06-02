class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.isOn = false;
        this.quality = quality;
        this._price = 800 - this.info.age * 2 + this.quality * 0.5;
    }

    get price() {
        return this._price;
    }

    turnOn() {
        this.isOn = true;
        this.quality--;
        this._price = 800 - this.info.age * 2 + this.quality * 0.5;
    }

    turnOff() {
        this.isOn = false;
        this.quality--;
        this._price = 800 - this.info.age * 2 + this.quality * 0.5;
    }

    showInfo() {
        return JSON.stringify(this.info);
    }
}

let info = {
    producer: "Lenovo",
    age: 1, brand: "Legion"
}
let laptop = new Laptop(info,
    10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
laptop.turnOn()
laptop.turnOff()
console.log(laptop.isOn)