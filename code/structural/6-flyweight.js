// Anything that will be cached is flyweight. 
// Types of tea here will be flyweights.
class KarakTea { }

// Acts as a factory and saves the tea
class TeaMaker {
   constructor() {
      this.availableTea = {};
   }

   make(preference) {
      this.availableTea[preference] = this.availableTea[preference] || (new KarakTea());
      return this.availableTea[preference];
   }
}

class TeaShop {
   constructor(teaMaker) {
      this.teaMaker = teaMaker;
      this.orders = [];
   }

   takeOrder(teaType, table) {
      this.orders[table] = this.teaMaker.make(teaType);
   }

   serve() {
      this.orders.forEach((_order, index) => {
         console.log(`Serving tea to table# ${index}`);
      });
   }
}

const teamMaker = new TeaMaker();
const shop = new TeaShop(teamMaker);

shop.takeOrder("less sugar", 1);
shop.takeOrder("more milk", 2);
shop.takeOrder("without sugar", 5);

shop.serve();