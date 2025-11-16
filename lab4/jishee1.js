var word = "Hello, World!";
var count = 0;

var string = word.toLowerCase();
var egshig = 'aeiou';

for (var i = 0; i < string.length; i++) {
    if (egshig.includes(string[i])) {
        count++;
    }
}

console.log("Niit egshgiin too:", count);