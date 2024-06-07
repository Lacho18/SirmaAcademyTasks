//Sum 2 matrices

function solve(matrix1, matrix2) {
    let result = [];

    for (let i = 0; i < matrix1.length; i++) {
        let midArray = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            midArray.push(matrix1[i][j] + matrix2[i][j]);
        }

        result.push(midArray);
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i].join(' '));
    }
}

solve([[1, 2, 3], [4, 3, 1]]
    ,
    [[1, 2, 3], [4, 2, 2]]);