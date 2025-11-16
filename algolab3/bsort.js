// function bubbleSort(arr) {
//     let i, j, temp;
//     let swapped = false;
//     for (i = 0; i < arr.length - 1; i++) {
//         swapped = false;
//         for (j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 swapped = true; // swapped= true bolgono, soliltsson gesen ug
//             }
//         }
//         if (swapped === false) {
//             break; // breaklej loop-oo duusgana
//         }
//     }
// }

// let arr = [64, 25, 21, 34, 13];

// console.log(arr);
// console.time();
// bubbleSort(arr);
// console.timeEnd();
// console.log(arr);


function swap(arr, xp, yp)
{
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
function bubbleSort(arr) 
{
    let i, j;
    let swapped = false;
    for (i = 0; i < arr.length - 1; i++) 
    {
        swapped = false;
        for (j = 0; j < arr.length - i - 1; j++) 
        {
                if (arr[j] > arr[j + 1]) 
                {
                        swap(arr, j, j + 1);
                        swapped = true;
                }
        }    
        if (swapped === false) {
                break;
        }
    }
}

let arr = [64, 25, 21, 34, 13];

console.log(arr);
console.time();
bubbleSort(arr);
console.timeEnd();
console.log(arr);