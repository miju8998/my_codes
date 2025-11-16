function davhardsanutguudiigarilgah(array) {
    var a = array; // a-d array iin utguudiig damjuulah
    for(var i=0; i<a.length; ++i) { // array iin buh elementiig index eer ni shalgana 
        for(var j=i+1; j<a.length; ++j) { // array iin i-iin daraachiin index [j] ees ehelj shalgana
            if(a[i] === a[j]) // loop d  [i] index deerh element [j] index deerh elementuud ijil baival davhardsan
                a.splice(j--, 1); // splice function-r [j] index deerh davhardsan elementiig hasna, element hasagdsanii daraa   
        }                         // array iin urt bagasaj baigaa uchir j-- gej daraagiin elementiig algasahaas sergiilne
    }

    return a; // function duusaj davhardsan utga arilsan 'a' array iig butsaana
}

var array1 = [3, 4, 5];
var array2 = [4, 9, 12, 15];
var array3 = davhardsanutguudiigarilgah(array1.concat(array2)); //concat ashiglaj 2 array iig niiluulne

console.log(array3)