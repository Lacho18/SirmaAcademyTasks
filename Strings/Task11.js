//Letter

function replaceEmptyWords(words, text) {
    //let wordsArray = words.split(', ');
    let prevSymbol = "";
    let startIndex = 0;
    let result = text;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "_" && prevSymbol !== "_") {
            startIndex = i;
        }

        if (prevSymbol === "_" && text[i] !== "_") {
            let word = words.find(indexValue => indexValue.length === i - startIndex);
            words.splice(word, 1);
            result = result.replace("_".repeat(i - startIndex), word);

            startIndex = 0;
        }

        prevSymbol = text[i];
    }

    if (text[text.length - 1] === "_") {
        let i = text.length - 1;
        startIndex = 0;
        while (text[i] === "_") {
            i--;
        }

        let word = words.find(indexValue => indexValue.length === text.length - 1 - i);
        result = result.replace("_".repeat(text.length - 1 - i), word);
    }

    return result;
}

function solve(text, words) {
    let result = replaceEmptyWords(words, text);

    console.log(result);
}

solve(`Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation,
    so many _______ things happened. My dad bought me a sled. Mom
    started a new job as a __________. My brother's ankle is ________, and
    now it bothers me even more. Every night Mom cooks ___ on your recipe
    because it is the most delicious. I hope this year Santa will _____ me a
    robot`,
    ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"]);