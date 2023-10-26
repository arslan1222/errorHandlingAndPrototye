class Calculator {
    static add(number1, number2) {
      return number1 + number2;
    }
  }
  
  // Instantiate the Calculator class (not necessary for static methods)
  const calculator = new Calculator();
  
  // Call the add method
  const result = Calculator.add(5, 3);
  console.log(`The sum is: ${result}`);
  