let obj = {
    name: "",
    job: ""
}

function Person(name) {
    console.log(this);
    this.name = name;
}

function Employee(name, job) {
    this.job = job;

    let getName = (name) => Person.call(this, name);

    getName(name);
}

const emp = new Employee('Alice', 'Engineer');
console.log(emp);
