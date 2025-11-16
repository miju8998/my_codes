// Garnaas utga oruulah:
let arr = [
    "javascript",
    "is",
    "programming",
    "language",
];

//Oruulsan string-n urtiig busad buh string tei haritsuulna, 
//busad buh string ees urt baival butsna:
function longestString() {
    let longestString = ""; // hamgiin urt ugiig hadgalah zoriulalttai, hooson ehlej bna
    for (let i = 0; i < arr.length; i++) {
        if (
            typeof arr[i] === "string" && // arr element string esehiig shalgana, string bol urgeljlene
            arr[i].length > longestString.length //longestString ees urt esehiig shalgana
        ) {
            longestString = arr[i]; //longestString ees urt baival longestString-d hadgalna
        }
    }
    return longestString; // davtalt duussanii daraa hamgiin urt string iig butsaana
}

console.log(longestString());