//Counting Orcs

function solve(n, m, h) {
    let fightOrcs = 0;

    for (let i = 0; i < h; i++) {
        fightOrcs += n;
        n += m;
    }

    console.log(fightOrcs);
}

solve(5, 2, 3);
solve(7, 1, 2);
solve(10, -1, 1);
solve(8, -2, 3);
solve(5, 3, 5);