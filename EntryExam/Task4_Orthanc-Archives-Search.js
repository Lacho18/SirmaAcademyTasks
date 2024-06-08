//Orthanc Archives Search

function solve(namesArray, name) {
    if (!namesArray.includes(name)) {
        console.log("Record not found");
        return;
    }

    let firstOccurrence = 0;
    let lastOccurrence = 0;

    for (let i = 0; i < namesArray.length; i++) {
        if (namesArray[i] === name) {
            firstOccurrence = i;
            break;
        }
    }

    for (let i = namesArray.length - 1; i >= 0; i--) {
        if (namesArray[i] === name) {
            lastOccurrence = i;
            break;
        }
    }

    console.log("First Occurrence: " + firstOccurrence);
    console.log("Last Occurrence: " + lastOccurrence);
}

solve(["Frodo", "Sam", "Frodo", "Merry"], "Frodo");
solve(["Pippin", "Merry", "Sam", "Pippin"], "Pippin");
solve(["Aragorn", "Legolas", "Gimli"], "Boromir");
solve(["Gandalf", "Sam", "Aragorn", "Frodo"], "Frodo");