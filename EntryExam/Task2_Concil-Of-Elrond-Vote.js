//Council of Elrond Votes

function solve(input) {
    if (!input.includes("Yes") && !input.includes("No")) {
        if (input.length > 0) {
            console.log("Abstain");
            return;
        }
    }

    let yesCount = 0;
    let noCount = 0;

    for (let item of input) {
        if (item === "Yes") {
            yesCount++;
        }
        else if (item === "No") {
            noCount++;
        }
    }

    if (yesCount > noCount) {
        console.log("Yes");
    }
    else if (yesCount < noCount) {
        console.log("No");
    }
    else {
        console.log("Tie");
    }
}

solve(["Yes", "No", "Yes", "Abstain", "Yes"]);
solve(["No", "No", "Yes"]);
solve(["Yes", "No"]);
solve(["Abstain"]);
solve(["No", "No", "Abstain", "Abstain", "Yes", "Yes"]);
solve(["No", "Abstain", "Abstain"]);
solve([]);
solve(["Abstain", "Abstain", "Abstain"]);