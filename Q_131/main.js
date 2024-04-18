"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
//Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability is a cornerstone of modern JavaScript application structure.
var Person_1 = require("./Person");
var alice = new Person_1.Person("Alice");
alice.greet();
