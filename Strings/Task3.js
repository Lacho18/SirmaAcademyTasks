//Censor

function solve(text, word) {
    let result = text.replaceAll(word, "*".repeat(word.length));

    console.log(result);
}

solve("A small sentence with some small words", "small");