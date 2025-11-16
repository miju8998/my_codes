function swap(arr, xp, yp)
{
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

// selectionSort function ni array-g bagaas ih ruu erembleh zoriulaltai
function selectionSort(arr, n)
{
    n = arr.length; // array-iin urtiig n-d hadgalna
    let i, j, min_idx; // davtaltad heregleh huvisagchuud bolon hamgiin baga elementiig iltgeh min_idx-g zarlana

    // buh elementiig shalgaad eremblene
    for (i = 0; i < n-1; i++)
    {
        min_idx = i; // min_idx-g i-r tavigdah elementeer taviad ehluulne

        // min_idx-g i-s hoishh elementuudees shalgan oloh
        for (j = i + 1; j < n; j++)
          if (arr[j] < arr[min_idx]) { // hervee arr[j] ni min_idx-iin elementees baga bol
            min_idx = j; // min_idx-g shineer j ruu bolgono
          }

        // Hamgiin baga elementiig odoo bairlah i-toi solino
        swap(arr, min_idx, i);
    }        
}

let arr = [64, 25, 21, 34, 13];

console.log(arr);
console.time();
selectionSort(arr);
console.timeEnd();
console.log(arr);