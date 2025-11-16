// Graphiig object baidlaar todorhoilson
const graph = {
    0: [1, 2],
    1: [3, 4],
    2: [5, 6],
    3: [7, 8], 
    4: [],   
    5: [], 
    6: [],   
};
// hursh = zeregtsee baigaag
function dfs(start, target) {
    let check = [];  // Ali hediin shalgasang hadgalna
    let stack = [];  // gunii hailtad ashiglah stack
    let parent = []; // Etsgiig hadgalah array

    stack.push(start);      // Ehleh zangilaag stack ruu nemne
    check.push(start);      // Shalgasan zangilaand ehleh zangilaag nemne
    parent[start] = null;   // Root zangilaanii etseg baihgui bolhoor null
    console.log("root:" + start); // Root zangilaag hevlene

    while (stack.length > 0) { //stack hooson bish bol gunii hailt urgeljlene
        let current = stack.pop(); // Stack-s hamgiin suuld nemegdsen zangilaag gargaj avna
        console.log("Shalgaj bui zangilaa:" + current); // Odoogiin shalgaj bui zangilaag hevlene

        if (current === target) { // Herev odoogiin zangilaa zoriltot elementtei taarval
            console.log("Targetiin parent ba rootiin child:" + parent[target]); 
            //Zoriltot zangilaanii etseg ba undes zangilaanii huuhdiig hevlene
            console.log("SearchValue:" + target); // Zoriltot utgiig hevlene
            return true; // hailt amjilttai duusna
        }

        // Odoogiin zangilaanii hurshuudiig shalgana
        for (let a of graph[current]) {
            if (!check.includes(a)) { //Herev  hursh ni shalgagdaagui bol
                check.push(a);        // Shalgasan jagsaaltad hurshiig nemne
                stack.push(a);        // Stack ruu hurshiig nemne
                parent[a] = current;  // Hurshiin etseg ni odoogiin zangilaa
                console.log(`Child: ${a} nemegdlee. Parent: ${current}`);
                // Hursh nemegdsen tuhai bolon tuunii etsgiig hevlene
            }
        }
    }

    console.log(target + " " + "Gedeg element oldsongui"); // Zoriltot utga oldoogui bol
    return false; // Hailt butelguitne
}

const rootNode = 0;        // Ehleh zangilaa
const searchElement = 4;   // Haih element
dfs(rootNode, searchElement);
