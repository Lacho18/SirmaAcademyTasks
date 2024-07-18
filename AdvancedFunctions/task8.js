const stringManipulator = {
    text: "",
    setValue: function (value) {
        this.text = value;

        return this;
    },
    toUpperCase: function () {
        this.text = this.text.toUpperCase();

        return this;
    },
    toLowerCase: function () {
        this.text = this.text.toLowerCase();

        return this;
    },
    print: function () {
        console.log(this.text);

        return this;
    }
}

stringManipulator.setValue('Hello').toUpperCase().print().toLowerCase().print();