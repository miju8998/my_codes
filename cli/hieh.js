var prompt = require('prompt-sync')();
{
    var a, b;

    console.log('2 toonii HIEH oloh');
    a = prompt('ehnii toogoo oruulna uu!');
    b = prompt('2 dahi toogoo oruulna uu!');
    while (!(b == 0)) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    console.log(a);
}