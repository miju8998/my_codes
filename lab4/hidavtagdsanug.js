function hiDavtagsanUg(text) {
        // text iig zaigaar salgaj array bolgono
        let words = text.split(" ");
        
        // davtagdsan ugsiig hadgalah object
        let wordCount = {};
        
        // array dotroo davtagdsan ugiig toolno
        for (let i = 0; i < words.length; i++) {
            let word = words[i].toLowerCase(); // ugiig jijig bolgoj bugd adilhan jijig bolno
            // ugsiin toog nemne
            if (wordCount[word]) {
                wordCount[word]++;
            } else {
                wordCount[word] = 1; // shine ug bol 1 gej toolno
            }
        }
        
        // hamgiin olon udaa davtagsan ugiig oloh
        let maxCount = 0;
        let mostFrequent = "";
        
        for (let word in wordCount) {
            if (wordCount[word] > maxCount) {
                maxCount = wordCount[word];
                mostFrequent = word; // hamgiin olon udaa davtagsan ugiig shinechlene
            }
        }
        console.log(maxCount)
        return mostFrequent; // hariug butsaana
    }
    
    let text = "The first computer virus was a computer worm. It was a selfreplicating virus and displays the message like 'I am the creeper catch me if you can' in  earky 1970's";
    console.log(hiDavtagsanUg(text));
    
    