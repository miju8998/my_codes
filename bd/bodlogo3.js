const prompt = require('prompt-sync')();

// Heden suragch baigaag asuuh
let numStudents = parseInt(prompt("Heden suragch baigaa ve? "));

// oruulsan utga too bish esvel 1 ees baga bol code garna
if (isNaN(numStudents) || numStudents <= 0) {
    console.log("suragchdiin toog oruulna uu!");
} else {
    let badGradesCount = 0;

    // Suragch bolgonii dung asuuj davtalt hiine
    for (let i = 1; i <= numStudents; i++) {
        let grade = parseInt(prompt(`Suragchdiin dung oruulna uu! ${i}: `));

        //oruulsan utga too bish esvel 0-100 bish baival doorh textiig haruulah
        while (isNaN(grade) || grade < 0 || grade > 100) {
            console.log("0 ees 100iin hoorond dun oruulna uu! ");
            grade = parseInt(prompt(`Suragchdiin dung oruulna uu! ${i}: `));
        }

        // herev dun 60 aas baga baival muu dun ruu oruulah
        if (grade < 60) {
            badGradesCount++;
        }
    }

    console.log(`Muu duntei suragchdiin too(60 aas baga): ${badGradesCount}`);
}