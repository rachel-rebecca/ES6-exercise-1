"use strict"

class Room {
    constructor(name, length, width, capacity = 15) {
        this.name = name;
        this.length = length;
        this.width = width;
        this.available = true;
        this.capacity =  capacity;
    }
    // methods

    getArea() {
        return this.length * this.width;
    }

    getPerimeter() {
        return (this.length * 2) + (this.width * 2);
    }
};

let room1 = new Room ("Sun", 30, 20);
let room2 = new Room ("Green", 15, 20, 18);

console.log("room 1's name: " + room1.name);
console.log("room 1's length: " + room1.length);
console.log("room 1's width: " + room1.width);
console.log("room 1's area: " + room1.getArea());
console.log("room 1's perimeter:  " + room1.getPerimeter());

console.log("room 2's name: " + room2.name);
console.log("room 2's length: " + room2.length);
console.log("room 2's width: " + room2.width);
console.log("room 2's area: " + room2.getArea());
console.log("room 2's perimeter: " + room2.getPerimeter());

room2.available = false;

console.log("room 1 is available: " + room1.available);
console.log("room 2 is available: " + room2.available);

console.log("room 1's capacity: ", room1.capacity);
console.log("room 2's capacity: ", room2.capacity);




