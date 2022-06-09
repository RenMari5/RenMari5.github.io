// JS doc
/**
 * @constructor
 * @param {string} name - the name of the room
 * @param {number} length - the length of the room
 * @param {number} width - the width of the room
 */

class Room {
  // you can add properties that are not in the constructor above it
  available = true;
  constructor(name, length, width, capacity = 15) {
    // setting the properties of the blueprint we are making
    // capacity is set as the default value
    this.name = name;
    this.length = length;
    this.width = width;
    this.capacity = capacity;
  }
  getArea() {
    return this.length * this.width;
  }
  getPerimeter() {
    return 2 * (this.length + this.width);
  }
}

const room1 = new Room("Sun", 30, 20);
const room2 = new Room("Green", 15, 20, 18);

room2.available = false; // written here because this is after the object has been created.
// Remember that class is a blueprint for the object

// room1
console.log(room1.name);
console.log(room1.length);
console.log(room1.width);
console.log(room1.available);
console.log(room1.capacity);
console.log(room1.getArea());
console.log(room1.getPerimeter());

// room2
console.log(room2.name);
console.log(room2.length);
console.log(room2.width);
console.log(room2.available);
console.log(room2.capacity);
console.log(room2.getArea());
console.log(room2.getPerimeter());
