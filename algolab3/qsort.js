function partition(arr, low, high) {
    // Pivot elementiig songono, ene ni array-n suuliin element baina
    let pivot = arr[high];
    // Pivot elementees baga utguudiig oruulah index-iig beldeh
    let i = low - 1;

    // Array-n ehleliin hesgees (low) suuliin (high - 1) heseg hurtel toiruulna
    for (let j = low; j <= high - 1; j++) {
        // Utga pivot-s baga esehiig shalgana
        if (arr[j] < pivot) {
            i++; //utgiig bairluulah index-iig ahiulna
            // arr[i] bolon arr[j]-g solij bairluulna
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // Pivot-iig tuhain bairlald bairluulna
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    // Pivot-iin shine bairlaliin index-iig butsaana
    return i + 1;
}

function quickSort(arr, low, high) {
    // Array ni 1-s deesh elementtei bol toiruulalt hiine
    if (low < high) {
        // Partition function-r pivot bairlaliig todorhoilno
        let pi = partition(arr, low, high);

        // Pivot-iin baruun, zuun taliin hesgiig tus tusad ni quicksort hiine
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

let arr = [64, 25, 21, 34, 13];

console.log(arr);
console.time();
quickSort(arr, 0, arr.length - 1);
console.timeEnd();
console.log(arr);