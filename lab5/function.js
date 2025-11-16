const prompt = require('prompt-sync')();

function swapLetter(word){
    let convertedWord = ''
    
    for (var i = 0; i < word.length; i++) {
        if (word[i] === word[i].toLowerCase()) {
          convertedWord += word[i].toUpperCase();
        } else {
          convertedWord += word[i].toLowerCase();
        }
      }
      return convertedWord;
}

var input = prompt('Ug ee oruulna uu: ');
var func = swapLetter(input);
console.log(func);

