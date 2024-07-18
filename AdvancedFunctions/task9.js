function getFibonacci() {
    let a = 0;
    let b = 1;

    return () => {
        let next = a;
        [a, b] = [b, a + b];
        return next;
    }
}

const fibonacci = getFibonacci();

console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());