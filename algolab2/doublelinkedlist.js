class Node {
    constructor(value) {
        this.value = value; // Node iin utga
        this.prev = null; // Umnuh elementiig zaah
        this.next = null; // Daraagiin elementiig zaah
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null; // Listiin ehnii element
        this.tail = null; // Listiin suuliin element
        this.size = 0;    // Listiin elementuudin too
    }

    get(index) {
        if (index < 0 || index >= this.size) { // Hervee index buruu bol
            throw new Error('index buruu baina');
        }

        let current = this.head; // Ehnees ni ehelj elementuudiig shalgah
        let i = 0;
        while (i < index) {  // Index hurtel elementuudiig guih
            current = current.next;  // Daraagiin elementiig avah
            i++;
        }
        return current.value;  // Oldson elementiin utgiig butsaana
    }

    insert(index, value) {
        if (index < 0 || index > this.size) { // Index huleen zuvshuurugduhgui bol
            throw new Error('buruu index');
        }

        const newNode = new Node(value); // Shine element uusgene

        if (index === 0) { // Shine elementiig ehnii bairlal ruu nemj baigaa esehiig shalgana
            if (this.head === null) { // List hooson bol
                this.head = newNode;
                this.tail = newNode; // Ehnii bolon suuliin element adilhan bolno
            } else {
                newNode.next = this.head; // Shine elementiig ehend bairluulah
                this.head.prev = newNode; // Umnuh element shine elementiig zaana
                this.head = newNode;  // Ehnii elementiig shine element bolgoh
            }
        }
        else if (index === this.size) { // Shine elementiig suuliin bairlal ruu nemeh
            newNode.prev = this.tail; // Shine elementiig umnuh tail holboh
            if (this.tail) {
                this.tail.next = newNode; // Suuliin elementiig shine elementtei holboh
            }
            this.tail = newNode;  // Shine elementiig suuliin element bolgoh
        }
        else { // Dundaas nemeh bol
            let current = this.head; // Ehneesee haih
            let i = 0;
            while (i < index) { // Zuv bairlal hurtel elementuudiig guih
                current = current.next;
                i++;
            }
            newNode.prev = current.prev; // Shine elementiig umnuhtei holboh
            newNode.next = current;     // Shine elementiig daraahtei holboh
            if (current.prev) {
                current.prev.next = newNode; // Umnuh elementiig shine elementtei holboh
            }
            current.prev = newNode;     // Odoo elementiin umnuh shine element bolgoh
        }

        this.size++; // Listiin hemjeeg nemne
    }

    delete(index) {
        if (index < 0 || index >= this.size) { // Index zov eseh shalgah
            throw new Error('buruu index');
        }

        if (index === 0) { // Ehnii elementiig ustgah bol
            if (this.head === this.tail) { // Listad 1 l element bval
                this.head = this.tail = null; // List hoosloh
            } else {
                this.head = this.head.next; // Ehniig daraah element bolgoh
                this.head.prev = null; // Shine ehnii elementiin umnuh NULL bolgoh
            }
        }
        else if (index === this.size - 1) { // Suuliin elementiig ustgah
            this.tail = this.tail.prev; // Tail iig umnuh element bolgoh
            this.tail.next = null; // Shine suuliin elementiin daraah NULL bolgoh
        }
        else { // Dundaas ustgah bol
            let current = this.head; // Ehneesee haih
            let i = 0;
            while (i < index) { // Zuv bairlal hurtel guih
                current = current.next;
                i++;
            }
            current.prev.next = current.next; // Umnuh element daraah ruu zaana
            if (current.next) { // Daraah element baival
                current.next.prev = current.prev; // Daraah element umnuh ruu zaana
            }
        }

        this.size--; // Listiin hemjeeg hasah
    }

    getSize() {
        return this.size; // Listiin hemjeeg butsaana
    }

    print() {
        let current = this.head; // Ehneesee ehleh
        let result = '';

        while (current !== null) { // Buh elementuudiig damjih
            result += current.value; // Elementiin utgiig nemne
            if (current.next !== null) {
                result += ', '; // Daraagiin element baival taslal nemne
            }
            current = current.next; // Daraagiin ruu shiljih
        }

        console.log(result || 'list hooson baina'); // List hooson bol 'list hooson baina' gej haruulah
    }
}

const list = new DoubleLinkedList();
list.insert(0, 'Bat');
list.insert(1, 'Dorj');
list.insert(1, 'Suren');

console.log("listnii itemuud: ") 
list.print();

console.log(list.get(1));