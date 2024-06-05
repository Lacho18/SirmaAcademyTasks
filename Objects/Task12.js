class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (this.isValid(name) && this.isValid(salary) && this.isValid(position) && this.isValid(department) && salary > 0) {
            this.departments[name] = {
                name: name,
                salary: salary,
                position: position,
                department: department
            }
        }
        else {
            console.log("Invalid input!");
        }
    }

    bestDepartment() {

    }

    isValid(value) {
        return value !== "" && value !== null && value !== undefined;
    }
}