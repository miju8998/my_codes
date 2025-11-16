// Node angilal uusgene
class Node {
    constructor(value) {
        // Node-n utgiig hadgalah property
        this.value = value; // Node-n utga
        this.next = null;   // Daraagiin Node ruu zaah zaalt
    }
}

// Holbootoi jagsaalt (LinkedList) angilal
class LinkedList {
    constructor() {
        // Holbootoi jagsaaltiin ehnii Node
        this.head = null; // Ehnii Node
        // Holbootoi jagsaaltiin suuliin Node
        this.tail = null; // Suuliin Node
        // Jagsaaltiin hemjee (Node-n toog hadgalna)
        this.size = 0;    // Jagsaaltiin hemjee
    }

    // Todorhoi indexeer Node-g avah function
    get(index) {
        // Hervee index buruu bol aldaa zarlana
        if (index < 0 || index >= this.size) {
            throw new Error('buruu index'); // Aldaatai index
        }

        // Jagsaaltiin ehnees ehlej tootsolt hiine
        let current = this.head; // Ehnii Node-s ehleh
        let i = 0; // Toocooliin ehelbel
        while (i < index) { // Zorih index hurtel yavah
            current = current.next; // Daraagiin Node ruu shiljih
            i++;
        }
        return current;  // Zorih Node-g butsaah
    }

    // Todorhoi bairlal deer Node nemj oruulah function
    insert(index, value) {
        // Buruu index bol aldaa zarlana
        if (index < 0 || index > this.size) {
            throw new Error('buruu index'); // Aldaatai index
        }

        // Shine Node uusgene
        const newNode = new Node(value); // Shine utgatai Node

        if (index === 0) {  // Ehleed oruulah uy
            newNode.next = this.head; // Shine Node ehnii Node ruu zaana
            this.head = newNode;      // Shine Node-g eh bolgono
            if (!this.tail) {
                this.tail = newNode; // Holbootoi jagsaaltiin suul bol
            }
        } else if (index === this.size) {  // Suuld oruulah uy
            if (this.tail) {
                this.tail.next = newNode; // Suuliin Node ruu shine Node zaana
            }
            this.tail = newNode; // Shine Node-g suul bolgono
        } else {  // Dund bairlal deer oruulah uy
            let current = this.head; // Ehneesee ehlej bairlal ruu shiljine
            let i = 0;
            while (i < index - 1) { // Zorih index-iin umnuh Node-g oloh
                current = current.next;
                i++;
            }
            newNode.next = current.next; // Shine Node daraagiin Node-g zaana
            current.next = newNode; // Umnuh Node shine Node-g zaana
        }

        this.size++; // Jagsaaltiin hemjee nemegdene
    }

    // Todorhoi indexeer Node ustgah function
    delete(index) {
        // Buruu index bol aldaa zarlana
        if (index < 0 || index >= this.size) {
            throw new Error('buruu index'); // Aldaatai index
        }

        if (index === 0) { // Ehnii Node-g ustgah
            this.head = this.head.next; // Ehnii Node daraagiin Node-g zaana
            if (!this.head) {
                this.tail = null; // Hoorond ni Node bhgui bol suuliig null bolgono
            }
        } else { // Dund esvel suul hesgiin Node-g ustgah
            let current = this.head; // Ehneesee ehlej bairlal ruu shiljine
            let i = 0;
            while (i < index - 1) { // Zorih index-iin umnuh Node-g oloh
                current = current.next;
                i++;
            }
            current.next = current.next ? current.next.next : null; // Daraagiin Node-g zaana
            if (index === this.size - 1) {
                this.tail = current; // Suuliin Node-g shinechleh
            }
        }

        this.size--; // Jagsaaltiin hemjee bagasah
    }

    // Jagsaaltiin hemjee butsaah function
    getSize() {
        return this.size; // Jagsaaltiin hemjee butsaah
    }
}

// Stack angilal
class Stack {
    constructor() {
        this.list = new LinkedList(); // Stack LinkedList ashiglaj uusgene
        this.top = -1;               // Top-g ehend hooson gej tootsno
    }

    // Stack-iin deed hesgiin utga butsaana
    getTop() {
        if (this.top < 0) {
            return new Error('Stack hooson baina'); // Hooson Stack
        }
        return this.list.get(this.top).value; // Deed utga butsaah
    }

    // Stack-d shine element nemj oruulah
    push(item) {
        this.top++;                  // Top-g nemegduulne
        this.list.insert(this.top, item); // Element-g Stack ruu hiine
    }

    // Stack-s element gargah
    pop() {
        if (this.top < 0) {
            return new Error('Stack hooson baina'); // Hooson Stack
        }
        
        const poppedItem = this.list.get(this.top).value; // Deed utga avah
        this.list.delete(this.top); // Deed elementiig ustgah
        this.top--;                 // Top-g buuruulna
        return poppedItem;          // Gargasan elementiig butsaana
    }

    // Stack-iin hemjee butsaana
    getSize() {
        return this.list.getSize(); // Jagsaaltiin hemjeegeer Stack-iin hemjee oloh
    }
}

// Stack uusgeed shalgah
const stack = new Stack();
stack.push('Harry Potter'); // Harry Potter-g Stack-d oruulah
stack.push('Tomie');        // Tomie-g Stack-d oruulah
stack.push('Norwegiin oi'); // Norwegiin oi-g Stack-d oruulah

console.log(stack.getTop());    // Deed element harah
console.log(stack.pop());       // Deed elementiig gargah
console.log(stack.getTop());    // Shinechlegdsen deediig harah
console.log(stack.getSize());   // Stack-iin hemjeeg harah