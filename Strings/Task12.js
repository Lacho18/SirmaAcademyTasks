//Match Full Name

function solve(input) {
    let prevName = "";
    let result = input.split(", ").filter(indexValue => {
        if (prevName !== "") {
            if (prevName.toLowerCase() === indexValue.toLowerCase()) {
                prevName = indexValue;
                return false;
            }
        }

        prevName = indexValue;
        return true;
    });

    console.log(result.join(", "));
}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov");