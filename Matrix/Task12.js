//Rotate Matrix 90 Degrees

function solve(matrix) {
    let myMatrix = matrix.map(indexValue => {
        return indexValue.split(" ").map(Number);
    });

    let rotatedMatrix = Array.from({ length: myMatrix.length }, () => Array(myMatrix.length).fill(0));

    for (let i = 0; i < myMatrix.length; i++) {
        for (let j = 0; j < myMatrix[i].length; j++) {
            rotatedMatrix[j][myMatrix.length - 1 - i] = myMatrix[i][j];
        }
    }

    rotatedMatrix.forEach(indexValue => console.log(indexValue.join(" ")));
}

solve(["0 1 2 3",
    "4 5 6 7",
    "8 9 10 11",
    "12 13 14 15"]);