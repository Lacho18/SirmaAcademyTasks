//Matrix Boundary Sum

function solve(matrix) {
    let myMatrix = matrix.map(indexValue => {
        return indexValue.split(" ");
    });

    let sum = 0;

    for (let i = 0; i < myMatrix.length; i++) {
        for (let j = 0; j < myMatrix[i].length; j++) {
            if ((i === 0 || i === myMatrix.length - 1 && j === 0 || j === myMatrix[i].length - 1)) {
                sum += Number(myMatrix[i][j]);
            }
        }
    }

    console.log(sum);
}

solve(["1 2 3",
    "4 5 6",
    "7 8 9"]);