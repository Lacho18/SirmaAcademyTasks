class Shape {
    calculateArea() {
        return null;
    }
}

class Triangle extends Shape {
    constructor(a, hA) {
        super();
        this.a = a;
        this.hA = hA;
    }

    calculateArea() {
        return (this.a * this.hA) / 2;
    }
}

class Square extends Shape {
    constructor(a) {
        super();
        this.a = a;
    }

    calculateArea() {
        return this.a * this.a;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Triangle(3, 5);
console.log(circle.calculateArea());