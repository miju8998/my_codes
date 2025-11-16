function swap(n) {
    if (n.toString().length % 2 != 0) { //toog string bolgood urtiig ni 
        return false;                   //2d huvaahad 0 tentsuu bish bol false
    }
    var result = 0, //result = 0, x = 1 gej zarlana
        x = 1;      //
    while (n != 0) {
        var dg1 = n % 10,
            dg2 = ((n - dg1) / 10) % 10;
        result += x * (10 * dg1 + dg2);
        n = Math.floor(n / 100);
        x *= 100;
    }
    return result;
}

console.log(swap(32));  
console.log(swap(2837));  
console.log(swap(98174));  
console.log(swap(849320)); 