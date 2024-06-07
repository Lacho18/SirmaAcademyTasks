//Equal matrices

function solve(matrix1, matrix2) {
    if (matrix1.length !== matrix2.length) {
        console.log('not equal');
        return;
    }
    for (let i = 0; i < matrix1.length; i++) {
        if (matrix1[i].length !== matrix2[i].length) {
            console.log('not equal');
            return;
        }
        for (let j = 0; j < matrix1[i].length; j++) {
            if (matrix1[i][j] !== matrix2[i][j]) {
                console.log('not equal');
                return;
            }
        }
    }

    console.log('equal');
}

solve(
    [[1, 2, 3],
    [2, 1, 3]],
    [[1, 2, 3],
    [2, 1, 3]]);