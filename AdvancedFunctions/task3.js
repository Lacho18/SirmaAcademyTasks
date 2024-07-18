function multiply(a, b) {
    return a * b;
}

const specMultiply = multiply.bind(null, 3);

console.log(specMultiply(5));