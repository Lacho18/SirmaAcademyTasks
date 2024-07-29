class Figure {
    constructor() {
        this.units = "cm"
    }

    get area() {
        return 0;
    }

    changeUnits(units) {
        this.units = units;
    }

    toString() {
        return `This figure ${Figure.name} with units : ${this.units} has area - ${this.area}`;
    }
}

class Circle extends Figure {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }

    toString() {
        return `The figure ${this.name} area is ${this.area}`;
    }
}

class Rectangle extends Figure {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }

    get area() {
        return this.a * this.b;
    }

    toString() {
        return `The figure ${this.name} area is ${this.area}`;
    }
}

const circle = new Rectangle(2, 5);
console.log(circle.toString());