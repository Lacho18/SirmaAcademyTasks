//Intersection of Two Matrices

function solve(matrix1, matrix2) {
    let result = [];

    for (let i = 0; i < matrix1.length; i++) {
        let arraySymbols1 = matrix1[i].split(" ");
        let arraySymbols2 = matrix2[i].split(" ");
        let intermediateResult = [];

        for (let j = 0; j < arraySymbols1.length; j++) {
            if (arraySymbols1[j] === arraySymbols2[j]) {
                intermediateResult.push(arraySymbols1[j]);
            }
            else {
                intermediateResult.push('*');
            }
        }

        result.push(intermediateResult);
    }

    for (let item of result) {
        console.log(item.join(" "));
    }
}

solve(["a b c d",
    "a b c d",
    "a b c d"],
    ["k b c k",
        "a b g d",
        "a k c d"]);