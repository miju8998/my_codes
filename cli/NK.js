var prompt = require('prompt-sync')(); 

console.log('oruulsan 5n toonoos 8t uldegdelgui huvaagdah too hed baigaag oloh!')
var array = [];
var N = 5;
var count = 0;
for(var i=0; i<N; i++){
    array[i] = prompt('toogoo oruulna uu!: ');
}
for(var i=0; i<N; i++){
    if(array[i] %8==0 ){
        count++
    }
}
console.log(count)