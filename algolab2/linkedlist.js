class Node {
    constructor(value) {
       // Node classiin baiguulagch function: tuhain noded hadgalah utga bolon daraagiin node-n holboosiig todorhoilno
       this.value = value; // node iin utga
       this.next = null; // daraagiin node iin holboosiig ehend ni null bolgono
    }
}

class LinkedList {
    constructor() {
        // LinkedList class iin b/function: listiig udirdah tolgoi node bolon list iin hemjeeg todorhoilno
        this.head = null; // list iin ehlel ni ehendee hooson baina
        this.size = 0; // list iin hemjee ehendee 0 baina
    }
    
    get(index) {
        // List iin todorhoi index iin utgiig avah function
        if (index < 0 || index >= this.size) {
            // herev index buruu bol aldaa
            throw new Error('bad index');
        }
        
        let current = this.head; // odoogiin node iig tolgoigoos ehluulne 
        let i = 0; // index iig 0 gej
        while (i < index) {
            // zorison index hurtel daraagiin node ruu shiljine
            current = current.next;
            i++;
        }
        return current.value; // zorison node nii utgiig butsaana
    }

    insert(index, value) {
        // list-d shine node nemeh function
        if (index < 0 || index > this.size) {
            // index buruu bol error
            throw new Error('bad index');
        }
        
        const newNode = new Node(value); // shine node uusgene
        
        if (index === 0) {
            // herev ehend nemeh bol
            newNode.next = this.head; // shine node iin daraagiin holboosiig odoogiin head ruu zaana
            this.head = newNode; // shine node iig head bolgono
        } else {
            // else: hussen bairshlaas negiin umnuh node ruu ochno
            let current = this.head; 
            let i = 0;
            while (i < index - 1) {
                current = current.next; // daraagiin node ruu shiljine
                i++;
            }
            newNode.next = current.next; // Shine node nii holboosiig umnuh nodenii daraagiin node ruu zaana
            current.next = newNode; // Umnuh node nii daraagiin holboosiig shine node ruu zaana
        }
        
        this.size++; 
    }

    delete(index) {
        // list ees node ustgah function
        if (index < 0 || index >= this.size) {
            // Herev index buruu bol aldaa
            throw new Error('bad index');
        }

        if (index === 0) {
            // Herev head ustgah bol
            this.head = this.head.next; // Tolgoig daraagiin node ruu shiljuulne
        } else {
            // else: hussen bairshlaas negiin umnuh node ruu ochno
            let current = this.head;
            let i = 0;
            while (i < index - 1) {
                current = current.next;
                i++;
            }
            current.next = current.next.next; // zorison node iig algasan holboog shinechlene
        }

        this.size--;
    }

    getSize() {
        // listiin hemjeeg avah
        return this.size;
    }
}

const list = new LinkedList();
list.insert(0, 'Bat');
console.log(list);
list.insert(1, 'Bold');
console.log(list);
console.log(list.get(1));
console.log(list.getSize());
