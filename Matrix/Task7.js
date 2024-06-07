//Matrix Diagonal Sum

function solve(matrix) {
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        let innerArray = matrix[i].split(" ");

        for (let j = 0; j < innerArray.length; j++) {
            if (i === j) {
                sum += Number(innerArray[j]);
            }

            if (i === innerArray.length - 1 - j) {
                sum += Number(innerArray[j]);
            }
        }
    }

    console.log(sum);
}

solve(["10 11",
    "14 15"]);