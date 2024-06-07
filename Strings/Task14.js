//Match Dates

function solve(input) {
    let regex = /\d{2}[.\-\/][A-Z]{1}[a-z]{2}[.\-\/]\d{4}/g;
    let result = input[0].match(regex);

    console.log(result.join(", "));
}

solve(["13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23#09#1973, 1/Feb/2016"]);