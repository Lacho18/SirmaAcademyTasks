//Maximum Sum of 2X2 Submatrix

function solve(matrix) {
    let helpArray = [];
    let iterator = 0;

    for (let i = 0; i < matrix.length - 1; i++) {
        let firstArray = matrix[i].split(" ");
        let secondArray = matrix[i + 1].split(" ");

        for (let j = 0; j < firstArray.length - 1; j++) {
            helpArray.push({
                sum: Number(firstArray[j]) + Number(firstArray[j + 1]) + Number(secondArray[j]) + Number(secondArray[j + 1]),
                position: [firstArray[j], firstArray[j + 1], secondArray[j], secondArray[j + 1]]
            });
        }
    }

    let max = 0;
    for (let i = 0; i < helpArray.length; i++) {
        if (max < helpArray[i].sum) {
            max = i;
        }
    }

    console.log(helpArray[max].sum);
    for (let i = 0; i < helpArray.length; i++) {
        console.log(helpArray[max].position[i] + " " + helpArray[max].position[i + 1])
    }
}

solve(["7 1 3 3 2 1",
    "1 3 9 8 5 6",
    "4 6 7 9 1 0"]);