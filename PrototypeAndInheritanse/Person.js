function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = `${this.firstName} ${this.lastName}`;
}

const person = new Person("Ivan", "Atanasov");
console.log(person.fullName);
