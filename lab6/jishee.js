class Room {
    constructor(roomNumber, roomSize, price) {
        this.roomNumber = roomNumber;
        this.roomSize = roomSize;
        this.price = price;
    }

    roomInfo() {
        console.log(`Uruunii dugaar: ${this.roomNumber}`);
        console.log(`Uruunii hemjee: ${this.roomSize}`);
        console.log(`Uruunii une: ${this.price}`);
    }

    changeRoomSize(newSize) {
        this.roomSize = newSize;
        console.log(`${this.roomNumber}-r uruunii hemjee ${this.roomSize} bolj uurchlugdluu.
        `);
    }
}

let room1 = new Room("101", "Tom", 150000)
let room2 = new Room("205", "Dund", 100000)

room1.roomInfo();
room1.changeRoomSize('Jijig');
room1.roomInfo();

//room2.roomInfo();
//room2.changeRoomSize('Tom');
//room2.roomInfo();
