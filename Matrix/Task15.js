//Excel Sum Formula

function solve(matrix, command) {
    let commandArray = command.split(":");
    let from = {
        x: commandArray[0].charCodeAt(0) - 'A'.charCodeAt(0),
        y: Number(commandArray[0][1] - 1)
    }

    let to = {
        x: commandArray[1].charCodeAt(0) - 'A'.charCodeAt(0),
        y: Number(commandArray[1][1] - 1)
    }

    console.log(from);
    console.log(to);

    let sum = 0;
    for (let i = from.y; i <= to.y; i++) {
        for (let j = from.x; j <= to.x; j++) {
            sum += matrix[i][j];
        }
    }

    console.log(sum);
}

solve([[0, 1, 0, 0],
[0, 0, 0, 0],
[1, 0, 0, 0],
[0, 0, 0, 0]],
    "A1:C4");