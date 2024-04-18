// Question 134: Take a JSON string and parse it into a JavaScript object.
// Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly useful when dealing with data received as JSON from a web server or API.
const tojsonString = '{"name":"Maadeha","age":22,"city":"Kotri"}';
const myInfo = JSON.parse(tojsonString);
console.log(myInfo);