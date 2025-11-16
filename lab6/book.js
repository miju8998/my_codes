class Book {
    constructor(name, authorName, publishedDate, quantity, genre, price) {
        this.name = name;
        this.author = authorName;
        this.pdate = publishedDate;
        this.quantity = quantity;
        this.genre = genre;
        this.price = price;
    }

    bookInfo() {
        console.log(`nomiin ner: ${this.name}`);
        console.log(`nomiin zohiogch: ${this.author}`);
        console.log(`anh garsan ognoo: ${this.pdate}`);
        console.log(`uldsen too shirheg: ${this.quantity}`);
        console.log(`genre: ${this.genre}`);
        console.log(`une: ${this.price}`);
    }

    changeBookName(newBookName) {
        this.name = newBookName;
        console.log(`${this.name} nomiig ${this.name} nertei bolgoj uurchilluu.
        `)};

    changeAuthor(newAuthor) {
        this.author = newAuthor;            
        console.log(`${this.name} nomiin zohiolchiig ${this.author} bolgoj uurchilluu.
        `)};
    
    changePdate(newPdate) {
        this.pdate = newPdate;            
        console.log(`${this.name} nomiin garsan ognoog ${this.Pdate} bolgoj uurchilluu.
        `)};

    changeQuantity(newQuantity) {
        this.quantity = newQuantity;            
        console.log(`${this.name} iin uldsen too shirheg ${this.quantity} shirheg uldlee.
        `)};

    changeGenre(newGenre) {
        this.genre = newGenre;            
        console.log(`${this.name} nomiin genre ${this.genre} genre tai bolj uurchligdluu.
        `)};

    changePrice(newPrice) {
        this.price = newPrice;            
        console.log(`${this.name} nomiin uniig ${this.price} bolj uurchligdluu.
        `)};
    }

let book1 = new Book("Norwegian Wood", "Haruki Murakami", 1987, 15, "Romance", 23000)
book1.bookInfo();
book1.changeBookName("Tomie");
book1.changeAuthor("Junji Ito");
book1.changePdate(1997);
book1.changeQuantity(23);
book1.changeGenre("Horror fiction");
book1.changePrice(12500);
book1.bookInfo();