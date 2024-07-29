class MyString extends String {
    constructor(string) {
        super(string);
        Object.defineProperty(this, "value", {
            value: string,
            writable: true
        });
        console.log(this.value);
    }

    ensureStart(str) {
        if (str.length >= this.value.length) {
            return false;
        }
        else {
            let subString = this.value.splice(0, str.length);

            if (subString === str) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    ensureEnd(str) {
        if (str.length >= this.value.length) {
            return false;
        }
        else {
            let subString = this.value.splice(this.value.length - str.length, this.value.length);

            if (subString === str) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    isEmpty() {
        if (this.value.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    capitalize() {
        let arrayOfLetters = this.value.split("");
        arrayOfLetters[0] = arrayOfLetters[0].toUpperCase();

        return arrayOfLetters.join("");
    }

    truncateWords(n) {
        let array = [];
        let wordsLength = Math.ceil(this.value.length / n);

        for (let i = 0; i < this.value.length; i += wordsLength) {
            let word = "";
            if (i + wordsLength < this.value.length) {
                word = this.value.substring(i, i + wordsLength);
            }
            else {
                word = this.value.substring(i, this.value.length) + "....";
            }

            array.push(word);
        }

        return array.join(" ");
    }
}

const name = new MyString("dumaPakDumaNeznamVeche");
console.log(name.truncateWords(8));