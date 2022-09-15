
class WoodenDoor {
   constructor(width, height) {
      this.width = width;
      this.height = height;
   }

   getWidth() {
      return this.width;
   }

   getHeight() {
      return this.height;
   }
}

const DoorFactory = {
   makeDoor: (width, height) => new WoodenDoor(width, height)
};

const door = DoorFactory.makeDoor(100, 300);
console.log(`Width: ${door.getWidth()}`);
console.log(`Height: ${door.getHeight()}`);