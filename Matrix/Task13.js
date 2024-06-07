//Excel Column Name to Number

function solve(input) {
    let columnNumber = 0;

    for (let i = 0; i < input.length; i++) {
        let charValue = input.charCodeAt(i) - 'A'.charCodeAt(0) + 1;

        columnNumber = columnNumber * 26 + charValue;
    }

    console.log(columnNumber);
}

solve('AB');