// Create the Student prototype
function Student(name) {
    this.name = name;
  }
  
  // Add the printDetails method to the prototype
  Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  // Instantiate a Student object with the name "Mithun"
  const mithun = new Student("Arslan");
  
  // Call the printDetails method
  mithun.printDetails();
  