
class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  // Instantiate an instance of the Employee class
  const employee1 = new Employee("John Doe", "Software Engineer", 75000);
  
  // Call the getSalary method
  const salary = employee1.getSalary();
  console.log(`${employee1.name} is a ${employee1.position} with a salary of $${salary}`);
  
