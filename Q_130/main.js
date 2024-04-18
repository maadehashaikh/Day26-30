"use strict";
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
// Explain & TIP: In modern JavaScript development, modules allow you to divide your code into separate files. This makes your code more organized and maintainable. You can export functions, objects, or primitives from one file and import them into another.
Object.defineProperty(exports, "__esModule", { value: true });
var additionFunc_1 = require("./additionFunc");
console.log((0, additionFunc_1.sentence)("mmaadeha")); // Outputs: 5
