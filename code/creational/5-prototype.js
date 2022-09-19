class Sheep {
   constructor(name, category = "Mountain Sheep") {
      this.name = name;
      this.category = category;
   }

   setName(name) {
      this.name = name;
   }

   getName() {
      console.log(this.name);
   }

   setCategory(category) {
      this.category = category;
   }

   getCategory() {
      console.log(this.category);
   }
}

class SheepPrototype {
   constructor(proto) {
      this.proto = proto;
   }

   clone() {
      return new Sheep(this.proto.name, this.proto.category);
   }
}

const originalSheep = new Sheep("Jolly");
originalSheep.getName();
originalSheep.getCategory();

const prototype = new SheepPrototype(originalSheep);
const clonedSheep = prototype.clone();
clonedSheep.setName("Dolly");
clonedSheep.getName();
clonedSheep.getCategory();