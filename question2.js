function getPerson(person) {
    try {
      if (typeof person === 'object' && person !== null && 'name' in person && 'age' in person) {
        const name = person.name;
        const age = person.age;
        return `Name: ${name}, Age: ${age}`;
      } else {
        throw new Error('Invalid parameter type');
      }
    } catch (error) {
      return error.message;
    }
  }
 
  const validPerson = { name: 'John', age: 30 };
  const invalidPerson = { name: 'Alice' }; // Missing "age" property
  
  console.log(getPerson(validPerson)); // Output: "Name: John, Age: 30"
  console.log(getPerson(invalidPerson)); // Output: "Invalid parameter type"
  