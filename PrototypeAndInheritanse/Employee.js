class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    get Salary() {
        return this.salary;
    }
}

class Manager extends Employee {
    constructor(name, salary, bonuses) {
        super(name, salary);
        this.bonuses = bonuses;
        this.calculateBonus();
    }

    calculateBonus() {
        let percentSalary = this.salary / 2;

        if (percentSalary > this.bonuses) {
            this.salary += this.bonuses;
        }
        else if (percentSalary <= this.bonuses) {
            this.bonuses -= this.bonuses * (20 / 100);
            this.salary += this.bonuses;
        }
    }
}

class Engineer extends Employee {
    constructor(name, salary, bonuses, projects) {
        super(name, salary);
        this.bonuses = bonuses;
        this.projects = projects;
        this.calculateBonus();
    }

    calculateBonus() {
        this.bonuses *= this.projects;
        this.bonuses -= this.bonuses * (10 / 100);
        this.salary += this.bonuses;
    }
}

const engineer = new Engineer("Atanas", 5000, 1000, 3);
console.log(engineer.Salary);