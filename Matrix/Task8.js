//Fill the Matrix

function solve(rows, type) {
    let matrix = [];

    if (type === 'A') {
        for (let i = 0; i < rows; i++) {
            let innerArray = [];

            for (let j = 0; j < rows; j++) {
                innerArray.push(i + (j * rows + 1));
            }
            matrix.push(innerArray);
        }
    }
    else if (type === 'B') {
        let num = 1;
        for (let i = 0; i < rows; i++) {
            let innerArray = [];
            if (i % 2 === 0) { // Even column (0, 2, 4, ...)
                for (let j = 0; j < rows; j++) {
                    innerArray.push(num++);
                }
            } else { // Odd column (1, 3, 5, ...)
                for (let j = rows - 1; j >= 0; j--) {
                    innerArray.push(num++);
                }
            }
            matrix.push(innerArray);
        }
    }


    matrix.forEach(array => console.log(array.join(" ")));
}

solve(3, 'B');