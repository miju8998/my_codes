const graph = {
    0: [1, 2],
    1: [3, 4], 
    2: [5, 6],
    3: [7, 8], 
    4: [],
    5: [],
    6: [], 
};

function bfs(start, target) {
    let check = []; // Ali hediin shalgasan zangilaanuudiig hadgalah array
    let queue = []; // Odoo shalgagdaj bui zangilaanuudiin daraalal
    let parent = []; // Zangilaa buriin etsgiig hadgalah array

    // Ehleh zangilaag daraalald nemeh
    queue.push(start);
    check.push(start); // Shalgasan jagsaaltand ehleh zangilaag nemeh
    parent[start] = null; //Ehleh zangilaand etseg baihgui
    console.log("root:" + start); // Ehnii zangilaag hevleh

    // Daraalal hooson bish bol urgeljluulen ajillana
    while (queue.length > 0) {
        let current = queue.shift(); // Daraalliin ehnii zangilaag avna
        console.log("Шалгаж буй зангилаа:" + current); // Odoogiin shalgaj bui zangilaag hevleh

        // Herev odoogiin zangilaa haij bui elementtei taarval
        if (current === target) {
            console.log("Хайж буй элементийн эцэг ба үндсэн зангилаа:" + parent[target]);
            console.log("Хайж буй утга:" + target); // Haij bui elementiig olsniig hevleh
            return true; // olson bol true butsaana
        }

        // Odoogiin zangilaanii hursh buriig shalgana
        for (let a of graph[current]) {
            if (!check.includes(a)) { // Herev hursh ni umnu shalgagdaagui bol
                check.push(a); // Shalgasan jagsaaltad nemeh
                queue.push(a); // Daraalald nemeh
                parent[a] = current; // Etsgiig ni odoogiin zangilaa gej temdegleh
                console.log(`Child: ${a} нэмэгдлээ. Parent: ${current}`); //Hurshuudiig hevleh
            }
        }
    }

    // Herev haij bui elementiig olj chadaagui bo
    console.log(target + " " + "гэсэн элемент олдсонгүй");
    return false; // Oldoogui bol false butsaana
}

const rootNode = 0; // Ehleh zangilaa
const searchElement = 4; // Haij bui element

bfs(rootNode, searchElement);
