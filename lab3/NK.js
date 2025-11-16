var prompt = require('prompt-sync')(); 

console.log('oruulsan 5n toonoos k toond uldegdelgui huvaagdah too hed baigaag oloh!')
var array = [];
var N = 5;
var K = prompt('k toogoo oruulna uu!')
var count = 0;
for(var i=0; i<N; i++){
    array[i] = prompt('toogoo oruulna uu!: ');
}
for(var i=0; i<N; i++){
    if(array[i] %K==0 ){
        count++
    }
}
console.log(count)