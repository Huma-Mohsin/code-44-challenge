"use strict";
// //Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
// Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability is a cornerstone of modern JavaScript application structure.
//Solution.
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.sub = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        return a / b;
    };
    Calculator.prototype.modulus = function (a, b) {
        return a % b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//Author-Huma Mohsin
