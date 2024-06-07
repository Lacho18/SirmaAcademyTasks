//Replace Repeating Symbols

function solve(input) {
    let prevSymbol = "";
    let result = input;
    let startIndex = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== prevSymbol && prevSymbol !== "") {
            result = result.replace(prevSymbol.repeat(i - startIndex), prevSymbol);
            startIndex = i;
        }
        prevSymbol = input[i];
    }

    if (prevSymbol !== "") {
        let i = input.length - 1;
        while (input[i] === prevSymbol) {
            i--;
        }

        result = result.replace(prevSymbol.repeat(input.length - 1 - i), prevSymbol);
    }

    console.log(result);
}

solve("qqqwerqwecccwd");