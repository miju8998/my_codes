const prompt = require('prompt-sync')(); 

let number = parseInt(prompt("Toogoo oruulna uu! "));

number = (((number * (number + 1)) / 2)**2)

console.log(number)

