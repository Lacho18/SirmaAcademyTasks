//#HashTag

function solve(input) {
    let regex = /#([a-z]+)/g;
    let result = input.matchAll(regex);

    for (let item of result) {
        console.log(item[1]);
    }
}

solve("The symbol # is known #variously in English-speaking #regions as the #number sign");