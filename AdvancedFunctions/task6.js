function multiply(a) {
    return (b) => (c) => a * b * c;
}

console.log(multiply(2)(3)(4));