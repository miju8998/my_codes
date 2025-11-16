var prompt = require('prompt-sync')(); 

var array = [];
var N = 5;
var count = 0;
for(var i=0; i<N; i++){
    array[i] = prompt('Enter a value: ');
}
for(var i=0; i<N; i++){
    if(array[i] > 9999 && array[i] < 100000){
        count++
    }
}
console.log(count)