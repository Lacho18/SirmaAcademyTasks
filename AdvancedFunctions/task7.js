function sum(a, b, c, d) {
    return a + b + c + d;
}

function partialSum(number) {
    return sum.bind(null, number);
}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3));