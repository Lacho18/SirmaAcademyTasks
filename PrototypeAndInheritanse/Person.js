function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = `${this.firstName} ${this.lastName}`;
}

const person = new Person("Lachezar", "Genov");
console.log(person.fullName);