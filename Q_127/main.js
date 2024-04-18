// Question 127: Convert a traditional function expression to an arrow function.
// Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods.
var normalFunc = function (num1, num2) {
    return num1 + num2;
};
console.log(normalFunc(10, 20));
var ArrowFunc = function (a, b) {
    return (a + b);
};
console.log(ArrowFunc(10, 20));
