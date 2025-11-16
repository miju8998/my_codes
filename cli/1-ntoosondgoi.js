var prompt = require('prompt-sync')();{
    var a, n;

    console.log("1-s n too hurtelh sondgoi toonuudiig haruulah");
    console.log("n toogoo oruulna uu");
    n = prompt('toogoo oruulna uu');
    for (a = 1; a <= n; a += 2) {
        console.log(a);
    }
}