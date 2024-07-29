class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log("Eating");
    }

    sleep() {
        console.log(`Animal - ${Object.name} is sleeping.... zzzzzzzzzzzzZZZ.`);
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    meow() {
        console.log("meow meow meow");
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    bark() {
        console.log("barking....")
    }
}

const dog = new Dog("Sharo", 7);
dog.sleep();