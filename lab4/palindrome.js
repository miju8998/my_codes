function palindromeUg(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return 'palindrome ug bish';
        }
        j--;
    }
    return 'palindrome ug mun';
}

let word1 = "roder";
let word2 = "radar";

console.log('ehnii ug',palindromeUg(word1));
console.log('daraagiin ug',palindromeUg(word2));
