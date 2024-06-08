function destroy(array, index) {
    let newArray = array;
    newArray.splice(index, 1);

    return newArray;
}

function swapIndexes(array, position1, position2) {
    let newArray = array;

    let swap = newArray[position1];
    newArray[position1] = newArray[position2];
    newArray[position2] = swap;

    return newArray;
}

function correctPositions(array, position1, position2) {
    if (position1 === position2) {
        return false;
    }

    if (position1 < 0 || position2 >= array.length) {
        return false;
    }

    return true;
}

function insert(array, value, index) {
    let indexToInsert = index;
    let newArray = array;
    if (index >= array.length) {
        newArray.push(value);
        return newArray;
    }
    newArray.splice(indexToInsert, 0, value);

    return newArray;
}

function solve(positions, commands) {
    let resultPositions = positions;

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];

        //adds element at the end of an array
        if (currentCommand.indexOf("add") > -1) {
            let getPosition = currentCommand.split(" ");
            let newPosition = Number(getPosition[1]);
            resultPositions.push(newPosition);
        }
        //deletes element at a specific index
        else if (currentCommand.indexOf("destroy") > -1) {
            let getPosition = currentCommand.split(" ");
            let indexToRemove = Number(getPosition[1]);
            if (indexToRemove >= resultPositions.length || indexToRemove < 0) {
                continue;
            }
            resultPositions = destroy(resultPositions, indexToRemove);
        }
        //Swaps 2 elements in an array if the given positions are valid
        else if (currentCommand.indexOf("swap") > -1) {
            let positions = currentCommand.split(" ");
            positions.shift();
            let position1 = Number(positions[0]);
            let position2 = Number(positions[1]);
            if (correctPositions(resultPositions, position1, position2)) {
                resultPositions = swapIndexes(resultPositions, Number(positions[0]), Number(positions[1]));
            }
            else {
                continue;
            }
        }
        //Insert a specific value at a specific index in the array
        else if (currentCommand.indexOf("insert") > -1) {
            let values = currentCommand.split(" ");
            values.shift();
            let newID = Number(values[0]);
            let index = Number(values[1]);

            resultPositions = insert(resultPositions, newID, index);
        }
        //Print the center elements of the array
        else if (currentCommand.indexOf("center" > -1)) {
            let middleIndex = Math.floor(resultPositions.length / 2);
            if (resultPositions.length % 2 !== 0) {
                console.log(resultPositions[middleIndex]);
            }
            else {
                console.log(resultPositions[middleIndex - 1] + " " + resultPositions[middleIndex]);
            }

            continue;
        }

        console.log(resultPositions.join(" "));
    }
}

solve([1, 2, 3, 4, 5, 6],
    ["add 3.14",
        "insert -3 5",
        "swap 1 4",
        "swap 2 3",
        "swap 2 100",
        "swap 2 2",
        "center"]);