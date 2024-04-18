// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
// Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data.
const multiply = {
  num1: 4,
  num2: 5,
  multNumbers: function () {
    return this.num1 * this.num2; // 'this' accesses 'length' and 'width' properties of the object
  },
};

console.log(multiply.multNumbers()); 