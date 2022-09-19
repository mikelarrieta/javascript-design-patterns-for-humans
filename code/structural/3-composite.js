/*
   Employee interface:

   constructor(name, salary)
   getName()
   setSalary()
   getSalary()
   getRoles()
*/

class Developer {
   constructor(name, salary) {
      this.name = name;
      this.salary = salary;
   }

   getName() {
      return this.name;
   }

   setSalary(salary) {
      this.salary = salary;
   }

   getSalary() {
      return this.salary;
   }

   getRoles() {
      return this.roles;
   }

   develop() {
      console.log("Developer develop function.");
   }
}

class Designer {
   constructor(name, salary) {
      this.name = name;
      this.salary = salary;
   }

   getName() {
      return this.name;
   }

   setSalary(salary) {
      this.salary = salary;
   }

   getSalary() {
      return this.salary;
   }

   getRoles() {
      return this.roles;
   }

   design() {
      console.log("Designer design function.");
   }
}

class Organization {
   constructor() {
      this.employees = [];
   }

   addEmployee(employee) {
      this.employees.push(employee);
   }

   getNetSalaries() {
      let netSalary = 0;

      this.employees.forEach(employee => {
         netSalary += employee.getSalary();
      });

      return netSalary;
   }
}

// Prerare the employees
const john = new Developer("John Doe", 12000);
const jane = new Designer("Jane", 10000);

// Add them to organization
const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);

console.log(`Net salaries: ${organization.getNetSalaries()}`); // Net salaries: 22000
