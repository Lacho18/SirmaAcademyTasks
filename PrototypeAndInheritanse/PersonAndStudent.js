class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
}

const student = new Student("Ivan", 18, "Unknown");

for (const key in student) {
    console.log(`${key} : ${student[key]}`);
}