function Employee(name, age, salary, tasks) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.tasks = tasks;
}

Employee.prototype.extend = function (object) {
    for (const key in object) {
        if (object.hasOwnProperty(object)) {
            this[key] = object[key];
        }
    }
}

function Junior(name, age, salary, tasks, workHours) {
    Employee.call(this, name, age, salary, tasks);
    this.workHours = workHours;

    this.work = function () {
        console.log(`${this.name} is working ${this.workHours} a day`);
    };

    this.getSalary = function () {
        console.log(`You just got ${this.salary} BGN`);
    }
}

//Junior.prototype = Object.create(Employee.prototype);
//Junior.prototype.constructor = Junior;

const junior = new Junior('John Doe', 25, 1500, ['task1', 'task2'], 8);

console.log(junior.name);
console.log(junior.age);
console.log(junior.salary);
console.log(junior.tasks);
junior.work();
junior.getSalary();