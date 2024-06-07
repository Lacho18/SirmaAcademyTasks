//Reveal Words

function solve(words, text) {
    let wordsArray = words.split(', ');
    let prevSymbol = "";
    let startIndex = 0;
    let result = text;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "*" && prevSymbol !== "*") {
            startIndex = i;
        }

        if (prevSymbol === "*" && text[i] !== "*") {
            let word = wordsArray.find(indexValue => indexValue.length === i - startIndex);
            wordsArray.splice(word, 1);
            result = result.replace("*".repeat(i - startIndex), word);

            startIndex = 0;
        }

        prevSymbol = text[i];
    }

    if (text[text.length - 1] === "*") {
        let i = text.length - 1;
        startIndex = 0;
        while (text[i] === "*") {
            i--;
        }

        let word = wordsArray.find(indexValue => indexValue.length === text.length - 1 - i);
        result = result.replace("*".repeat(text.length - 1 - i), word);
    }

    console.log(result);
}

solve("the, best, learn", "Javascript is *** *** **** language to *****")