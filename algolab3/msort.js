function merge(arr, l, m, r) {
    // n1 bolon n2-oor hoer huvaagdsan array-n urtiig tootsoh
    var n1 = m - l + 1; // n1 = zuun khesgiin array-n urt
    var n2 = r - m; // n2 = baruun khesgiin array-n urt

    // Shine arrayuud uusgeh
    var L = new Array(n1); // Zuun khesgiin array
    var R = new Array(n2); // Baruun khesgiin array

    // Zuun khesgiin array-n utguudiig huulbarlah
    for (var i = 0; i < n1; i++) {
        L[i] = arr[l + i]; // L array-d undsen array-n zuun khesgiig khadgalna
    }

    // Baruun hesgiin array-n utguudiig huulbarlah
    for (var j = 0; j < n2; j++) {
        R[j] = arr[m + 1 + j]; // R array-d undsen array-n baruun hesgiig hadgalna
    }

    // Haritsuulalt hiih indexuudiig ehleh
    var i = 0; // Zuun hesgiin array-n ehlel
    var j = 0; // Baruun hesgiin array-n ehlel
    var k = l; // Undsen array-n ehlel

    // Zuun bolon baruun arrayuudiin utgiig haritsuulan undsen array-d oruulah
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) { // Herev zuun array-n odoogiin element baga bol
            arr[k] = L[i]; // Undsen array-d zuun array-n utgiig oruulna
            i++; // Zuun array-n index nemegduuleh
        } else { // Herev baruun array-n odoogiin element baga bol
            arr[k] = R[j]; // Undsen array-d baruun array-n utgiig oruulna
            j++; // Baruun array-n index nemegduuleh
        }
        k++; // Undsen array-n index nemegduuleh
    }

    // Zuun array-n uldegdel utguudiig oruulah
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Baruun array-n uldegdel utguudiig oruulah
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, l, r) {
    // Herev massiv gantshan elementtei bol dahin huvaah shaardlagagui
    if (l >= r) {
        return;
    }

    // Array-g hoyr huvaan dundah utgiig oloh
    var m = l + parseInt((r - l) / 2); // m = dundah index

    // Zuun hesgiig dahin huvaah
    mergeSort(arr, l, m);

    // Baruun hesgiig dahin huvaah
    mergeSort(arr, m + 1, r);

    // Hoyr huvaagdsan array-g negtgeh
    merge(arr, l, m, r);
}

let arr = [64, 25, 21, 34, 13];

console.log(arr);
console.time();
mergeSort(arr, 0, arr.length - 1);
console.timeEnd();
console.log(arr);
