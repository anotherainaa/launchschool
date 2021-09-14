// What is the result when trying out the code on the last line? 

const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);

// My guess
// Code on line 12 would log the function instead of the return value of the function 'Victor' and 'Reyes'. 
// This is because we are not calling the function on line 12. We know this due to the lack of parenthese on the method calls. 
