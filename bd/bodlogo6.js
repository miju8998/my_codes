const prompt = require('prompt-sync')();


let tooniiCount = prompt("Ta heden too oruulmaar bna ve? ");

// sondgoi bolon tegsh toog toologch
let oddCount = 0;
let evenCount = 0;


// User ees toonuud avah
for (let i = 0; i < tooniiCount; i++) { //User ees oruulj bui toonuudiig tooloh davtalt
    let number = parseInt(prompt(`Enter number ${i + 1}: `)); // User ees too oruulna

    if (number % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}


if (oddCount > evenCount) {
    console.log("YES");
} else { 
    console.log("NO");
}