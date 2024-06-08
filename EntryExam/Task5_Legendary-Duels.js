//Legendary Duels

function solve(input) {
    let array = [];

    const matchingPairs = {
        ')': '(',
        '}': '{'
    };


    for (let item of input) {
        if (item === '(' || item === '{') {
            array.push(item);
        } else if (item === ')' || item === '}') {
            if (array.length === 0 || array[array.length - 1] !== matchingPairs[item]) {
                console.log("Not Legendary");
                return;
            }
            array.pop();
        } else if (item === '!') {
            if (array.length > 0 && array[array.length - 1] === '!') {
                array.pop();
            } else {
                array.push(item);
            }
        }
    }

    if (array.length === 0) {
        console.log("Legendary");
    }
    else {
        console.log("Not Legendary");
    }
}

solve("()()(()())");
solve("((!!)(({!!})))");
solve("((())");
solve("({(!!}))");
solve("((())");
solve("{!}!");
