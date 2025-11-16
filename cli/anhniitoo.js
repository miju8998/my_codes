var prompt = require('prompt-sync')(); {
    var a, b, i;

    console.log("too anhnii too mun esehiig oloh");
    a = prompt('toogoo oruulna uu!');
    if (a == 1) {
        console.log('anhnii too bish')
    } else {
    b = 0;
    for (i = a - 1; i >= 2; i--) {
        if (a % i == 0) {
            b = 1;
        }
    }
    if (b == 1) {
        console.log("too anhnii too bish");
    } else {
        console.log("too anhnii too mun");
    }
}}