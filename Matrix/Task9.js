//Row Sum and Column Sum

function solve(matrix) {
    let myMatrix = matrix.map(indexValue => {
        return indexValue.split(" ");
    });

    let rowSums = [];
    let colSums = [];

    for (let i = 0; i < matrix.length; i++) {
        let rowSum = 0;
        for (let j = 0; j < myMatrix[i].length; j++) {
            rowSum += Number(myMatrix[i][j]);
        }
        rowSums.push(rowSum);

        let colSum = 0;
        if (i < myMatrix[0].length) {
            for (let k = 0; k < myMatrix.length; k++) {
                colSum += Number(myMatrix[k][i]);
            }

            colSums.push(colSum);
        }
    }

    console.log(`Row sums: ${rowSums.join(', ')}`);
    console.log(`Columns sums: ${colSums.join(', ')}`);
}

solve(["1 2 3",
    "4 5 6",
    "7 8 9"]);