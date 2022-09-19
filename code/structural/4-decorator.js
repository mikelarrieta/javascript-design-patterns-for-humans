/*
   Coffee interface:
   getCost()
   getDescription()
*/

class SimpleCoffee {
   getCost() {
      return 10;
   }

   getDescription() {
      return "Simple coffee";
   }
}

class MilkCoffee {
   constructor(coffee) {
      this.coffee = coffee;
   }

   getCost() {
      return this.coffee.getCost() + 2;
   }

   getDescription() {
      return `${this.coffee.getDescription()}, milk`;
   }
}

class WhipCoffee {

   constructor(coffee) {
       this.coffee = coffee;
   }

   getCost() {
       return this.coffee.getCost() + 5;
   }

   getDescription() {
       return `${this.coffee.getDescription()}, whip`;
   }
}

class VanillaCoffee {

   constructor(coffee) {
       this.coffee = coffee;
   }

   getCost() {
       return this.coffee.getCost() + 3;
   }

   getDescription() {
       return `${this.coffee.getDescription()}, vanilla`;
   }
}

const simpleCoffee = new SimpleCoffee();
console.log(`${simpleCoffee.getDescription()} costs: ${simpleCoffee.getCost()}`);

const milkCoffee = new MilkCoffee(simpleCoffee);
console.log(`${milkCoffee.getDescription()} costs: ${milkCoffee.getCost()}`);

const whipCoffee = new WhipCoffee(simpleCoffee);
console.log(`${whipCoffee.getDescription()} costs: ${whipCoffee.getCost()}`);

const vanillaCoffee = new VanillaCoffee(simpleCoffee);
console.log(`${vanillaCoffee.getDescription()} costs: ${vanillaCoffee.getCost()}`);