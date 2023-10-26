function numberChecker(numbers) {
    // Create a closure by returning a function
    return function (numberToCheck) {
      // Use the includes() method to check if the number is in the array
      return numbers.includes(numberToCheck);
    };
  }

  const myNumbers = [1, 2, 3, 4, 5];
  const checkNumber = numberChecker(myNumbers);
  
  console.log(checkNumber(3)); // Output: true
  console.log(checkNumber(6)); // Output: false
  