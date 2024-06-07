//Sum Matrix Elements

function solve(matrix) {
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }

    console.log(matrix.length);
    console.log(matrix[0].length);
    console.log(sum);
}

solve([[10, 11, 12, 13],
[14, 15, 16, 17]]);