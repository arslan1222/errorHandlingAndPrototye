function convertToNumber(str) {
    try {
      const number = Number(str);
      
      if (isNaN(number)) {
        throw new Error("Invalid number");
      }
      
      return number;
    } catch (error) {
      return "Invalid number";
    }
  }
  
  // Test the function
  console.log(convertToNumber("123"));      // Output: 123
  console.log(convertToNumber("3.14"));     // Output: 3.14
  console.log(convertToNumber("Hello"));    // Output: "Invalid number"
  