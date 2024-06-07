//Matrix Border Flip

function solve(matrix) {
    let myMatrix = matrix.map(indexValue => {
        return indexValue.split(" ").map(Number);
    });

    let n = myMatrix.length;
    let changedMatrix = Array({ length: n }, () => { Array(n).fill(0) });

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            changedMatrix[j][n - 1 - i] = myMatrix[i][j];
        }
    }

    console.log(changedMatrix);
}

solve(["1 2 3",
    "4 5 6",
    "7 8 9"]);