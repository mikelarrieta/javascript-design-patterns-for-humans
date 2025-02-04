// Mediator
class ChatRoom {
   showMessage(user, message) {
      const time = new Date();
      const sender = user.getName();

      console.log(`${time}[${sender}]: ${message}`);
   }
}

class User {
   constructor(name, chatMediator) {
      this.name = name;
      this.chatMediator = chatMediator;
   }

   getName() {
      return this.name;
   }

   send(message) {
      this.chatMediator.showMessage(this, message);
   }
}

const mediator = new ChatRoom();

const john = new User('John', mediator);
const jane = new User('Jane', mediator);

john.send('Hi there!');
jane.send('Hey!');
