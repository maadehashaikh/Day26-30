// Question 135: Explain how you can format a JSON string with proper indentation for readability.
// Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string. Adding an indent level as the third argument beautifies the output, making it more readable.

const person = {
  name: "John Doe",
  age: 30,
  city: "New York"
};
// Format JSON string with proper indentation (2 spaces)
const jsonString = JSON.stringify(person, null, 2);

console.log(jsonString);
