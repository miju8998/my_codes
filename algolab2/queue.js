// Node class ni holbootoi jagsaaltiin node-iig uusgeh zoriulalttai.
// value parametriig node-iin utga bolgoj, next hesgiig hooson utgaar ehelne.
class Node {
    constructor(value) {
        this.value = value; // Node-iin utga
        this.next = null;   // Daraagiin node-iin referenciig hadgalna (ehleed null baina)
    }
}

// LinkedList class ni holboost jagsaaltiin butets bolon uil ajillagaag todorhoilno.
class LinkedList {
    constructor() {
        this.head = null; // Holboost jagsaaltiin ehleliig zaana
        this.tail = null; // Holboost jagsaaltiin tugsguliig zaana
        this.size = 0;    // Jagsaaltiin odoogiin urtiig hadgalna
    }

    // get() function ni todorhoi index deerh node-iig olj avna.
    get(index) {
        // Hergeldeggui index oruulsan bol aldaa hevlene.
        if (index < 0 || index >= this.size) {
            throw new Error('bad index');
        }

        let current = this.head; // Ehnii node-oos ehelne.
        let i = 0;               // Indexiig toolno.
        while (i < index) {      // Husnegtluuleh index hurtel yavna.
            current = current.next; // Daraagiin node ruu shiljine.
            i++;
        }
        return current; // Uchir ni 'current' husnegtluulegdseneer zaaj baina.
    }

    // insert() function ni todorhoi bairlal deer utga nemne.
    insert(index, value) {
        // Zuvshuurugduhgui index oruulsan bol aldaa hevlene.
        if (index < 0 || index > this.size) {
            throw new Error('bad index');
        }

        const newNode = new Node(value); // Shine node uusgene.

        if (index === 0) { // Jagsaaltin ehend nemeh tohioldold
            newNode.next = this.head; // Shine node-oos hoishih node-iig zaana.
            this.head = newNode;      // Shine node-iig tolgoi bolgoj zaana.
            if (!this.tail) {         // Jagsaalt hooson baisan bol
                this.tail = newNode;  // Shine node ni tugsgul bolno.
            }
        } else if (index === this.size) { // Tugsguld nemeh tohioldold
            if (this.tail) {             // Odoo baigaa tugsgul deer shine node holboh
                this.tail.next = newNode;
            }
            this.tail = newNode;         // Shine node-iig tugsgul bolgono.
        } else { // Dund bairlal deer nemeh tohioldold
            let current = this.head; // Tolgoos ehelne.
            let i = 0;               // Indexiig toolno.
            while (i < index - 1) {  // Odoo bgaa bairlaliig oloh
                current = current.next;
                i++;
            }
            newNode.next = current.next; // Shine node-iig odoo bgaa node ruu holboh
            current.next = newNode;     // Urd node-oos shine node ruu holboh
        }

        this.size++; // Jagsaaltin hemjeeg nemne.
    }

    // delete() function ni todorhoi index deerh node-iig ustgana.
    delete(index) {
        // Zuvshuurugduhgui index oruulsan bol aldaa hevlene.
        if (index < 0 || index >= this.size) {
            throw new Error('bad index');
        }

        if (index === 0) { // Tolgoi node-iig ustgah tohioldold
            this.head = this.head.next; // Tolgoi node-iig daraagiin node bolgono.
            if (!this.head) {          // Hooson bolson bol tail-iig null bolgono.
                this.tail = null;
            }
        } else { // Dund bolon tugsguld ustgah tohioldold
            let current = this.head; // Tolgoigoos ehelne.
            let i = 0;               // Index toolno.
            while (i < index - 1) {  // Uridah node-iig oloh
                current = current.next;
                i++;
            }
            current.next = current.next ? current.next.next : null; // Node-ig alga bolgono.
            if (index === this.size - 1) { // Tugsguliig ustgasan bol
                this.tail = current;      // Uridah node-iig tail bolgono.
            }
        }

        this.size--; // Jagsaaltin hemjeeg buuruulna.
    }

    // getSize() function ni jagsaaltin hemjeeg butsaana.
    getSize() {
        return this.size;
    }
}

// Queue class ni daraalaliin uil ajillagaag todorhoilno.
class Queue {
    constructor() {
        this.size = 0; // Daraalaliin odogiin hemjeeg hadgalna.
        this.list = new LinkedList(); // Holbootoi jagsaaltaar tailbarlana.
    }

    // get() function ni todorhoi index deerh utgiig butsaana.
    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('bad index');
        }
        return this.list.get(index).value; // LinkedList-iin node-iin utgiig avna.
    }

    // enqueue() function ni daraalald element nemne.
    enqueue(item) {
        this.list.insert(this.size, item); // Tugsguld nemne.
        this.size++; // Hemjeeg nemne.
    }

    // dequeue() function ni daraalaliin ehnees element ustgana.
    dequeue() {
        if (this.size === 0) { // Hooson bol aldaa hevlene.
            throw new Error('Queue hooson baina');
        }
        const item = this.list.get(0).value; // Ehend bgaa utgiig avna.
        this.list.delete(0); // Tolgoi element-iig ustgana.
        this.size--; // Hemjeeg buuruulna.
        return item; // Avsan utgiig butsaana.
    }

    // getSize() function ni daraalaliin hemjeeg butsaana.
    getSize() {
        return this.size;
    }

    // getHead() function ni daraalaliin ehnii elementiig butsaana.
    getHead() {
        if (this.size === 0) { // Hooson bol aldaa hevlene.
            throw new Error('Queue hooson');
        }
        return this.list.get(0).value; // Tolgoi node-iin utga
    }

    // getTail() function ni daraalaliin tugsguliin elementiig butsaana.
    getTail() {
        if (this.size === 0) { // Hooson bol aldaa hevlene.
            throw new Error('Queue hooson baina');
        }
        return this.list.get(this.size - 1).value; // Tugsguliin node-iin utga
    }

    // print() function ni daraalaliin buh elementuudiig hevlej haruulna.
    print() {
        if (this.size === 0) { // Hooson bol medegdel hevlej haruulna.
            console.log('Queue hooson baina');
            return;
        }

        let current = this.list.head; // Tolgoinoos ehelne.
        let result = '';              // Elementiig nemeh string uusgene.
        while (current !== null) {    // Buhel jagsaaltiig tuulna.
            result += current.value;  // Node-iin utgiig string ruu nemne.
            if (current.next !== null) {
                result += ', ';       // Elementuud hoorond taslal nemne.
            }
            current = current.next;   // Daraagiin node ruu shiljine.
        }

        console.log(result); // Elementuudiig hevlej haruulna.
    }
}

// Daraalaliin object uusgene.
const queue = new Queue();
queue.enqueue('Bat');
queue.enqueue('Bold');
queue.enqueue('Suren');

queue.print();

// queue.dequeue();
// queue.print();