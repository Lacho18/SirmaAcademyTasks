//Zero Matrix

function solve(matrix) {
    let myMatrix = matrix.map(indexValue => {
        return indexValue.split(" ")
    });

    let positions = [];
    let num = 1;
    for (let i = 0; i < myMatrix.length; i++) {
        for (let j = 0; j < myMatrix[i].length; j++) {
            if (myMatrix[i][j] == 0) {
                positions.push({
                    x: i,
                    y: j
                });
            }
            num++;
        }
    }

    for (let position of positions) {
        for (let i = 0; i < myMatrix.length; i++) {
            for (let j = 0; j < myMatrix[i].length; j++) {
                if (i === position.x) {
                    myMatrix[i][j] = '0';
                }
                if (j === position.y) {
                    myMatrix[i][j] = '0';
                }
            }
        }
    }

    myMatrix.forEach(indexValue => console.log(indexValue.join(" ")));
}

solve(["1 2 3 0", "4 5 6 7", "0 8 9 1"]);