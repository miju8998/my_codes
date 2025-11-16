// function linearSearch(arr, searchValue) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === searchValue) {
//             return i;
//         }
//     }
//     // Hariv array iin ali ch element haij bui utgatai taarahgui bol:
//     return -1;
// }

// let arr = [64, 25, 12, 22, 11];

// console.log(linearSearch(arr, 22));


class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let arr = [];

arr.push(new Student("1", "Bataa"));
arr.push(new Student("2", "Boldoo")); 
arr.push(new Student("3", "Bayraa")); 
arr.push(new Student("4", "Sainaa")); 

function linearSearchById(arr, searchValue) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === searchValue) {
            return i; 
        }
    }
    return -1; // herev id oldohgui bol
}

const studentIndex = linearSearchById(arr, "3");

// Index oldson bol hevleh
console.log(arr[studentIndex]);
