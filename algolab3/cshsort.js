function cocktailShakerSort(arr) {
    let start = 0; // Array-g ehneesee ehluulen shalgah
    let end = arr.length - 1; // Array-g suuleesee ehluulen shalgah
    let swapped = true; // Elementuud soligdson esehiig shalgah

    while (swapped) { // Soligdson ued l davtana
        swapped = false; // Soligdson esehiig dahin null bolgono

        // Uragsh ni
        for (let i = start; i < end; i++) {
            if (arr[i] > arr[i + 1]) { // Hervee odoogiin element ni daraagiin elementees ih bol
                // Elementuudee solih
                let temp = arr[i]; 
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true; // Soligdson tul swapped true bolgono
            }
        }

        // Hervee yu ch soligdoogui bol davtalt zogsoono
        if (!swapped) break;

        swapped = false; // Swapped-g dahin false bolgono
        end--; // Suuliin elementuudiig shalgah hereggui tul 1eer bagasgana

        // Hoishoo ni
        for (let i = end - 1; i >= start; i--) {
            if (arr[i] > arr[i + 1]) { // Hervee odoogiin element ni daraagiin elementees ih bol
                // Elementuudee solih
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true; // Soligdson tul swapped true bolgono
            }
        }

        start++; // Ehnii elementuudiig shalgah hereggui tul ehleliig uragshluulna
    }
}

let arr = [64, 25, 21, 34, 13];

console.log(arr);
console.time();
cocktailShakerSort(arr);
console.timeEnd();
console.log(arr);
