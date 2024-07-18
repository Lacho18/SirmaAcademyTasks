function double(number) {
    return number * 2;
}

function square(number) {
    return number * number;
}

const compose = (double, square) => {
    //return (x) => square(double(x));
    return (x) => square(double(x));
}

const doubleThenSquare = compose(double, square);

console.log(doubleThenSquare(3));