let word = "HeLLo, wOrLd!";
let output = "";

for (let [i] of word) {
    if (i === i.toLowerCase()) {
        output += i.toUpperCase();
    } else {
        output += i.toLowerCase();
    }
}

console.log(output);