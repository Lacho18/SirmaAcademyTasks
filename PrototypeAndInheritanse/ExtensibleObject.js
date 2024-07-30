function CloneObject() { }

CloneObject.prototype.extend = function (template) {
    for (const key in template) {
        if (template.hasOwnProperty(key)) {
            if (typeof template[key] === 'function') {
                CloneObject.prototype[key] = template[key];
            }
            else {
                this[key] = template[key]
            }
        }
    }
}

const template = {
    name: 'Template Object',
    value: 42,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const myObject = new CloneObject();
myObject.extend(template);

console.log(myObject.name);
console.log(myObject.value);
myObject.greet();

console.log(myObject.__proto__.greet === template.greet); // Output: true