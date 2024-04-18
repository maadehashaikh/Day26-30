// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
// Explain & TIP: When this is used inside a nested function within an object's method, it does not refer to the object itself but to the global object (in a browser, window). This behavior often requires workarounds like assigning this to another variable in the outer function.
var multiply = {
    num1: 4,
    num2: 5,
    outhermethod: function () {
        var _this = this;
        console.log(this.num1 * this.num2); // 'this' accesses 'length' and 'width' properties of the object
        var innerMethod = function () {
            console.log(_this.num1 + _this.num2);
        };
        innerMethod();
    },
};
multiply.outhermethod();
