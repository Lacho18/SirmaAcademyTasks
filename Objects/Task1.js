class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says meow`)
    }
}

function solve(input) {
    for (item of input) {
        let arrayInput = item.split(" ");
        let newCat = new Cat(arrayInput[0], arrayInput[1]);
        newCat.meow();
    }
}

solve(['Branch 1', 'Poppy 3', 'Goldy 2']);