class StringContainer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(value) {
        this.innerLength += value;
    }

    decrease(value) {
        this.innerLength -= value;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        }
        else if (this.innerLength < this.innerString.length && this.innerLength > 0) {
            let subString = this.innerString.substring(0, this.innerLength);
            return subString + "...";
        }
        else {
            return "...";
        }
    }
}

let test = new StringContainer("Test", 5);
console.log(test.toString());
test.decrease(3);
console.log(test.toString());
test.decrease(5);
console.log(test.toString());
test.increase(4);
console.log(test.toString());