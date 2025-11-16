class ArrayList { 
  constructor() { 
    this.items = new Array(100); 
    this.size = 0; // Arraylistiin hemjeeg 0-eer ehluuleh
  }

  get(index) { 
    if (index < 0 || index >= this.size) { 
    Error; 
    }
    return this.items[index]; // index deerh elementiig butsаah
  }
    
  insert(index, item) {
    if (index < 0 || index > this.size) { 
    throw new Error ("Bad index");
    }
    for (let i = this.size; i > index; i--) { 
        this.items[i] = this.items[i - 1]; //elementiig tsegtslej baina
    }
    this.items[index] = item; // shalgaltand oroltsnuudiig index deer nemj baina
    this.size++; // listiin hemjeeg 1 eer nemne
  }
    
  delete(index) {
    if (index < 0 || index >= this.size) { 
    throw new Error ("Bad index"); 
    }
    for (let i = index; i < this.size - 1; i++) { 
        this.items[i] = this.items[i + 1]; // elementiig tsegtslej baina
    }
    
    this.items[this.size - 1] = null;
    this.size--; // size-g 1eer buuruulna
  }
    
  getSize() {
    return this.size; // listiin hemjeeg butsaana
  }
  
  print() {
    process.stdout.write('Arr=[');
    for(let i = 0; i < this.size; i++) {
     process.stdout.write(this.arr[i] + ",")
    }
    console.log("]");
  }
}

const list = new ArrayList();
list.insert(0, 'Bat');
list.insert(1, 'Bold');
list.insert(1, 'Dorj');
console.log(list.get(1));
list.delete(1);
console.log(list.get(1));
console.log(list.getSize());