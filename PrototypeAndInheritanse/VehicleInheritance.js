class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    static printObject(object) {
        for (const key in object) {
            console.log(`${key} : ${object[key]}`);
        }
    }
}

class Car extends Vehicle {
    constructor(make, model, doors) {
        super(make, model);
        this.doors = doors;
    }
}

class Bike extends Vehicle {
    constructor(make, model, type) {
        super(make, model);
        this.type = type;
    }
}

const car = new Car("German", "Audi", 4);
const bike = new Bike("France", "Pegue", "AB");
const vehicle = new Vehicle("England", "BMW");

Vehicle.printObject(car);
console.log("--------------------------------------");
Vehicle.printObject(bike);
console.log("--------------------------------------");
Vehicle.printObject(vehicle);