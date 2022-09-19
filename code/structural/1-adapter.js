/*
   Lion interface:

   roar()
*/

class AfricanLion {
   roar() {
      console.log("African lion roars.");
   }
}

class AsianLion {
   roar() {
      console.log("Asian lion roars.");
   }
}

class Hunter {
   hunt(lion) {
      // ... some code before
      lion.roar();
      // ... some code after
   }
}

// This needs to be added to the game
class WildDog {
   bark() {
      console.log("Wild dog barks.");
   }
}

class WildDogAdapter {
   constructor (dog) {
      this.dog = dog;
   }

   roar() {
      this.dog.bark();
   }
}

const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);

const hunter = new Hunter();
hunter.hunt(wildDogAdapter);