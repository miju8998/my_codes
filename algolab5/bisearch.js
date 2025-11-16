function binarySearch(arr, l, r, x) {
    if (r >= l) {
        // "mid" ni array-n dund hesgiin elementiig tootsoolno.
        let mid = l + Math.floor((r - l) / 2);
        
        if (arr[mid] == x)
            return mid; //dundaj index iig butsaana
        
        if (arr[mid] > x)
            // Zuun hesgiin array-d hailtiig urgeljluulne.
            return binarySearch(arr, l, mid - 1, x);
        
        // deerh nuhtsul biylehgui bol baruun hesegt hailtiig urgeljluulne.
        return binarySearch(arr, mid + 1, r, x);
    }
    // Herev X oldohgui bol
    return -1;
}

let arr = [2, 3, 4, 10, 40];
let x = 10;
let n = arr.length;

// duudna
let result = binarySearch(arr, 0, n - 1, x);

(result == -1) 
    ? console.log("Элемент массивд байхгүй байна") 
    : console.log("Элемент массивын " + result + " дугаартай индекс дээр байна");
