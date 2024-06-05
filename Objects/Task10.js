class List {
    constructor() {
        this.list = [];
        this.size = this.list.length;
    }

    add(value) {
        if (this.list.length == 0) {
            this.list.push(value);
        }
        else {
            let i = 0;
            while (i < this.list.length) {
                if (this.list[i] < value) {
                    i++;
                }
                else {
                    break;
                }
            }

            this.list.splice(i, 0, value);
        }

        this.size = this.list.length;
    }

    remove(index) {
        this.list.splice(index, 1);
        this.size = this.list.length;
    }

    get(index) {
        return this.list[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
list.add(3);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));