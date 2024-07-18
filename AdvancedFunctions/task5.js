function createPrivateCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        getCount() {
            return count;
        }
    }
}

const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount());