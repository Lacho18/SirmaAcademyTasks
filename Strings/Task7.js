//Substring

function solve(word, text) {
    let regex = new RegExp(`/${word}/`, 'i');

    if (regex.test(text)) {
        console.log(word);
    }
    else {
        console.log(word + " not found!");
    }
}

solve("javascript", "JavaScript is the best programming language");