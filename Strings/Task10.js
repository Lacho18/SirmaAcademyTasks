//Cut and Reverse

function solve(input) {
    let middleIndex = input.length / 2;
    let leftPart = input.substring(0, middleIndex);
    let rightPart = input.substring(middleIndex + 1, input.length);

    console.log(leftPart.split("").reverse().join(""));
    console.log(rightPart.split("").reverse().join(""));
}

solve("tluciffiDsIsihTgnizamAoSsIsihT");