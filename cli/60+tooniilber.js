{
console.log("60+ toonuudiig niilberiig oloh");
var a, b, c, d, e;
e = 0;
var prompt = require('prompt-sync')();

var a, b, c, d, e
var a = prompt('ehnii toog oruulna uu! ');
var b = prompt('2 dahi toog oruulna uu')
var c = prompt('3 dahi toog oruulna uu')
var d = prompt('4 dahi toog oruulna uu')
    if (a > 60) {
        e = a;
        if (b > 60) {
            e = a + b;
            if (c > 60) {
                e = a + b + c;
                if (d > 60) {
                    e = a + b + c + d;
                } else {
                    e = a + b + c;
                }
            } else {
                e = a + b;
                if (d > 60) {
                    e = a + b + d;
                } else {
                    e = a + b;
                }
            }
        } else {
            e = a;
            if (c > 60) {
                e = a + b;
                if (d > 60) {
                    e = a + b + d;
                } else {
                    e = a + b;
                }
            } else {
                e = a;
                if (d > 60) {
                    e = a + d;
                } else {
                    e = a;
                }
            }
        }
    } else {
        if (b > 60) {
            e = b;
            if (c > 60) {
                e = b + c;
                if (d > 60) {
                    e = b + c + d;
                } else {
                    e = b + c;
                }
            } else {
                e = b;
                if (d > 60) {
                    e = b + d;
                } else {
                    e = b;
                }
            }
        } else {
            if (c > 60) {
                e = c;
                if (d > 60) {
                    e = c + d;
                } else {
                    e = a + b;
                }
            } else {
                if (d > 60) {
                    e = d;
                } else {
                    e = 0;
                }
            }
        }
    }
    console.log(e);
}