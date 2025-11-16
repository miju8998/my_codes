function insertionSort(arr) 
{
    let i, key, j;
    // Massiviin element bolgon deer davtalt hiine, ehnii elementiig algasna
    for (i = 1; i < arr.length; i++) 
    {
        // Odoo shalgaj baigaa elementiig key-d hadgalna
        key = arr[i];
        // key-s umnuh elementiig j-eer temdeglene
        j = i - 1;

        // Odoo key elementees tom element baival key-iig zohih bairand ni oruulna
        while (j >= 0 && arr[j] > key) 
        {
            // Elementiig neg bair luu shiljuulne
            arr[j + 1] = arr[j];
            // j-g neg buuruulna
            j = j - 1;
        }
        // Key-g zuv bairluulna
        arr[j + 1] = key;
    }
}

let arr = [64, 25, 21, 34, 13];

console.log(arr);
console.time();
insertionSort(arr);
console.timeEnd();
console.log(arr);
