class MyArray extends Array {
    constructor() {
        super();
    }

    first() {
        return this[0];
    }

    skip(n) {
        if (n >= this.length) {
            return this;
        }
        else {
            let newArray = this.splice(this.length - n, n);

            return newArray;
        }
    }

    take(n) {
        if (n >= this.length) {
            return this;
        }
        else {
            let newArray = this.splice(0, n);

            return newArray;
        }
    }

    product() {
        let sum = 0;
        this.forEach(value => {
            sum += value;
        });
        return sum;
    }

    unique() {
        const uniqueNumbers = [...new Set(this)];
        return uniqueNumbers;
    }
}

const myArray = new MyArray();
for (let i = 0; i < 7; i++) {
    myArray.push(i);
}

//console.log(myArray);
myArray.first();

const array = myArray.take(3);
console.log(array);

const notUniqueArray = new MyArray();
notUniqueArray.push(1);
notUniqueArray.push(1);
notUniqueArray.push(1);
notUniqueArray.push(2);
notUniqueArray.push(2);
notUniqueArray.push(3);
const uniqueArray1 = notUniqueArray.unique();
console.log(uniqueArray1);