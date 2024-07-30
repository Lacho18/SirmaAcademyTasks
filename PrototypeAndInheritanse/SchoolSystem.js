function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.isPerson = function () {
    console.log("This is person");
}

function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;

    this.study = function () {
        console.log("Studying.....");
    }
}

function Teacher(name, age, subject, salary) {
    Person.call(this, name, age);
    this.subject = subject;
    this.salary = salary;

    this.teach = () => {
        console.log("Teaching.....");
    }
}

Teacher.prototype = Object.create(Person.prototype);

const student = new Teacher("Ivan", 18, 5.50, 1);
student.isPerson();
/*try {
    if (student.salary !== undefined) {
        console.log(student.salary);
    }
    else {
        throw err;
    }
}
catch (err) {
    console.log("Not working");
}*/