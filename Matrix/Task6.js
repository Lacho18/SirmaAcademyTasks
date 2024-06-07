//Print Diagonals of Square Matrix

function solve(matrix) {
    let myMatrix = [];

    for (let i = 0; i < matrix.length; i++) {
        myMatrix.push(matrix[i].split(" "));
    }

    let upDiagonal = [];
    let downDiagonal = [];

    for (let i = 0; i < myMatrix.length; i++) {
        for (let j = 0; j < myMatrix[i].length; j++) {
            if (i === j) {
                upDiagonal.push(myMatrix[i][j]);
            }

            if (i === myMatrix.length - 1 - j) {
                downDiagonal.push(myMatrix[i][j]);
            }
        }
    }

    console.log(upDiagonal.join(" "));
    console.log(downDiagonal.reverse().join(" "));
}

solve(
    ["1 2 3 2",
        "1 1 2 4",
        "1 2 1 4",
        "2 2 3 1"]
);