class Monkey {
   shout() {
      console.log("Ooh oo aa aa!");
   }

   accept(operation) {
      operation.visitMonkey(this);
   }
}

class Lion {
   roar() {
      console.log("Roaaar!");
   }

   accept(operation) {
      operation.visitLion(this);
   }
}

class Dolphin {
   speak() {
      console.log("Tuut tuttu tuutt!");
   }

   accept(operation) {
      operation.visitDolphin(this);
   }
}

// add some functionality to all classes
const speak = {
   visitMonkey(monkey) {
      monkey.shout()
   },
   visitLion(lion) {
      lion.roar()
   },
   visitDolphin(dolphin) {
      dolphin.speak()
   }
};

const monkey = new Monkey();
const lion = new Lion();
const dolphin = new Dolphin();

monkey.accept(speak);
lion.accept(speak);
dolphin.accept(speak);

// add some functionality to all classes
const jump = {
   visitMonkey(monkey) {
      console.log("Jumped 20 feet high! on to the tree!")
   },
   visitLion(lion) {
      console.log("Jumped 7 feet! Back on the ground!")
   },
   visitDolphin(dolphin) {
      console.log("Walked on water a little and disappeared")
   }
};

monkey.accept(speak);
monkey.accept(jump);

lion.accept(speak);
lion.accept(jump);

dolphin.accept(speak);
dolphin.accept(jump);