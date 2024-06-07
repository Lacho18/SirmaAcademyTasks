//Match Phone Number

function solve(input) {
    let regex = /(?:^|\s)\+359([\s-])2\1\d{3}\1\d{4}\b/g;

    let result = input[0].match(regex);

    console.log(result.join(","));
}

solve(["+359 2 222 2222, 359-2-222-2222, +359/2/222/2222, +359-2 222 2222, +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"]);