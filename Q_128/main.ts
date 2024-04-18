//Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
// Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters, you enclose them in parentheses.

const arrowFunc = (a:number,b:number,c:number)  => {
  return a*b*c;
}
console.log(arrowFunc(2,6,9));