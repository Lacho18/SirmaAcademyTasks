//Pascal-Case Splitter

function solve(input) {
    let startIndex = 0;
    let words = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i].toLowerCase() !== input[i]) {
            let word = input.substring(startIndex, i);
            startIndex = i;

            if (word !== "") {
                words.push(word);
            }
        }
    }

    let word = input.substring(startIndex, input.length);
    words.push(word);

    console.log(words.join(", "))
}

solve("ThisIsSoAnnoying");