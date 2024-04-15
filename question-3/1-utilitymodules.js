"use strict";
// //Question 132: Discuss the difference between default and named exports in JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.multiply = exports.sub = exports.add = void 0;
// Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.
var add = function (a, b) { return a + b; };
exports.add = add;
var sub = function (a, b) { return a - b; };
exports.sub = sub;
var multiply = function (a, b) { return a * b; };
exports.multiply = multiply;
var divide = function (a, b) { return a / b; };
exports.divide = divide;
//In this example, we have four functions exported from the utility modules.ts :
// add: Adds two numbers a and b.
// subtract: Subtracts b from a.
// multiply: Multiplies a by b.
// divide: Divides a by b.
//These functions can be utilized in various scenarios where mathematical operations are required. (main.js)
//Author-Huma Mohsin
